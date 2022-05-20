import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import { Route } from "react-router-dom";

import {
	RiNumber0,
	RiNumber1,
	RiNumber2,
	RiNumber3,
	RiNumber4,
	RiNumber5,
	RiNumber6,
	RiNumber7,
	RiNumber8,
	RiNumber9,
} from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { RiDeleteBack2Fill } from "react-icons/ri";

import { FaDivide, FaEquals, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import Binary from "./Binary";

const keys = {
	keyA: <p className='icon'>A</p>,
	ls: <p className='icon'>&lt;&lt;</p>,
	rs: <p className='icon'>&gt;&gt;</p>,
	clear: <p className='icon'>AC</p>,
	remove: <RiDeleteBack2Fill className='icon' />,
	keyB: <p className='icon'>B</p>,
	lbr: <p className='icon'>&#x2768;</p>,
	rbr: <p className='icon'>&#x2769;</p>,
	modulo: <p className='icon'>&#37;</p>,
	divide: <FaDivide className='icon' />,
	keyC: <p className='icon'>C</p>,
	seven: <RiNumber7 className='icon' />,
	eight: <RiNumber8 className='icon' />,
	nine: <RiNumber9 className='icon' />,
	multiply: <FaTimes className='icon' />,
	keyD: <p className='icon'>D</p>,
	four: <RiNumber4 className='icon' />,

	five: <RiNumber5 className='icon' />,
	six: <RiNumber6 className='icon' />,
	substract: <FaMinus className='icon' />,

	keyE: <p className='icon'>E</p>,
	one: <RiNumber1 className='icon' />,
	two: <RiNumber2 className='icon' />,
	three: <RiNumber3 className='icon' />,
	add: <FaPlus className='icon' />,
	keyF: <p className='icon'>F</p>,
	dzero: <p className='icon'>00</p>,
	zero: <RiNumber0 className='icon' />,
	period: <BsDot className='icon' />,

	equal: <FaEquals className='icon' />,
};
const StyledDiv = styled.div`
	padding: 20px;
	width: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	.screen {
	
		margin: 10px 0;
		display: flex;
		box-shadow: 0px 0px 0px 2px
		${(props) => (props.light ? "white" : "#37383a")};
					border-radius: 10px;
		.nav {
			background: ${(props) => (props.light ? "white" : "#37383a")};
			border-radius: 10px;
			font-size: 18px;
			margin:  5px;
			padding:5px;
			p {
				padding: 5px 15px;
				border-radius: 5px;
			}
			box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.1);
		}
		.component {
			background: ${(props) => (props.light ? "white" : "#37383a")};
			flex-grow: 1;
			margin: 5px;
			padding: 15px;
			display: flex;
			align-items: center;
		justify-content: flex-end;
		box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.1);
		font-size: 32px;
			border-radius: 10px;
		}
	}
	.buttons {
		flex-grow: 1;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 12px;
		button {
			border: none;
			outline: none;
			background: ${(props) => (props.light ? "white" : "#37383a")};
			color: ${({ light }) => (light ? "black" : "white")};
			border-radius: 10px;
			box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.1);
			font-size: 2rem;
			transition: 0.3s ease all;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;
			&:active {
				transform: scale(0.9);
			}
		}
		#equal {
			background: ${(props) => (props.light ? "orange" : "teal")};
		}
		#clear {
			background: ${(props) =>
				props.light ? "rgb(255, 50, 50,0.4)" : "rgb(200, 100, 20,0.7)"};
		}
	}
	@media only screen and (max-width: 512px) {
		.buttons {
			grid-gap: 10px;
			button {
				border-radius: 18px;
			}
		}
	}
	@keyframes rotate {
		from {
			transform: rotate(0deg) scale(1.3);
		}
		to {
			transform: rotate(359deg) scale(1);
		}
	}
`;

const calculate = (str) => {
	let a, b;
	if (str.includes("-")) {
		let arr = str.split("-");
		if (arr.length === 3) {
			a = -parseFloat(arr[1]);
			b = -parseFloat(arr[2]);
			return a + b;
		} else if (arr.length === 2 && arr[0]) {
			a = parseFloat(arr[0]);
			b = -parseFloat(arr[1]);
			return a + b;
		}
	}
	if (str.includes("+")) {
		let arr = str.split("+");
		if (arr.length === 3) {
			a = parseFloat(arr[1]);
			b = parseFloat(arr[2]);
			return a + b;
		} else if (arr.length === 2 && arr[0]) {
			a = parseFloat(arr[0]);
			b = parseFloat(arr[1]);
			return a + b;
		}
	}
	if (str.includes("*")) {
		let arr = str.split("*");

		a = parseFloat(arr[0]);
		b = parseFloat(arr[1]);
		return a * b;
	}
	if (str.includes("/")) {
		let arr = str.split("/");

		a = parseFloat(arr[0]);
		b = parseFloat(arr[1]);
		if (b === 0) return "Not Define";
		else return a / b;
	}
	if (str.includes("%")) {
		let arr = str.split("%");

		a = parseFloat(arr[0]);
		b = parseFloat(arr[1]);
		return a % b;
	}
	return str;
};

export default function Standard() {
	const [result, setResult] = useState("0");
	// const [decimal, setDecimal] = useState("0");
	// const [hex, setHex] = useState("0");
	// const [oct, setOct] = useState("0");
	// const [binary, setBinary] = useState("0");
	const [light] = useContext(ThemeContext);
	// const [comp, setComp] = useState(4);
	const handleClick = (key) => {
		switch (key) {
			case "modulo":
				setResult(result + "%");
				break;
			case "root":
				setResult(Math.sqrt(parseFloat(result)));
				break;
			case "clear":
				setResult("0");
				break;
			case "remove":
				setResult(result.slice(0, result.length - 1));
				break;
			case "seven":
				setResult(result + "7");
				break;
			case "eight":
				setResult(result + "8");
				break;
			case "nine":
				setResult(result + "9");
				break;
			case "divide":
				setResult(result + "/");
				break;
			case "four":
				setResult(result + "4");
				break;
			case "five":
				setResult(result + "5");
				break;
			case "six":
				setResult(result + "6");
				break;

			case "multiply":
				setResult(result + "*");
				break;
			case "one":
				setResult(result + "1");
				break;
			case "two":
				setResult(result + "2");
				break;
			case "three":
				setResult(result + "3");
				break;
			case "add":
				setResult(result + "+");
				break;
			case "zero":
				setResult(result + "0");
				break;
			case "period":
				setResult(result + ".");
				break;
			case "substract":
				setResult(result + "-");
				break;
			case "equal":
				setResult(calculate(result));
				break;
			default:
				break;
		}
	};
	// const component = ()=>{
	// 	switch(comp){
	// 		case 0: return binary;
	// 		case 1: return hex;
	// 		case 2: return oct;
	// 		default: return decimal;

	// 	}
	// }
	return (
		<StyledDiv light={light}>
			<div className='screen'>
				<div className='nav'>
					<p>Decimal</p>
					<p>Binary</p>
					<p>Hexadecimal</p>
					<p>Octal</p>
				</div>
				<div className='component'>
					<Route exact path='/programmer/binary' element={<Binary/>} />	
				</div>
			</div>
			<div className='buttons'>
				{Object.keys(keys).map((key) => (
					<button key={key} id={key} onClick={() => handleClick(key)}>
						{keys[key]}
					</button>
				))}
			</div>
		</StyledDiv>
	);
}

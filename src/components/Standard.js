import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

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

const keys = {
	modulo: <p className='icon'>&#37;</p>,
	root: <p className='icon'>&radic;</p>,
	remove: <RiDeleteBack2Fill className='icon' />,
	clear: <p className='icon'>C</p>,

	seven: <RiNumber7 className='icon' />,
	eight: <RiNumber8 className='icon' />,
	nine: <RiNumber9 className='icon' />,
	divide: <p className='icon'> &#247;</p>,
	four: <RiNumber4 className='icon' />,
	five: <RiNumber5 className='icon' />,
	six: <RiNumber6 className='icon' />,

	multiply: <p className='icon'> &#215;</p>,
	one: <RiNumber1 className='icon' />,
	two: <RiNumber2 className='icon' />,
	three: <RiNumber3 className='icon' />,
	add: <p className='icon'> &#43;</p>,
	zero: <RiNumber0 className='icon' />,
	period: <BsDot className='icon' />,

	substract: <p className='icon'> &#8722;</p>,
	equal: <p className='icon'> &#61;</p>,
};
const StyledDiv = styled.div`
	width: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	.screen {
		padding: 15px;
		margin: 10px 0;
		height: 150px;
		text-align: right;
		font-size: 32px;
		overflow-x:scroll;
	}
	.buttons {
		box-shadow:0 -10px 25px -5px rgb(0,0,0,0.1);
		flex-grow: 1;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		button {
			border: none;
			outline: none;
			background: ${(props) => (props.light ? "white" : "#37383a")};
			color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
			border:1px solid rgb(0,0,0,0.1);
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
				props.light ? "rgb(250, 80, 80,0.5)" : "rgb(200, 100, 20,0.7)"};
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
	const [result, setResult] = useState("");

	const [light] = useContext(ThemeContext);
	const handleClick = (key) => {
		switch (key) {
			case "modulo":
				setResult(result + "%");
				break;
			case "root":
				if(isNaN(Math.sqrt(parseFloat(result))))
				setResult("")
				else
				setResult(Math.sqrt(parseFloat(result)));
				break;
			case "clear":
				setResult("");
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
				if(isNaN(calculate(result)))
				setResult("")
				else
				setResult(calculate(result));
			
			break;
			default:
				break;
		}
	};
	return (
		<StyledDiv light={light}>
			<div className='screen' title="Provide me some math to solve :)">{result}</div>
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

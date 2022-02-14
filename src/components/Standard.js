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

import { CgTrashEmpty } from "react-icons/cg";

import {
	FaDivide,
	FaEquals,
	FaMinus,
	FaPercent,
	FaPlus,
	FaSquareRootAlt,
	FaTimes,
} from "react-icons/fa";

const keys = {
	modulo: <FaPercent className='icon' />,
	root: <FaSquareRootAlt className='icon' />,
	clear: <CgTrashEmpty className='icon' />,
	remove: <RiDeleteBack2Fill className='icon' />,
	seven: <RiNumber7 className='icon' />,
	eight: <RiNumber8 className='icon' />,
	nine: <RiNumber9 className='icon' />,
	divide: <FaDivide className='icon' />,
	four: <RiNumber4 className='icon' />,
	five: <RiNumber5 className='icon' />,
	six: <RiNumber6 className='icon' />,

	multiply: <FaTimes className='icon' />,
	one: <RiNumber1 className='icon' />,
	two: <RiNumber2 className='icon' />,
	three: <RiNumber3 className='icon' />,
	add: <FaPlus className='icon' />,
	zero: <RiNumber0 className='icon' />,
	period: <BsDot className='icon' />,

	substract: <FaMinus className='icon' />,
	equal: <FaEquals className='icon' />,
};
const StyledDiv = styled.div`
	padding: 20px;
	width: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	.screen {
		padding: 10px;
		margin: 10px 0;
		height: 150px;
		text-align: right;
		font-size: 32px;
	}
	.buttons {
		flex-grow: 1;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 15px;
		button {
			border: none;
			outline: none;
			background: ${(props) => (props.light ? "white" : "#37383a")};
			color: ${({ light }) => (light ? "black" : "white")};
			border-radius: 20px;
			box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.1);
			font-size: 2rem;
			transition: 0.3s ease all;
			overflow: hidden;
			align-items: center;
			justify-content: center;
			&:active {
				transform: scale(0.9);
			}
			.icon {
				transition: 0.3s ease all;
			}
			&:hover {
				.icon {
					transform: scale(1.5);
				}
			}
		}
		#equal {
			background: ${(props) => (props.light ? "orange" : "teal")};
		}
	}
	@media only screen and (max-width: 512px) {
		.buttons {
			grid-gap: 10px;
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
export default function Standard() {
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
		return result;
	};

	const [result, setResult] = useState("");

	const [light] = useContext(ThemeContext);
	const handleClick = (key) => {
		switch (key) {
			case "modulo":
				setResult(calculate(result) + "%");
				break;
			case "root":
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
				setResult(calculate(result) + "/");
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
				setResult(calculate(result) + "*");
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
				setResult(calculate(result) + "+");
				break;
			case "zero":
				setResult(result + "0");
				break;
			case "period":
				setResult(result + ".");
				break;

			case "substract":
				setResult(calculate(result) + "-");
				break;
			case "equal":
				setResult(calculate(result));
				break;
			default:
				break;
		}
	};
	return (
		<StyledDiv light={light}>
			<div className='screen'>{result}</div>
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
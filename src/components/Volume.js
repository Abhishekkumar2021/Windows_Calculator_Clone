import React, { useContext, useState } from "react";
import styled from "styled-components";

import ThemeContext from "./ThemeContext";

const StyledDiv = styled.div`
	padding: 20px;
	width: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-content: center;
	gap: 15px;
	flex-wrap: wrap;
	.first,
	.second {
		max-width: 100%;
		width: 400px;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
		background: ${(props) => (props.light ? "rgb(240,240,256)" : "#2b2e33")};

		display: flex;
		flex-direction: column;
		input,
		select {
			transition: 0.3s ease all;
			padding: 10px 15px;
			background: ${(props) => (props.light ? "white" : "#37383a")};
			border: none;
			outline: none;
			margin: 15px 0;
			font-size: 20px;

			color: ${({ light }) => (light ? "black" : "white")};
			border-radius: 5px;

			&:focus {
				box-shadow: 0px 0px 0px 1px
					${({ light }) => (light ? "orange" : "skyblue")};
			}
		}
		select {
			color: ${({ light }) => (light ? "#22bb33" : "#82ec8e")};
			option {
				font-size: 14px;
			}
		}
	}
`;
const list = [
	"Millilitres",
	"Cubic Centimeters",
	"Litres",
	"Cubic Meters",
	"Teaspoons(US)",
	"Tablespoons(US)",
	"Fluid ounces(US)",
	"Cups(US)",
	"Pints(US)",
	"Quarts(US)",
	"Gallons(US)",
	"Cubic inches",
	"Cubic feet",
	"Cubic yards",
	"Teaspoons(UK)",
	"Tablespoons(UK)",
	"Fluid ounces(UK)",
	"Pints(UK)",
	"Quarts(UK)",
	"Gallons(UK)",
];
const magnitude = [
	0.000001, 0.000001, 0.001, 1, 0.000005, 0.000015, 0.00003, 0.000237, 0.000473,
	0.000946, 0.003785, 0.000016, 0.028317, 0.764555, 0.000006, 0.000018,
	0.000028, 0.000568, 0.001137, 0.004546,
];
export default function Volume() {
	const [light] = useContext(ThemeContext);
	const [first, setFirst] = useState("Millilitres");
	const [a, setA] = useState(0);
	const [second, setSecond] = useState("Millilitres");
	const [b, setB] = useState(0);
	const handleA = (e) => {
		const indexA = list.indexOf(first);
		let x = magnitude[indexA];
		const indexB = list.indexOf(second);
		let y = magnitude[indexB];
		setB((x / y) * e.target.value || 0);
		setA(parseFloat(e.target.value) || 0);
	};
	const handleB = (e) => {
		const indexA = list.indexOf(first);
		let x = magnitude[indexA];
		const indexB = list.indexOf(second);
		let y = magnitude[indexB];
		setA((y / x) * e.target.value || 0);
		setB(parseFloat(e.target.value) || 0);
	};
	const handleFirst = (e) => {
		const indexA = list.indexOf(e.target.value);
		let x = magnitude[indexA];
		const indexB = list.indexOf(second);
		let y = magnitude[indexB];
		setB((x / y) * a || 0);
		setFirst(e.target.value);
	};
	const handleSecond = (e) => {
		const indexA = list.indexOf(first);
		let x = magnitude[indexA];
		const indexB = list.indexOf(e.target.value);
		let y = magnitude[indexB];
		setA((x / y) * b || 0);
		setSecond(e.target.value);
	};
	return (
		<StyledDiv light={light}>
			<div className='first'>
				<select onChange={handleFirst}>
					{list.map((item, index) => (
						<option key={index}>{item}</option>
					))}
				</select>

				<input id='a' type='text' onChange={handleA} value={a} />
			</div>
			<div className='second'>
				<select onChange={handleSecond}>
					{list.map((item, index) => (
						<option key={index}>{item}</option>
					))}
				</select>
				<input id='b' type='text' onChange={handleB} value={b} />
			</div>
		</StyledDiv>
	);
}

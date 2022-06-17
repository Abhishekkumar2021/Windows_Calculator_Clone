import React, { useContext, useState } from "react";
import { FaDatabase } from "react-icons/fa";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const StyledDiv = styled.div`
    h1{
		position:absolute;
		text-align: center;
		top:80px;
		color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
					
    }
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
		position: relative;
		max-width: 100%;
		width: 400px;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
		background: ${(props) => (props.light ? "rgb(240,240,256)" : "#2b2e33")};
	

		display: flex;
		flex-direction: column;
		.icon{
			position:absolute;
			top:-40px;
			left: 10px;
			width:70px;
			height:70px;
			display: flex;
			justify-content: center;
			transition: 0.3s ease all;
			align-items: center;
			font-size:32px;
			border-radius: 10px;
			box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
			background: ${(props) => (props.light ? "#FFFFCC" : "#413F42")};
			&:hover{
				transform:scale(1.2) rotate(20deg) translateY(-20px);
			}
		}
		input,
		select {
			color-scheme: ${(props) => (props.light ? "light" : "dark")};

			transition: 0.3s ease all;
			padding: 10px 15px;
			background: ${(props) => (props.light ? "white" : "#37383a")};
			border: none;
			outline: none;
			margin: 15px 0;
			font-size: 20px;
			&:focus {
				box-shadow: 0px 0px 0px 1px
					${({ light }) => (light ? "rgb(109, 153, 234)" : "skyblue")};
			}
			color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
			border-radius: 5px;
		}
		select {
			font-size: 28px;
			font-family: 'Roboto Slab',Roboto serif;		
			text-align: center;	
			&:hover {
				box-shadow: 0px 0px 0px 1px
					${({ light }) => (light ? "rgb(109, 153, 234)" : "skyblue")};
			}
			option {
				font-size: 14px;
				
			}
		}
	}
	@media only screen and (max-width:500px){
		h1{
			font-size:24px;
		}
	}
`;

const list = [
"Bits",
"Bytes",
"Kilobits",
"Kibibits",
"Kilobytes",
"Kibibytes",
"Megabits",
"Mebibits",
"Megabytes",
"Mebibytes",
"Gigabits",
"Gibibits",
"Gigabytes",
"Gibibytes",
"Terabits",
"Tebibits",
"Terabytes",
"Tebibytes",
"Petabits",
"Pebibits",
"Petabytes",
"Pebibytes",
"Exabits",
"Exbibits",
"Exabytes",
"Exbibytes",
"Zetabits",
"Zebibits",
"Zetabytes",
"Zebibytes",
"Yottabits",
"Yobibits",
"Yottabytes",
"Yobibytes"  
];
const magnitude = [
	0.000125,0.001,0.125,0.128,1,1.025,125,131.072,1000,1048.576,125000,134217.7,1000000,1073742,125000000,137438953,1000000000,1099511628,125000000000,140737488355,1000000000000,1125899906843,125000000000000,144115188075856,1.000000e+15,1.152922e+15,1.250000e+17,1.475740e+17,1.000000e+18,1.180592e+18,1.250000e+20,1.511157e+20,1.000000e+21,1.208926e+21
];
export default function Data() {
	const [light] = useContext(ThemeContext);
	const [first, setFirst] = useState("Kilobytes");
	const [a, setA] = useState("");
	const [second, setSecond] = useState("Kilobytes");
	const [b, setB] = useState("");
	const handleA = (e) => {
		const indexA = list.indexOf(first);
		let x = magnitude[indexA];
		const indexB = list.indexOf(second);
		let y = magnitude[indexB];
		if(isNaN((x / y) * parseFloat(e.target.value)))
		setB("");
		else
		setB(`${(x / y) * parseFloat(e.target.value)}`)
		if(isNaN(e.target.value))
		setA("")
		else
		setA(e.target.value);
	};
	const handleB = (e) => {
		const indexA = list.indexOf(first);
		let x = magnitude[indexA];
		const indexB = list.indexOf(second);
		let y = magnitude[indexB];
		if(isNaN((y / x) * parseFloat(e.target.value)))
		setA("");
		else
		setA(`${(y / x) * parseFloat(e.target.value)}`)
		if(isNaN(e.target.value))
		setA("")
		else
		setA(e.target.value);
	};
	const handleFirst = (e) => {
		const indexA = list.indexOf(e.target.value);
		let x = magnitude[indexA];
		const indexB = list.indexOf(second);
		let y = magnitude[indexB];
		if(isNaN((x / y) *  parseFloat(b)))
		setA("")
		else
		setA(`${(x / y) *  parseFloat(b)}`);
		setFirst(e.target.value);
		
	};
	const handleSecond = (e) => {
		const indexA = list.indexOf(first);
		let x = magnitude[indexA];
		const indexB = list.indexOf(e.target.value);
		let y = magnitude[indexB];
		
		if(isNaN((x / y) * parseFloat(a)))
		setB("")
		else
		setB(`${(x / y) * parseFloat(a)}`);
		setSecond(e.target.value);
		
	};
	return (
		<StyledDiv light={light}>
			<h1><FaDatabase className='icon' /> The data converter </h1>
			<div className='first'>
				<select onChange={handleFirst} value={first}>
					{list.map((item, index) => (
						<option key={index}>{item}</option>
					))}
				</select>

				<input id='a' type='text' onChange={handleA} value={a} placeholder="Enter a value..." />
			</div>
			<div className='second'>
				<select onChange={handleSecond} value={second}>
					{list.map((item, index) => (
						<option key={index}>{item}</option>
					))}
				</select>
				<input id='b' type='text' onChange={handleB} value={b} placeholder="Enter a value..." />
			</div>
		</StyledDiv>
	);
}

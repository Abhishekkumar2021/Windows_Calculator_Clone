import React, { useContext, useState } from "react";
import { CgCompressRight } from "react-icons/cg";
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
    "Atmospheres",
    "Bars",
    "Kilopascals",
    "Millimeters of mercury",
    "Pascals",
    "Pounds per square inch"  
];
const magnitude = [
	1,0.986923,0.009869,0.001316,0.00001,0.068046
];
export default function Pressure() {
	const [light] = useContext(ThemeContext);
	const [first, setFirst] = useState("Atmospheres");
	const [a, setA] = useState("");
	const [second, setSecond] = useState("Atmospheres");
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
			<h1><CgCompressRight className='icon' /> The pressure converter </h1>
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

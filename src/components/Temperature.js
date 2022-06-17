import React, { useContext, useState } from "react";
import { FaTemperatureLow} from "react-icons/fa";
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
    "Celsius",
    "Farenheit",
   "Kelvin",
];
const CelsiusToFarenheit = (cel) => `${parseFloat(cel)*9/5 + 32}`;
const CelsiusToKelvin = (cel)=> `${parseFloat(cel) + 273}`;
const FarenheitToCelsius = (f)=> `${parseFloat(f-32)*5/9}`;
const FarenheitToKelvin = (f)=> CelsiusToKelvin(FarenheitToCelsius(f));
const KelvinToCelsius = (kel)=> `${parseFloat(kel)-273}`;
const KelvinToFarenheit = (kel)=> CelsiusToFarenheit(KelvinToCelsius(kel));

const matrix = [["",CelsiusToFarenheit,CelsiusToKelvin],[FarenheitToCelsius,"",FarenheitToKelvin],[KelvinToCelsius,KelvinToFarenheit,""]]
export default function Temperature() {
	const [light] = useContext(ThemeContext);
	const [first, setFirst] = useState("Kelvin");
	const [a, setA] = useState("");
	const [second, setSecond] = useState("Kelvin");
	const [b, setB] = useState("");
	const handleA = (e) => {
		const indexA = list.indexOf(first);
		const indexB = list.indexOf(second);
		if(matrix[indexA][indexB]!==""){
			if(!isNaN(matrix[indexA][indexB](e.target.value)))
			setB(matrix[indexA][indexB](e.target.value));
			else
			setB("");

		}else{
			setB(e.target.value);
		}
		if(isNaN(e.target.value))
		setA("")
		else
		setA(e.target.value);
		
	};
	const handleB = (e) => {
		const indexA = list.indexOf(first);
		const indexB = list.indexOf(second);
		if(matrix[indexA][indexB]!==""){
			if(!isNaN(matrix[indexA][indexB](e.target.value)))
			setA(matrix[indexA][indexB](e.target.value));
			else
			setA("");

		}else{
			setA(e.target.value);
		}
		if(isNaN(e.target.value))
		setB("")
		else
		setB(e.target.value);
	};
	const handleFirst = (e) => {
		const indexA = list.indexOf(e.target.value);
		const indexB = list.indexOf(second);
		if(matrix[indexA][indexB]!==""){
			if(!isNaN(matrix[indexA][indexB](b)))
			setA(matrix[indexA][indexB](b));
			else
			setA("");

		}else{
			setA(b);
		}
		setFirst(e.target.value);
		
	};
	const handleSecond = (e) => {
		const indexA = list.indexOf(first);
		const indexB = list.indexOf(e.target.value);
		if(matrix[indexA][indexB]!==""){
			if(!isNaN(matrix[indexA][indexB](a)))
			setB(matrix[indexA][indexB](a));
			else
			setB("");

		}else{
			setB(a);
		}
		setSecond(e.target.value);
		
	};
	return (
		<StyledDiv light={light}>
			<h1><FaTemperatureLow className='icon' /> The Temperature converter </h1>
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

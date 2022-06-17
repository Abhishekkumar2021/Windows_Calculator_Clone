import React, { useContext, useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import ThemeContext from "./ThemeContext";

const StyledDiv = styled.div`
	padding: 20px;
	width: 100%;
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: center;

	.inputs {
		display: flex;
		flex-direction: column;
		padding: 30px;
		justify-content: center;
		background: white;
		height: 600px;

		background: ${(props) => (props.light ? "rgb(240,240,256)" : "#2b2e33")};

		border-radius: 20px 0 0 20px;
		input {
			color-scheme: ${(props) => (props.light ? "light" : "dark")};

			padding: 15px 20px;
			border: none;
			outline: none;

			border-radius: 10px;
			background: ${(props) => (props.light ? "white" : "#37383a")};
			margin: 8px 0;
			margin-bottom: 30px;
			color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
			font-size: 18px;
			transition: 0.3s ease all;

			&:focus {
				box-shadow: 0px 0px 0px 1px
					${({ light }) => (light ? "orange" : "skyblue")};
			}
		}
		label {
			font-size: 20px;
		}
		button {
			transition: 0.3s ease all;
			margin: 0 auto;
			padding: 10px 20px;
			border: none;
			outline: none;
			color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
			background: ${(props) => (props.light ? "white" : "#37383a")};
			border-radius: 5px;
			box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);

			&:active {
				transform: scale(0.9);
			}
		}
	}
	.result {
		display: flex;
		flex-direction: column;
		padding: 30px;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		width: 500px;
		max-width: 100%;
		height: 600px;
		border-radius: 0 20px 20px 0;
		background: ${(props) => (props.light ? "white" : "#37383a")};
		span {
			font-size: 32px;
			margin-bottom: 15px;
			color: ${(props) => props.color};
			text-align: center;
		}
	}
	@media only screen and (max-width: 768px) {
		& {
			flex-direction: column;
			.inputs {
				width: 100%;
				border-radius: 10px 10px 0 0;
				height: auto;
				input {
					font-size: 14px;
				}
				label {
					font-size: 16px;
				}
			}
			.result {
				border-radius: 0 0 10px 10px;
				height: 400px;
				width: 100%;
			}
		}
	}
`;

const info = (bmi) => {
	if (bmi <= 18.4) return "Underweight";
	else if (bmi < 25) return "Normal";
	else if (bmi < 30) return "Overweight";
	else if (bmi < 35) return "Moderately obese";
	else if (bmi < 40) return "Severely obese";
	else return "Very highly obese and have health risk";
};
const color = (bmi) => {
	if (bmi <= 18.4) return "#bb2124";
	else if (bmi < 25) return "#22bb33";
	else if (bmi < 30) return "#5bc0de";
	else if (bmi < 35) return "#f0ad4e";
	else if (bmi < 40) return "orange";
	else return "#bb2124";
};
export default function BMI() {
	const [light] = useContext(ThemeContext);
	const [weight, handleWeight] = useInput(0);
	const [height, handleHeight] = useInput(0);
	const [BMI, setBMI] = useState(0);
	const handleClick = () => {
		const h = parseFloat(height);
		const w = parseFloat(weight);
		const bmi = w / (h * h);
		if (bmi) setBMI(bmi.toFixed(2));
		else setBMI(0);
	};
	return (
		<StyledDiv light={light} color={color(BMI)}>
			<div className='inputs'>
				<label htmlFor='height'>Enter your weight (in Kg) </label>
				<input type='text' id='weight' name='weight' onChange={handleWeight} />
				<label htmlFor='height'>Enter your height (in Metre) </label>
				<input type='text' id='height' name='height' onChange={handleHeight} />

				<button onClick={handleClick}>Check BMI</button>
			</div>
			<div className='result'>
				Your BMI is <span>{BMI}</span> and you are <span>{info(BMI)}</span>
			</div>
		</StyledDiv>
	);
}

import React, { useContext, useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
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
	.difference {
		position: relative;
		overflow: hidden;
		max-width: 100%;
		width: 400px;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
		background: ${(props) => (props.light ? "rgb(240,240,256)" : "#2b2e33")};
		display: flex;
		flex-direction: column;
		p {
			padding: 0px 0px 10px 0px;
			font-size: 20px;
			display: flex;
			flex-direction: column;
			text-align: center;
			span {
				padding: 8px 0;
				font-size: 18px;
				width: 70%;
				margin: 0 auto;
			}
			#year {
				color: ${({ light }) => (light ? "#22bb33" : "#82ec8e")};
				border-bottom: 1px solid
					${({ light }) => (light ? "#22bb33" : "#82ec8e")};
			}
			#month {
				color: ${({ light }) => (light ? "#5bc0de" : "#a7d9e9")};
				border-bottom: 1px solid
					${({ light }) => (light ? "#5bc0de" : "#a7d9e9")};
			}
			#days {
				color: ${({ light }) => (light ? "#f0ad4e" : "#e7c89c")};
				border-bottom: 1px solid
					${({ light }) => (light ? "#f0ad4e" : "#e7c89c")};
			}
		}

		input {
			color-scheme: ${(props) => (props.light ? "light" : "dark")};

			transition: 0.3s ease all;
			padding: 10px;
			background: ${(props) => (props.light ? "white" : "#37383a")};
			border: none;
			outline: none;
			margin: 7px 0;
			margin-bottom: 15px;
			color: ${({ light }) => (light ? "black" : "white")};
			border-radius: 5px;

			&:focus {
				box-shadow: 0px 0px 0px 1px
					${({ light }) => (light ? "orange" : "skyblue")};
			}
		}
		padding-bottom: 60px;
	}
	button {
		transition: 0.3s ease all;
		margin: 0 auto;
		padding: 10px 20px;
		border: none;
		outline: none;
		color: ${({ light }) => (light ? "black" : "white")};
		background: ${(props) => (props.light ? "white" : "#37383a")};
		border-radius: 5px;
		box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
		position: absolute;
		bottom: 20px;

		&:active {
			transform: scale(0.9);
		}
	}
	.add_subtract {
		position: relative;
		max-width: 100%;
		width: 400px;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
		background: ${(props) => (props.light ? "rgb(240,240,256)" : "#2b2e33")};
		display: flex;
		flex-direction: column;
		p {
			font-size: 20px;
			span {
				font-size: 16px;
				color: ${({ light }) => (light ? "#22bb33" : "#82ec8e")};
				border-bottom: 1px solid
					${({ light }) => (light ? "#22bb33" : "#82ec8e")};
			}
			margin-bottom: 10px;
		}
		input,
		select {
			color-scheme: ${(props) => (props.light ? "light" : "dark")};

			transition: 0.3s ease all;
			padding: 10px 15px;
			background: ${(props) => (props.light ? "white" : "#37383a")};
			border: none;
			outline: none;
			margin: 7px 0;
			margin-bottom: 15px;
			color: ${({ light }) => (light ? "black" : "white")};
			border-radius: 5px;

			&:focus {
				box-shadow: 0px 0px 0px 1px
					${({ light }) => (light ? "orange" : "skyblue")};
			}
		}
		padding-bottom: 60px;
	}
`;

export default function BMI() {
	const [light] = useContext(ThemeContext);
	const [from, setFrom] = useInput("");
	const [to, setTo] = useInput("");
	const [initial, setInitial] = useInput("");
	const [years, setYears] = useInput(0);
	const [months, setMonths] = useInput(0);
	const [days, setDays] = useInput(0);
	const [final, setFinal] = useState(new Date().toString());
	const [difference, setDifference] = useState(null);
	const [val, setVal] = useInput("Add");
	const getDifference = () => {
		const [fy, fm, fd] = from.split("-");
		const [ty, tm, td] = to.split("-");
		setDifference({
			year: Math.abs(ty - fy),
			month: (ty - fy )>0 ? (tm - fm + 12)%12 : (tm - fm + 12)%12,
			days: Math.abs(td - fd),
		});
	};
	const getResult = () => {
		if (difference)
			return (
				<p>
					The difference you asked for is{" "}
					<span id='year'>{difference.year} years</span>
					<span id='month'>{difference.month} months</span>
					<span id='days'>{difference.days} days</span>
				</p>
			);
		else return <p>Difference between dates</p>;
	};
	const newDate = () => {
		const [iy, im, id] = initial.split("-");
		let finalDate;
		if (val === "Add") {
			finalDate = new Date(
				iy - -parseInt(years),
				im - -parseInt(months),
				id - -parseInt(days)
			);
		} else {
			finalDate = new Date(
				iy - parseInt(years),
				im - parseInt(months),
				id - parseInt(days)
			);
		}

		setFinal(finalDate.toString());
	};

	return (
		<StyledDiv light={light}>
			<div className='difference'>
				{getResult()}
				<label htmlFor='from'>From</label>
				<input type='date' id='from' name='date' onChange={setFrom} />
				<label htmlFor='to'>To</label>
				<input type='date' id='to' name='date' onChange={setTo} />
				<button onClick={getDifference}>Calculate</button>
			</div>
			<div className='add_subtract'>
				<p>
					The final Date is <span>{final}</span>
				</p>
				<select onChange={setVal}>
					<option>Add</option>
					<option>Subtract</option>
				</select>

				<label htmlFor='initial'>Initial date</label>
				<input type='date' id='initial' name='date' onChange={setInitial} />
				<div className='items'>
					<input
						type='text'
						id='years'
						name='years'
						onChange={setYears}
						placeholder='Enter years'
					/>
					<input
						type='text'
						id='months'
						name='months'
						onChange={setMonths}
						placeholder='Enter months'
					/>

					<input
						type='text'
						id='days'
						name='days'
						onChange={setDays}
						placeholder='Enter days'
					/>
				</div>
				<button onClick={newDate}>Calculate</button>
			</div>
		</StyledDiv>
	);
}

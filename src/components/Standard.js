import React, { useContext } from "react";
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
	modulo: <FaPercent class='icon' />,
	root: <FaSquareRootAlt class='icon' />,
	clear: <CgTrashEmpty class='icon' />,
	remove: <RiDeleteBack2Fill class='icon' />,
	seven: <RiNumber7 class='icon' />,
	eight: <RiNumber8 class='icon' />,
	nine: <RiNumber9 class='icon' />,
	divide: <FaDivide class='icon' />,
	four: <RiNumber4 class='icon' />,
	five: <RiNumber5 class='icon' />,
	six: <RiNumber6 class='icon' />,

	multiply: <FaTimes class='icon' />,
	one: <RiNumber1 class='icon' />,
	two: <RiNumber2 class='icon' />,
	three: <RiNumber3 class='icon' />,
	add: <FaPlus class='icon' />,
	zero: <RiNumber0 class='icon' />,
	period: <BsDot class='icon' />,

	substract: <FaMinus class='icon' />,
	equal: <FaEquals class='icon' />,
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
			&:active {
				transform: scale(0.9);
			}
			&:hover {
				.icon {
					animation: rotate 0.6s ease;
				}
			}
		}
		#equal {
			background: ${(props) => (props.light ? "orange" : "teal")};
		}
	}
	@media only screen and (max-width: 484px) {
		.buttons {
			grid-gap: 10px;
			button {
				border-radius: 40px;
			}
		}
	}
	@keyframes rotate {
		from {
			transform: rotate(0deg) scale(1.5);
		}
		to {
			transform: rotate(359deg) scale(1);
		}
	}
`;
export default function Standard() {
	const [light] = useContext(ThemeContext);
	return (
		<StyledDiv light={light}>
			<div className='screen'></div>
			<div className='buttons'>
				{Object.keys(keys).map((key) => (
					<button key={key} id={key}>
						{keys[key]}
					</button>
				))}
			</div>
		</StyledDiv>
	);
}

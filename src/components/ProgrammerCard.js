import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const Card = styled.div`
	background: ${(props) => (props.light ? "white" : "#37383a")};
	border-radius: 10px;
	padding: 10px;
	box-shadow: 0 10px 10px rgb(0, 0, 0, 0.05);
	max-width: 100%;
	.title {
		text-align: center;
		color: ${({ light }) => (light ? "orange" : "skyblue")};
		max-width: 180px;
		margin: 0 auto;
		font-size: 24px;
		padding: 5px;
		border-bottom: 1px solid ${({ light }) => (light ? "orange" : "skyblue")};
	}
	.value {
		padding: 15px;
		letter-spacing: 1px;
		font-size: 20px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
	@media only screen and (max-width: 768px) {
		.title {
			font-size: 18px;
		}
		.value {
			font-size: 16px;
		}
	}
`;

export default function ProgrammerCard({ title, value }) {
	const [light] = useContext(ThemeContext);
	return (
		<Card light={light}>
			<div className='title'>{title}</div>
			<div className='value'>{value} </div>
		</Card>
	);
}

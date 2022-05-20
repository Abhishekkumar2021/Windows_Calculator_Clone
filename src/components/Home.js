import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
	padding: 20px;
	width: 100%;
	flex-grow: 1;
	display:flex;
	justify-content:center;
	align-items:center;
	font-size:32px;
	text-shadow:0 10px 20px rgb(0,0,0,0.08);
`;
export default function Home() {
	return <StyledDiv>Welcome to windows redisgned calculator.</StyledDiv>;
}

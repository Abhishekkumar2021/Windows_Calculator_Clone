import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import darkImg from '../assets/dark.svg'
import lightImg from '../assets/light.svg'

const StyledDiv = styled.div`
    
	padding: 20px;
	width: 100%;
	flex-grow: 1;
	display:flex;
	align-items:center;
	font-size:32px;
	text-shadow:0 10px 20px rgb(0,0,0,0.08);
	background: ${({ light }) => (light ? `url(${lightImg})`:`url(${darkImg})`)};
	background-position: 80%;
	background-repeat: no-repeat;
	background-size: auto;
	.note{
		margin:0 100px;
		width:600px;
		max-width:100%;
		background: ${(props) => (props.light ? "rgb(240,240,256)" : "#2b2e33")};
		padding:40px 30px;
		border-radius: 10px;
		box-shadow:0 20px 45px rgb(0,0,0,0.2);
		font-size:36px;
		span{
			font-size:48px;
			font-family: 'Roboto Slab',Roboto serif;		
		}
		
		
	}
	.end{
		position: fixed;
		bottom:0px;
		left:0px;
		width:100%;
		text-align: center;
		background: ${(props) => (props.light ? "rgb(240,240,256)" : "#2b2e33")};
		padding:20px 40px;
		border-radius: 10px;
		box-shadow:0 20px 45px rgb(0,0,0,0.2);
		.emoji{
			animation: beat 0.4s linear infinite;
			display: inline-block;
		}
		
	}
	@keyframes beat{
			0%{
				transform: scale(1) translateY(0px);
			}
			50%{
				transform: scale(1.6) translateY(-5px);
			}
			100%{
				transform: scale(1) translateY(0px);
			}
		}
		@media only screen and (max-width:768px){
			.note{
				margin: 0;
				margin-top:-120px;
			}
		}
	
`;
export default function Home() {
	const [light] = useContext(ThemeContext);
	return <StyledDiv light={light}>
		<div className="note">Hi, My name is <span>Calculator</span>. Start exploring my different components using the above hamburger 😎.
		</div>
		<div className="end">Made with <div className="emoji">❤️</div> by Abhishek Kumar.</div>

        
	</StyledDiv>;
}

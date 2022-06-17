import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import bin from "../assets/bin.jpg"
import dec from "../assets/dec.jpg"
import octa from "../assets/oct.jpg"
import hexa from "../assets/hex.jpg"

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
gap:20px;
flex-wrap: wrap;
flex-grow:1;
color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
.card{
	margin-top:40px;
	position: relative;
	background: ${(props) => (props.light ? "rgb(240,240,256)" : "#2b2e33")};
	padding:20px;
	box-shadow: 0px 0px 10px 2px rgb(0, 0, 0, 0.1);
	border-radius: 10px;
	h2{
		position: absolute;
		top:-40px;
		left:0px;
		border-radius: 10px;
		box-shadow: 0px -5px 5px rgb(0, 0, 0, 0.1);
		background: ${(props) => (props.light ? "rgb(240,240,256)" : "#2b2e33")};
		padding:10px 15px;
	}
	.img{
		width:300px;
		height:200px;
		margin:5px 0;
		overflow: hidden;
		border-radius:10px;
		img{
			width:100%;
			height:100%;
			border-radius:10px;
			transition:0.3s ease all;
			&:hover{
				transform: scale(1.1);
			}
		}
	}
	input {
		color-scheme: ${(props) => (props.light ? "light" : "dark")};

			transition: 0.3s ease all;
			padding: 10px;
			color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
			background: ${(props) => (props.light ? "white" : "#37383a")};
			border: none;
			outline: none;
			margin: 7px 0;
			width:100%;
			border-radius: 5px;
			&:focus {
				box-shadow: 0px 0px 0px 1px
					${({ light }) => (light ? "orange" : "skyblue")};
			}
		}
}
`;

export default function Standard() {
	const [light] = useContext(ThemeContext);
	const [binary, setBinary] = useState("")
	const [oct, setOct] = useState("")
	const [decimal, setDecimal] = useState("")
	const [hex, setHex] = useState("")
	const binaryToDecimal = (b)=>{
		let num = 0;
		let n = b.length;
		let pow = 1;
		for(let i =n-1; i>=0; i--){
			if(b[i]==='1')
			num+=pow;
			else if(b[i]!=='0')
			return "";
			pow*=2;
		}
		if(n===0)
		return "";
		else
		return `${num}`;
	}

	const binaryToOctal = (b)=>{
		let ans = "";
		let n = b.length;
		if(n%3===1)
		b = "00"+ b;
		else if(n%3===2)
		b= "0"+ b;
		let cnt = 0;
		let temp = "";
		for(let i=0; i<b.length; i++){
			temp+=b[i];
			cnt++;
			if(cnt===3){
				ans += binaryToDecimal(temp);
				temp= "";
				cnt = 0;
			}
		}
		return ans;
	}
	const binaryToHex = (b)=>{
		let ans = "";
		let n = b.length;
		if(n%4===1)
		b = "000"+ b;
		else if(n%4===2)
		b= "00"+ b;
		else if(n%4===3)
		b= "0"+ b;
		let cnt = 0;
		let temp = "";
		for(let i=0; i<b.length; i++){
			temp+=b[i];
			cnt++;
			if(cnt===4){
				const y = binaryToDecimal(temp);
				switch(parseInt(y)){
					case 10: ans+="A";
					         break;
					case 11: ans+="B";
					         break;
					case 12: ans+="C";
					         break;
					case 13: ans+="D";
					         break;
					case 14: ans+="E";
					         break;
					case 15: ans+="F";
					         break;
					default: ans += y;
				}
				temp= "";
				cnt = 0;
			}
		}
		return ans;
	}
	const decimalToBinary = (d)=>{
		let ans = "";
		if(d.length===0)
		return ans;
		let num = parseInt(d);
		if(num===0)
		return "0"
		while(num>0){
			if(num%2===0)
			ans = "0"+ ans;
			else
			ans = "1"+ ans;
			num = parseInt(num/2);
		}
		return ans;
	}

	const octToBinary = (o)=>{
		let ans = "";
		for(let i=0; i<o.length; i++){
			let s = decimalToBinary(o[i]);
			if(s.length%3===0)
			ans+=s;
			else if(s.length%3===1)
			ans+="00"+s;
			else if(s.length%3===2)
			ans+="0"+s;
		}
		return ans;
	}

	const hexToBinary = (o)=>{
		let ans = "";
		for(let i=0; i<o.length; i++){
			let s;
	        switch(o[i]){
				case 'A' : s = decimalToBinary("10");
						   break;
				case 'B' : s = decimalToBinary("11");
						   break;
				case 'C' : s = decimalToBinary("12");
						   break;
				case 'D' : s = decimalToBinary("13");
						   break;
				case 'E' : s = decimalToBinary("14");
						   break;
				case 'F' : s = decimalToBinary("15");
						   break;
				default : s = decimalToBinary(o[i]);
			}
			if(s.length%4===0)
			ans+=s;
			else if(s.length%4===1)
			ans+="000"+s;
			else if(s.length%4===2)
			ans+="00"+s;
			else if(s.length%4===3)
			ans+="0"+s;
		}
		return ans;
	}

	const octToDecimal = (b)=>{
		let num = 0;
		let n = b.length;
		let pow = 1;
		for(let i =n-1; i>=0; i--){
			num+=pow*parseInt(b[i]);
			if(b[i]>='8')
			return "";
			pow*=8;
		}
		if(n===0)
		return "";
		else
		return `${num}`;
	}

	const handleBinary = (e)=>{
		let x = e.target.value;
	
		if(isNaN(binaryToDecimal(x)))
		setDecimal("");
		else
		setDecimal(binaryToDecimal(x));

		if(isNaN(binaryToOctal(x)))
		setOct("");
		else
		setOct(binaryToOctal(x));

		setHex(binaryToHex(x));

		if(isNaN(x))
		setBinary("");
		else
		setBinary(x);
	}
	const handleOct = (e)=>{
		let x = e.target.value;
	
		if(isNaN(octToBinary(x)))
		setBinary("");
		else
		setBinary(octToBinary(x));

		if(isNaN(octToDecimal(x)))
		setDecimal("");
		else
		setDecimal(octToDecimal(x));

		if(isNaN(octToBinary(x)))
		setHex("")
		else
		setHex(binaryToHex(octToBinary(x)));

		if(isNaN(x))
		setOct("");
		else
		setOct(x);
	}
	const handleDecimal = (e)=>{
		let x = e.target.value;
	
		if(isNaN(decimalToBinary(x)))
		setBinary("");
		else
		setBinary(decimalToBinary(x));

		if(isNaN(decimalToBinary(x)))
		setOct("");
		else
		setOct(binaryToOctal(decimalToBinary(x)));

		if(isNaN(decimalToBinary(x)))
		setHex("")
		else
		setHex(binaryToHex(decimalToBinary(x)));

		if(isNaN(x))
		setDecimal("");
		else
		setDecimal(x);
		
	}
	const handleHex = (e)=>{
		let x = e.target.value;
	
		if(isNaN(hexToBinary(x)))
		setBinary("");
		else
		setBinary(hexToBinary(x));

		if(isNaN(hexToBinary(x)))
		setOct("");
		else
		setOct(binaryToOctal(hexToBinary(x)));

		if(isNaN(hexToBinary(x)))
		setDecimal("")
		else
		setDecimal(binaryToDecimal(hexToBinary(x)));

		setHex(x);
	}
	return (
		<StyledDiv light={light}>
			<div className="card">
				<h2>Binary</h2>
				<div className="img">
					<img src={bin} alt="binary"/>
				</div>
				<input type="text" onChange={handleBinary}  value={binary}  placeholder="Enter a value..."/>
			</div>
			<div className="card">
				<h2>Octal</h2>
				<div className="img">
					<img src={ octa } alt="octadecimal"/>
				</div>
				<input type="text" onChange={handleOct}  value={oct}  placeholder="Enter a value..."/>
			</div>
			<div className="card">
				<h2>Decimal</h2>
				<div className="img">
					<img src={dec} alt="decimal"/>
				</div>
				<input type="text" onChange={handleDecimal}  value={decimal}  placeholder="Enter a value..."/>
			</div>
			<div className="card">
				<h2>Hexadecimal</h2>
				<div className="img">
					<img src={hexa} alt="hexadecimal"/>
				</div>
				<input type="text" onChange={handleHex}  value={hex}  placeholder="Enter a value..."/>
			</div>
		</StyledDiv>
	);
}

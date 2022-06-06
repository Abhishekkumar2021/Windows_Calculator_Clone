import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import calculator from "advanced-calculator";

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

const keys = {
  cos: <p className="icon">cos</p>,
  sin: <p className="icon">sin</p>,
  tan: <p className="icon">tan</p>,
  remove: <RiDeleteBack2Fill className="icon" />,
  clear: <p className="icon">C</p>,
  sec: <p className="icon">sec</p>,
  cot: <p className="icon">cot</p>,
  cosec: <p className="icon">cosec</p>,
  lbracket: <p className="icon" id="brack">&#40; </p>,
  rbracket: <p className="icon">&#41;</p>,
  log: <p className="icon">log</p>,
  max: <p className="icon" id="max">max </p>,
  min: <p className="icon" id="min">min </p>,

  pi: <p className="icon">pi</p>,
  e: <p className="icon">e</p>,
  comma: <p className="icon">&#44;</p>,

  seven: <RiNumber7 className="icon" />,
  eight: <RiNumber8 className="icon" />,
  nine: <RiNumber9 className="icon" />,
  divide: <p className="icon"> &#247;</p>,

  root: <p className="icon">&radic;</p>,
  four: <RiNumber4 className="icon" />,
  five: <RiNumber5 className="icon" />,
  six: <RiNumber6 className="icon" />,
  add: <p className="icon"> &#43;</p>,

  exp: <p className="icon">^</p>,
  one: <RiNumber1 className="icon" />,
  two: <RiNumber2 className="icon" />,
  three: <RiNumber3 className="icon" />,
  multiply: <p className="icon"> &#215;</p>,

  modulo: <p className="icon">&#37;</p>,
  zero: <RiNumber0 className="icon" />,
  period: <BsDot className="icon" />,

  substract: <p className="icon"> &#8722;</p>,
  equal: <p className="icon"> &#61;</p>,
};
const StyledDiv = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  .screen {
    padding: 15px;
    margin: 10px 0;
    height: 150px;
    text-align: right;
    font-size: 32px;
    overflow-x:scroll;
  }
  .buttons {
    box-shadow: 0 -10px 25px -5px rgb(0, 0, 0, 0.1);
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    button {
      border: none;
      outline: none;
      background: ${(props) => (props.light ? "white" : "#37383a")};
      color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
      border: 1px solid rgb(0, 0, 0, 0.1);
      font-size: 1.5rem;
      transition: 0.3s ease all;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      &:active {
        transform: scale(0.9);
      }
    }

    #equal {
      background: ${(props) => (props.light ? "orange" : "teal")};
    }
    #clear {
      background: ${(props) =>
        props.light ? "rgb(250, 80, 80,0.5)" : "rgb(200, 100, 20,0.7)"};
    }

	
  }
  @media only screen and (max-width:478px){
	  .screen{
		  font-size:20px;
	  }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg) scale(1.3);
    }
    to {
      transform: rotate(359deg) scale(1);
    }
  }
`;

export default function Scientific() {
  const [result, setResult] = useState("");
  const [light] = useContext(ThemeContext);
  const makeSuitable = () => {
	let ans = result;
    if (result.length === 0) ans = "0";
    else {
      if (result[0] === '-') ans = "0" + result;
	  if(result.indexOf("cot")!==-1){
		  let s =  result.indexOf("cot")
		  ans = result.substring(0,s) + "1/tan" + result.substring(s+3,result.length);
	  }
	  if(result.indexOf("sec")!==-1){
		let s =  result.indexOf("sec")
		ans = result.substring(0,s) + "1/cos" + result.substring(s+3,result.length);
	  }
	  if(result.indexOf("cosec")!==-1){
		let s =  result.indexOf("cosec")
		ans = result.substring(0,s) + "1/sin" + result.substring(s+5,result.length);
	  }
    }
	return ans;
  };
  const handleClick = (key) => {
    switch (key) {
	  case "cos":
			setResult(result + "cos");
			break;
	  case "sin":
			setResult(result + "sin");
			break;
	  case "tan":
			setResult(result + "tan");
			break;
	  case "cot":
			setResult(result + "cot");
			break;
	  case "sec":
			setResult(result + "sec");
			break;
	  case "cosec":
			setResult(result + "cosec");
			break;
	  case "lbracket":
			setResult(result + "(");
			break;
	  case "rbracket":
			setResult(result + ")");
			break;
	  case "log":
			setResult(result + "log");
			break;
	  case "max":
			setResult(result + "max");
			break;
	  case "min":
			setResult(result + "min");
			break;
	  case "pi":
			setResult(result + "pi");
			break;
	  case "exp":
			setResult(result + "^");
			break;
	  case "e":
			setResult(result + "e");
			break;
	  case "comma":
			setResult(result + ",");
			break;
      case "modulo":
        setResult(result + "%");
        break;
      case "root":
        setResult(result + "sqrt");
        break;
      case "clear":
        setResult("");
        break;
      case "remove":
        setResult(result.slice(0, result.length - 1));
        break;
      case "seven":
        setResult(result + "7");
        break;
      case "eight":
        setResult(result + "8");
        break;
      case "nine":
        setResult(result + "9");
        break;
      case "divide":
        setResult(result + "/");
        break;
      case "four":
        setResult(result + "4");
        break;
      case "five":
        setResult(result + "5");
        break;
      case "six":
        setResult(result + "6");
        break;

      case "multiply":
        setResult(result + "*");
        break;
      case "one":
        setResult(result + "1");
        break;
      case "two":
        setResult(result + "2");
        break;
      case "three":
        setResult(result + "3");
        break;
      case "add":
        setResult(result + "+");
        break;
      case "zero":
        setResult(result + "0");
        break;
      case "period":
        setResult(result + ".");
        break;

      case "substract":
        setResult(result + "-");
        break;
      case "equal":
		  try{
			  setResult(calculator.evaluate(makeSuitable()));
		  }catch(e){
			  setResult("")
		  }
        
        break;
      default:
        break;
    }
  };
  return (
    <StyledDiv light={light}>
      <div className="screen" title="Provide me some math to solve :)">
        {result}
      </div>
      <div className="buttons">
        {Object.keys(keys).map((key) => (
          <button key={key} id={key} onClick={() => handleClick(key)}>
            {keys[key]}
          </button>
        ))}
      </div>
    </StyledDiv>
  );
}

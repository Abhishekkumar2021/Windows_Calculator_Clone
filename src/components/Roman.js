import React, { useContext, useState } from "react";
import styled from "styled-components";

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
  input {
      padding:5px;
      text-align: center;
      width:300px;
      height:300px;
    transition: 0.3s ease all;
    background: ${(props) => (props.light ? "white" : "#37383a")};
    border: none;
    outline: none;
    font-size: 40px;
    box-shadow:0 20px 25px -8px rgb(0,0,0,0.2);

    color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
    border-radius: 25px;
  }
  h1{
      padding:20px;
      text-align: center;
    background: ${(props) => (props.light ? "white" : "#37383a")};
    border-radius:25px;
    box-shadow:0 20px 25px -8px rgb(0,0,0,0.2);
    display: flex;
  justify-content: center;
  align-items: center;
  height:300px;
  width:300px;
      
  }
`;

export default function Roman() {
  const [light] = useContext(ThemeContext);
  const [num, setNum] = useState(null);
  const [roman, setRoman] = useState("");

  const toRoman = (num) => {
    if (num < 1 || num > 3999)
      return "Number must be between 1 and 3999";
    let m = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M",
    };

    let res = "";
    while (num > 0) {
      if (num >= 1000) {
        let t = num / 1000;
        num = num % 1000;
        for (let i = 0; i < t; i++) res += m[1000];
      } else if (num >= 900) {
        res += m[900];
        num = num % 900;
      } else if (num >= 500) {
        res += m[500];
        let t = (num - 500) / 100;
        for (let i = 0; i < t; i++) res += m[100];
        num = num % 100;
      } else if (num >= 400) {
        res += m[400];
        num = num % 400;
      } else if (num >= 100) {
        let t = num / 100;
        for (let i = 0; i < t; i++) res += m[100];
        num = num % 100;
      } else if (num >= 90) {
        res += m[90];
        num = num % 10;
      } else if (num >= 50) {
        res += m[50];
        let t = (num - 50) / 10;
        for (let i = 0; i < t; i++) res += m[10];
        num = num % 10;
      } else if (num >= 40) {
        res += m[40];
        num = num % 40;
      } else if (num >= 10) {
        let t = num / 10;
        for (let i = 0; i < t; i++) res += m[10];
        num = num % 10;
      } else {
        res += m[num];
        break;
      }
    }
    return res;
  };
  const handleChange = (e) => {
    setRoman(toRoman(e.target.value));
    setNum(e.target.value);
  };
  return (
    <StyledDiv light={light}>
      <input
        type="number"
        placeholder="Number"
        value={num}
        onChange={handleChange}
      />
      <h1>{roman}</h1>
    </StyledDiv>
  );
}

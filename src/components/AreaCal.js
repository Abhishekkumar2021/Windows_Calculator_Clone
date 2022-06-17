import React, { useContext, useState} from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import ThemeContext from "./ThemeContext";


const StyledDiv = styled.div`
padding:30px;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
gap:20px;
flex-wrap: wrap;
flex-grow:1;
color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
.card{
    /* animation: rotation 2s linear infinite; */
    width:340px;
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
    .circle{
        height:150%;
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
        .result{
            display:flex;
            align-items: center;
            button{
                transition: 0.1s ease all;
			padding: 10px;
			color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
			background: ${(props) => (props.light ? "white" : "#37383a")};
			border: none;
			outline: none;
            box-shadow:0 10px 15px rgb(0,0,0,0.15);
            border-radius: 10px;
            margin-right:20px;
            &:active{
                box-shadow:0 5px 10px rgb(0,0,0,0.15);

            }
           
            }
            p{
                box-shadow:0 10px 15px rgb(0,0,0,0.15);
            border-radius: 10px;
                padding: 10px;
                flex-grow:1;
                color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
			background: ${(props) => (props.light ? "white" : "#37383a")};
            }
        }
}
`;

export default function Standard() {
	const [light] = useContext(ThemeContext);
    const [tri,setTri] = useState(0);
    const [triB,handleTriB] = useInput("");
    const [triH,handleTriH] = useInput("");
    const [squ,setSqu] = useState(0);
    const [squA,handleSquA] = useInput("");
    const [cir,setCir] = useState(0);
    const [rad,handleRad] = useInput("");
    const [par,setPar] = useState(0);
    const [parB,handleParB] = useInput("");
    const [parH,handleParH] = useInput("");
    const [rec,setRec] = useState(0);
    const [recW,handleRecW] = useInput("");
    const [recL,handleRecL] = useInput("");
    const [tra,setTra] = useState(0);
    const [traA,handleTraA] = useInput("");
    const [traB,handleTraB] = useInput("");
    const [traH,handleTraH] = useInput("");
	return (
		<StyledDiv light={light}>
			<div className="card">
				<h2>Triangle</h2>
				<div className="img">
					<img src="https://th.bing.com/th/id/R.a7b234fd7551c35be87f0c8f09bb5fe5?rik=exA%2bMq14U7KCag&riu=http%3a%2f%2f3.bp.blogspot.com%2f_JwxDTWJ3Wpw%2fScwgjpRKKAI%2fAAAAAAAAAUA%2fR75nUCnXTIY%2fs400%2fmobius%2btriangle.jpg&ehk=2dyHnI5YdfFcL9wL1gyrtGIANIPQaPhME3skL8Q4Jpw%3d&risl=&pid=ImgRaw&r=0" alt="triangle"/>
				</div>
				<input type="text" placeholder="Enter base value..." value={triB} onChange={handleTriB} />
				<input type="text" placeholder="Enter height value..." value={triH} onChange={handleTriH}/>
                <div className="result">
                    <button onClick={()=>setTri(0.5*triB*triH)}>Calculate</button>
                    <p>{tri}</p>
                </div>
			</div>
			<div className="card">
				<h2>Square</h2>
				<div className="img">
					<img src="https://th.bing.com/th/id/OIP.w72BRjNUataagkH4jp8PHwHaHa?pid=ImgDet&rs=1" alt="square"/>
				</div>
				<input type="text" placeholder="Enter side value..." value={squA} onChange={handleSquA} />
				
                <div className="result">
                    <button onClick={()=>setSqu(squA*squA)}>Calculate</button>
                    <p>{squ}</p>
                </div>
			</div>
			
			<div className="card">
				<h2>Parallelogram</h2>
				<div className="img">
					<img src="https://th.bing.com/th/id/R.f44b80eef5fac1b9d263c375612f2f8e?rik=NpnHsMt5wYTReA&riu=http%3a%2f%2fwww.math-only-math.com%2fimages%2fproblems-on-parallelogram-a.jpg&ehk=vql72ZpMwKFoqSYb%2b%2bgBqWKhL4p%2ba0ZgrqITGYIk9nI%3d&risl=&pid=ImgRaw&r=0" alt="parallelogram"/>
				</div>
                <input type="text" placeholder="Enter base value..." value={parB} onChange={handleParB} />
				<input type="text" placeholder="Enter height value..." value={parH} onChange={handleParH}/>
                <div className="result">
                    <button onClick={()=>setPar(parB*parH)}>Calculate</button>
                    <p>{par}</p>
                </div>
               
				
			</div>
			<div className="card">
				<h2>Rectangle</h2>
				<div className="img">
					<img src="https://th.bing.com/th/id/OIP.qIaRROxzbs8_bPRRhQoQJwHaFj?pid=ImgDet&rs=1" alt="rectangle"/>
				</div>
                <input type="text" placeholder="Enter width value..." value={recW} onChange={handleRecW} />
				<input type="text" placeholder="Enter length value..." value={recL} onChange={handleRecL}/>
                <div className="result">
                    <button onClick={()=>setRec(recW*recL)}>Calculate</button>
                    <p>{rec}</p>
                </div>
               
				
			</div>
			<div className="card">
				<h2>Trapezium</h2>
				<div className="img">
					<img src="https://th.bing.com/th/id/R.19d6276a9932c4fb90ca712f8ebd6e2c?rik=F38nRP9PSqO32g&riu=http%3a%2f%2fwww.aplustopper.com%2fwp-content%2fuploads%2f2016%2f09%2farea-of-trapezium-1.jpg&ehk=jyd0B0yXVgsvFXQzhmGfwYQRJ0HSITIscohKhTGwsQQ%3d&risl=&pid=ImgRaw&r=0" alt="rectangle"/>
				</div>
                <input type="text" placeholder="Enter first side value..." value={traA} onChange={handleTraA} />
				<input type="text" placeholder="Enter second side value..." value={traB} onChange={handleTraB}/>
				<input type="text" placeholder="Enter height value..." value={traH} onChange={handleTraH}/>
                <div className="result">
                    <button onClick={()=>setTra(0.5*traH*(traA+traB))}>Calculate</button>
                    <p>{tra}</p>
                </div>
			</div>
			<div className="card">
				<h2>Circle</h2>
				<div className="img circle">
					<img src="https://th.bing.com/th/id/OIP.CEHByuj4vmlDSCdXa8dfcAHaHa?pid=ImgDet&rs=1" alt="circle"/>
				</div>
				<input type="text" placeholder="Enter radiusvalue..." value={rad} onChange={handleRad} />
				
                <div className="result">
                    <button onClick={()=>setCir(Math.PI*rad*rad)}>Calculate</button>
                    <p>{cir}</p>
                </div>
			</div>
		</StyledDiv>
	);
}

import ThemeContext from "./components/ThemeContext";
import useToggle from "./hooks/useToggle";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Standard from "./components/Standard";
import Home from "./components/Home";
import Programmer from "./components/Programmer";
import BMI from "./components/BMI";
import Date from "./components/Date";
import Volume from "./components/Volume";
const StyledApp = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: ${({ light }) => (light ? "#D4ECDD" : "#242629")};
	color: ${({ light }) => (light ? "black" : "white")};
`;
function App() {
	const [light, toggleLight] = useToggle(true);
	return (
		<ThemeContext.Provider value={[light, toggleLight]}>
			<StyledApp light={light}>
				<Navbar />
				<Routes>
					<Route exact path='/standard' element={<Standard />} />
					<Route exact path='/programmer' element={<Programmer />} />
					<Route exact path='/date' element={<Date />} />
					<Route exact path='/bmi' element={<BMI />} />
					<Route exact path='/volume' element={<Volume />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</StyledApp>
		</ThemeContext.Provider>
	);
}

export default App;

/* <img
src='https://math.now.sh?inline=\frac{1}{\Gamma(s)}\int_{0}^{\infty}\frac{u^{s-1}}{e^{u}-1}\mathrm{d}u'
alt='latex'
/> */

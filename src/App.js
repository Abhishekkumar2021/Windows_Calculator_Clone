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
import Currency from "./components/Currency";
import Length from "./components/Length";
import Mass from "./components/Mass";
import Temperature from "./components/Temperature";
import Energy from "./components/Energy";
import Area from "./components/Area";
import Speed from "./components/Speed";
import Time from "./components/Time";
import Power from "./components/Power";
import Data from "./components/Data";
import Pressure from "./components/Pressure";
import Angle from "./components/Angle";
import Scientific from "./components/Scientific";
import AreaCal from "./components/AreaCal";
import Roman from "./components/Roman";

const StyledApp = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: ${({ light }) => (light ? "#D4ECDD" : "#242629")};
	color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
`;
function App() {
	const [light, toggleLight] = useToggle(true);
	return (
		<ThemeContext.Provider value={[light, toggleLight]}>
			<StyledApp light={light}>
				<Navbar />
				<Routes>
					<Route exact path='/standard' element={<Standard />} />
					<Route exact path='/scientific' element={<Scientific />} />
					<Route exact path='/programmer/*' element={<Programmer />} />
					<Route exact path='/date' element={<Date />} />
					<Route exact path='/areacal' element={<AreaCal />} />
					<Route exact path='/roman' element={<Roman />} />
					<Route exact path='/bmi' element={<BMI />} />
					<Route exact path='/currency' element={<Currency />} />
					<Route exact path='/volume' element={<Volume />} />
					<Route exact path='/length' element={<Length />} />
					<Route exact path='/temperature' element={<Temperature/>} />
					<Route exact path='/weight' element={<Mass />} />
					<Route exact path='/energy' element={<Energy/>} />
					<Route exact path='/area' element={<Area/>} />
					<Route exact path='/speed' element={<Speed/>} />
					<Route exact path='/time' element={<Time/>} />
					<Route exact path='/power' element={<Power/>} />
					<Route exact path='/data' element={<Data/>} />
					<Route exact path='/pressure' element={<Pressure/>} />
					<Route exact path='/angle' element={<Angle/>} />
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

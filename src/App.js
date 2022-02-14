import ThemeContext from "./components/ThemeContext";
import useToggle from "./hooks/useToggle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Standard from "./components/Standard";
import Home from "./components/Home";

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
			<Router>
				<StyledApp light={light}>
					<Navbar />
					<Routes>
						<Route exact path='/standard' element={<Standard />}></Route>
						<Route path='/' element={<Home />}></Route>
					</Routes>
				</StyledApp>
			</Router>
		</ThemeContext.Provider>
	);
}

export default App;

/* <img
src='https://math.now.sh?inline=\frac{1}{\Gamma(s)}\int_{0}^{\infty}\frac{u^{s-1}}{e^{u}-1}\mathrm{d}u'
alt='latex'
/> */

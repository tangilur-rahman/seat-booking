// external components
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// internal components
import "./App.css";
import BoysLab2 from "./pages/BoysLab2/BoysLab2";
import GirlsLab2 from "./pages/GirlsLab2/GirlsLab2";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="ridhima-girls-lab-1" element={<GirlsLab2 />} />
					<Route path="ridhima-girls-lab-2" element={<BoysLab2 />} />

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;

// external components
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// internal components
import "./App.css";
import Home from "./pages/Home/Home";
import View1 from "./pages/View1/View1";
import View2 from "./pages/View2/View2";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="view-1" element={<View1 />} />
					<Route path="view-2" element={<View2 />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;

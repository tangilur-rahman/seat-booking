// external components
import { useNavigate } from "react-router-dom";

// internal components
import "./Home.css";

const Home = () => {
	// for redirect view
	const Navigate = useNavigate();

	return (
		<>
			<div className="container-fluid p-0">
				<div className="row m-0 home-container">
					<div className="col p-0 home-wrapper">
						<button
							type="button"
							className="btn btn-dark"
							onClick={() => Navigate("/view-1")}
						>
							<span className="hover-link">View 1</span>
						</button>
						<button
							type="button"
							className="btn btn-dark"
							onClick={() => Navigate("/view-2")}
						>
							<span className="hover-link">View 2</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;

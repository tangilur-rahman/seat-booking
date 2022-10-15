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
					<div className="col-2 p-0 left-side">
						<div className="option">
							<i className="fa-solid fa-user"></i> <h6>User</h6>
						</div>
						<div className="option">
							<i className="fa-solid fa-user"></i> <h6>Seats</h6>
						</div>
						<div className="option">
							<i className="fa-solid fa-right-from-bracket"></i>
							<h6>Log Out</h6>
						</div>
					</div>

					<div className="col-10 p-0 right-side">right -side</div>
				</div>
			</div>
		</>
	);
};

export default Home;

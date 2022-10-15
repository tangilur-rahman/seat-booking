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
						<div className="option active">
							<i className="fa-solid fa-user"></i> <h6>Seats</h6>
						</div>
						<div className="option">
							<i className="fa-solid fa-right-from-bracket"></i>
							<h6>Log Out</h6>
						</div>
					</div>

					<div className="col-9 p-0 right-side">
						<div className="header">
							<h3>Seats Availability</h3>
							<button type="button" className="btn btn-light">
								Generate Report
							</button>
						</div>

						<div className="section-container">
							<div className="row-1">
								<div className="section">
									<h5>Ridhima Girls Lab 1</h5>
									<h6
										className="hover-link"
										onClick={() => Navigate("ridhima-girls-lab-1")}
									>
										View Seats
									</h6>
								</div>
								<div className="section">
									<h5>Ridhima Girls Lab 2</h5>
									<h6 className="hover-link">View Seats</h6>
								</div>
								<div className="section">
									<h5>Ridhima Basement Lab</h5>
									<h6 className="hover-link">View Seats</h6>
								</div>
							</div>

							<div className="row-2">
								<div className="section">
									<h5>Ridhima Boy Labs 1</h5>
									<h6 className="hover-link">View Seats</h6>
								</div>
								<div className="section">
									<h5>Ridhima Girls Lab 2</h5>
									<h6 className="hover-link">View Seats</h6>
								</div>
								<div className="section">
									<h5>Ridhima Theory Lab</h5>
									<h6 className="hover-link">View Seats</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;

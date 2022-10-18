// external components
import { useState } from "react";

// internal components
import Basement from "../Basement/Basement";
import BoysLab1 from "../BoysLab1/BoysLab1";
import BoysLab2 from "../BoysLab2/BoysLab2";
import GirlsLab1 from "../GirlsLab1/GirlsLab1";
import GirlsLab2 from "../GirlsLab2/GirlsLab2";
import "./Home.css";

const Home = () => {
	// for getting option
	const [getOption, setOption] = useState("seats");

	// for lab selection
	const [selectedLab, setSelectedLab] = useState("");

	// girls-lab-1 states
	const [girlsLab_1L_1, setGirlsLab_1L_1] = useState([]);
	const [girlsLab_1L_2, setGirlsLab_1L_2] = useState([]);
	const [girlsLab_1L_3, setGirlsLab_1L_3] = useState([]);
	const [girlsLab_1L_4, setGirlsLab_1L_4] = useState([]);
	const [girlsLab_1L_5, setGirlsLab_1L_5] = useState([]);
	const [girlsLab_1L_6, setGirlsLab_1L_6] = useState([]);

	return (
		<>
			<div className="container-fluid p-0">
				<div className="row m-0 home-container">
					<div className="col-12 p-0 navbar-container">
						<div
							className={getOption === "user" ? "option active" : "option"}
							onClick={() => setOption("user")}
						>
							<i className="fa-solid fa-user"></i> <h6>User</h6>
						</div>
						<div
							className={getOption === "seats" ? "option active" : "option"}
							onClick={() => setOption("seats")}
						>
							<i className="fa-solid fa-couch"></i> <h6>Seats</h6>
						</div>
						<div
							className={getOption === "logout" ? "option active" : "option"}
							onClick={() => setOption("logout")}
						>
							<i className="fa-solid fa-right-from-bracket"></i>
							<h6>Log Out</h6>
						</div>
					</div>

					<div className="col-12 p-0 body-container">
						<div className="header">
							<h3>Seats Availability</h3>
							<button type="button" className="btn btn-light">
								Generate Report
							</button>
						</div>

						<div className="section-container">
							<div className="row-1">
								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-girls-lab-1")}
								>
									<div id="header">
										<h5>Ridhima Girls Lab 1</h5>
										<div id="counter">
											<span>
												Total Seat : <b>105</b>{" "}
											</span>
											<span>
												Booked Seat :{" "}
												<b>
													{girlsLab_1L_1.length +
														girlsLab_1L_2.length +
														girlsLab_1L_3.length +
														girlsLab_1L_4.length +
														girlsLab_1L_5.length +
														girlsLab_1L_6.length}
												</b>{" "}
											</span>
											<span>
												Empty Seat :{" "}
												<b>
													{105 -
														(girlsLab_1L_1.length +
															girlsLab_1L_2.length +
															girlsLab_1L_3.length +
															girlsLab_1L_4.length +
															girlsLab_1L_5.length +
															girlsLab_1L_6.length)}
												</b>{" "}
											</span>
										</div>
									</div>

									<div id="lab-container">
										<img src="/assets/images/girls-lab-1.png" alt="lab-img" />
									</div>

									<h6 className="view-seats">
										<span className="hover-link">View Seats</span>
									</h6>
								</div>

								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-girls-lab-2")}
								>
									<div id="header">
										<h5>Ridhima Girls Lab 2</h5>
										<div id="counter">
											<span>
												Total Seat : <b>10</b>{" "}
											</span>
											<span>
												Booked Seat : <b>10</b>{" "}
											</span>
											<span>
												Empty Seat : <b>10</b>{" "}
											</span>
										</div>
									</div>

									<div id="lab-container">
										<img src="/assets/images/girls-lab-2.png" alt="lab-img" />
									</div>

									<h6 className="view-seats">
										<span className="hover-link">View Seats</span>
									</h6>
								</div>

								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-basement-lab")}
								>
									<div id="header">
										<h5>Ridhima Basement Lab</h5>
										<div id="counter">
											<span>
												Total Seat : <b>10</b>{" "}
											</span>
											<span>
												Booked Seat : <b>10</b>{" "}
											</span>
											<span>
												Empty Seat : <b>10</b>{" "}
											</span>
										</div>
									</div>

									<div id="lab-container">
										<img src="/assets/images/basement.png" alt="lab-img" />
									</div>

									<h6 className="view-seats">
										<span className="hover-link">View Seats</span>
									</h6>
								</div>
							</div>

							<div className="row-2">
								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-boys-lab-1")}
								>
									<div id="header">
										<h5>Ridhima Boys Labs 1</h5>
										<div id="counter">
											<span>
												Total Seat : <b>10</b>{" "}
											</span>
											<span>
												Booked Seat : <b>10</b>{" "}
											</span>
											<span>
												Empty Seat : <b>10</b>{" "}
											</span>
										</div>
									</div>

									<div id="lab-container">
										<img src="/assets/images/boys-lab-1.png" alt="lab-img" />
									</div>

									<h6 className="view-seats">
										<span className="hover-link">View Seats</span>
									</h6>
								</div>
								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-boys-lab-2")}
								>
									<div id="header">
										<h5>Ridhima Boys Lab 2</h5>
										<div id="counter">
											<span>
												Total Seat : <b>10</b>{" "}
											</span>
											<span>
												Booked Seat : <b>10</b>{" "}
											</span>
											<span>
												Empty Seat : <b>10</b>{" "}
											</span>
										</div>
									</div>

									<div id="lab-container">
										<img src="/assets/images/boys-lab-2.png" alt="lab-img" />
									</div>

									<h6 className="view-seats">
										<span className="hover-link">View Seats</span>
									</h6>
								</div>

								<div
									className="section"
									onClick={() => setSelectedLab("ridhima-theory-lab")}
								>
									<div id="header">
										<h5>Ridhima Theory Lab</h5>
									</div>

									<div id="lab-container" className="coming-soon">
										<h4>Coming Soon . . .</h4>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>

					{selectedLab === "ridhima-girls-lab-1" && (
						<GirlsLab1
							setSelectedLab={setSelectedLab}
							girlsLab_1L_1={girlsLab_1L_1}
							setGirlsLab_1L_1={setGirlsLab_1L_1}
							girlsLab_1L_2={girlsLab_1L_2}
							setGirlsLab_1L_2={setGirlsLab_1L_2}
							girlsLab_1L_3={girlsLab_1L_3}
							setGirlsLab_1L_3={setGirlsLab_1L_3}
							girlsLab_1L_4={girlsLab_1L_4}
							setGirlsLab_1L_4={setGirlsLab_1L_4}
							girlsLab_1L_5={girlsLab_1L_5}
							setGirlsLab_1L_5={setGirlsLab_1L_5}
							girlsLab_1L_6={girlsLab_1L_6}
							setGirlsLab_1L_6={setGirlsLab_1L_6}
						/>
					)}

					{selectedLab === "ridhima-girls-lab-2" && (
						<GirlsLab2 setSelectedLab={setSelectedLab} />
					)}

					{selectedLab === "ridhima-basement-lab" && (
						<Basement setSelectedLab={setSelectedLab} />
					)}

					{selectedLab === "ridhima-boys-lab-1" && (
						<BoysLab1 setSelectedLab={setSelectedLab} />
					)}

					{selectedLab === "ridhima-boys-lab-2" && (
						<BoysLab2 setSelectedLab={setSelectedLab} />
					)}
				</div>
			</div>
		</>
	);
};

export default Home;

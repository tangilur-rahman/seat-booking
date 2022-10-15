// external components
import { useState } from "react";

// internal components
import "./View1.css";

const View1 = () => {
	// for initialization seatList start
	let seatList = [];

	for (let index = 1; index <= 84; index++) {
		seatList.push(index);
	}

	const layout1 = seatList.splice(0, 13);

	const layout2 = seatList.splice(0, 14);

	const layout3 = seatList.splice(0, 14);

	const layout4 = seatList.splice(0, 14);

	const layout5 = seatList.splice(0, 10);

	const layout6 = seatList.splice(0, 10);

	const layout7 = seatList.splice(0, 9);

	// for initialization seatList end

	// for getting selected seat
	const [getSeat, setSeat] = useState("");

	console.log(getSeat);

	return (
		<>
			<div className="container-fluid p-0">
				<div className="row m-0 view-1-container">
					<div className="col-10 p-0 view-1-wrapper">
						<div className="horizontal-container">
							<div className="horizontal">
								<div id="layout-1">
									{layout1.map((value, index) => {
										return (
											<span key={index} onClick={() => setSeat(value)}>
												{value}
											</span>
										);
									})}
								</div>
							</div>

							<div className="horizontal-remain"></div>
						</div>

						<div className="vertical">
							<div id="layout-2">
								<div id="layout-2-1">
									{layout2
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(0, 7)}
								</div>

								<div id="layout-2-2">
									{layout2
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(7, 14)}
								</div>
							</div>
							<div id="layout-3">
								<div id="layout-3-1">
									{layout3
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(0, 7)}
								</div>

								<div id="layout-3-2">
									{layout3
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(7, 14)}
								</div>
							</div>
							<div id="layout-4">
								<div id="layout-4-1">
									{layout4
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(0, 7)}
								</div>

								<div id="layout-4-2">
									{layout4
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(7, 14)}
								</div>
							</div>

							<div id="layout-5">
								<div id="layout-5-1">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout5
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(0, 5)}
								</div>
								<div id="layout-5-2">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout5
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(5, 10)}
								</div>
							</div>
							<div id="layout-6">
								<div id="layout-6-1">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout6
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(0, 5)}
								</div>
								<div id="layout-6-2">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout6
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(5, 10)}
								</div>
							</div>
							<div id="layout-7">
								<div id="layout-7-1">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout7
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(0, 5)}
								</div>
								<div id="layout-7-2">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout7
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}>
													{value}
												</span>
											);
										})
										.splice(5, 9)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default View1;

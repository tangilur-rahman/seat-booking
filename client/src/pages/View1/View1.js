// external components
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookingPopUp from "../../components/BookingPopUp/BookingPopUp";

// internal components
import "./View1.css";

const View1 = () => {
	// for initialization seatList start
	let seatList = [];

	for (let index = 1; index <= 84; index++) {
		seatList.push(index);
	}

	const layout1 = seatList?.splice(0, 13);

	const layout2 = seatList?.splice(0, 14);

	const layout3 = seatList?.splice(0, 14);

	const layout4 = seatList?.splice(0, 14);

	const layout5 = seatList?.splice(0, 10);

	const layout6 = seatList?.splice(0, 10);

	const layout7 = seatList?.splice(0, 9);

	// for initialization seatList end

	// for getting selected seat
	const [getSeat, setSeat] = useState("");

	// for getting all documents
	const [getDocs, setDocs] = useState("");

	// fetching data from database start
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("/user/allDocs");

				const result = await response.json();

				if (response.status === 200) {
					setDocs(result ? result : []);
				} else if (response.status === 400) {
					toast(result.error, {
						position: "top-right",
						theme: "dark",
						autoClose: 3000
					});
				}
			} catch (error) {
				toast.error(error.message, {
					position: "top-right",
					theme: "colored",
					autoClose: 3000
				});
			}
		})();
	}, []);
	// fetching data from database end

	return (
		<>
			<div className="container-fluid p-0 view-1-main-container">
				<div className="row m-0 view-1-container">
					<div className="col-10 p-0 view-1-wrapper">
						<div className="horizontal-container">
							<div className="horizontal">
								<div id="layout-1">
									{layout1.map((value, index) => {
										return (
											<span key={index} onClick={() => setSeat(value)}></span>
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
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(0, 7)}
								</div>

								<div id="layout-2-2">
									{layout2
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(7, 14)}
								</div>
							</div>
							<div id="layout-3">
								<div id="layout-3-1">
									{layout3
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(0, 7)}
								</div>

								<div id="layout-3-2">
									{layout3
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(7, 14)}
								</div>
							</div>
							<div id="layout-4">
								<div id="layout-4-1">
									{layout4
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(0, 7)}
								</div>

								<div id="layout-4-2">
									{layout4
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(7, 14)}
								</div>
							</div>

							<div id="layout-5">
								<div id="layout-5-1">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout5
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(0, 5)}
								</div>
								<div id="layout-5-2">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout5
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(5, 10)}
								</div>
							</div>
							<div id="layout-6">
								<div id="layout-6-1">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout6
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(0, 5)}
								</div>
								<div id="layout-6-2">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout6
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(5, 10)}
								</div>
							</div>
							<div id="layout-7">
								<div id="layout-7-1">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout7
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(0, 5)}
								</div>
								<div id="layout-7-2">
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									<span className="visibility-none"></span>
									{layout7
										.map((value, index) => {
											return (
												<span key={index} onClick={() => setSeat(value)}></span>
											);
										})
										?.splice(5, 9)}
								</div>
							</div>
						</div>
					</div>
				</div>
				{getSeat && (
					<BookingPopUp
						getSeat={getSeat}
						setSeat={setSeat}
						frow_where={"view-1"}
					/>
				)}
			</div>
		</>
	);
};

export default View1;

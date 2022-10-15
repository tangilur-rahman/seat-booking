// external components
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookingPopUp from "../../components/BookingPopUp/BookingPopUp";

// internal components
import "./View1.css";

const View1 = () => {
	// for updating booking
	const [isUpdate, setIsUpdate] = useState("");

	// for getting selected seat
	const [getId, setId] = useState("");

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
	}, [isUpdate]);
	// fetching data from database end

	return (
		<>
			{getDocs.length > 0 && (
				<div className="container-fluid p-0 view-1-main-container">
					<div className="row m-0 view-1-container">
						<div className="col-10 p-0 view-1-wrapper">
							<div className="horizontal-container">
								<div className="horizontal">
									<div id="layout-1">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											.splice(0, 13)}
									</div>
								</div>

								<div className="horizontal-remain"></div>
							</div>

							<div className="vertical">
								<div id="layout-2">
									<div id="layout-2-1">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(13, 7)}
									</div>

									<div id="layout-2-2">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(20, 7)}
									</div>
								</div>
								<div id="layout-3">
									<div id="layout-3-1">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(27, 7)}
									</div>

									<div id="layout-3-2">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(34, 7)}
									</div>
								</div>
								<div id="layout-4">
									<div id="layout-4-1">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(41, 7)}
									</div>

									<div id="layout-4-2">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(48, 7)}
									</div>
								</div>

								<div id="layout-5">
									<div id="layout-5-1">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(55, 5)}
									</div>
									<div id="layout-5-2">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(60, 5)}
									</div>
								</div>
								<div id="layout-6">
									<div id="layout-6-1">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(65, 5)}
									</div>
									<div id="layout-6-2">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(70, 5)}
									</div>
								</div>
								<div id="layout-7">
									<div id="layout-7-1">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(75, 5)}
									</div>
									<div id="layout-7-2">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() => setId(value._id)}
														className={
															new Date().getTime() < value?.days_left
																? "active"
																: ""
														}
													></span>
												);
											})
											?.splice(80, 4)}
									</div>
								</div>
							</div>
						</div>
					</div>
					{getId && (
						<BookingPopUp
							getId={getId}
							setId={setId}
							frow_where={"view-1"}
							setIsUpdate={setIsUpdate}
						/>
					)}
				</div>
			)}
		</>
	);
};

export default View1;

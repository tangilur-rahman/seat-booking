// external components
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookingPopUp from "../../components/BookingPopUp/BookingPopUp";

// internal components
import "./GirlsLab2.css";

const GirlsLab2 = ({ setSelectedLab }) => {
	// for updating booking
	const [isUpdate, setIsUpdate] = useState("");

	// for getting selected seat
	const [getId, setId] = useState("");

	// for displaying booked value
	const [getBooked, setBooked] = useState("");

	// for getting all documents
	const [getDocs, setDocs] = useState("");

	// fetching data from database start
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("/user/allDocs?lab=ridhima-girls-lab-2");

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
				<div
					className="container-fluid p-0 girls-2-main-container"
					data-aos="fade-down"
					data-aos-duration="700"
				>
					<div className="row m-0 girls-2-container">
						<div className="col-12 p-0 girls-2-wrapper">
							<div id="layout-1">
								<div id="top">
									{getDocs
										.map((value, index) => {
											return (
												<span
													key={index}
													onClick={() =>
														new Date().getTime() < value?.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? setBooked(value)
																: setId(value._id)
															: setId(value._id)
													}
													className={
														new Date().getTime() < value?.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? "active"
																: ""
															: ""
													}
												>
													{new Date().getTime() < value.days_left
														? Math.abs(
																Math.floor(
																	value.days_left / (3600 * 24 * 1000)
																) -
																	Math.floor(
																		new Date().getTime() / (3600 * 24 * 1000)
																	)
														  ) !== 0
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  )
															: ""
														: ""}

													{/* {value.booking_seat} */}
												</span>
											);
										})
										.splice(0, 4)}
								</div>

								<div id="bottom">
									<div id="bottom-1">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}

														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(4, 7)}
									</div>

									<div id="bottom-2">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}

														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(11, 7)}
									</div>
								</div>
							</div>

							<div id="layout-2">
								<div id="top">
									{getDocs
										.map((value, index) => {
											return (
												<span
													key={index}
													onClick={() =>
														new Date().getTime() < value?.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? setBooked(value)
																: setId(value._id)
															: setId(value._id)
													}
													className={
														new Date().getTime() < value?.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? "active"
																: ""
															: ""
													}
												>
													{new Date().getTime() < value.days_left
														? Math.abs(
																Math.floor(
																	value.days_left / (3600 * 24 * 1000)
																) -
																	Math.floor(
																		new Date().getTime() / (3600 * 24 * 1000)
																	)
														  ) !== 0
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  )
															: ""
														: ""}
													{/* {value.booking_seat} */}
												</span>
											);
										})
										.splice(18, 4)}
								</div>

								<div id="bottom">
									<div id="bottom-1">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}
														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(22, 7)}
									</div>

									<div id="bottom-2">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}
														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(29, 7)}
									</div>
								</div>
							</div>

							<div id="layout-3">
								<div id="top">
									{getDocs
										.map((value, index) => {
											return (
												<span
													key={index}
													onClick={() =>
														new Date().getTime() < value?.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? setBooked(value)
																: setId(value._id)
															: setId(value._id)
													}
													className={
														new Date().getTime() < value?.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? "active"
																: ""
															: ""
													}
												>
													{new Date().getTime() < value.days_left
														? Math.abs(
																Math.floor(
																	value.days_left / (3600 * 24 * 1000)
																) -
																	Math.floor(
																		new Date().getTime() / (3600 * 24 * 1000)
																	)
														  ) !== 0
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  )
															: ""
														: ""}
													{/* {value.booking_seat} */}
												</span>
											);
										})
										.splice(36, 4)}
								</div>

								<div id="bottom">
									<div id="bottom-1">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}
														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(40, 7)}
									</div>

									<div id="bottom-2">
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}
														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(47, 7)}
									</div>
								</div>
							</div>

							<div id="layout-4">
								<div id="top">
									{getDocs
										.map((value, index) => {
											return (
												<span
													key={index}
													onClick={() =>
														new Date().getTime() < value?.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? setBooked(value)
																: setId(value._id)
															: setId(value._id)
													}
													className={
														new Date().getTime() < value?.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? "active"
																: ""
															: ""
													}
												>
													{new Date().getTime() < value.days_left
														? Math.abs(
																Math.floor(
																	value.days_left / (3600 * 24 * 1000)
																) -
																	Math.floor(
																		new Date().getTime() / (3600 * 24 * 1000)
																	)
														  ) !== 0
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  )
															: ""
														: ""}
													{/* {value.booking_seat} */}
												</span>
											);
										})
										.splice(54, 1)}
								</div>

								<div id="bottom">
									<div id="bottom-1">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}
														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(55, 5)}
									</div>

									<div id="bottom-2">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}
														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(60, 5)}
									</div>
								</div>
							</div>

							<div id="layout-5">
								<div id="top">
									<span className="visibility-none"></span>
								</div>

								<div id="bottom">
									<div id="bottom-1">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}
														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(65, 5)}
									</div>

									<div id="bottom-2">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}
														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(70, 5)}
									</div>
								</div>
							</div>

							<div id="layout-6">
								<div id="top">
									<span className="visibility-none"></span>
								</div>

								<div id="bottom">
									<div id="bottom-1">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}
														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(75, 5)}
									</div>

									<div id="bottom-2">
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										<span className="visibility-none"></span>
										{getDocs
											.map((value, index) => {
												return (
													<span
														key={index}
														onClick={() =>
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? setBooked(value)
																	: setId(value._id)
																: setId(value._id)
														}
														className={
															new Date().getTime() < value?.days_left
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  ) !== 0
																	? "active"
																	: ""
																: ""
														}
													>
														{new Date().getTime() < value.days_left
															? Math.abs(
																	Math.floor(
																		value.days_left / (3600 * 24 * 1000)
																	) -
																		Math.floor(
																			new Date().getTime() / (3600 * 24 * 1000)
																		)
															  ) !== 0
																? Math.abs(
																		Math.floor(
																			value.days_left / (3600 * 24 * 1000)
																		) -
																			Math.floor(
																				new Date().getTime() /
																					(3600 * 24 * 1000)
																			)
																  )
																: ""
															: ""}
														{/* {value.booking_seat} */}
													</span>
												);
											})
											.splice(80, 4)}
									</div>
								</div>
							</div>
						</div>
						<div
							className="close-btn-girls-2"
							onClick={() => {
								setSelectedLab("");
							}}
						>
							<i className="fa-solid fa-x"></i>
						</div>
					</div>
					{(getId || getBooked) && (
						<BookingPopUp
							getId={getId}
							setId={setId}
							frow_where={"ridhima-girls-lab-2"}
							setIsUpdate={setIsUpdate}
							getBooked={getBooked}
							setBooked={setBooked}
						/>
					)}
				</div>
			)}
		</>
	);
};

export default GirlsLab2;
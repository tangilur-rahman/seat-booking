// external components
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookingPopUp from "../../components/BookingPopUp/BookingPopUp";

// internal components
import "./View2.css";

const View1 = () => {
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
				<div className="container-fluid p-0 view-2-main-container">
					<div className="row m-0 view-2-container">
						<div className="col-xl-10 col-lg-11 col-11 p-0 view-2-wrapper">
							<div id="top-layout">
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
															Math.floor(value.days_left / (3600 * 24 * 1000)) -
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
											</span>
										);
									})
									.splice(0, 21)}
							</div>

							<div className="middle-layout-container">
								<div id="left-layout">
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
												</span>
											);
										})
										.splice(21, 12)}
								</div>

								<div id="middle-layout">
									<div id="middle-layout-1">
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
													</span>
												);
											})
											.splice(33, 7)}
									</div>
									<div id="middle-layout-2">
										<div id="middle-layout-2-1">
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
																				new Date().getTime() /
																					(3600 * 24 * 1000)
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
														</span>
													);
												})
												.splice(40, 7)}
										</div>

										<div id="middle-layout-2-2">
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
																				new Date().getTime() /
																					(3600 * 24 * 1000)
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
														</span>
													);
												})
												.splice(47, 7)}
										</div>
									</div>
									<div id="middle-layout-3">
										<div id="middle-layout-3-1">
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
																				new Date().getTime() /
																					(3600 * 24 * 1000)
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
														</span>
													);
												})
												.splice(54, 7)}
										</div>

										<div id="middle-layout-3-2">
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
																				new Date().getTime() /
																					(3600 * 24 * 1000)
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
														</span>
													);
												})
												.splice(61, 7)}
										</div>
									</div>
									<div id="middle-layout-4">
										<div id="middle-layout-4-1">
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
																				new Date().getTime() /
																					(3600 * 24 * 1000)
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
														</span>
													);
												})
												.splice(68, 7)}
										</div>

										<div id="middle-layout-4-2">
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
																				new Date().getTime() /
																					(3600 * 24 * 1000)
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
														</span>
													);
												})
												.splice(75, 7)}
										</div>
									</div>
									<div id="middle-layout-5">
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
													</span>
												);
											})
											.splice(82, 7)}
									</div>
								</div>
							</div>

							<div id="bottom-layout">
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
															Math.floor(value.days_left / (3600 * 24 * 1000)) -
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
											</span>
										);
									})
									.splice(89, 20)}
							</div>
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

export default View1;

// external components
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

// internal components
import "./BookingPopUp.css";

const BookingPopUp = ({
	getId,
	setId,
	frow_where,
	setIsUpdate,
	getBooked,
	setBooked
}) => {
	// for closing booking-popup when clicked outside start
	const myRef = useRef();

	const handleClickOutside = (e) => {
		if (!myRef.current?.contains(e.target)) {
			setId("");
			setBooked("");
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// for closing booking-popup when clicked outside end

	// for getting input-fields values
	const [getSName, setSName] = useState("");
	const [getSNum, setSNum] = useState("");

	const [getGName, setGName] = useState("");
	const [getGNum, setGNum] = useState("");

	const [getDay, setDay] = useState("");

	// submit handler start
	const submitHandler = async () => {
		if (getSName && getSNum && getGName && getGNum && getDay) {
			// addition days start
			function addDays(theDate, days) {
				return new Date(
					theDate.getTime() + days * 24 * 60 * 60 * 1000
				).getTime();
			}

			const newDate = addDays(new Date(), getDay);
			// addition days end

			try {
				const userObject = {
					getSName,
					getSNum,
					getGName,
					getGNum,
					newDate,
					getId,
					frow_where
				};

				const response = await fetch("/user/submit", {
					method: "POST",
					body: JSON.stringify(userObject),
					headers: { "Content-Type": "application/json" }
				});

				const result = await response.json();

				if (response.status === 200) {
					toast.success(result.message, {
						position: "top-right",
						theme: "colored",
						autoClose: 2000
					});

					setId("");
					setSName("");
					setSNum("");
					setGName("");
					setGNum("");
					setDay("");
					setIsUpdate(Date.now());
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
		} else {
			toast("Please fill-up all fields!", {
				position: "top-right",
				theme: "dark",
				autoClose: 3000
			});
		}
	};
	// submit handler end

	return (
		<>
			<div
				className="row m-0 booking-popup-container"
				data-aos="fade-down"
				data-aos-duration="700"
			>
				<div
					className="col-xl-6 col-lg-7 col-md-11 col-11 p-0 booking-popup-wrapper"
					ref={myRef}
				>
					<h3>Seat Booking</h3>
					<div className="input-fields-container">
						<div className="input-field">
							{getBooked ? (
								<div className="displaying">
									<h6>Student Name : </h6> <p>{getBooked.student_name}</p>
								</div>
							) : (
								<input
									placeholder="Student Name . . ."
									required
									onChange={(e) => setSName(e.target.value)}
								/>
							)}
						</div>

						<div className="input-field">
							{getBooked ? (
								<div className="displaying">
									<h6>Student Number : </h6> <p>{getBooked.student_number}</p>
								</div>
							) : (
								<input
									type="number"
									placeholder="Student Number . . ."
									required
									onChange={(e) => setSNum(e.target.value)}
								/>
							)}
						</div>

						<div className="input-field">
							{getBooked ? (
								<div className="displaying">
									<h6>Guardian Name : </h6> <p>{getBooked.guardian_name}</p>
								</div>
							) : (
								<input
									placeholder="Guardian Name . . ."
									required
									onChange={(e) => setGName(e.target.value)}
								/>
							)}
						</div>

						<div className="input-field">
							{getBooked ? (
								<div className="displaying">
									<h6>Guardian Number : </h6> <p>{getBooked.guardian_number}</p>
								</div>
							) : (
								<input
									type="number"
									placeholder="Guardian Number . . ."
									required
									onChange={(e) => setGNum(e.target.value)}
								/>
							)}
						</div>

						<div className="input-field">
							{getBooked ? (
								<div className="displaying">
									<h6>Days Left : </h6>
									<p>
										{Math.abs(
											Math.floor(getBooked.days_left / (3600 * 24 * 1000)) -
												Math.floor(new Date().getTime() / (3600 * 24 * 1000))
										)}
									</p>
								</div>
							) : (
								<input
									type="number"
									placeholder="Days left . . ."
									required
									onChange={(e) => setDay(e.target.value)}
								/>
							)}
						</div>

						{!getBooked && (
							<div className="upload">
								<p>Upload a image</p>
							</div>
						)}

						{!getBooked && (
							<div className="btn-container">
								<button
									type="button"
									className="btn btn-dark"
									onClick={() => {
										setId("");
										setBooked("");
									}}
								>
									Cancel
								</button>
								<button
									type="button"
									className="btn btn-success"
									onClick={submitHandler}
								>
									Submit
								</button>
							</div>
						)}
					</div>
					<div
						className="close-btn"
						onClick={() => {
							setBooked("");
							setId("");
						}}
					>
						<i className="fa-solid fa-x"></i>
					</div>
				</div>

				<input
					type="file"
					name="profile-img"
					id="change-img"
					accept="image/png, image/gif, image/jpeg, image/jpg"
					// onChange={""}
					style={{ display: "none" }}
				/>
			</div>
		</>
	);
};

export default BookingPopUp;

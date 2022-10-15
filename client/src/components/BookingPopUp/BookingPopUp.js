// external components
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

// internal components
import "./BookingPopUp.css";

const BookingPopUp = ({ getSeat, setSeat, frow_where }) => {
	// for closing booking-popup when clicked outside start
	const myRef = useRef();

	const handleClickOutside = (e) => {
		if (!myRef.current?.contains(e.target)) {
			setSeat("");
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
				return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
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
					getSeat,
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

					setSeat("");
					setSName("");
					setSNum("");
					setGName("");
					setGNum("");
					setDay("");
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
			<div className="row m-0 booking-popup-container" data-aos="fade-down">
				<div
					className="col-xl-6 col-lg-7 col-md-11 col-11 p-0 booking-popup-wrapper"
					ref={myRef}
				>
					<h3>Seat Booking</h3>
					<div className="input-fields-container">
						<div className="input-field">
							<input
								placeholder="Student Name . . ."
								required
								onChange={(e) => setSName(e.target.value)}
							/>
						</div>

						<div className="input-field">
							<input
								type="number"
								placeholder="Student Number . . ."
								required
								onChange={(e) => setSNum(e.target.value)}
							/>
						</div>

						<div className="input-field">
							<input
								placeholder="Guardian Name . . ."
								required
								onChange={(e) => setGName(e.target.value)}
							/>
						</div>

						<div className="input-field">
							<input
								type="number"
								placeholder="Guardian Number . . ."
								required
								onChange={(e) => setGNum(e.target.value)}
							/>
						</div>

						<div className="input-field">
							<input
								type="number"
								placeholder="Days left . . ."
								required
								onChange={(e) => setDay(e.target.value)}
							/>
						</div>

						<div className="upload">
							<p>Upload a image</p>
						</div>

						<div className="btn-container">
							<button
								type="button"
								className="btn btn-dark"
								onClick={() => setSeat("")}
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
					</div>
				</div>

				<input
					type="file"
					name="profile-img"
					id="change-img"
					accept="image/png, image/gif, image/jpeg, image/jpg"
					onChange={""}
					style={{ display: "none" }}
				/>
			</div>
		</>
	);
};

export default BookingPopUp;

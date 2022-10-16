// external components
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookingPopUp from "../../components/BookingPopUp/BookingPopUp";

// internal components
import "./BoysLab1.css";

const BoysLab1 = ({ setSelectedLab }) => {
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
				const response = await fetch("/user/allDocs?lab=ridhima-boys-lab-1");

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
					className="container-fluid p-0 boys-1-main-container"
					data-aos="fade-down"
					data-aos-duration="700"
				>
					<div className="row m-0 boys-1-container">
						<div className="col-12 p-0 boys-1-wrapper">
							<div id="layout-1">layout-1</div>
							<div id="layout-2">layout-2</div>
							<div id="layout-3">layout-3</div>
							<div id="layout-4">layout-4</div>
						</div>
						<div
							className="close-btn-boys-1"
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
							frow_where={"ridhima-boys-lab-1"}
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

export default BoysLab1;

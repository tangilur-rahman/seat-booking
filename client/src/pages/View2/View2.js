// external components

// internal components
import "./View2.css";

const View2 = ({ setSection }) => {
	return (
		<div className="container-fluid p-0 view-2-main-container">
			<div className="row m-0 view-2-container">
				<div className="col-12 p-0 view-2-wrapper">
					<div
						className="close-btn-view-1"
						onClick={() => {
							setSection("");
						}}
					>
						<i className="fa-solid fa-x"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default View2;

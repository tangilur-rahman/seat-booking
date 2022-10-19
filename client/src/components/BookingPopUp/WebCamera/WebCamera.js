// external components
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

// internal components
import "./WebCamera.css";

const WebCamera = ({ setWebCamT, setPreview, setImage }) => {
	const videoConstraints = {
		width: 600,
		facingMode: "environment"
	};

	const webcamRef = useRef(null);
	const [getSc, setSc] = useState(null);

	const capturePhoto = useCallback(async () => {
		const imageSrc = webcamRef.current.getScreenshot();
		setSc(imageSrc);
	}, [webcamRef]);

	return (
		<>
			<div className="web-cam-container">
				<div className="web-cam-wrapper">
					<div className="view-container">
						{getSc ? (
							<div>
								<img src={getSc} alt="Screenshot" />
							</div>
						) : (
							<Webcam
								ref={webcamRef}
								audio={false}
								screenshotFormat="image/png"
								videoConstraints={videoConstraints}
								mirrored={true}
								screenshotQuality={1}
							/>
						)}
					</div>

					<div id="btn-container">
						{getSc ? (
							<div id="get-sc">
								<button onClick={() => setSc(null)} className="btn btn-dark">
									<span className="hover-link">Retake</span>
								</button>
								<button
									onClick={() => {
										setImage(getSc);
										setPreview(getSc);
										setWebCamT(false);
									}}
									className="btn btn-success"
								>
									<span className="hover-link">Accept</span>
								</button>
							</div>
						) : (
							<div id="want-sc">
								<button
									className="btn btn-dark"
									onClick={() => setWebCamT(false)}
								>
									<span className="hover-link">Cancel</span>
								</button>
								<button className="btn btn-primary" onClick={capturePhoto}>
									<span className="hover-link">Capture</span>
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default WebCamera;

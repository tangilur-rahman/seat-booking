// external modules
const user = require("express").Router();

const userModel = require("./../model/userModel");

user.get("/allDocs", async (req, res) => {
	try {
		const documents = await userModel.find({});

		if (documents) {
			res.status(200).json(documents);
		} else {
			res.status(400).json({ error: "Maintaining mode, Try again latter!" });
		}
	} catch (error) {
		res.status(500).json({ error: "Maintaining mode, Try again latter!" });
	}
});

user.post("/submit", async (req, res) => {
	try {
		const {
			getSName,
			getSNum,
			getGName,
			getGNum,
			newDate,
			getSeat,
			frow_where
		} = req.body;

		await userModel.updateOne(
			{ getSeat: booking_seat },
			{
				$set: {
					student_name: getSName,
					student_number: getSNum,
					guardian_name: getGName,
					guardian_number: getGNum,
					days_left: newDate,
					booking_seat: getSeat,
					frow_where
				}
			}
		);

		res.status(200).json({ message: "Submit successfully." });
	} catch (error) {
		res.status(500).json({ error: "Maintaining mode, Try again latter!" });
	}
});

module.exports = user;

// internal modules

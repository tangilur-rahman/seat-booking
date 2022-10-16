// external modules
const user = require("express").Router();

// internal modules
const userModel = require("./../model/userModel");

user.get("/allDocs", async (req, res) => {
	try {
		const documents = await userModel.find({ frow_where: req.query.lab });

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
		const { getSName, getSNum, getGName, getGNum, newDate, getId, frow_where } =
			req.body;

		await userModel.updateOne(
			{ _id: getId },
			{
				$set: {
					student_name: getSName,
					student_number: getSNum,
					guardian_name: getGName,
					guardian_number: getGNum,
					days_left: newDate,
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

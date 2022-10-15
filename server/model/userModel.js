const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		student_name: {
			type: String,
			trim: true
		},

		student_number: {
			type: Number,
			trim: true
		},

		guardian_name: {
			type: String,
			trim: true
		},

		guardian_number: {
			type: String,
			trim: true
		},

		days_left: {
			type: Date,
			trim: true
		},

		booking_seat: {
			type: Number,
			trim: true
		},

		frow_where: { type: String, trim: true }
	},
	{ timestamps: true }
);

const userModel = mongoose.model("seat", schema);

module.exports = userModel;

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { sql } = require("./config/pgDb");

const 

const PORT = process.env.PORT;

const app = express();

// app.get("/", async (req, res) => {
// 	try {
// 		const result = await sql`select * from employee limit 5`;
// 		console.log("Answer", result);
// 		res.status(200).send("i hate maisie");
// 	} catch (error) {
// 		res.status(400).send("There was an error, Try again.");
// 	}
// });

app.use(express.json());
app.use("api/user", userRoute);

app.listen(PORT, () => {
	console.log(`Server started at ${PORT}.`);
});

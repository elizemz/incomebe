const {sql}= require("../config/pgDb");

const signup = (req, res) => {
	console.log("body", req.body);
  await sql`insert into users(email, name, password) values(${email}, ${name}, ${password})`;
};

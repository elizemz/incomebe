const postgres = require("postgres");
require("dotenv").config();

export const sql = postgres({
	host: PGHOST,
	database: PGDATABASE,
	username: PGUSER,
	password: PGPASSWORD,
	port: 5432,
	ssl: "require",
	connection: {
		options: `project=${ENDPOINT_ID}`,
	},
});

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

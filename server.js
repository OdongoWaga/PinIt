const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
	.connect(process.env.MONGO_URI, { useNewUrlParser: true })
	.then(() => console.log("DB connected"))
	.catch((err) => console.log(err));

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {
		let authToken = null;

		try {
			authToken = req.headers.authorization;

			if (authToken) {
				//Find or create User
			}
		} catch (err) {
			console.error(`Unable to authenticate user with token ${authToken}`);
		}
	}
});

server.listen().then(({ url }) => {
	console.log(`Server listening on ${url}`);
});

const user = {
	_id: "1",
	name: "Reed",
	email: "reedbarger@yahoo.com",
	picture: "https://google.com"
};

module.exports = {
	Query: {
		me: () => user
	}
};

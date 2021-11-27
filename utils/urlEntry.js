const ent = "https://zenzapi.xyz/api/";
require("dotenv").config();

const urlMaker = (type, usingQuery, q) => {
	if (usingQuery) {
		return `${ent}/${type}?apikey=${process.env.ZENZKEY}&query=${q}`;
	}

	return `${ent}/${type}?apikey=${process.env.ZENZKEY}`;
};

module.exports = urlMaker;

const ent = "https://zenzapi.xyz/api/";
require("dotenv").config();

const randomIntFromInterval = (min, max) => {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const urlMaker = (type, usingQuery, q) => {
	// Get Random api key
	const key = JSON.parse(process.env.ZENZARR);
	const int = randomIntFromInterval(0, key.length - 1);

	if (usingQuery) {
		return `${ent}/${type}?apikey=${key[int]}&query=${q}`;
	}

	return `${ent}/${type}?apikey=${key[int]}`;
};

module.exports = urlMaker;

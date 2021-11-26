const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

const _ = require("../handler/main");

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`);
	client.user.setActivity("bg bantu", {
		type: "LISTENING"
	});
});

client.on("message", (msg) => {
	if (msg.content.includes("bg ")) {
		const mainMsg = msg.content.split(" ");
		const comm = mainMsg[1];
		const params = msg.content.split(`bg ${comm}`)[1].trim();

		switch (comm) {
			case "bantu":
				_.handleBantu(msg);
				break;
		}

		console.log(mainMsg, comm, params);
	}
});

client.login(process.env.KEY);

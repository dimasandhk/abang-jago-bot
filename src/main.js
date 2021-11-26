const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

// Command Handler
const _ = require("../handler/main");

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`);
	client.user.setActivity("bg bantu", {
		type: "LISTENING"
	});
});

client.on("message", (msg) => {
	if (msg.content.includes("bg ")) {
		const mainMsg = msg.content.split(" "); // Splitted msg content
		const comm = mainMsg[1]; // Command bg ...
		const params = msg.content.split(`bg ${comm}`)[1].trim(); // Params bg kbbi ....

		switch (comm) {
			case "bantu":
				_.handleBantu(msg);
				break;
			case "kbbi":
				if (!params) return msg.reply("Kurang Parameter Bg");
				_.handleUtilitas.kbbi(params, msg);
				break;
			case "covidworld":
				break;
		}
	}
});

client.login(process.env.KEY);

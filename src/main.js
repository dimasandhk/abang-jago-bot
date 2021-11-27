const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

// Command Handler
const _ = require("../handler/main");
const avComm = require("../data/data.json");

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

		// If command is async add 'loading' info
		if (avComm.find((name) => name == comm)) {
			msg.channel.send("sabar");
		}

		switch (comm) {
			case "bantu":
				_.handleBantu(msg);
				break;
			case "kbbi":
				if (!params) return msg.reply("Kurang Parameter Bg");
				_.handleUtilitas.kbbi(params, msg);
				break;
			case "covidworld":
				_.handleUtilitas.covidworld(msg);
				break;
			case "pantun":
				_.handleEnter.pantun(msg);
				break;
			case "faktaunik":
				_.handleEnter.faktaunik(msg);
				break;
			case "meme":
				_.handleEnter.meme(msg);
				break;
		}
	}
	if (!msg.author.bot) {
		console.log(msg.author.id);
	}
});

client.login(process.env.KEY);

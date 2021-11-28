const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

// Command Handler
const commList = require("../data/fullCommandList");
const avComm = require("../data/asyncCommands.json");

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

		commList.find((command) => {
			if (command.name == comm) {
				if (command.params) {
					if (!params) return msg.reply("Kurang Parameter bg");
					return command.exec(params, msg);
				}

				command.exec(msg);
			}
		});
	}
});

client.login(process.env.KEY);

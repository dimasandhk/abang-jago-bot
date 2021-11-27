const { MessageEmbed } = require("discord.js");
const axios = require("axios").default;
const url = require("../utils/urlEntry");

const embed = new MessageEmbed({
	color: "#23e2cf"
});

class handleEnter {
	static async pantun(msg) {
		const res = await axios.get(url("pantun", false));
		const data = await res.data.result;

		msg.channel.bulkDelete(1);
		msg.channel.send(embed.setDescription(data));
	}
}

module.exports = handleEnter;

const { MessageEmbed, MessageAttachment } = require("discord.js");
const axios = require("axios").default;
const Canvas = require("canvas");

const url = require("../utils/urlEntry");
const embed = new MessageEmbed({
	color: "#23e2cf"
});

const handleBasicEntert = async (type, qConfig, msg) => {
	const res = await axios.get(url(type, qConfig.bool, qConfig.query));
	const data = await res.data.result;

	msg.channel.bulkDelete(1);
	msg.channel.send(embed.setDescription(data));
};

class handleEntert {
	static async pantun(msg) {
		handleBasicEntert("pantun", { bool: false }, msg);
	}
	static async faktaunik(msg) {
		handleBasicEntert("faktaunik", { bool: false }, msg);
	}
	static async meme(msg) {
		const canvas = Canvas.createCanvas(850, 800);
		const context = canvas.getContext("2d");

		const background = await Canvas.loadImage(url("random/memeindo", false));

		// Masukkin gambar ke canvas
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		// Buffer to png
		const attachment = new MessageAttachment(canvas.toBuffer(), "meme.png");

		msg.channel.bulkDelete(1);
		msg.reply({ files: [attachment] });
	}
}

module.exports = handleEntert;

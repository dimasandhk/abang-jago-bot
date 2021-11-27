const { MessageEmbed, MessageAttachment } = require("discord.js");
const axios = require("axios").default;
const Canvas = require("canvas");

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
	static async faktaunik(msg) {
		const res = await axios.get(url("faktaunik", false));
		const data = await res.data.result;

		msg.channel.bulkDelete(1);
		msg.channel.send(embed.setDescription(data));
	}
	static async meme(msg) {
		const canvas = Canvas.createCanvas(700, 700);
		const context = canvas.getContext("2d");

		const background = await Canvas.loadImage(url("random/memeindo", false));

		// This uses the canvas dimensions to stretch the image onto the entire canvas
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		// Use the helpful Attachment class structure to process the file for you
		const attachment = new MessageAttachment(canvas.toBuffer(), "meme.png");

		msg.channel.bulkDelete(1);
		msg.reply({ files: [attachment] });
	}
}

module.exports = handleEnter;

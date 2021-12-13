const axios = require("axios").default;
const { MessageEmbed, MessageAttachment } = require("discord.js");
const url = require("../utils/urlEntry");

const countryid = require("../utils/countryId");

const Canvas = require("canvas");

const makeEmbed = (title) => {
	return new MessageEmbed({
		color: "#23e2cf",
		title
	});
};

const getData = async (type, bool, q) => {
	const res = await axios.get(url(type, bool, q));
	return await res.data.result;
};

class handleUtilitas {
	static async kbbi(query, msg) {
		const data = await getData("kbbi", true, query);

		const embed = makeEmbed(data.title.toUpperCase());

		embed.setDescription(`**${data.title}** ${data.arti}`);
		embed.setFooter("*Powered by Kementerian Pendidikan dan Kebudayaan*");
		embed.setThumbnail("https://www.kemdikbud.go.id/main/files/large/33ddc3bc2640689");

		msg.channel.bulkDelete(1);
		msg.channel.send(embed);
	}
	static async wiki(query, msg) {
		const data = await getData("wikipedia", true, query);
		const embed = makeEmbed(data.judul);

		msg.channel.bulkDelete(1);
		if (data.message) {
			return msg.reply(`**${query}** tidak ditemukan di wiki`);
		}

		embed.setDescription(data.isi);
		msg.channel.send(embed);
	}
	static async infocovid(msg) {
		const embed = makeEmbed("Kasus Covid Dunia");
		const data = await getData("covidworld", false);

		embed.setFooter(`Last Update ${data.lastUpdate}`);
		embed.addFields({
			name: ":bar_chart: Statistic",
			value: `Total: ${data.totalCases}
			Sembuh: ${data.recovered}
			Kematian: ${data.deaths}
			Kasus Aktif: ${data.activeCases}
			`
		});

		msg.channel.bulkDelete(1);
		msg.channel.send(embed);
	}
	static async nulis(query, msg) {
		const canvas = Canvas.createCanvas(910, 1280);
		const context = canvas.getContext("2d");

		console.log(url("image/nulis", true, query));
		const background = await Canvas.loadImage(url("image/nulis", true, query, "text"));

		// Masukkin gambar ke canvas
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		// Buffer to png
		const attachment = new MessageAttachment(canvas.toBuffer(), "nulis.png");
		msg.channel.bulkDelete(1);
		msg.reply({ files: [attachment] });
	}
	static async translate(query, msg) {
		const data = await getData(`translate/${query[0]}`, true, query[1]);

		msg.channel.bulkDelete(1);
		if (data.message) {
			msg.reply("Id Negaranya ga ditemuin bg");
			return msg.channel.send(countryid);
		}

		msg.channel.send(data);
	}
}

module.exports = handleUtilitas;

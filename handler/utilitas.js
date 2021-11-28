const axios = require("axios").default;
const { MessageEmbed } = require("discord.js");
const url = require("../utils/urlEntry");

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

		embed.setDescription(data.isi);
		msg.channel.bulkDelete(1);
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
}

module.exports = handleUtilitas;

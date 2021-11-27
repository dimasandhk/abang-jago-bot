const axios = require("axios").default;
const { MessageEmbed } = require("discord.js");
const url = require("../utils/urlEntry");

const embed = new MessageEmbed({
	color: "#23e2cf"
});

class handleUtilitas {
	static async kbbi(query, msg) {
		const res = await axios.get(url("kbbi", true, query));
		const data = await res.data.result;

		embed.setTitle(data.title.toUpperCase()).setDescription(`**${data.title}** ${data.arti}`);
		embed.setFooter("*Powered by Kementerian Pendidikan dan Kebudayaan*");
		embed.setThumbnail("https://www.kemdikbud.go.id/main/files/large/33ddc3bc2640689");

		msg.channel.bulkDelete(1);
		msg.channel.send(embed);
	}

	static async covidworld(msg) {
		const res = await axios.get(url("covidworld", false));
		const data = await res.data.result;

		embed.setTitle("Kasus Covid Dunia").setFooter(`Last Update ${data.lastUpdate}`);
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

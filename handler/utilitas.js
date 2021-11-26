const axios = require("axios").default;
const { MessageEmbed } = require("discord.js");

const ent = "https://zenzapi.xyz/api/";
require("dotenv").config();

const embed = new MessageEmbed({
	color: "#23e2cf"
});

class handleUtilitas {
	static async kbbi(query, msg) {
		msg.channel.send("sabar");
		const res = await axios.get(`${ent}/kbbi?query=${query}&apikey=${process.env.ZENZKEY}`);
		const data = await res.data.result;

		embed.setTitle(data.title.toUpperCase()).setDescription(`**${data.title}** ${data.arti}`);
		embed.setFooter("*Powered by Kementerian Pendidikan dan Kebudayaan*");
		embed.setThumbnail("https://www.kemdikbud.go.id/main/files/large/33ddc3bc2640689");

		msg.channel.bulkDelete(1);
		msg.channel.send(embed);
	}
}

module.exports = handleUtilitas;

const { MessageEmbed } = require("discord.js");

const listBantu = [
	{
		name: "Minigame",
		list: ["tebakgambar", "asahotak", "siapaku", "susunkata", "tekateki"]
	},
	{
		name: "Utilitas",
		list: ["kbbi", "wikipedia", "translate", "covidworld"]
	}
];

const url =
	"https://cdn.discordapp.com/app-icons/911923037136363550/dfb2cbed846cb792d4cf2460eedcb9f0.png?size=512";

const handleBantu = (msg) => {
	const embed = new MessageEmbed({
		title: "Bang Jago Command List",
		color: "#23e2cf",
		description: "`bg <namaCommand>` untuk menggunakan command",
		footer: "`ksana.in/reportjago` untuk report bug "
	})
		.setTimestamp()
		.setThumbnail(url);

	listBantu.forEach(({ name, list }) => {
		let strList = "";
		list.forEach((name) => (strList += `\`${name}\` `));
		embed.addFields({
			name: `***=>*** ${name}`,
			value: strList
		});
	});

	msg.channel.send(embed);
};

module.exports = handleBantu;

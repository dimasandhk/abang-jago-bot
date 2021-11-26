const { MessageEmbed } = require("discord.js");

const listBantu = [
	{
		name: "Minigame",
		list: ["tebakgambar", "asahotak", "siapaku", "susunkata", "tekateki"]
	}
];

const handleBantu = (msg) => {
	const embed = new MessageEmbed({
		title: "Bang Jago Command List",
		color: "#23e2cf",
		description:
			"`bg <namaCommand>` untuk menggunakan command\n`ksana.in/reportjago` untuk report bug"
	}).setTimestamp();

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

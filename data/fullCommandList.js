const _ = require("../handler/main");

module.exports = [
	{
		name: "bantu",
		type: "standalone",
		async: false,
		params: false,
		exec(msg) {
			_.handleBantu(msg);
		}
	},
	{
		name: "kbbi",
		type: "utility",
		async: true,
		params: true,
		exec(params, msg) {
			if (!params) return msg.reply("Kurang Parameter bg");
			_.handleUtilitas.kbbi(params, msg);
		}
	},
	{
		name: "infocovid",
		type: "utility",
		async: true,
		params: false,
		exec(msg) {
			_.handleUtilitas.infocovid(msg);
		}
	},
	{
		name: "pantun",
		type: "entertainment",
		async: true,
		params: false,
		exec(msg) {
			_.handleEntert.pantun(msg);
		}
	},
	{
		name: "faktaunik",
		type: "entertainment",
		async: true,
		params: false,
		exec(msg) {
			_.handleEntert.faktaunik(msg);
		}
	},
	{
		name: "meme",
		type: "entertainment",
		async: true,
		params: false,
		exec(msg) {
			_.handleEntert.meme(msg);
		}
	},
	{
		name: "wiki",
		type: "utility",
		async: true,
		params: true,
		exec(params, msg) {
			if (!params) return msg.reply("Kurang Parameter bg");
			_.handleUtilitas.wiki(params, msg);
		}
	}
];

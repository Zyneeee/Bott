const { Colors } = require('discord.js');

const config = {
	ownerID: ['1107744228773220473'],
	token: 'MTIwMzI5Njc1MzkzNjM2NzY5Ng.GsE-Oo.YtgVF0hgRuzIT62hoSoknYRQ_RpNAbxpj0lIts',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://genius.com/developers
		genius: 'Dza2bzs2Z_9apiZEcX65MBV0gonNsTNv3CwWAoOkChvA5ayhpnnm5ObhpuADMpOL',
		// https://api.amethyste.moe/
		amethyste: '',
		// https://api.egglord.dev/settings
		masterToken: 'LTFQVyQI0vBqc7sw5r5Q2vLsc5AHQWT4FxbpcYSehHjTowEHZ26mhysiOFY0KyrJuNpkTfOAvbm0X5nFnvM2yM',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/',
		// Your support's server ID
		GuildID: '1207249204943261717',
		// This for using the suggestion command on your server
		ModRole: '1207265500090863656',
		// What channel to post the suggestions
		SuggestionChannel: '1208335559186194432',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '1208335559186194432',
		// Where rate limits will be sent to, for investigation
		rateLimitChannelID: '1208335559186194432',
	},
	API: {
		port: 3000,
		secure: true,
		token: '123456789',
	},
	LavalinkNodes: [
		{ host: 'localhost', port: 5000, password: 'youshallnotpass' },
	],
	// URL to mongodb
	MongoDBURl: 'mongodb+srv://Zxyy:3308@cluster0.v3dmc2z.mongodb.net/?retryWrites=true&w=majority',
	// embed colour
	embedColor: Colors.Default,
	// This will spam your console if you enable this but will help with bug fixing
	debug: true,
};

module.exports = config;

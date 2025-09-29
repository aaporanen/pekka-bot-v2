require('dotenv/config');
const { REST, Routes } = require('discord.js');
const iliveagain = require("./commands/iliveagain");
const smokeweedeveryday = require("./commands/smokeweedeveryday");
const dontsmokeweedeveryday = require("./commands/dontsmokeweedeveryday");
const tenminuteson = require('./commands/tenminuteson');
const tenminutesoff = require('./commands/tenminutesoff');

const commands = [
	iliveagain.data,
	smokeweedeveryday.data,
	dontsmokeweedeveryday.data,
];

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(process.env.APP_ID),
			{ body: [iliveagain.data, smokeweedeveryday.data, dontsmokeweedeveryday.data, tenminuteson.data, tenminutesoff.data] },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
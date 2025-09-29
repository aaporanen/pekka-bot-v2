require('dotenv/config');
const token = process.env.DISCORD_TOKEN;

const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');

const schedule = require("node-schedule");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const smokeWeedChannelIds = require("./420channels");
const tenMinutesChannelIds = require("./10minuteschannels");

const iliveagain = require("./commands/iliveagain");
const smokeweedeveryday = require("./commands/smokeweedeveryday");
const dontsmokeweedeveryday = require("./commands/dontsmokeweedeveryday");
const tenminuteson = require("./commands/tenminuteson");
const tenminutesoff = require("./commands/tenminutesoff");

client.commands = new Collection();
client.commands.set(iliveagain.data.name, iliveagain);
client.commands.set(smokeweedeveryday.data.name, smokeweedeveryday);
client.commands.set(dontsmokeweedeveryday.data.name, dontsmokeweedeveryday);
client.commands.set(tenminuteson.data.name, tenminuteson);
client.commands.set(tenminutesoff.data.name, tenminutesoff);


client.once(Events.ClientReady, readyClient => {
    console.log(`Ready. Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`Unknown command ${interaction.commandName}.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'Jotain meni pielee...', flags: MessageFlags.Ephemeral });
		} else {
			await interaction.reply({ content: 'Jotain meni pielee...', flags: MessageFlags.Ephemeral });
		}
	}
});

const rule420 = new schedule.RecurrenceRule();
rule420.hour = 16;
rule420.minute = 20;
rule420.tz = 'Europe/Helsinki';

const send420 = schedule.scheduleJob(rule420, async () => {
    smokeWeedChannelIds.forEach(id => {
        const channel = client.channels.cache.get(id);
        channel.send("420");
    });
});

const rule10minleft = new schedule.RecurrenceRule();
rule10minleft.hour = 17;
rule10minleft.minute = 6;
rule10minleft.tz = 'Europe/Helsinki';

const send10minleft = schedule.scheduleJob(rule10minleft, async () => {
    tenMinutesChannelIds.forEach(id => {
        const channel = client.channels.cache.get(id);
        channel.send("Enää kymmenen minsaa aikaa ostaa keppanaa");
    });
});

client.login(token);

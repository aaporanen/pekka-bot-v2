require('dotenv/config');
const token = process.env.DISCORD_TOKEN;

const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');

const schedule = require("node-schedule");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const smokeWeedChannelIds = require("./420channels");
const tenMinutesChannelIds = require("./10minuteschannels");
const tgifChannels = require("./tgifchannels");
const holidayChannels = require("./holidaychannels");

const iliveagain = require("./commands/iliveagain");
const smokeweedeveryday = require("./commands/smokeweedeveryday");
const dontsmokeweedeveryday = require("./commands/dontsmokeweedeveryday");
const tenminuteson = require("./commands/tenminuteson");
const tenminutesoff = require("./commands/tenminutesoff");
const uptime = require("./commands/uptime");

client.commands = new Collection();
client.commands.set(iliveagain.data.name, iliveagain);
client.commands.set(smokeweedeveryday.data.name, smokeweedeveryday);
client.commands.set(dontsmokeweedeveryday.data.name, dontsmokeweedeveryday);
client.commands.set(tenminuteson.data.name, tenminuteson);
client.commands.set(tenminutesoff.data.name, tenminutesoff);
client.commands.set(uptime.data.name, uptime);


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
rule10minleft.hour = 20;
rule10minleft.minute = 50;
rule10minleft.tz = 'Europe/Helsinki';

const send10minleft = schedule.scheduleJob(rule10minleft, async () => {
    tenMinutesChannelIds.forEach(id => {
        const channel = client.channels.cache.get(id);
        channel.send("Enää kymmenen minsaa aikaa ostaa keppanaa.");
    });
});

const ruleTGIF = new schedule.RecurrenceRule();
ruleTGIF.dayOfWeek = 5;
ruleTGIF.hour = 15;
ruleTGIF.minute = 0;
ruleTGIF.tz = 'Europe/Helsinki';

const sendTGIF = schedule.scheduleJob(ruleTGIF, async () => {
    tgifChannels.forEach(id => {
        const channel = client.channels.cache.get(id);
        channel.send("Onneksi on perjantai.");
    });
});

const ruleIndependence = new schedule.RecurrenceRule();
independenceRule.month = 11;
independenceRule.date = 6;
independenceRule.hour = 12;
independenceRule.minute = 0;
independenceRule.tz = 'Europe/Helsinki';

const sendIndependence = schedule.scheduleJob(ruleIndependence, async () => {
    holidayChannels.forEach(id => {
        const channel = client.channels.cache.get(id);
        channel.send("Oi Suomi, katso, sinun päiväs koittaa. Voitontervehdys!");
    });
});

const ruleChristmas = new schedule.RecurrenceRule();
ruleChristmas.month = 11;
ruleChristmas.date = 24;
ruleChristmas.hour = 12;
ruleChristmas.minute = 0;
ruleChristmas.tz = 'Europe/Helsinki';

const sendChristmas = schedule.scheduleJob(ruleChristmas, async () => {
    holidayChannels.forEach(id => {
        const channel = client.channels.cache.get(id);
        channel.send("Hyvää joulua.");
    });
});

client.login(token);

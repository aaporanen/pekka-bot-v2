const { SlashCommandBuilder } = require('discord.js');
const smokeWeedChannels = require("../420channels");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("smokeweedeveryday")
    .setDescription("polta ruohoa joka päivä"),
    async execute(interaction) {
        const channelId = interaction.channelId;
        const index = smokeWeedChannels.indexOf(channelId)
        if (index === -1) {
            smokeWeedChannels.push(channelId);
            await interaction.reply("420 aktivoitu");
        }
        else {
            await interaction.reply("420 on jo aktivoitu");
        }       
    }
}
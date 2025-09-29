const { SlashCommandBuilder } = require('discord.js');
const smokeWeedChannels = require("../420channels");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("dontsmokeweedeveryday")
    .setDescription("älä polta ruohoa joka päivä"),
    async execute(interaction) {
        const channelId = interaction.channelId;
        const index = smokeWeedChannels.indexOf(channelId)
        if (index > -1) {
            smokeWeedChannels.splice(index, 1);
            await interaction.reply("420 deaktivoitu");
        }       
        else {
            await interaction.reply("420 ei ollut aktivoitu");
        }
    }
}
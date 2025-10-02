const { SlashCommandBuilder } = require('discord.js');
const fridayRaffleChannels = require("../fridayrafflechannels");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("perjantaigambinapois")
    .setDescription("perjantaigambinan arvonta pois päältä"),
    async execute(interaction) {
        const channelId = interaction.channelId;
        const index = fridayRaffleChannels.indexOf(channelId)
        if (index > -1) {
            fridayRaffleChannels.splice(index, 1);
            await interaction.reply("perjantaigambinan arvonta deaktivoitu");
        }       
        else {
            await interaction.reply("perjantaigambinan arvonta ei ollut aktivoitu");
        }
    }
}
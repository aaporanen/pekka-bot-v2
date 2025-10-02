const { SlashCommandBuilder } = require('discord.js');
const fridayRaffleChannels = require("../fridayrafflechannels");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("perjantaigambina")
    .setDescription("perjantaigambinan arvonta"),
    async execute(interaction) {
        const channelId = interaction.channelId;
        const index = fridayRaffleChannels.indexOf(channelId)
        if (index === -1) {
            fridayRaffleChannels.push(channelId);
            await interaction.reply("perjantaigambinan arvonta päällä");
        }
        else {
            await interaction.reply("perjantaigambinan arvonta on jo päällä");
        }       
    }
}
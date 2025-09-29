const { SlashCommandBuilder } = require('discord.js');
const tenMinutesLeftChannels = require("../10minuteschannels");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kymmenenminsaapois")
    .setDescription("enää 10 minsaa aikaa ostaa keppanaa pois päältä"),
    async execute(interaction) {
        const channelId = interaction.channelId;
        const index = tenMinutesLeftChannels.indexOf(channelId)
        if (index > -1) {
            tenMinutesLeftChannels.splice(index, 1);
            await interaction.reply("enää 10 minsaa aikaa deaktivoitu");
        }       
        else {
            await interaction.reply("enää 10 minsaa aikaa ei ollut aktivoitu");
        }
    }
}
const { SlashCommandBuilder } = require('discord.js');
const tenMinutesLeftChannels = require("../10minuteschannels");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kymmenenminsaa")
    .setDescription("enää kymmenen minsaa aikaa ostaa keppanaa"),
    async execute(interaction) {
        const channelId = interaction.channelId;
        const index = tenMinutesLeftChannels.indexOf(channelId)
        if (index === -1) {
            tenMinutesLeftChannels.push(channelId);
            await interaction.reply("enää 10 minsaa aikaa aktivoitu");
        }
        else {
            await interaction.reply("enää 10 minsaa aikaa on jo aktivoitu");
        }       
    }
}
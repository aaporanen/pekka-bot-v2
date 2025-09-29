const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("johtaja")
    .setDescription("johtaja"),
    async execute(interaction) {
        await interaction.reply("I live... again.");
    }
}
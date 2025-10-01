const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pekkahereillä")
    .setDescription("kauanko pekka on ollut hereillä"),
    async execute(interaction) {
        const uptime = interaction.client.uptime;
        // get total seconds
        let delta = uptime / 1000;

        // calculate (and subtract) whole days
        const days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        const minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        
        await interaction.reply(`Olen ollut hereillä ${days} päivää, ${hours} tuntia ja ${minutes} minuuttia.`);
    }
}
const { SlashCommandBuilder } = require('discord.js');
const dayjs = require('dayjs');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pekkahereillä")
    .setDescription("kauanko pekka on ollut hereillä"),
    async execute(interaction) {
        const lastLogin = dayjs(interaction.client.readyAt);
        const now = dayjs();
        const days = now.diff(lastLogin, "day");
        const hours = now.diff(lastLogin, "hour");
        const minutes = now.diff(lastLogin, "minute");
        await interaction.reply(`Olen ollut hereillä ${days} päivää, ${hours} tuntia ja ${minutes} minuuttia.`);
    }
}
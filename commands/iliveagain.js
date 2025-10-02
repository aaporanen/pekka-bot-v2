const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder  } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("johtaja")
    .setDescription("johtaja"),
    async execute(interaction) {
        const file = new AttachmentBuilder('./resources/2841611.jpg');
        const embed = new EmbedBuilder().setTitle("Tervehdys.").setImage('attachment://2841611.jpg')
        await interaction.reply({ embeds: [embed], files: [file] });
    }
}
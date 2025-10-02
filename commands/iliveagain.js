const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder  } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("johtaja")
    .setDescription("johtaja"),
    async execute(interaction) {
        const file = new AttachmentBuilder(`./images/pekka8.png`);
        const embed = new EmbedBuilder().setTitle("Tervehdys.").setImage('attachment://pekka8.png')
        await interaction.reply({ embeds: [embed], files: [file] });
    }
}
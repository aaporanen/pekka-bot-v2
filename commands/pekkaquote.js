const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder  } = require('discord.js');
const quotes = require('../quotes');

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const getRandomImage = () => {
    return `pekka${getRandomInteger(1, 9)}.png`
}

const getRandomQuote = () => {
    const quote = quotes[getRandomInteger(0, quotes.length)];
    return quote;
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pekkaquote")
    .setDescription("pekan quote"),
    async execute(interaction) {
        const image = getRandomImage();
        const file = new AttachmentBuilder(`./images/${image}`);
        const embed = new EmbedBuilder().setDescription(getRandomQuote()).setImage(`attachment://${image}`)
        await interaction.reply({ embeds: [embed], files: [file] });
    }
}
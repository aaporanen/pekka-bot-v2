require('dotenv/config');
const tgifChannels = [];

if (process.env.DEFAULT_SCHEDULE_CHANNEL) {
    console.log("added tgifChannels default channel");
    tgifChannels.push(process.env.DEFAULT_SCHEDULE_CHANNEL);
}

module.exports = tgifChannels;
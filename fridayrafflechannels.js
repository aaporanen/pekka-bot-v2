require('dotenv/config');
const fridayRaffleChannels = [];

if (process.env.DEFAULT_SCHEDULE_CHANNEL) {
    console.log("added fridayRaffleChannels default channel");
    fridayRaffleChannels.push(process.env.DEFAULT_SCHEDULE_CHANNEL);
}

module.exports = fridayRaffleChannels;
require('dotenv/config');
const tenMinutesLeftChannels = [];

if (process.env.DEFAULT_SCHEDULE_CHANNEL) {
    console.log("added tenMinutesLeftChannels default channel");
    tenMinutesLeftChannels.push(process.env.DEFAULT_SCHEDULE_CHANNEL);
}

module.exports = tenMinutesLeftChannels;
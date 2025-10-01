require('dotenv/config');
const holidayChannels = [];

if (process.env.DEFAULT_SCHEDULE_CHANNEL) {
    console.log("added holidayChannels default channel");
    holidayChannels.push(process.env.DEFAULT_SCHEDULE_CHANNEL);
}

module.exports = holidayChannels;
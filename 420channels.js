require('dotenv/config');
const smokeWeedChannels = [];

if (process.env.DEFAULT_SCHEDULE_CHANNEL) {
    console.log("added smokeWeedChannels default channel");
    smokeWeedChannels.push(process.env.DEFAULT_SCHEDULE_CHANNEL);
}

module.exports = smokeWeedChannels;
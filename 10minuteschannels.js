const tenMinutesLeftChannels = [];

if (process.env.DEFAULT_SCHEDULE_CHANNEL) {
    tenMinutesLeftChannels.push(process.env.DEFAULT_SCHEDULE_CHANNEL);
}

module.exports = tenMinutesLeftChannels;
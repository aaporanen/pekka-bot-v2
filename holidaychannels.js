const holidayChannels = [];

if (process.env.DEFAULT_SCHEDULE_CHANNEL) {
    holidayChannels.push(process.env.DEFAULT_SCHEDULE_CHANNEL);
}

module.exports = holidayChannels;
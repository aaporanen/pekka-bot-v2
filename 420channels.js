const smokeWeedChannels = [];

if (process.env.DEFAULT_SCHEDULE_CHANNEL) {
    smokeWeedChannels.push(process.env.DEFAULT_SCHEDULE_CHANNEL);
}

module.exports = smokeWeedChannels;
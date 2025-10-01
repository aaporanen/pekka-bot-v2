const tgifChannels = [];

if (process.env.DEFAULT_SCHEDULE_CHANNEL) {
    tgifChannels.push(process.env.DEFAULT_SCHEDULE_CHANNEL);
}

module.exports = tgifChannels;
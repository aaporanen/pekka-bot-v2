require('dotenv/config');
const fridayRaffleChannels = ["1208412984381280269"];

/*
if (process.env.DEFAULT_SCHEDULE_CHANNEL) {
    console.log("added fridayRaffleChannels default channel");
    fridayRaffleChannels.push(process.env.DEFAULT_SCHEDULE_CHANNEL);
}
*/

module.exports = fridayRaffleChannels;
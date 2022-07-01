module.exports = async (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    activity: {
      name: `SEA GEN BOOSTER GEN BY XVXZY2115`,
      type: 'CUSTOM_STATUS', //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
    },
    status: 'online', //online, idle, dnd
  });
};

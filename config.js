module.exports = {
  PREFIX: '.', //prefix for the bot here
  owner: {
    id: '1076041885279342603', //put your owner Id in here so you can bypass cooldown for the generator commands and use the nitrogen command
    username: 'vs.saturn', // ur username here but this is just for display, doesn't actually have a function
    guild: '988130470497751060', //put your guild/server id here
  },

  channels: {
    generator: '1192944270315884735', //ID of the generator channel
    nitro: '1192944250762043432', //ID of the nitro generator channel
    memberCounter: '1192941451135430726', //ID of the member count channel
  },

  links: {
    HandlerInvite: 'https://discord.com/api/oauth2/authorize?client_id=1192305878368538714&permissions=8&scope=bot',
    GenIcon: 'https://img.icons8.com/color/48/000000/in-progress--v3.gif', //G.I.F icon for the generator embed here
  },

  colors: {
    //keep these colors like this too make it look clean but feel free to change if  you feel like it
    Default: '#18191c',
    Red: '#ff0000',
    Yellow: '#daff00',
    Orange: '#ff8400',
    Green: '#71fd71',
    LightGreen: '#5ac18e',
  },

  emojis: {
    success: ':white_check_mark:', //Emoji when succeding
    error: ':interrobang:', //Emoji when wrong
    loading: ':blue_heart:', //Emoji when loading
    arrow: ':arrow_forward:', //Arrow Emoji
    pingpong: ':ping_pong:', //Pingpong racket Emoji

    Generator: '<a:Management:991675240994328637>', //Generator emoji for !help embed
    Other: '<:Other:991675240994328637>', //Other emoji for !help embed
    Nitro: '<a:Booster:991675240994328637>', //Nitro emoji for !help embed
  },

  Token: {
    Discord: '',
  },

  blacklistedUsers: {
    ID: ['ID', 'ID2', 'ID3'], //Blacklist any users from the bot by putting their Id's in here
  }, //Just copy the pattern if you want to blacklist more people
};

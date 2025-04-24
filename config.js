

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://ivaneh:ivaneh@discordbot.quehgnq.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "73849b0d6e5a4123acabed2968a17099",
  spotifyClientSecret : "8e288f3570964be983963f52556db4c4",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "node1",
      password: "youshallnotpass",
      host: "lavalink.jirayu.net",
      port:  13592,
      secure: false
    },
    {
      name: "node2",
      password: "nextgencoders",
      host: "lavalink.nextgencoders.xyz",
      port:  80,
      secure: false
    },
    {
      name: "node3",
      password: "NAIGLAVA-dash.techbyte.host",
      host: "lavahatry4.techbyte.host",
      port:  3000,
      secure: false
    },
    {
      name: "node4",
      password: "yothisnodeishostedbymushroom0162",
      host: "69.30.219.179",
      port:  1038,
      secure: false
    }
  ]
}



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
      name: "ivaneh",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v4.ajieblogs.eu.org",
      port:  80,
      secure: false
    }
  ]
}



module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://ivaneh:ivaneh@discordbot.quehgnq.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "7caa7a2eafb44a3897a5d9c6d83a9508",
  spotifyClientSecret : "1c71cabb99cb4037b4db96fafbc087cf",
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
      password: "jmlitelavalink",
      host: "46.202.82.164",
      port:  1027,
      secure: false
    }
  ]
}

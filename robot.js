const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");
const ms = require("ms");
const prefix = "%";
const { clinet, MessageEmbed } = require("discord.js");
//////////


client.on("ready", () => {
    function randomStatus() {
        let status = [`%help`, `%addbot <IdBot>`]
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: "WATCHING"});    
    }; setInterval(randomStatus, 2000)
})

//////////
client.on('message', async message => {
	if(message.content.startsWith(prefix + "help")) {
	  let argsM = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .addField("» General", "`%allbots`, `%ping`, `%user`")
          .addField("» Config", "`%addbot`")
    message.channel.send(argsM);
  }
})


///////////////

client.on('message', async message => {
	if(message.content.startsWith(prefix + "allbots")) {

let i = 1;
    
    const botssize = message.guild.members.cache
      .filter(m => m.user.bot)
      .map(m => `<@${m.id}>`);
    
    
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `**${
          message.guild.members.cache.filter(m => m.user.bot).size
        }** Bots Found in server
${botssize.join(" | ")}`
      )
      
    
    
    message.channel.send(embed);
  }
})

///////////////

client.on('message', async message => {
	if(message.content.startsWith(prefix + "ping")) {

var states = "🟢 Excellent";
    var states2 = "🟢 Excellent";
    var msg = `${Date.now() - message.createdTimestamp}`;
    var api = `${Math.round(client.ws.ping)}`;
    if (Number(msg) > 70) states = "🟢 Good";
    if (Number(msg) > 170) states = "🟡 Not Bad";
    if (Number(msg) > 350) states = "🔴 Soo Bad";
    if (Number(api) > 70) states2 = "🟢 Good";
    if (Number(api) > 170) states2 = "🟡 Not Bad";
    if (Number(api) > 350) states2 = "🔴 Soo Bad";
    if (message.author.bot) return;
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL())
        .addField("**Time Taken:**", msg + " ms 📶 | " + states, true)
        .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
        
    );
  }
});


////////////////

client.on('message',async message => {
  
  if(message.content.startsWith(prefix + "addbot")) {
    

    let channel = message.guild.channels.cache.find((x) => (x.name === "addbot-queue" || x.name === "addbot-queues"))
  let channells = message.guild.channels.cache.find((x) => (x.name === "addbot-moderator" || x.name === "addbot-moderators"))
        
  let args = message.content.split(" ").slice(1)
 
    if(!args.length) {
      return message.channel.send("Usage: %addbot <Id>")
    }
    let embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setColor("RANDOM")
    .setDescription(`
  hey, **${message.author.username}** Your Bot submit for admins please wait a few minute for acepted for diened 
Bot Name <@${args}> \nOwner Name [**${message.author.username}**]\n\n[ __BotLink__ ](https://discord.com/api/oauth2/authorize?client_id=${args}&permissions=0&scope=bot)\n\n**${message.guild.name}**
 `)
   
    .setTimestamp()
 

    message.channel.send(embed)
    message.channells.send(embed)
   
    


  
  }
})
//////////

client.on("message", async message => {
    if (message.content.startsWith(prefix + "user")) {
       
let professor = new Discord.MessageEmbed()
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .addField("Username", `${message.author.tag}`)
      .addField(
        "Joined Server",
        moment(message.joinedAt).format("D/M/YYYY h:mm a"),
        true
      )
      .addField("Joined Discord", message.author.createdAt.toLocaleString());
    message.channel.send(professor);
  }
});

   
/////////////////  ////////////////
client.login("ODA2NDI3NDA5NTUzMTYyMjQw.YBpSDQ.GNHDNIabD2KRkb3zEPB2BD-XL2c");

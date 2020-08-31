const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var zalgo = require('to-zalgo')
var banish = require('to-zalgo/banish')
const fs = require('fs');
const queue = new Map();


client.on("ready", () => {

  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 

  console.log(".");

  console.log("_________________________________________________________________________________________");

  //client.user.setActivity(`j! help | ${client.guilds.size * 3 + 6} servers | ${config.status}`);
  client.user.setActivity(`j! help | ${config.status}`);
});

client.on("guildCreate", guild => {

  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
//client.user.setActivity(`j! help | ${client.guilds.size * 2} servers | ${config.status}`);
});

client.on("guildDelete", guild => {

  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
//client.user.setActivity(`j! help | ${client.guilds.size * 2} servers | ${config.status}`);
});

client.on("message", async message => {
  

  if(message.content.indexOf(config.prefix) !== 0) return;

  if(message.author.bot) return;
  

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //-------------------------------------------commandy------------------------------------------

  
  if(command === "systemcheck") {
	let ping1 = Math.abs(`${client.ws.ping}` / 100)
	let ping = `${ping1} s.`
	message.channel.send(`System Online > Ping: ${ping}`)
	message.delete().catch(O_o=>{}); 
}
  if(command === "say") {
    const sayMessagea = args.join(" ");
    const sayMessage = sayMessagea.replace(args[0],"")
    message.delete().catch(O_o=>{}); 
    if(client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.has('695229186620522566')){
      if(args[0] === "colorline"){
        message.channel.send(`${sayMessage}`);
        message.channel.send({
          files: ['https://cdn.glitch.com/cd321392-b02d-4bdd-b2ef-3224930d9d73%2Fcolorline.gif']
        })
        return;
      }
    }
    if(args[0] === "zalgo") {
    if(client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.has('695358697664413736')) {
      const sayMessage = sayMessagea.replace(args[0],"");
      message.channel.send(zalgo(sayMessage));
      return;
    }
      if(args[0] === "spider"){
        if(client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.cache.has('695568907037311016')){
          
          return;
        }
      }
  }
    message.channel.send(`${sayMessagea}`);
  }
  if(command === "accept") {
    message.delete().catch(O_o=>{}); 
    message.channel.send({
      files: ['https://tenor.com/view/jolanda-ezo-tv-ezotv-cikanka-gif-10918404']
    })
  }
  if(command === "invite") {
    message.delete().catch(O_o=>{}); 
    message.channel.send("https://discordapp.com/oauth2/authorize?client_id=643032888815648820&scope=bot&permissions=2146958847");
}
if(command === "help") {
  message.delete().catch(O_o=>{}); 
  const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#ffd100')
  .setURL('https://discord.js.org/%27%27')
  .setAuthor('příkazy')
  .addField('prefix', 'j!')
  .addField('Jolanda say', 'say <zpráva>', true)
  .addField('Jolanda say do PM', 'saypm <uživatel> <zpráva>', true)
  .addField('EmbedSay','esay', true)
  .addField('EmbedSayPm','esaypm', true)
  .addField('BotPing','ping', true)
  .addField('invite bota','invite', true)
  .addField('friends server', 'servers', true)
  .addField('support server', 'support', true)
  .addField('report poruchy','supportreport', true)
  .addField('premium help','phelp', true)
  .addField('play','play music!', true)
  .addField('dc','Disconnect from channel', true)
  .setTimestamp()
  .setFooter('příkazy'); 
  message.channel.send(exampleEmbed);
}
  
if(command === "support") {
  message.delete().catch(O_o=>{});
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff3434')
    .setURL('https://discord.js.org/%27%27')
    .setAuthor('support')
    .addField('JolandaSupportServer', 'https://discord.gg/FMzcSDg%27')
    .addField('SupportReport', 'Prosim do supportreport prikazu piste > vas problem a invite na server z ktoreho to pisete. Dakujeme.')
    .setTimestamp()
    .setFooter('support');
    message.channel.send(exampleEmbed);
}
  if(command === "stats") {
     message.delete().catch(O_o=>{});
     console.log(`Stats: ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
     message.channel.send(`Stats: ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
}
if(command === "saypm") {
  let member = message.mentions.members.first();
    if(!member)
      return message.reply("zadal(a) jsi neplatného člena");
  const pmsayMessagea = args.join(" ");
  const pmsayMessage = pmsayMessagea.replace(args[0],"")
  message.delete().catch(O_o=>{}); 
  if(client.guilds.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.cache.has('695229186620522566')){
      if(args[1] === "colorline"){
        let pmsayMessagea = pmsayMessage.replace(args[1],"");
        member.send(`${pmsayMessagea}`);
        message.channel.send({
          files: ['https://cdn.glitch.com/cd321392-b02d-4bdd-b2ef-3224930d9d73%2Fcolorline.gif']
        })
        return;
      }
    if(args[1] === "zalgo"){
      if(client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.cache.has('695358697664413736')) {
        let sayMessagea = pmsayMessage.replace(args[1],"")
        member.send(zalgo(`${sayMessagea}`));
        return;
      }
    }
    }
  member.send(`${pmsayMessage}`);
}
  if(command === "servers") {
if(client.id === "668552789017755654") return;
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send("FriendsServers:\n<https://discord.gg/vfMHkAQ>")
}
  if(command === "supportreport") {
        const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    client.channels.cache.get('658662861555499018').send(`<REPPORT-REQUEST>:${sayMessage}`)
}
if(command === "ping") {
  console.log(`User: ${message.author.username}  >>|<<  User-ID: ${message.author.id},\n Server: ${message.guild.name}  >>|<<  Server-ID:${message.guild.id},\n Channel:${message.channel.name}  >>|<<  Channel-ID:${message.channel.id},\n CMD: ping `)
  let ping = `${client.ws.ping}`
  let ping1 = `${ping} ms.`
  message.channel.send(`BotPing>${ping1}`)
}
if(command === "esay") {
  message.delete().catch(O_o=>{}); 
  const sayMessagea = args.join(" ");
  if(args[0] === "colorline"){
    if(client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.has('695229186620522566')) {
      const sayMessage = sayMessagea.replace(args[0],"");
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#00ff90')
      .setURL('https://discord.js.org/%27%27')
      .setDescription(sayMessage)
      message.channel.send(exampleEmbed);
        message.channel.send({
          files: ['https://cdn.glitch.com/cd321392-b02d-4bdd-b2ef-3224930d9d73%2Fcolorline.gif']
        })
      return;
  }
  }
  if(args[0] === "zalgo") {
    if(client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.cache.has('695358697664413736')) {
      const sayMessage = sayMessagea.replace(args[0],"");
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#00ff90')
      .setURL('https://discord.js.org/%27%27')
      .setDescription(zalgo(sayMessage))
      message.channel.send(exampleEmbed);
      return;
    }
  }
  const sayMessage = `${sayMessagea}` 
  const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#00ff90')
      .setURL('https://discord.js.org/%27%27')
      .setDescription(sayMessage)
  message.channel.send(exampleEmbed);
}
if(command === "esaypm") {
  let member = message.mentions.members.first();
    if(!member)
      return message.reply("zadal(a) jsi neplatného člena");
  const pmsayMessage = args.join(" ").replace(args[0],"");
  message.delete().catch(O_o=>{}); 
  if(client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.cache.has('695229186620522566')){
      if(args[1] === "colorline"){
        let pmsayMessagea = pmsayMessage.replace(args[1],"")
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#00ff90')
        .setURL('https://discord.js.org/%27%27')
        .setDescription(pmsayMessagea)
        member.send(exampleEmbed);
        member.send({
          files: ['https://cdn.glitch.com/cd321392-b02d-4bdd-b2ef-3224930d9d73%2Fcolorline.gif']
        })
        return;
      }
    }
  if(args[1] === "zalgo"){
    if(client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.cache.has('695229186620522566')){
      let pmsayMessagea = pmsayMessage.replace(args[1],"")
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#00ff90')
        .setURL('https://discord.js.org/%27%27')
        .setDescription(zalgo(pmsayMessagea));
        member.send(exampleEmbed);
        return;
  }
    }
  const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#00ff90')
      .setURL('https://discord.js.org/%27%27')
      .setDescription(pmsayMessage)
  member.send(exampleEmbed);
}
  
//-------------------------ADMIN COMMANDS---------------------------- // edit id's of owners
  if(message.author.id === "281485019686371328"){
    if(command === "keylist"){
      message.delete().catch(O_o=>{}); 
      const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#ffd100')
  .setURL('https://discord.js.org/%27%27')
  .setAuthor('KEYLIST')
  .addField('.', 'KEYS:')
      .addField('colorline', 'ilikediamondssoomuch')
      .addField('zalgo', 'whatiswithmeHEEEEEEEEELP')
  .addField('.', 'roles:')
      .addField('colorline', 'g5hiu7q')
      .addField('zalgo', 'l14t25h')
  .setTimestamp()
  .setFooter('AdminId:2'); 
  message.author.send(exampleEmbed);
    }
    if(command === "unpremium"){
      let member = message.mentions.members.first().id;
      let membera = message.mentions.members.first();
     const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#ffd100')
      .setURL('https://discord.js.org/%27%27')
      .setAuthor('KEYLIST')
      .addField('AUTHOR:', 'EPXOL')
      .addField('ACTION', 'UnPremium')
      .setTimestamp()
      client.channels.cache.get("658701749846147120").send(exampleEmbed)
      client.guilds.cache.get("658274158962016266").members.cache.get(member).roles.cache.remove("695199984940744774");
      client.guilds.cache.get("658274158962016266").members.cache.get(member).roles.cache.remove("695208688289448006");
      client.guilds.cache.get("658274158962016266").members.cache.get(member).roles.cache.remove("695358697664413736");
      client.guilds.cache.get("658274158962016266").members.cache.get(member).roles.cache.remove("695229186620522566");
      client.guilds.cache.get("658274158962016266").members.cache.get(member).roles.cache.remove("695568907037311016");
      message.channel.send(`Premium roles was sucess removed from user ${membera}`)   
  }
  if(message.author.id === "516302948947460106"){
    if(command === "keylist"){
      message.delete().catch(O_o=>{}); 
      const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#ffd100')
  .setURL('https://discord.js.org/%27%27')
  .setAuthor('KEYLIST')
  .addField('.', 'KEYS:')
      .addField('colorline', 'ilikediamondssoomuch')
      .addField('zalgo', 'whatiswithmeHEEEEEEEEELP')
  .addField('.', 'roles:')
      .addField('colorline', 'g5hiu7q')
      .addField('zalgo', 'l14t25h')
  .setTimestamp()
  .setFooter('AdminId:2'); 
  message.author.send(exampleEmbed);
    }
    if(command === "unpremium"){
      let member = message.mentions.members.first().id;
      let membera = message.mentions.members.first();
     const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#ffd100')
      .setURL('https://discord.js.org/%27%27')
      .setAuthor('KEYLIST')
      .addField('AUTHOR:', 'EPXOL')
      .addField('ACTION', 'UnPremium')
      .setTimestamp()
      client.channels.cache.get("658701749846147120").send(exampleEmbed)
      client.guilds.cache.get("658274158962016266").members.cache.get(member).roles.cache.remove("695199984940744774");
      client.guilds.cache.get("658274158962016266").members.cache.get(member).roles.cache.remove("695208688289448006");
      client.guilds.cache.get("658274158962016266").members.cache.get(member).roles.cache.remove("695358697664413736");
      client.guilds.cache.get("658274158962016266").members.cache.get(member).roles.cache.remove("695229186620522566");
      client.guilds.cache.get("658274158962016266").members.cache.get(member).roles.cache.remove("695568907037311016");
      message.channel.send(`Premium roles was sucess removed from user ${membera}`)   
  }
  }
  }
  if(command === "eval"){
    if(message.author.id === "281485019686371328"){
      eval(args.join(" "))
    }
  }
  if(command === "eval"){
    if(message.author.id === "516302948947460106"){
      eval(args.join(" "))
    }
  }
  if(command === "play"){
console.log("Music used!")
const YouTube = require('simple-youtube-api');
const YT = new YouTube('AIzaSyBq7UrGMRbF3xcsbdh-asitYX0caBtIUsk');
const ytdl = require("ytdl-core");
  if(!message.member.voice.channel) return message.reply("You must join voice channel first!");
if(!message.member.voice.channel.permissionsFor(message.client.user).has(['CONNECT', 'SPEAK'])) return message.reply("I don't have permissions for Connect or Speak!");

message.member.voice.channel.join().then(connection => {
  if(args.join(" ").startsWith("https:/")){
    c(args, message, connection)
    async function c(r, message, connection) {
      const info = await ytdl.getInfo(args.join(" "))
      const emb = new Discord.MessageEmbed()
      .setTitle('Now playing')
      .setColor('#000')
      .setDescription("`" + info.title + "`");
      message.channel.send(emb);
      connection.play(ytdl(args.join(" ")), {volume: 1}).on("finish", () => {
        message.member.voice.chnnel.leave();
      })
    }
  }
  if(!args.join(" ").startsWith("https:/")){
    YT.searchVideos(args.join(" "), 1).then(r => {
      c(r, message, connection)
      async function c(r, message, connection) {
      const song = await ytdl.getInfo(r[0].url);
      const emb = new Discord.MessageEmbed()
      .setTitle('Now playing')
      .setColor('#000')
      .setDescription("`" + song.title + "`");
      message.channel.send(emb);
      connection.play(ytdl(r[0].url), {volume: 1}).on("finish", () => {
        message.member.voice.chnnel.leave();
      })
      }
    })
  }
})
}
if(command === "dc"){
  if(!message.member.voice.channel) return message.reply("You are not in channel !");
  message.member.voice.channel.leave();
  message.reply("Sucess leaved  Voice Channel.")
}
  //------------------------PREMIUM-----------------------------
    if(command){
 if(client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.has('695199984940744774')){
    if(command === "status") {
      const status = args.join(" ");
      message.delete().catch(O_o=>{}); 
      client.user.setActivity(`j! help | ${client.guilds.size * 2} servers | ${status}`);
      }
   if(command === "phelp") {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#ffd100')
      .setURL('https://discord.js.org/%27%27')
      .setAuthor('speciální příkazy pro premium')
      .addField('prefix', 'j!')
      .addField('zpráva do statusu','status <zpráva>', true)
      .addField('anketa','poll-set <text ankety>', true)
      .addField('anketa s textom v embed','epoll-set <text ankety>', true)
      .addField('magic klíče','keyhelp', true)
      .setTimestamp()
      .setFooter('příkazy pro premium'); 
      message.channel.send(exampleEmbed);
  }
  if(command === "keyhelp") {
      const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#000cff')
      .setURL('https://discord.js.org/%27%27')
      .addField('magic klíče', 'hledej magic klíče a získávej tak nové efekty do textu jolandy nebo úplně nové fukce! Pokud jsi našel klíč tak napiš **j!key <klíč>**')
      .setTimestamp()
      .setFooter('klíče'); 
      message.channel.send(exampleEmbed);
    }
   if(command === "key") {
      const keyid = args.join(" ");
     if(!keyid === "ilikediamondssoomuch", "whatiswithmeHEEEEEEEEELP") {
       const keyerror = new Discord.MessageEmbed()
      .setColor('#ff3535')
      .setURL('https://discord.js.org/%27%27')
      .addField('error', 'tento klíč není platný')
      message.channel.send(keyerror);
     }
     if(keyid === "ilikediamondssoomuch") {
       const colorline = new Discord.MessageEmbed()
      .setColor('#ffdf00')
      .setURL('https://discord.js.org/%27%27')
      .addField('Gratulace', 'Odemknul jsi barevnou čáru! Když do say, esay, esaypm, saypm někam napíšeš **j!<jeden z příkazů> colorline <text>** tak ti tam dá barevnou čáru kterou vidíš dole!')
      message.author.send(colorline)
      message.author.send({
        files: ['https://cdn.glitch.com/cd321392-b02d-4bdd-b2ef-3224930d9d73%2Fcolorline.gif']
      })
      client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.add("695229186620522566");
     }
     if(keyid === "whatiswithmeHEEEEEEEEELP") {
       const colorline = new Discord.MessageEmbed()
      .setColor('#ffdf00')
      .setURL('https://discord.js.org/%27%27')
      .addField('Gratulace', 'Odemknul jsi zalgo! do say, esay, esaypm, saypm, esaypm někam napíšeš **j!<jeden z příkazů> zalgo <text>** tak se stvím textem budou dít kouzla! Pozor! Na některých serverech je tato funkce zakázána')
      message.author.sendMessage(colorline)
       client.guilds.cache.get("658274158962016266").members.cache.get(`${message.author.id}`).roles.cache.add("695358697664413736");
     }
       
      message.delete().catch(O_o=>{}); 
      }
    }
      if(command === "poll-set"){
        message.delete().catch(O_o=>{}); 
        message.channel.send(`${args.join(" ")}`).then(sendMessage => {
        sendMessage.react("✅")
        .then(sendMessage.react("❌"));
        })
      }
      if(command === "epoll-set"){
        message.delete().catch(O_o=>{}); 
        const epoll = new Discord.MessageEmbed()
        .setColor('#ffdf00')
        .setURL('https://discord.js.org/%27%27')
        .setDescription(`${args.join(" ")}`)
          message.channel.send(epoll).then(sendMessage => {
        sendMessage.react("✅")
        .then(sendMessage.react("❌"));
        })
      }
  }
  if(command === "shutdown"){
    message.delete();
    if(message.author.id === "281485019686371328"){
      client.destroy();
      setTimeout(() => {client.login(config.token)}, 180000)
    }
    if(message.author.id === "530768621346226186"){
      client.destroy();
      setTimeout(() => {client.login(config.token)}, 180000)
    }
  }
  if(command === "script"){
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff3434')
    .setURL('https://discord.js.org/%27%27')
    .addField('Error', 'RUN | CREATE | EDIT | MYDIR | TASKLIST | KILL | REMOVE | SCAN | REPORT | SETPERMISSION | RATE | VOTE')
    .setTimestamp()
    .setFooter('invalid args');
    message.channel.send(exampleEmbed)
}
})
client.login(config.token);
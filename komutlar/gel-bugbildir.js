const Discord = require("discord.js")
const CSL = "1097188700263301120"

exports.run = async (client, message, args) => {
  
let bug = args.slice(0).join(" ")
if(!bug) return message.reply("**Bir Hata Yazmadın!**")
let channel = client.channels.cache.get(CSL)

let embed = new Discord.MessageEmbed()
.setTitle("Report Geldi")
.setThumbnail("https://cdn.discordapp.com/avatars/1042005950841761792/5c91e3f29a05adbdb45cbe80026fe5ec.webp?size=4096")
.addField("Report", bug)
.addField("・Report Eden", message.author.username, true)
.addField("・Sunucu", message.guild.name, true)
.addField("・Sunucu ID", message.guild.id, true)
.addField("・Kanal", message.channel.name, true)
.addField("・Mesaj:",`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
.setColor("BLUE") 
.setTimestamp()
message.channel.send("**Bug Report Başarı İle İletildi.**")
  if(channel){
channel.send(embed).then(i => i.react("✅"))
  }
}

   

exports.conf = {
  aliases: ["bugbildir","bug-bildir"]
}

exports.help = {
  name: 'bildir'
}
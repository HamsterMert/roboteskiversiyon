
const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix
 
module.exports.run = async(client, message, args) => {
 
 let sayfalar = [`
      > :lock: [${prefix}abone-mesaj](https://discord.gg/Wg5hVkQQ6H)
      > **• Abone Mesajının Nereye Gideceğini Ayarlayın.**
      > :lock: [${prefix}abone-rol](https://discord.gg/Wg5hVkQQ6H) 
      > **• Abone Rolü Ayarlayın.**
      > :lock: [${prefix}abone-sorumlusu](https://discord.gg/Wg5hVkQQ6H) 
      > **• Abone Sorumlusu Rolünü Ayarlayın.**
      > :lock: [${prefix}abone](https://discord.gg/Wg5hVkQQ6H)
      > **• Kullanıcıya Abone Rolü Verin**`]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("RoBot") 
    .setTitle("RoBot") 
    .setColor("RANDOM")
    .setDescription(sayfalar[page-1])
    .setTimestamp()
 
  message.channel.send(embed).then(msg => { 
     
   
    })
 

 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-yardım"],
  permLevel: 0
};

module.exports.help = {
  name: 'abone-yardım',
  description: 'Bot Komutlarını Gösterir',
  usage: 'abone-yardım'
};
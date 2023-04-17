
const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix
 
module.exports.run = async(client, message, args) => {
 
 let sayfalar = [`
      > :lock: [${prefix}moderasyon](https://discord.gg/Wg5hVkQQ6H)
      > **• Moderasyon Komutlarını Görüntüleyin.**
      > :lock: [${prefix}eğlence](https://discord.gg/Wg5hVkQQ6H) 
      > **• Eğlence Komutlarını Görüntüleyin.**
      > :lock: [${prefix}abone-yardım](https://discord.gg/Wg5hVkQQ6H) 
      > **• Abone Sistemini Görüntüleyin.**
      > :lock: [${prefix}ekonomi](https://discord.gg/Wg5hVkQQ6H)
      > **• Ekonomi Komutlarını Görüntüleyin**`]; 
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
  aliases: ["yardım"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Bot Komutlarını Gösterir',
  usage: 'yardım'
};
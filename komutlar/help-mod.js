
const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix
 
module.exports.run = async(client, message, args) => {
 
 let sayfalar = [`
      > :lock: [${prefix}ban](https://discord.gg/Wg5hVkQQ6H)
      > **• Etiketlediğiniz Kullanıcıyı Sunucudan Banlarsınız.**
      > :lock: [${prefix}unban](https://discord.gg/Wg5hVkQQ6H) 
      > **• ID'sini Belirttiğiniz Kullanıcının Banını Kaldırsınız.**
      > :lock: [${prefix}kick](https://discord.gg/Wg5hVkQQ6H) 
      > **• Etiketlediğiniz Kullanıcıyı Sunucudan Atarsınız.**
      > :lock: [${prefix}nuke](https://discord.gg/Wg5hVkQQ6H)
      >  **• Kanalı Siler ve Yeni Kanal Oluşturur.**`]; 
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
  aliases: ["mod"],
  permLevel: 0
};

module.exports.help = {
  name: 'moderasyon',
  description: 'Bot Komutlarını Gösterir',
  usage: 'moderasyon'
};
let Discord = require("discord.js")
let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message, args) => {
let abonesorumlusu = await database.fetch(`abonesorumlusu.${message.guild.id}`)
let abonemesaj = await database.fetch(`abonemesaj.${message.guild.id}`)
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`${message.author} :x: | Verilecek Abone Rolü Ayarlı Değil!`)
  if(!abonemesaj) return message.channel.send(`${message.author} :x: | Abone Mesaj Kanalı Ayarlı Değil!`)
  if(!abonesorumlusu) return message.channel.send(`${message.author} :x: | Abone sorumlusu rolü ayarlanmamış!`)
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(abonesorumlusu)) return message.channel.send(`${message.author} :x: | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  if(!message.mentions.users.first()) return message.channel.send(`${message.author} :x: | Bir Üye Etiketle!`)
    await(abonekisi.roles.add(abonerol))
   message.channel.send(`:x: | ${message.author} Başarıyla Abone Rolü Verildi!`)
  
    
  const embed = new Discord.MessageEmbed()
  .setTitle(`Başarıyla Abone Rolü Verildi!`)
  .addField(`・Veren Yetkili:`, `${message.author}`, true)
  .addField(`・Abone:`, `${user}`, true)
  .addField(`・Mesaj:`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)
  .setColor(`#9b00ff`)
  .setFooter(`${client.user.username} | HamsterMert`)
         .setImage("https://media.discordapp.net/attachments/821496896492273695/821692252442460170/Baslksz-1.jpg")
  message.guild.channels.cache.get(abonemesaj).send(embed)
  
  
} 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['a'],

  perm: 0 
}
exports.help = {
  name: 'abone'
}

exports.play = {
  kullanım: 'abone @üye',
  açıklama: 'Etiketlenen Üyeye Abone Rolü Verirsiniz.',
  kategori: 'Abone'
}

const Discord = require("discord.js");
const client = new Discord.Client();
const jimp = require("jimp");
const ayarlar = require("./ayarlar.json"); 
const chalk = require("chalk");
const db = require("quick.db");
const fs = require("fs");
client.login(process.env.token);
const moment = require("moment");
require("./util/eventLoader")(client);



client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});
 
const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {

      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e); 
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`); 
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve(); 
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0; 
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};













////// GİRİŞ MESAJ //////

client.on("guildCreate", async guild => {
  guild.owner.send("<@" + guild.owner.id + "> **RoBot** Botu Eklemeniz Bizi Sevindirdi Altta Yazanlarla Botu Kullanabilir VEYA Sorularınızı Bize Sorabilirsiniz! \n-  `+yardım` Yazarak Komutlarıma Ulaşabilirsin! \n- Bize Birşey Bildirmek İçin `+bildir` \n- Bağlantılar: https://discord.gg/Wg5hVkQQ6H");
});


client.on("guildDelete", async guild => {
  guild.owner.send("<@" + guild.owner.id + "> **RoBot** Botu Atmanız Bizi Üzdü Alttaki Bağlantılardan Bize Ulaşarak Sıkıntını Sorabilirsin! \n- Bağlantılar: https://discord.gg/Wg5hVkQQ6H");
});

///// ÇIKIŞ MESAJ //////

///// EKLENDİM ATILDIM /////

     client.on("guildCreate", guild => {
  let dcs_kanal = client.channels.cache.get("1096806620765360169")
guild.channels
    .cache.filter(mr => mr.type === "text")
    .random()
    .createInvite()
    .then(async invite => {
      const dcs = new Discord.MessageEmbed()
        .setTitle("SUNUCUYA EKLENDİM")
        .setColor("GREEN")
        .addField("▪ Sunucu İsmi", `\`${guild.name}\``)
        .addField("▪ Üye Sayısı", `\`${guild.members.cache.size}\``)
        .addField("▪ Kurucu", `\`${guild.owner.user.tag}\``)
        .addField("Davet", `https://discord.gg/${invite.code}`);
      dcs_kanal.send(dcs);
    });
});


client.on("guildDelete", guild => {
  let dcs_kanal = client.channels.cache.get("1096806620765360169")

 const dcs = new Discord.MessageEmbed()
.setTitle("SUNUCUDAN AYRILDIM")
.setColor("RED")
.addField('▪ Sunucu İsmi', `\`${guild.name}\``)
.addField('▪ Üye Sayısı', `\`${guild.members.cache.size}\``)
.addField('▪ Kurucu', `\`${guild.owner.user.tag}\``)
dcs_kanal.send(dcs)
});     


////EKLENDİM ATILDIM/////


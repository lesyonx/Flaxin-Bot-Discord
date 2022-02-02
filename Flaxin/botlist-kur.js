const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')
const DBL = require('dblapi.js')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



exports.run = async (client, message, args) => {
    let timeout = 35000 //bunu ellemeyin 24 saat 

    let daily = await db.fetch(`botlist-kur${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Komudu tekrar kullanabilmek için **${time.seconds} saniye** beklemelisin!`)).then(x => x.delete({timeout: 6000}))
    } else {
 if (!message.member.hasPermission("ADMINISTRATOR")) return  message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu').setDescription(`Maalesef **Yönetici** adlı yetkin yok!`));
	  db.set(`botlist-kur${message.author.id}`, Date.now())
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
    .setDescription(`Botlist sistemini kurmak için seçenekleri seçin!

    Botlog ayarlamak için <a:flaxin_1:824988468182253569> 
    Eklenecek kanalı ayarlamak için <a:flaxin_2:824988469499658241>
    Geliştirici rolünü ayarlamak için <a:flaxin_3:824988468060618824>
    Onaylanan bot rolünü ayarlamak için <a:flaxin_4:825011472878010379>
    Yetkili kanalını ayarlamak için <a:flaxin_5:825011093650276402>
    Botlist yetkili rolünü ayarlamak için <a:flaxin_6:838061014016196628>
    Ayarlanan rolleri ve kanalları görmek için <:setting:767777081672597534> 
    Komutu İptal Etmek İçin <a:ast_carpi:770286374695469127>
    `)
    .setColor(`ORANGE`)
    .setThumbnail(client.user.avatarURL())
    .setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
    .setTimestamp()
    message.channel.send(embed).then(async react => {
        react.react('824988468182253569')
        react.react('824988469499658241')
        react.react('824988468060618824')
        react.react('825011472878010379')
        react.react('825011093650276402')
        react.react('838061014016196628')
        react.react('767777081672597534')
        react.react('770286374695469127')
        const select = react.createReactionCollector((reaction, user) =>
        reaction.emoji.name === "824988468182253569" || "824988469499658241" || "824988468060618824"  || "ast_carpi" &&
        user.id === message.author.id,
      {          
         time: 60000,
         errors: ['time']
});
      select.on("collect", async (reaction, user) => {
            if(user.id === client.user.id) return;
        if(reaction.emoji.name === "flaxin_5"){
await react.reactions.removeAll()
await select.stop()

let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Lütfen Bir Kanal Etiketle!')
.setDescription("```Örnek : \n#yetkili-kanalı``` \n ``Eğer işlemi iptal etmek istiyorsan *iptal* yazabilirsin``")
.setColor(`RED`)
.setThumbnail(client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });

join.on('collect', async message => {
  if(message.content.toLowerCase() === "iptal") {
    message.channel.send(new Discord.MessageEmbed().addField("İşte bu kadar",`İşlem iptal edildi`))
    await react.delete()
    await join.stop()
 return
}
let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Yetkili Kanal Ayarlama`)
.setColor(0x36393F)
.setDescription(`Kaydedilecek kanalı belirtin!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Flaxin`)
message.channel.send(ayarlanmadı)
}
db.set(`yetkilikanal_${message.guild.id}`, kanal.id)
const ayarlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Yetkili kanal ayarlama`)
.setColor(0x36393F)
.setDescription(`Yetkili kanalı başarıyla ayarlandı. ${kanal}!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Flaxin`)
message.channel.send(ayarlandı)
await join.stop()
})
        }
        if(user.id === client.user.id) return;
        if(reaction.emoji.name === "flaxin_4"){
await react.reactions.removeAll()
await select.stop()

let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Lütfen Bir Rol Etiketle!')
.setDescription("```Örnek : \n@botlist-bot``` \n ``Eğer işlemi iptal etmek istiyorsan *iptal* yazabilirsin``")
.setColor(`RED`)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });

join.on('collect', async message => {
  if(message.content.toLowerCase() === "iptal") {
    message.channel.send(new Discord.MessageEmbed().addField("İşte bu kadar",`İşlem iptal edildi`))
    await react.delete()
    await join.stop()
 return
}
let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Bot Rol belirleme komutu.`)
.setColor(0x36393F)
.setDescription(`Bot rolünü seçmek için rolü etiketleyin!`)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
message.channel.send(ayarlanmadı)
}
db.set(`${message.guild.id}_botrol`, rol.id)
const ayarlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username}| Bot Rol belirleme komutu.`)
.setColor(0x36393F)
.setDescription(`Onaylanan bot rolü başarıyla ${rol} olarak seçildi!`)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
message.channel.send(ayarlandı)
await join.stop()
})

        }
          if(reaction.emoji.name === "flaxin_3"){
await react.reactions.removeAll()
await select.stop()

let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Lütfen Bir Rol Etiketle!')
.setDescription("```Örnek : \n@bot-developer``` \n ``Eğer işlemi iptal etmek istiyorsan *iptal* yazabilirsin``")
.setThumbnail(client.user.avatarURL)
.setColor(`RED`)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });

join.on('collect', async message => {
  if(message.content.toLowerCase() === "iptal") {
    message.channel.send(new Discord.MessageEmbed().addField("İşte bu kadar",`İşlem iptal edildi`))
    await react.delete()
    await join.stop()
 return
}
let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Geliştirici Rolü ayarlama`)
.setColor(0x36393F)
.setDescription(`Lütfen rolü etiketleyiniz!`)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
message.channel.send(ayarlanmadı)
}
db.set(`${message.guild.id}_devrol`, rol.id)
const ayarlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Geliştirici rolü ayarlama`)
.setColor(0x36393F)
.setDescription(`Geliştirici rolü başarıyla ${rol} olarak seçildi!`)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
message.channel.send(ayarlandı)
await join.stop()
})
  
        }

        
     if(reaction.emoji.name === "flaxin_1"){
await react.reactions.removeAll()
await select.stop()

let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Lütfen Bir Kanal Etiketle!')
.setDescription("```Örnek : \n#bot-log``` \n ``Eğer işlemi iptal etmek istiyorsan *iptal* yazabilirsin``")
.setColor(`RED`)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });

join.on('collect', async message => {
  if(message.content.toLowerCase() === "iptal") {
    message.channel.send(new Discord.MessageEmbed().addField("İşte bu kadar",`İşlem iptal edildi`))
    await react.delete()
    await join.stop()
 return
}
let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Botlog Kanal Ayarlama`)
.setColor(0x36393F)
.setDescription(`Kaydedilecek kanalı belirtin!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Flaxin`)
message.channel.send(ayarlanmadı)
}
db.set(`${message.guild.id}_botlog`, kanal.id)
const ayarlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Botlog kanal ayarlama`)
.setColor(0x36393F)
.setDescription(`Botlog kanalı başarıyla ayarlandı. ${kanal}!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Flaxin`)
message.channel.send(ayarlandı)
await join.stop()
})

    }   
if(reaction.emoji.name === "flaxin_2") {
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Lütfen Bir Kanal Etiketle!')
.setDescription("```Örnek : \n#bot-ekle``` \n ``Eğer işlemi iptal etmek istiyorsan *iptal* yazabilirsin``")
.setColor(`RED`)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });

join.on('collect', async message => {
  if(message.content.toLowerCase() === "iptal") {
    message.channel.send(new Discord.MessageEmbed().addField("İşte bu kadar",`İşlem iptal edildi`))
    await react.delete()
    await join.stop()
 return
}
let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Başvuru Kanal Ayarlama`)
.setColor(0x36393F)
.setDescription(`Kaydedilecek kanalı belirtin!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Flaxin`)
message.channel.send(ayarlanmadı)
}
db.set(`${message.guild.id}_eklekanal`, kanal.id)
const ayarlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Başvuru kanal ayarlama`)
.setColor(0x36393F)
.setDescription(`Başvuru kanalı başarıyla ayarlandı. ${kanal}!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Flaxin`)
message.channel.send(ayarlandı)
await join.stop()
})

} 
  if(user.id === client.user.id) return;
        if(reaction.emoji.name === "flaxin_6"){
await react.reactions.removeAll()
await select.stop()

let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Lütfen Bir Rol Etiketle!')
.setDescription("```Örnek : \n@botlist-yetkili``` \n ``Eğer işlemi iptal etmek istiyorsan *iptal* yazabilirsin``")
.setColor(`RED`)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
.setTimestamp()
react.edit(embedo)
let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });

join.on('collect', async message => {
  if(message.content.toLowerCase() === "iptal") {
    message.channel.send(new Discord.MessageEmbed().addField("İşte bu kadar",`İşlem iptal edildi`))
    await react.delete()
    await join.stop()
 return
}
let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Botlist yetkili ayarlama`)
.setColor(0x36393F)
.setDescription(`Bot rolünü seçmek için rolü etiketleyin!`)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
message.channel.send(ayarlanmadı)
}
db.set(`${message.guild.id}_botlist-yetkili`, rol.id)
const ayarlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username}| Botlist yetkili`)
.setColor(0x36393F)
.setDescription(`Botlist yetkili rolü başarıyla ${rol} olarak seçildi!`)
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
message.channel.send(ayarlandı)
await join.stop()
})

} 
if(reaction.emoji.name === "setting") {
  await react.reactions.removeAll()
await select.stop()
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true})) 
.setDescription(`
Botlog : 
${message.guild.channels.cache.get(db.get(`${message.guild.id}_botlog`)) || "<a:ast_carpi:770286374695469127> Henüz ayarlanmamış"}
Bot Ekleme Kanalı : 
${message.guild.channels.cache.get(db.get(`${message.guild.id}_eklekanal`)) || "<a:ast_carpi:770286374695469127> Henüz ayarlanmamış"}
Geliştirici Rolü : 
${message.guild.roles.cache.get(db.get(`${message.guild.id}_devrol`)) || "<a:ast_carpi:770286374695469127> Henüz ayarlanmamış"}
Onaylanan Bot Rolü : 
${message.guild.roles.cache.get(db.get(`${message.guild.id}_botrol`)) || "<a:ast_carpi:770286374695469127> Henüz ayarlanmamış"}
Yetkili Kanal : 
${message.guild.channels.cache.get(db.get(`yetkilikanal_${message.guild.id}`)) || "<a:ast_carpi:770286374695469127> Henüz ayarlanmamış"}
Botlist Yetkili Rolü : 
${message.guild.roles.cache.get(db.get(`${message.guild.id}_botlist-yetkili`)) || "<a:ast_carpi:770286374695469127> Henüz ayarlanmamış"}
`) /////////(`${message.guild.id}_botrol`, rol.id)       db.set(`yetkilikanal_${message.guild.id}`, kanal.id)        db.set(`${message.guild.id}_botlist-yetkili`, rol.id)

.setColor(`RED`) 
.setThumbnail(client.user.avatarURL)
.setFooter( message.guild.name , client.user.displayAvatarURL())
.setTimestamp()
return react.edit(embed)
}
 if(reaction.emoji.name === "ast_carpi") {
    await react.reactions.removeAll()
    await select.stop()
    let embedo = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
     .setDescription(`
     Komut İptal Edildi!
     `)
    .setColor(`RED`)
    .setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
    .setTimestamp()
  return  react.edit(embedo)
    }

})
    })        .catch(select => {
      return message.channel.send(`Zaman Aşımı!`)
    })



   }
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: ""
}

exports.help = {
    name: 'botlist-kur'
}
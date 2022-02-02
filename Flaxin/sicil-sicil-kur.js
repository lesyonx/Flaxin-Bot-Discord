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

    let daily = await db.fetch(`mute-kur${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Komudu tekrar kullanabilmek için **${time.seconds} saniye** beklemelisin!`)).then(x => x.delete({timeout: 6000}))
    } else {
 if (!message.member.hasPermission("ADMINISTRATOR")) return  message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu').setDescription(`Maalesef **Yönetici** adlı yetkin yok!`));
	  db.set(`mute-kur${message.author.id}`, Date.now())
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
    .setDescription(`Sicil sistemini kurmak için seçenekleri seçin!

    Küfür Log'u ayarlamak için <a:flaxin_1:824988468182253569> 
    Reklam Log'u <a:flaxin_2:824988469499658241>
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
        if(reaction.emoji.name === "flaxin_1"){
await react.reactions.removeAll()
await select.stop()

let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
.setTitle('Lütfen Bir Kanal Etiketle!')
.setDescription("```Örnek : \n#küfür-log``` \n ``Eğer işlemi iptal etmek istiyorsan *iptal* yazabilirsin``")
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
.setTitle(`${client.user.username} | Küfür Log Kanal Ayarlama`)
.setColor(0x36393F)
.setDescription(`Kaydedilecek kanalı belirtin!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Flaxin`)
message.channel.send(ayarlanmadı)
}
db.set(`kufur.log_${message.guild.id}`, kanal.id)
const ayarlandı = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Küfür Log Kanal Ayarlama`)
.setColor(0x36393F)
.setDescription(`Küfür log kanalı başarıyla ${kanal} ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setFooter(`Flaxin`)
message.channel.send(ayarlandı)
await join.stop()
})
        }
 
        if(reaction.emoji.name === "flaxin_2"){
            await react.reactions.removeAll()
            await select.stop()
            
            let embedo = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
            .setTitle('Lütfen Bir Kanal Etiketle!')
            .setDescription("```Örnek : \n#küfür-log``` \n ``Eğer işlemi iptal etmek istiyorsan *iptal* yazabilirsin``")
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
            .setTitle(`${client.user.username} | Link-Engel Log Kanal Ayarlama`)
            .setColor(0x36393F)
            .setDescription(`Kaydedilecek kanalı belirtin!`)
            .setThumbnail(client.user.avatarURL())
            .setFooter(`Flaxin`)
            message.channel.send(ayarlanmadı)
            }
            db.set(`link.log_${message.guild.id}`, kanal.id)
            const ayarlandı = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL())  
            .setTitle(`${client.user.username} | Link-Engel Log Kanal Ayarlama`)
            .setColor(0x36393F)
            .setDescription(`Link-Engel log kanalı başarıyla ${kanal} ayarlandı!`)
            .setThumbnail(client.user.avatarURL())
            .setFooter(`Flaxin`)
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
Küfür Log : 
${message.guild.channels.cache.get(db.get(`kufur.log_${message.guild.id}`)) || "<a:ast_carpi:770286374695469127> Henüz ayarlanmamış"}
Link Log : 
${message.guild.channels.cache.get(db.get(`link.log_${message.guild.id}`)) || "<a:ast_carpi:770286374695469127> Henüz ayarlanmamış"}
`) /////////(`${message.guild.id}_botrol`, rol.id)       db.set(`yetkilikanal_${message.guild.id}`, kanal.id)       

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
    name: 'sicil-kur'
}
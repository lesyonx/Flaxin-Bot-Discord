const Discord = require('discord.js');
const db = require('quick.db')

exports.run = function(client, message, args) {
  let sebep = args.slice(2).join(' ');
  	let yetkili = message.author
  let sahip = message.guild.members.cache.get(args[0])
	let botisim = message.guild.members.cache.get(args[1])
  let botrol = db.fetch(`${message.guild.id}_botrol`)
  let devrol = db.fetch(`${message.guild.id}_devrol`)
	  let log =  db.fetch(`${message.guild.id}_botlog`)
	let eklekanal = db.fetch(`${message.guild.id}_eklekanal`)
  let basvurulog =   db.fetch(`${message.guild.id}_basvurulog`)

    
    
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu",`Bu komutu kullanabilmek için **Rolleri Yönet** adlı yetkin yok`)); 
  let embed2 = new Discord.MessageEmbed()
  .setColor('#7f0000')
   .setDescription(`> **Bu Bir Reklam Değildir!!** ${botisim} **adlı botun reddedildi.** \n > **Reddeden Yetkilinin Sebebi =** ${sebep} \n > **Reddeden yetkili =** ${yetkili} `)
		
  let embed = new Discord.MessageEmbed()
  .setColor('#7f0000')
   .setDescription(`> ${sahip} **adlı kişinin** ${botisim} **adlı botu reddedildi.** \n > **Sebep =** ${sebep} \n > **Reddeden yetkili =** ${yetkili} `)
		
	if (!botisim) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu","Aşağıdaki adımları doğru olarak yapınız \n ``#reddet bot-id sahip-id sebep``"))
  if (!sebep) return  message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu","Aşağıdaki adımları doğru olarak yapınız \n ``#reddet bot-id sahip-id sebep``"))
    if (!sahip) return  message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu","Aşağıdaki adımları doğru olarak yapınız \n ``#reddet bot-id sahip-id sebep``"))
  message.delete()
  client.channels.cache.get(log).send(embed);
    sahip.send(embed2)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot-reddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};
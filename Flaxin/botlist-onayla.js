const Discord = require('discord.js');
const db  = require('quick.db')

exports.run = function(client, message, args) {
  
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu",`Bu komutu kullanabilmek için **Rolleri Yönet** adlı yetkin yok`)); 

  
  let yetkili = message.author
  let sahip = message.guild.members.cache.get(args[0])
	let botisim = message.guild.members.cache.get(args[1])
  let botlistyetkili = db.fetch(`${message.guild.id}_botlist-yetkili`)
  let botrol = db.fetch(`${message.guild.id}_botrol`)
  let devrol = db.fetch(`${message.guild.id}_devrol`)
	  let log =  db.fetch(`${message.guild.id}_botlog`)
	let eklekanal = db.fetch(`${message.guild.id}_eklekanal`)
  let basvurulog =   db.fetch(`${message.guild.id}_basvurulog`)
 const yetkilikanal = db.fetch(`yetkilikanal_${message.guild.id}`)

   if (message.channel.id !== yetkilikanal) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu",`Bu komutu sadece <#${yetkilikanal}> kanalında kullanabilirsin.`))
	if (!botisim) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu","Aşağıdaki adımları doğru olarak yapınız \n ``#onayla bot-id sahip-id``"))
  if(!sahip) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu","Aşağıdaki adımları doğru olarak yapınız \n ``#onayla bot-id sahip-id``"))
  message.delete()
    sahip.roles.add(devrol)
  botisim.roles.add(botrol)
  let embedd = new Discord.MessageEmbed()
  .setDescription(`> ${botisim} **adlı botun onaylandı.Developer permin verildi** \n\n >  **Onaylayan yetkili =** ${yetkili} `)
  sahip.send(embedd)
   let embed2 = new Discord.MessageEmbed()
   .setColor('#5fbf00')
   .setDescription(`Flaxin Bot Başvuru Sonucu ${sahip} **adlı kişinin** ${botisim} **adlı botu onaylandı.** \n\n  > **Onaylayan yetkili =** ${yetkili} `)
		client.channels.cache.get(log).send(embed2)
		
    
  
    

  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot-onayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6
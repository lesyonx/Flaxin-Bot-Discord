const Discord = require('discord.js');
const db = require('quick.db')

exports.run = function(client, message, args) {
  const log =  db.fetch(`${message.guild.id}_botlog`)
	const botid = args[0] 
	const prefix = args[1]


    const botlistyetkili = db.fetch(`${message.guild.id}_botlist-yetkili`)
    const yetkilikanal = db.fetch(`yetkilikanal_${message.guild.id}`)
	const eklekanal = db.fetch(`${message.guild.id}_eklekanal`)
    const botlog = db.fetch(`${message.guild.id}_botlog`)
  const basvurulog =   db.fetch(`${message.guild.id}_basvurulog`)
  	if(!db.has(`${message.guild.id}_eklekanal`)) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu",'Başvuru kanalı henüz ayarlanmamış'))
	if(!db.has(`${message.guild.id}_botlog`)) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu",'Botlog kanalı henüz ayarlanmamış'))
  if (message.channel.id !== eklekanal) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu",`Bu komutu sadece <#${eklekanal}> kanalında kullanabilirsin.`))
	if (message.channel.id == eklekanal) {
  if (!botid) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu",`Botunun ID'sini yazmalısın.`))
  if (!prefix) return message.channel.send(new Discord.MessageEmbed().addField("Bir hata oluştu",`:no_entry: Botunun prefixini yazmalısın.`))
 
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setColor("ORANGE")
  .setDescription(`Botu Deneme Sunucusuna eklemek için [BANA BAS](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Flaxin Yeni Bot Başvurusu ")
  .addField("> Bot Sahibi", `<@${message.author.id}>` )
  .addField("> Bot ID", botid )
  .addField("> Bot Prefix", prefix ,)
 
  client.channels.cache.get(botlog).send(embed)
    let embed2 = new Discord.MessageEmbed()
    .setColor('#ffff00')
    
    .setDescription(`<@${message.author.id}> adlı kullanıcı <@${botid}> adlı botu sıraya ekledi.Yetkililerin En yakın zamanda test edip sunucuya eklenmesi rica olunur. \n\n > 🔖 | **Prefix =** {  ${prefix}  }`)
    .addField("Hey!",`Botu Deneme Sunucusuna eklemek için [BANA BAS](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`)
   client.channels.cache.get(yetkilikanal).send(`<@&${botlistyetkili}>`)
  client.channels.cache.get(yetkilikanal).send(embed2) 

   
  message.channel.send(new Discord.MessageEmbed().addField("İşte bu kadar",`__**Bot ekleme isteğiniz alındı.**__`)).then(x => x.delete({timeout: 300000}))
  }
  
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot-ekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
}; 
const Discord = require('discord.js');
const db = require('quick.db');
const useful = require('useful-tools')
module.exports.run = async (client, message, args) => {
  

  
  const aboness = await db.fetch(`${message.guild.id}_abone-ss`)
  const aboneyetkilisi = await db.fetch(`${message.guild.id}_aboneyetkilisi`)
  const abonelog = await db.fetch(`${message.guild.id}_abonelog`)
  
  if(aboness == null) return message.channel.send('Abone Rolü Vermek İçin Birini Etiketle');
  if (message.channel.id !== aboness) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu!').setDescription(`Bu komutu sadece <#${aboness}> adlı kanalda kullanabilirsiniz!`));
  if (aboness == true) return; 
  if (aboness == false) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu!').setDescription(`Bu sistem sunucuda aktif edilmemiş!`));;
  
 if(!message.member.roles.cache.has(db.fetch(`${message.guild.id}_aboneyetkilisi`))) {
    return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Bu komutu kullanabilmek için <@&${aboneyetkilisi}> yetkisine sahip olman gerekiyor `));
 }
  let user = message.mentions.members.first()
   if (!user) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setTitle('Bir hata oluştu!').setDescription(`Abone rolü kişiyi etiketlemen lazım!`));

  user.roles.remove(db.fetch(`${message.guild.id}_abonerol`))
  const embed = new Discord.MessageEmbed()
  .setColor('ORANGE')
  .setTimestamp()
  .setThumbnail(client.user.avatarURL)
  .setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
  .addField(`Abone Rolü Alınan Kullanıcı;`, `${user}`,true)
  .addField(`Abone Rolünü Alan Yetkili;`,`${message.author}`,true)
  .addField("Güzel bir haber : ",`Abone Rolünü Alan Kişinin Hanesinden 1 Abone Puanı Silindi`)
 
      message.channel.send(embed)
  db.delete(`aboneistatistik${message.author.id}.${message.guild.id}`, 1)

  const tarih = new Date()
  const embed1 = new Discord.MessageEmbed()
  .setThumbnail(client.user.avatarURL)
  .setColor("ORANGE")
  .setDescription(`İşte Eski Abonenin Bilgileri`, true)
  .setTitle("Flaxin | Abone Rolü Alındı")
  .setFooter( message.guild.name , client.user.displayAvatarURL())
  .addField("> Abone rolü alınan kişi", `${user}` )
  .addField("> Kişinin İD'si", `${user.id}`)
  .addField("> Abone rolünün alındığı zaman",useful.tarih(tarih), true)
 
  client.channels.cache.get(abonelog).send(embed1)

  const  embedd = new Discord.MessageEmbed()
  .setDescription(`> Hey ${user}, \n > Dostum kötü haberlerim var. Abone rolün geri alındı! \n > İşte bilgiler : \n > Rolü alan yetkili : ${message.author}`, true)
  .addField("> Abone rolünün alındığı tarih :", useful.tarih(tarih))
  .setColor("ORANGE")
  user.send(embedd)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "abone-kaldır",
  description: "31!",
  usage: "abone"
};
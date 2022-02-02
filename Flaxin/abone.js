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
  if (aboness == false) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu!').setDescription(`Bu sistem sunucuda aktif edilmemiş!`));
  
 if(!message.member.roles.cache.has(db.fetch(`${message.guild.id}_aboness`))) {
    return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Bu komutu kullanabilmek için <@&${aboneyetkilisi}> yetkisine sahip olman gerekiyor `));
 }
  let user = message.mentions.members.first()
   if (!user) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setTitle('Bir hata oluştu!').setDescription(`Kime rol verilcek kişiyi etiketlemen lazım!`));
   if (user.roles.cache.has(db.fetch(`${message.guild.id}_abonerol`))) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu!').setDescription(`Bu kullanıcının zaten abone rolü bulunmaktadır.`));
  user.roles.add(db.fetch(`${message.guild.id}_abonerol`))
  const embed = new Discord.MessageEmbed()
  .setColor('ORANGE')
  .setTimestamp()
  .setThumbnail(client.user.avatarURL)
  .setFooter( message.guild.name , client.user.displayAvatarURL({dynamic:true}))
  .addField(`Abone Rolü Alan Kullanıcı;`, `${user}`,true)
  .addField(`Abone Rolü Veren Yetkili;`,`${message.author}`,true)
  .addField("Güzel bir haber : ",`Abone rolü veren kişinin hanesine 1 abone puanı eklendi`)
 
      message.channel.send(embed)
  db.add(`aboneistatistik${message.author.id}.${message.guild.id}`, 1)

  const tarih = new Date()
  const embed1 = new Discord.MessageEmbed()
  .setThumbnail(client.user.avatarURL)
  .setColor("ORANGE")
  .setDescription(`İşte Abone Bilgileri`, true)
  .setTitle("Flaxin | Yeni Abone")
  .setFooter( message.guild.name , client.user.displayAvatarURL())
  .addField("> Abone olan kişi", `${user}` )
  .addField("> Kişinin İD'si", `${user.id}`)
  .addField("> Abone rolünün verildiği zaman",useful.tarih(tarih))
 
  client.channels.cache.get(abonelog).send(embed1)

  const  embedd = new Discord.MessageEmbed()
  .setDescription(`> Hey ${user}, \n > Sana güzel haberlerim var. Abone rolün verildi! \n > İşte bilgiler : \n > Rolü veren yetkili : ${message.author}`, true)
  .addField("> Abone rolünün verildiği tarih :", useful.tarih(tarih))
  .setColor("ORANGE")
  user.send(embedd)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "abone",
  description: "31!",
  usage: "abone"
};
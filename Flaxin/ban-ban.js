const Discord = require("discord.js");
const db = require ('quick.db')

exports.run = (client, message, args) => {
  
  
  
  
    const banlog =  db.fetch(`ban.log_${message.guild.id}`)
    const banyetkilisi =  db.fetch(`${message.guild.id}_ban.yetkilisi`)
    const ydkbanlog =  db.fetch(`${message.guild.id}_yedek.ban.log`)


    if(!message.member.roles.cache.has(db.fetch(`${message.guild.id}_ban.yetkilisi`))) {
        return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Bu komutu kullanabilmek için <@&${banyetkilisi}> yetkisine sahip olman gerekiyor `));
    }
    if (banlog == true) return; 
    if (banlog == false) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu!').setDescription(`Bu sistem sunucuda aktif edilmemiş!`));;
    let user = message.mentions.users.first();
    let reason = args.slice(1).join(' ');
  if(!user) return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu","Kimi sunucudan yasaklayacağımı belirtmedin"))
  if (reason.length < 1) return message.reply(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",'Lütfen yasaklayacağınız kişiyi neden yasaklayacağınızı belirtin'));
  if (user.id === message.author.id) return message.reply(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",'Kendini Banlayamazssın'));
  
  message.guild.members.ban(user);

  
  message.channel.send(new Discord.MessageEmbed().setColor("ORANGE").addField("İşte bu kadar",`Kullanıcı başarıyla sunucudan yasaklandı Gerekli bilgiler <#${banlog}> kanalında yazmaktadır`))
 
  
  const embed1 = new Discord.MessageEmbed()
  .setThumbnail(client.user.avatarURL)
  .setColor("ORANGE")
  .setDescription(`İşte Kısa bir bilgi`, true)
  .setTitle("Flaxin | Ban Log")
  .setFooter( message.guild.name , client.user.displayAvatarURL())
  .addField("> Banlanan şahıs", `${user}` )
  .addField("> Şahsın İD'si", `${user.id}`)
  .addField("> Şahsı yasaklayan yetkili", `${message.author}`)
 
  client.channels.cache.get(banlog).send(embed1)

  const wuwununaq = new Discord.MessageEmbed()
  .setThumbnail(client.user.avatarURL)
  .setColor("ORANGE")
  .setDescription(`İşte Kısa bir bilgi`, true)
  .setTitle("Flaxin | Ban Log")
  .setFooter( message.guild.name , client.user.displayAvatarURL())
  .addField("> Banlanan şahıs", `${user}` )
  .addField("> Şahsın İD'si", `${user.id}`)
  .addField("> Yasaklanma nedeni", `${reason}`)
  .addField("> Şahsı yasaklayan yetkili", `${message.author}`)
 
  client.channels.cache.get(ydkbanlog).send(wuwununaq)
  
  const embedd = new Discord.MessageEmbed()
  .setThumbnail(client.user.avatarURL)
  .setColor("ORANGE")
  .setTitle("Flaxin Ban Sistemi")
  .setDescription(`**${message.guild.name}** Adlı Sunucudan Banlandınız | İşte Kısa bir bilgi`, true)
  .addField("> Yasaklayan yetkili", `${message.author}`)
  .addField("> Yasaklanma nedeni", `${reason}`)
  .addField("> Dostum, yasaklanmana üzüldüm", `Yasaklarken her ne kadarda gözümden yaş gelsede bunu yapmak zorundaydım..`)
  user.send(embedd)


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'ban',
}
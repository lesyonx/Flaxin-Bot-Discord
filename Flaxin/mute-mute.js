const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db")

module.exports.run = async (client, message, args) => {



    const mutelog =  db.fetch(`mute.log_${message.guild.id}`)
    const muteyetkilisi =  db.fetch(`${message.guild.id}_mute.yetkilisi`)
    const muted =  db.fetch(`${message.guild.id}_muted`)




    if(!message.member.roles.cache.has(db.fetch(`${message.guild.id}_mute.yetkilisi`))) {
        return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Bu komutu kullanabilmek için <@&${muteyetkilisi}> yetkisine sahip olman gerekiyor `));
     }



     if (mutelog == true) return; 
     if (mutelog == false) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu!').setDescription(`Bu sistem sunucuda aktif edilmemiş!`));;

  
     let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Sunucuda susturmak istediğin kullanıcıyı etiketlemelisin!`))
  
 
  

  let zaman = args[1]
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu","Etiketlenen kişinin ne kadar süre susturulmuş duracağını belirtmelisin! \n Şablon : \n  `#mute @etiket süre sebep` \n Örnek : \n  `#mute @wuwu 5m cöt wuwu olana kadar hapistesin .c`"))

 

let sebep = args.join(' ').slice(args[1].length+args[0].length + 1)
if(!sebep) sebep = 'Sebep belirtilmedi'
  


  const wasted = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setTitle("> Flaxin | Mute Sistemi")
  .setDescription(`> Flaxin Susturulmuş Yeni Bir Kullanıcı Mevcut`)
  .addField(`> Susturulan Şahıs :`, kişi, true)
  .addField(`> Susturan Yetkili :`, `<@${message.author.id}>`, true)
  .addField(`> Sebep :`, sebep, true)
  .addField(`> Süre :`, zaman.replace(/s/, ' __saniye__').replace(/m/, ' __dakika__').replace(/h/, ' __saat__').replace(/d/, ' __gün__'), true)
  .setTimestamp()
  .setColor("ORANGE")
  .setFooter(`Flaxin Sayesinde Adalet Tekrar Yerini Buldu`)
  .setThumbnail(message.author.avatarURL())
  
  const bitti = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setTitle("> Flaxin | Mute Sistemi")
  .setDescription(`> Bir Şahsın Susturma Süresi Dolduğu İçin Susturulması Kaldırıldı`)
  .addField(`> Susturması Biten Kişi :`, kişi, true)
  .addField(`> Susturan Yetkili`, `<@${message.author.id}>`, true)
  .addField(`> Sebebi` , sebep, true)
  .setTimestamp()
  .setColor("ORANGE")
  .setFooter(`Flaxin Sayesinde Adalet Tekrar Yerini Buldu`)
  .setThumbnail(message.author.avatarURL())
  
kişi.roles.cache.forEach(r => {
   
    kişi.roles.add(muted);
    db.set(`bmute_${kişi.id}` , 'var')})

client.channels.cache.get(mutelog).send(wasted)
    message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("İşte bu kadar",`Şahıs Başarıyla Susturuldu! \n Gerekli bilgiler <#${mutelog}> Kanalında yazmaktadır`))
    const  embedd = new Discord.MessageEmbed()
      .setDescription(`> Hey ${kişi}, \n > Dostum kötü haberlerim var şu anda **${message.guild.name}** sunucusunda yetkili tarafından susturuldun! \n Aşağıda bilgiler bulunmakta `, true)
      .addField(`> Susturulma süren :`, zaman.replace(/s/, ' __saniye__').replace(/m/, ' __dakika__').replace(/h/, ' __saat__').replace(/d/, ' __gün__'), true)
      .addField(`> Sana göre adaletsiz yetkili : `, `<@${message.author.id}>`, true)
      .addField(`> Susturulma sebebin` , sebep, true)
      .setColor("ORANGE")
      kişi.send(embedd)
    setTimeout(async () =>{
        db.delete(`mute_${kişi.id}`)
      kişi.roles.remove(muted)
      const  embedd1 = new Discord.MessageEmbed()
      .setDescription(`> Hey ${kişi}, \n > Dostum iyi haberlerim var susturma süren bitmiş bulunmakta! \n> Umarım birdaha karışıklık çıkarmazsın! Senin yüzünden kurucu çıldırdı biliyor musun >:C`, true)
      .setColor("ORANGE")
      kişi.send(embedd1)
      client.channels.cache.get(mutelog).send(bitti)
  }, ms(zaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
 name: 'mute'
};
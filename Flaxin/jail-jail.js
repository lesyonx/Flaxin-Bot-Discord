const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db")

module.exports.run = async (client, message, args) => {



    const jaillog =  db.fetch(`${message.guild.id}_jaillog`)
    const jailyetkilisi =  db.fetch(`${message.guild.id}_jailyetkilisi`)
    const jail =  db.fetch(`${message.guild.id}_jailrol`)
    const uye =  db.fetch(`${message.guild.id}_uye`)



    if(!message.member.roles.cache.has(db.fetch(`${message.guild.id}_jailyetkilisi`))) {
        return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Bu komutu kullanabilmek için <@&${jailyetkilisi}> yetkisine sahip olman gerekiyor `));
     }



     if (jaillog == true) return; 
     if (jaillog == false) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu!').setDescription(`Bu sistem sunucuda aktif edilmemiş!`));;
  

  
     let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Jaile atacağın kullanıcıyı etiketlemelisin!`))
  


  let zaman = args[1]
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu","Etiketlenen kişinin ne kadar süre jailde duracağını belirtmelisin! \n Şablon : \n  `#jail @etiket süre sebep` \n Örnek : \n  `#jail @wuwu 5m cöt wuwu olana kadar hapistesin (KALBİMDE..)`"))




let sebep = args.join(' ').slice(args[1].length+args[0].length + 1)
if(!sebep) sebep = 'Sebep belirtilmedi'
  


  const wasted = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setTitle("Flaxin | Hapishane Sistemi")
  .setDescription(`Flaxin Tarafından Hapishaneye Yeni Bir Kullanıcı Katıldı`)
  .addField(`Katılan Şahıs :`, kişi, true)
  .addField(`Adaletli Olan Yetkili :`, `<@${message.author.id}>`, true)
  .addField(`Sebep :`, sebep, true)
  .addField(`Süre :`, zaman.replace(/s/, ' __saniye__').replace(/m/, ' __dakika__').replace(/h/, ' __saat__').replace(/d/, ' __gün__'), true)
  .setTimestamp()
  .setColor("ORANGE")
  .setFooter(`Flaxin Sayesinde Adalet Tekrar Yerini Buldu`)
  .setThumbnail(message.author.avatarURL())
  
  const bitti = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL())
  .setTitle("Flaxin | Hapishane Sistemi")
  .setDescription(`Flaxin Hapishane Müdürlüğünden Bir Kullanıcının Ceza Süresi Doldu`)
  .addField(`Cezası Biten Kişi :`, kişi, true)
  .addField(`Şahsı Hapishaneye atan yetkili`, `<@${message.author.id}>`, true)
  .addField(`Sebebi` , `Süre aşımı`, true)
  .setTimestamp()
  .setColor("ORANGE")
  .setFooter(`Flaxin Sayesinde Adalet Tekrar Yerini Buldu`)
  .setThumbnail(message.author.avatarURL())
  
kişi.roles.cache.forEach(r => {
    kişi.roles.cache.forEach(s => kişi.roles.remove(s.id));
    kişi.roles.add(jail);
    db.set(`bjail_${kişi.id}` , 'var')})

client.channels.cache.get(jaillog).send(wasted)
    message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("İşte bu kadar",`Şahıs Başarıyla Hapishaneye yollandı! \n Gerekli bilgiler <#${jaillog}> Kanalında yazmaktadır`))
    const  embedd = new Discord.MessageEmbed()
      .setDescription(`> Hey ${kişi}, \n > Dostum kötü haberlerim var şu anda hapishane sistemimdesin! \n Aşağıda bilgiler bulunmakta `, true)
      .addField(`Ceza süren :`, zaman.replace(/s/, ' __saniye__').replace(/m/, ' __dakika__').replace(/h/, ' __saat__').replace(/d/, ' __gün__'), true)
      .addField(`Sana göre adaletsiz yetkili : `, `<@${message.author.id}>`, true)
      .addField(`Ceza sebebin` , `Süre aşımı`, true)
      .setColor("ORANGE")
      kişi.send(embedd)
    setTimeout(async () =>{
        db.delete(`jail_${kişi.id}`)
      kişi.roles.remove(jail)
      kişi.roles.add(uye);
      const  embedd1 = new Discord.MessageEmbed()
      .setDescription(`> Hey ${kişi}, \n > Dostum iyi haberlerim var Hapishane süren bitmiş bulunmakta! \n Umarım birdaha karışıklık çıkarmazsın! Senin yüzünden kurucu çıldırdı biliyor musun..`, true)
      .setColor("ORANGE")
      kişi.send(embedd1)
      client.channels.cache.get(jaillog).send(bitti)
  }, ms(zaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
 name: 'jail'
};
const Discord = require("discord.js");
db = require("quick.db");
const ms = require('parse-ms')
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.run = async (client, message, args, member) => {
    let timeout = 15000 //bunu ellemeyin 24 saat 

    let daily = await db.fetch(`ooto-cvp-sil${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Komudu tekrar kullanabilmek için **${time.seconds} saniye** beklemelisin!`)).then(x => x.delete({timeout: 6000}))




} else {
 db.set(`ooto-cvp-sil${message.author.id}`, Date.now())
 const embeddd = new Discord.MessageEmbed()
  .addField("Bir hata oluştu", "Maalesef **Sunucuyu yönet** adlı yetkin yok")
  .setColor("RED");

                let mentionEmbed = new Discord.MessageEmbed()
                    .addField("Bir hata oluştu", "Lütfen aşağıdaki örnek gibi sistemi kullanın \n Taslak : \n ``#oto-cevap-ekle chatte-yazılacak-yazı botun-vereceği-cevap`` \n Örnek : \n ``#oto-cevap ekle crlg https://discord.gg/py67RwF2n3``")
                     .setColor('RED')
               var user = message.mentions.users.first() || message.author;
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(embeddd)
                     if (!args[0]) return message.channel.send(mentionEmbed)
                     if (!args[1]) return message.channel.send(mentionEmbed) 
                
              
                   let komut = await db.fetch(`sunucuKomut_${message.guild.id}`) 
                	 let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                	 if(!komut) return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",'Bu sunucuda zaten ayarlı bir oto cevap yok'))
                	 	let komutvarmi = await db.fetch(`sunucuKomut_${message.guild.id}`)
                	if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Lütfen silmek istediğiniz özel komudu giriniz\n Aktif olan oto cevap : \`${komut}\``))
                	if(args[0] !== komut) return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Bu komutu bu sunucuda bulamadım \n Aktif olan oto cevap : \`${komut}\``))
                   if(args[0] == 'Bulunmuyor.') return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Bu komutu bu sunucuda bulamadım \n Aktif olan oto cevap : \`${komut}\``))
                    
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`Bu sunucudan ayarlanan oto cevap komutları silindi ve sistem otomatik olarak devre dışı bırakıldı`, `Silinen komut \`${komut}\` `)
                     .setColor('ORANGE')
                
                     db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                     db.delete(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
                        message.channel.send(welcomeEmbed) 

}
  };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "oto-cevap-sil"
}
  
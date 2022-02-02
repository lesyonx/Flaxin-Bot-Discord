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

    let daily = await db.fetch(`ooto-cvp${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Komudu tekrar kullanabilmek için **${time.seconds} saniye** beklemelisin!`)).then(x => x.delete({timeout: 6000}))




} else {
 db.set(`ooto-cvp${message.author.id}`, Date.now())
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
                
                     let komut;
                     if (!args[0]) komut = ''; 
                     else komut = (args[0]); 
 if(args[0] == 'yardım' || args[0] == 'bilgi') return message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",'Maalesef botun komutlarından olan yazıları eklemenize izin veremiyorum (bazıları)'))                  
  let gonderileceksey;
                     if (args.slice(1, 1000, args[1]).join(' ') === 'NONE') gonderileceksey = ''; 
                     else gonderileceksey = args.slice(1, 1000, args[1]).join(' '); 
                
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`Bu sunucuda oto cevap sistemi başarıyla etkinleştirildi`, `\`${komut}\` yazıldığı zaman \n \`${gonderileceksey}\` olarak bot size yanıt verecek \n Not : \n \`Bu komutta sadece 1 tane oto cevap kaydedebilirsiniz ikinci eklemede 1.cevap silinir 2.cevap kaydedilir\` `)
                     .setColor('ORANGE')
                     db.set(`sunucuKomut_${message.guild.id}`, komut)
                     db.set(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
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
    name: "oto-cevap-ekle"
}
  
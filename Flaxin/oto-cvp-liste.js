const Discord = require("discord.js");
db = require("quick.db");
const ms = require('parse-ms')
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.run = async (client, message, args, member) => {
    let timeout = 5000 //bunu ellemeyin 24 saat 

    let daily = await db.fetch(`ooto-cvp-liste${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(new Discord.MessageEmbed().setColor("RED").addField("Bir hata oluştu",`Komudu tekrar kullanabilmek için **${time.seconds} saniye** beklemelisin!`)).then(x => x.delete({timeout: 6000}))




} else {
 db.set(`ooto-cvp-liste${message.author.id}`, Date.now())
          let komut = await db.fetch(`sunucuKomut_${message.guild.id}`)

                     let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                     if(!komut) await db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                  
                  
                     let welcomeEmbed = new Discord.MessageEmbed()
                      .setThumbnail(client.user.avatarURL)
                     .addField(`Bu sunucuda aktif olan oto cevap`, `\`${komut}\` \n **Verilen Cevap** \n \`${gonderileceksey}\``)
                     .setColor('ORANGE')
                     .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
    
.setFooter(message.guild.name , client.user.displayAvatarURL({dynamic:true}))
                        message.channel.send(welcomeEmbed)
}     /////////////// \n Verilen Cevap \`${gonderileceksey}\`
  };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "oto-cevap-liste"
}
  
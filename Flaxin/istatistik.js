const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
db = require("quick.db");
require("moment-duration-format");


module.exports.run = async (client, message, args) => {
 
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
 let aylar = aylartoplam 

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)


  const msg = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setFooter(client.user.tag, client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
    .setTitle(`Flaxin İstatistik`)
    .addField(
      "<:join:767781105923129379>  **Sahip:**", "<@678600075823546398> \n <@453202339298279424>",
      false
    )
    .addField(
      "<:join:767781105923129379>   **Hizmet verdiği Kullanıcı sayısı:**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      false
    )
    .addField(
      "<:join:767781105923129379>   **Hizmet verdiği Sunucu sayısı:**",
      client.guilds.cache.size.toLocaleString(),
      false
    )
    .addField(
      "<:join:767781105923129379>   **Hizmet verdiği kanal sayısı:**",
      client.channels.cache.size.toLocaleString(),
      false
    )
    .addField("<:join:767781105923129379>   **Discord.JS versiyon:**", "v" + Discord.version, false)
    .addField("<:join:767781105923129379>   **Node.JS versiyon:**", `${process.version}`, false)
    .addField("<:join:767781105923129379>   **Ping:**", - client.ws.ping + " ms", false)
    .addField("<:join:767781105923129379>   **Uptime**", duration)
    .addField("<:join:767781105923129379>   **Bot kuruluş zamanı**", s)
    .addField("<:join:767781105923129379>   **Hafıza Kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
    .addField("<:join:767781105923129379>   **İşlemci**", `\`\`${os.platform()}\`\``)
    .addField("<:join:767781105923129379>   **Bit**", `\`${os.arch()}\``, true)
   .addField(
      "<:join:767781105923129379>  **CPU**",
      `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``
    )
  .setImage("https://cdn.discordapp.com/attachments/804337041776181299/805131070311497738/standard_2.gif")
  return message.channel.send(msg);




};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['s', 'i', 'istatistik'],
    permLevel: 0
  };
   
  exports.help = {
    name: "stats",

  };
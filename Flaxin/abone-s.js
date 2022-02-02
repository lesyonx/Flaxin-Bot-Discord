const Discord = require(`discord.js`);
const db = require(`quick.db`)

module.exports.run = async (client, message, args) => {
 
let kişi = message.mentions.users.first()
if(!args[0]) {
    const abonestats = await db.fetch(`aboneistatistik${message.author.id}.${message.guild.id}`)
    const flaxin1 = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**${message.author} İsimli Yetkilinin Verdiği Abone Rolü Sayısı**
     <a:emoji_1:748419450704887869>**Toplam \`${abonestats ? abonestats : '0'}\` Abone Rolü Vermişsin.**`)
    message.channel.send(flaxin1)}
if(kişi) {
    const abonestats2 = await db.fetch(`aboneistatistik${kişi.id}.${message.guild.id}`)
    const flaxin = new Discord.MessageEmbed()
    .setAuthor(kişi.username, kişi.avatarURL)
    .setThumbnail(message.mentions.users.first().avatarURL())
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**Yetkilinin Bilgileri**
   <a:emoji_1:748419450704887869> **Toplam \`${abonestats2 ? abonestats2 : '0'}\` Abone Rolü Vermiş.**`)
    message.channel.send(flaxin)}  


};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["abone-istatistik","abone-stats","abonestats"],
 permLevel: 0,
};
exports.help = {
 name: 'aboneistatistik'
};
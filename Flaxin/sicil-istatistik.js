const Discord = require(`discord.js`);
const db = require(`quick.db`)

module.exports.run = async (client, message, args) => {
 
let kişi = message.mentions.users.first()
if(!args[0]) {
    const sicilküfür = await db.fetch(`sicil.küfür${message.author.id}.${message.guild.id}`)
    const sicillink = await db.fetch(`sicil.link${message.author.id}.${message.guild.id}`)


    const flaxin1 = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setColor("ORANGE")
    .setFooter(`${message.author.tag} Tarafından İstendi.`)
    .setDescription(`**${message.author} Merhaba Aşağıda İşlediğin Vukuatlar Yazmaktadır!**
     
    
     **Ettiğin Toplam Küfür Sayısı \`${sicilküfür ? sicilküfür : '0'}\`**
     **Yaptığın Toplam Reklam Sayısı \`${sicillink ? sicillink : '0'}\`**`)
    message.channel.send(flaxin1)}

    if(kişi) {
        const sicilküfür1 = await db.fetch(`sicil.küfür${kişi.id}.${message.guild.id}`)
    const sicillink1 = await db.fetch(`sicil.link${kişi.id}.${message.guild.id}`)
        const flaxin = new Discord.MessageEmbed()
        .setAuthor(kişi.username, kişi.avatarURL)
        .setThumbnail(message.mentions.users.first().avatarURL())
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter(`${message.author.tag} Tarafından İstendi.`)
        .setDescription(`**<@${kişi.id}> Adlı Şahsın Aşağıda Vukuat Bilgileri Yazmaktadır!**
        
        
        **Ettiğin Toplam Küfür Sayısı \`${sicilküfür1 ? sicilküfür1 : '0'}\`**
        **Yaptığın Toplam Reklam Sayısı \`${sicillink1 ? sicillink1 : '0'}\`**`)
        message.channel.send(flaxin)}  



};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["sicil-i"],
 permLevel: 0,
};
exports.help = {
 name: 'sicil-istatistik'
};
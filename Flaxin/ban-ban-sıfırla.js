const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {

   if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu').setDescription(`Maalesef **Yönetici** adlı yetkin yok`));    
    
db.delete(`${message.guild.id}_yedek.ban.log`)
db.delete(`${message.guild.id}_ban.yetkilisi`)
db.delete(`${message.guild.id}_yedek.ban.log`)


            message.channel.send(new Discord.MessageEmbed().addField("İşte bu kadar",'Ban sistemi başarıyla sıfırlandı'))

}
exports.conf = {
    aliases: []
}
exports.help = {
    name: "ban-sistemi-sıfırla"
}
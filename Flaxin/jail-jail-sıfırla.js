const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {

   if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu').setDescription(`Maalesef **Yönetici** adlı yetkin yok`));    
    
db.delete(`${message.guild.id}_jaillog`)
db.delete(`${message.guild.id}_jailyetkilisi`)
db.delete(`${message.guild.id}_jailrol`)
db.delete(`${message.guild.id}_uye`)

            message.channel.send(new Discord.MessageEmbed().addField("İşte bu kadar",'Jail sistemi başarıyla sıfırlandı'))

}
exports.conf = {
    aliases: []
}
exports.help = {
    name: "jail-sıfırla"
}
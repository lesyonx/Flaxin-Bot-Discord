const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {

   if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu').setDescription(`Maalesef **Yönetici** adlı yetkin yok`));    
    
db.delete(`${message.guild.id}_botrol`)
db.delete(`${message.guild.id}_devrol`)
db.delete(`${message.guild.id}_botlog`)
db.deleye(`${message.guild.id}_eklekanal`) 
db.delete(`${message.guild.id}_basvurulog`)
db.delete(`yetkilikanal_${message.guild.id}`)
db.delete(`${message.guild.id}_botlist-yetkili`)
            message.channel.send(new Discord.MessageEmbed().addField("İşte bu kadar",'Botlist sistemi başarıyla sıfırlandı'))

}
exports.conf = {
    aliases: []
}
exports.help = {
    name: "botlist-sıfırla"
}
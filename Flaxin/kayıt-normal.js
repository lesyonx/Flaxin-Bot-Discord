const db = require("quick.db");
const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  

  

  if (!message.member.hasPermission("ADMINISTRATOR")) return  message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle('Bir hata oluştu').setDescription(`Maalesef **Yönetici** adlı yetkin yok!`));

  const cinsiyetkayit = await db.fetch(`cinsiyetkayit_${message.guild.id}`)
  if (cinsiyetkayit) {
      const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Bir hata oluştu")
        .setDescription("Bu Sunucuda **Cinsiyetli Kayıt** aktif. Lütfen normal kayıt sistemini kullanmak için cinsiyeti kapatınız");
      message.channel.send(embed);
      return;
  }


  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Bir hata oluştu")
      .setDescription(`Yanlış Kullanım! \n Örnek : \n **#normal aç/kapat**`);
    message.channel.send(embed);
    return;
  }

  let kufur = await db.fetch(`normalkayit_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kufur) {
      const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Bir hata oluştu")
        .setDescription("Bu sistem zaten aktifmiş");
      message.channel.send(embed);
      return;
    } else {
      db.set(`normalkayit_${message.guild.id}`, "Açık");
      const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("İşte bu kadar")
        .setDescription("Normal Kayıt Sistemi başarıyla açıldı!");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`normalkayit_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("İşte bu kadar")
      .setDescription("Normal Kayıt Sistemi başarıyla kapatıldı!");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "normal",

};
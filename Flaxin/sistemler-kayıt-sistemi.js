const Discord = require("discord.js"),
db = require("quick.db");
exports.run = async (client, message, args, member) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "#";

   const flaxin = new Discord.MessageEmbed()
    .setAuthor(`Flaxin`,message.author.avatarURL())
    
    .addField("Rehber :",'`Kendi sunucunuza göre (Public, Youtube, Priv Sunucusu) aşağıdaki kurulum öncesi kategorisindeki sistemleri aktif edin. Devamında #kayıt-kur sizin seçtiğiniz sistemlere göre şekillenecek! \n Not : \n Botun rolü üstte olması gerekiyor ve Kurulum kategorisinde maks 1 tane sistem açabilirsiniz.`')
    .addField("**Kurulum öncesi** :", `\n> • | [#cinsiyet aç /  #cinsiyet kapat](https://discord.gg/f6jENhm) \n \n>  • | [#normal aç /  #normal kapat](https://discord.gg/f6jENhm)`,true)
    .addField(`**Komut Açıklaması**`, `> **Kayıt sistemini Cinsiyetli yapar** \n \n> **Kayıt sistemini Normal yapar**`, true)
    
    .addField("`Eğer sistemlerin en az 1 tanesini açtıysan aşağıyı okuyabilirsin!`",`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
    
    .addField("Kurulum Sonrası :", `\n> • | [#kayıt-kur](https://discord.gg/f6jENhm)`,true)
    .addField(`Komut Açıklaması`, `> **Kayıt sistemini sunucunuza kurar**`, true)

   
    .addField("`Eğer kayıt sistemini zenginleştirmek istersen aşağıya bak!`",`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
    .addField("Not :","`Bu kategoriyi kullanmak için kayıt sisteminin **kurulmuş** olması lazım!`")
    .addField("Komutlar :", `\n> • | [#tag-ayarla](https://discord.gg/f6jENhm)  \n \n>  • | [#giriş-mesajı-ayarla](https://discord.gg/f6jENhm)`,true)
    .addField(`Komut Açıklaması`, `> **Tag sunucuları için kayıt esnasında ismin başına tag koyar** \n \n> **Kayıt kanalında yazılan mesajı ayarlar**`, true)

    .addField("`Herşey hazır mı ? Kayıt sistemini kullanmak için komutlar aşağıda bulunmaktadır!`",`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
    .addField("Not :","`Bu kategoriyi kullanmak için kayıt sisteminin **kurulmuş** olması lazım!`")
    .addField("Komutlar :", `\n> • | [#erkek, #kadın](https://discord.gg/f6jENhm)  \n \n>  • | [#kayıt](https://discord.gg/f6jENhm)  \n \n>  • | [#kayıt-istatistik](https://discord.gg/f6jENhm)`,true)
    .addField(`Komut Açıklaması`, `> **Cinsiyet kayıt erkek ve kadın kayıt** \n \n> **Normal kayıt için komut**  \n \n> **Kendinizin veya etiketlenenin kayıt sayısına bakarsınız**`, true)
   

    .addField("`İşte bazı sorular ve cevaplar`",`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
    .addField("Kayıt sisteminde cinsiyette zorunlu olarak isim yaş istemiyor","`Evet, isim yaş istemiyor. Kendiniz bir public veya başka tür bir sunucuda yetkili tarafından belirlenen sistem ile kaydebilirsiniz \n Örnek :\n Yetkili isim yaş istiyorsa #erkek/#kadın @etiket isim yaş | İstemiyorsa #erkek/#kadın @etiket`")
    .addField("Veri Sıfırlanırsa ne yapmalıyım?", "`Veri sıfırlama öncesinde discord sunucumuzda duyuru yapılmaktadır. Veri sıfırlandığında ayarları baştan yapınız.`",true)
    
    .addField("`Sistemi sevmediysen ve sunucundan silmek istiyorsan`",`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
    .addField("Komut :", `\n> • | [#kayıt-sistemi-sıfırla](https://discord.gg/f6jENhm)`,true)
    .addField(`Komut Açıklaması`, `> **Kayıt sistemini sıfırlar**`, true)
    .addField(":link: | Linkler:", "• [Davet Et](https://discordapp.com/oauth2/authorize?client_id=702899426947235950&scope=bot&permissions=8) • [Destek Sunucusu](https://discord.gg/f6jENhm) • [Oy Ver](https://bit.ly/FlaxinVote) • [Sponsor](https://discord.gg/vvcgUQdYWA)•")
    .setFooter("Flaxin © 2021", client.user.displayAvatarURL())
    .setColor("ORANGE")
   .setTimestamp()
   message.channel.send(flaxin)

  };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "kayıt-sistemi"
}
  
const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '431943032:AAEddKA9X8nDXRbzwg4rpQQXZ2Aw_YUT68o' 
     
});


bot.on('/start', function (msg) {
  return bot.sendMessage(msg.from.id, "Hoi " + msg.from.first_name + " Hallo tof dat je de bilal assistent gebruikt.De bot is nog in de alfa.Dit zijn de commands die je nu kan gebruiken.bijvoorbeeld: hoi, start, versie");
});



bot.on(/[vV]ersie/, (msg) => {
  return bot.sendMessage(msg.from.id, "dit is versie 1.2");
});


bot.on(/hoi|hallo/, function (msg) {
  return bot.sendMessage(msg.from.id, "Hoi " + msg.from.first_name, {
    replyToMessage: msg.message_id;
  } );
});



bot.start();


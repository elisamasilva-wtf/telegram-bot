const TelegramBot = require('node-telegram-bot-api');
const op = require('./myaction.js');
// Substitua o valor abaixo pelo token de telegrama que você recebe de @BotFather
// const token = '1297260365:AAGmjpv-tz1TvqvaPTGZi-byRU_xtR6iqaw';
const token = '1350778571:AAE1tLVc3roqisqipFj1B_ZVISPfXZEuUlE';
var chatId = '';
// Crie um bot que usa 'polling' para buscar novas atualizações
const bot = new TelegramBot(token, { polling: true });

bot.on('polling_error', (err) => console.log(err));

//Ouça qualquer tipo de mensagem. Existem diferentes tipos de mensagens.
bot.on('message', (msg) => {
  const msgReceived = document.querySelector('#messages');
  console.log(msgReceived);
  const start = new Date();
  console.log('Data: ', start.toLocaleString());
  //console.log('AQUI', msg);
  chatId = msg.chat.id;
  const newuser = msg.chat.first_name;
  const newmsg = msg.text;
  console.log('Usuário: ', newuser);
  console.log('Mensagem Recebida: ', newmsg);
  console.log("OP: ", op);
  

  //textContent = Define ou recupera o conteúdo de texto de um nó e qualquer nó filho.
  msgReceived.textContent = newmsg;

  //Responder msg
  //
  //msg.text = document.getElementById('input').submit();

  // enviar uma mensagem para o chat acusando o recebimento da mensagem

  //console.log(text);
  //responseMsg(msg);
});

function responseMsg() {
  //const text = msg.text;
  
  //const text = 'Estou funcionando';
  var text = document.getElementById('sendMsg').value;
  bot.sendMessage(chatId, text);

  console.log('Resposta:', text);
  console.log('id:', chatId);
}

//Obter mensagem editada
bot.on('edited_message', (msg) => {
  const start = new Date();
  console.log('Data: ', start.toLocaleString());
  const chatId = msg.chat.id;
  const newmsgedit = msg.text;
  console.log('Mensagem Editada:', newmsgedit);
  console.log('ID:', chatId);
  bot.sendMessage(
    chatId,
    'Atenção! Ao editar a mensagem esta alteração não é replicada ao operador, por favor envie uma nova mensagem!'
  );
});

sendButton = document.getElementById("send-button").addEventListener("click", responseMsg);


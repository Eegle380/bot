/////////////////////////////////////////////////////////////// Coisas para nao mudar///////////////////////////////////////////
const discord = require("discord.js");
const bot = new discord.Client();
const fetch = require("node-fetch")
const token = 'ODY0NTU1MDg0MTAwNzk2NDM2.YO3Jqg.AIico-OYwqyOOp4LBOlLH8hH-Ro'
const ytdl = require("ytdl-core");
const streamOptions = {seek: 0 , volume:1};
var isLoop = false;

////////////////////////////////////////////////////////////// Coisas  para  mudar//////////////////////////////////////////////
const  pel = [
    "belo saco.",
    "suas bolas são lisas.",
    "ótimo penis.",
    "rei da jeba.",
    "penis monumental",
    "Kid Bengala?",
    "padre Welliton? Eu não sabia que o senhor estava por aqui...",
    "acalme-se oni-chan isso é muito grande",
    "o seu pode ser bom, mas o meu é maior",
    "eu não sabia que ainda construiam arranha-céus por aqui..."
  ]
const  med = [' km', ' m' , ' cm', ' mm']  
const commands = ['!BOT'  ,  '!teste' , '!PLAY']

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

bot.login(token);


function getQuote() {
    return fetch("https://zenquotes.io/api/random")
      .then(res => {
        return res.json()
        })
      .then(data => {
        return data[0]["q"] + " -" + data[0]["a"]
      })
  }


bot.on("message", msg => {
  const upper = msg.content.toUpperCase();
  const channelnow= msg.member.voice.channelID
  const VoiceChannels = msg.guild.channels.cache.find(channel => channel.id === channelnow);
 
if(commands.some(word => upper.includes(word)) && upper.includes('TAMANHO DO PENIS')   )  {
       
        /////////////////////////////////////////////////////////////  Contas    
        tdp = Math.floor(Math.random() * 120)
        pelo = pel[Math.floor(Math.random() * pel.length)] 
        medi = med[Math.floor(Math.random() * med.length)] 
        /////////////////////////////////////////////////////////////
       
       msg.reply("Seu penis mede entorno de:  " + tdp + medi + ", " + pelo)
    
        }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
else if(commands.some(word => upper.includes(word)) &&  upper.includes('ENACHE') && upper.includes('DESC')){
  
 msg.channel.send("**Nome:**  *`Guilherme Enache`*  ")
 msg.channel.send("**Idade:**  *`17 anos`* ")
 msg.channel.send("**Categoria:**  *`Mestres`*")
 msg.channel.send("**Espécie:**  *`Mendigo`*")
 msg.channel.send("**Habilidade:**   *`Conhecimento (falho) sobre áreas tecnológicas, como programação`* ")
}       



else if(commands.some(word => upper.includes(word)) &&  upper.includes('SOBREIRA')  && upper.includes('DESC')){
  
 msg.channel.send("**Nome:**  *`Eduardo Sobreira`*  ")
 msg.channel.send("**Idade:**  *`16 anos`*")
 msg.channel.send("**Categoria:**  *`Mestres`*")
 msg.channel.send("**Espécie:**  *`E-boy`*")
 msg.channel.send("**Habilidade:**  *`Radar de góticas`*")
 
 }  


else if(commands.some(word => upper.includes(word)) &&  upper.includes('SASAKI')  && upper.includes('DESC')){
  
 msg.channel.send("**Nome:**  *`Victor Sasaki`*  ")
 msg.channel.send("**Idade:**  *`16 anos`*")
 msg.channel.send("**Categoria:**  *`Mestres`*")
 msg.channel.send("**Espécie:**  *`Primata`*")
 msg.channel.send("**Habilidade:**  *`Galantear com vigor, além do (estranho) conhecimento sobre lol`* ")
 
 }  


 else if(commands.some(word => upper.includes(word)) &&  upper.includes('IGOR') && upper.includes('DESC') ){
  
   msg.channel.send("**Nome:** *`Igor Lanziloti`* ")
   msg.channel.send("**Idade:**  *`16 anos`*")
   msg.channel.send("**Categoria:**  *`Mestres`*")
   msg.channel.send("**Espécie:**  *`Monza`*")
   msg.channel.send("**Habilidade:**  *`Alto conhecimento auto-mobítico, exedendo os limites`* ")
  
 }  

 else if(commands.some(word => upper.includes(word)) &&  upper.includes('VIEIRA')  && upper.includes('DESC')){
  
 msg.channel.send("**Nome:** *`Vinicius Vieira`* ")
 msg.channel.send("**Idade:**  *`16 anos`*")
 msg.channel.send("**Categoria:**  *`Sócio`*")
 msg.channel.send("**Espécie:**  *`Gordo`*")
 msg.channel.send("**Habilidade:**  *`Conseguir perder uma competição de ``quem come mais`` mesmo com esse tamanho.`* ")

}  


else if(commands.some(word => upper.includes(word)) &&  upper.includes('ROCHA')  &&   upper.includes('DESC') ){
  
 msg.channel.send("**Nome:** *`João Pedro Rocha*` ")
 msg.channel.send("**Idade:**  *`16 anos`*")
 msg.channel.send("**Categoria:**  *`Sócio`*")
 msg.channel.send("**Espécie:**  *`Pedra`*")
 msg.channel.send("**Habilidade:**  *`Jogar valorant????`* ")

}  

else if(commands.some(word => upper.includes(word)) &&  upper.includes('IQUE')  && upper.includes('DESC')){

  msg.channel.send("**Nome:** *`Pedro Henrrique(Ique)`* ")
  msg.channel.send("**Idade:**  *`17 anos`*")
  msg.channel.send("**Categoria:**  *`Gerente`*")
  msg.channel.send("**Espécie:**  *`Pobre Slayer`*")
  msg.channel.send("**Habilidade:**  *`Odiar pobres e conseguir assistir Greys Anatomy 2 vezes`*")

}  

else if(upper.includes('!PLAY')){
  let CompleteMessage = msg.content.split(' ');
 
  
  let youtubeLink = CompleteMessage[1];
  
 
 if(channelnow !== null){

  VoiceChannels.join()
  .then(connection =>{
      const stream = ytdl(youtubeLink, {filter: 'audioonly'});
      
      const DJ = connection.play(stream , streamOptions);
     
      
    });

 
  }

 else{
  
  msg.reply("Você precisa estar em um canal de voz cabaço")

 }

}
if(upper.includes('!STOP')){
  msg.guild.me.voice.channel.leave();
  msg.reply('Falou seu pau no cu!')
     



}


else if(upper.includes('!HELP')){

  msg.channel.send("**Comandos:**")
  msg.channel.send("**Música:**  *`! play link_da_musica`*")
  msg.channel.send("**Help:**  *`! help`*")
  msg.channel.send("**Tamanho do pênis:**  *`!tamanho  do  penis`*")
  msg.channel.send("**Descrição breve de algumas pessoas:**  *`! bot desc Nome_da_Pessoa(ou apelido)`*")

}  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

else if(commands.some(word => upper.includes(word))){
   
   msg.reply("Cara se precisa digitar uma mensagem ou alguma coisa, burro pra caralho viu, use o comando !**help** se tiver dúvidas")
   
   
  }
 










  })

  /*VoiceChannels.join()
  .then(connection =>{
      const stream = ytdl(youtubeLink, {filter: 'audioonly'});

      const DJ = connection.play(stream , streamOptions);
      



   let CompleteMessage = msg.content.split(' ');
  const channelnow= msg.member.voice.channelID
  
  let youtubeLink = CompleteMessage[1];
  
  let VoiceChannels = msg.guild.channels.cache.find(channel => channel.id === channelnow);
      
      
      */
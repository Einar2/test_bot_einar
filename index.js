const { Telegraf } = require('telegraf')
require('dotenv').config()
const telegrafGetChatMembers = require('telegraf-getchatmembers')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(telegrafGetChatMembers)



bot.on('message', async(ctx) => {
    
    let idUser = ctx.getChatMembers()[0].user.id;
    let chatId = ctx.message.chat.id
    let chatIds = `${ctx.message.chat.id}`
    let fromId = ctx.message.from.id
    let  user = telegrafGetChatMembers.all[`${chatId}`][`${fromId}`].status;
//    console.log(ctx.message.chat.id)
    
    


   

      if(user === 'member'  ){
        try{
        await ctx.reply(`@${ctx.message.from.username}, вы не можете писать в данный чат 
Обратитесь к администратору`) 
        
         for(let i = -1; i <= 0; i++){
            await setTimeout(() => {
               ctx.deleteMessage(ctx.message.message_id-i) 
                
            },1000 * 60)
          }
        
        }catch (err){
            console.log("err")
      }

      } 

})



 



bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
const { Telegraf } = require('telegraf')
require('dotenv').config()
const telegrafGetChatMembers = require('telegraf-getchatmembers')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(telegrafGetChatMembers)


bot.on('message', async(ctx) => {
    
    let  user = ctx.getChatMembers()[0].status;
    let idUser = ctx.getChatMembers()[0].user.id;
//    console.log(ctx.message) 
   

      if(user !== 'creator' && user !== 'administrator' && idUser === ctx.message.from.id){

        try{
        await ctx.reply(`@${ctx.message.from.username}, вы не можете писать в данный чат 
Обратитесь к администратору`) 
        
         for(let i = -1; i <= 0; i++){
            await setTimeout(() => {
               ctx.deleteMessage(ctx.message.message_id-i) 
                
            },1000 * 60)
          }
        
        }catch (err){
            console.log('error')
      }

      } else{
          console.log('work')
          
      }

})




bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

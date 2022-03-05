const { Telegraf } = require('telegraf')
require('dotenv').config()
const telegrafGetChatMembers = require('telegraf-getchatmembers')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(telegrafGetChatMembers)


    


bot.on('new_chat_members', async (ctx) => {
   await ctx.reply(`@${ctx.message.from.username}, вы не можете писать в данный чат 
//Обратитесь к администратору`) 
    
    for(let i = -1; i <= -1; i++){
            await setTimeout(() => {
               ctx.deleteMessage(ctx.message.message_id-i) 
                
            },1000 * 15)
          }
    await ctx.tg.restrictChatMember(ctx.message.chat.id, ctx.message.from.id, [false])
})




bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
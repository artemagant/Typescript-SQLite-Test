import { Keyboard } from "./keyboard"
import { InlineKeyboard } from "grammy"

const keyboard = new Keyboard();

export class Commands
{
    async Start(ctx)
    {
        await ctx.reply("fuck u", 
            {
                reply_markup: keyboard.Start()
            });
    }

    async About(ctx)
    {
        await ctx.react('❤️');
        await ctx.reply("Made by: <span class='tg-spoiler'>@artemagant</span>\nThis bot is made by me to teach myself about sqlite, so i can start building bigger projects with bigger databases.\n<a href='google.com'>Github</a>", 
            {
                parse_mode: "HTML",
                disable_web_page_prewiew: true,
                reply_markup: new InlineKeyboard().text("ff", "ff")
            });
    }

    async Menu(ctx)
    {
        await ctx.reply("fuck u", 
            {
                reply_markup: keyboard.Menu()
            });
    }
}

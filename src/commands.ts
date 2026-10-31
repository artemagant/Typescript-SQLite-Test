import { Keyboard } from "./keyboard"
import { MenusLabels } from "./menus_labels.ts"

import { InlineKeyboard } from "grammy"


//const keyboard = new Keyboard();

export class Commands
{
    async Start(ctx)
    {
        await ctx.reply(MenusLabels.Start, 
            {
                reply_markup: Keyboard.Start
            });
    }

    async About(ctx)
    {
        await ctx.reply(MenusLabels.About, 
            {
                parse_mode: "HTML",
                disable_web_page_prewiew: true,
                reply_markup: Keyboard.About
            });
        await ctx.react('❤️');
    }

    async Menu(ctx)
    {
        await ctx.reply(MenusLabels.Menu, 
            {
                reply_markup: Keyboard.Menu
            });
    }
}

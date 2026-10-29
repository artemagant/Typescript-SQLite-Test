import { Keyboard } from "./keyboard.ts"

const keyboard = new Keyboard();

export async function OnKeyboard(ctx)
{
    await ctx.answerCallbackQuery();
    let query = ctx.callbackQuery;
    if (query.data == "fuck_around") {
        await query.message.editText("back", {reply_markup: keyboard.BackToMenu()});
    } else if (query.data == "find_out") {
        await query.message.editText("back", {reply_markup: keyboard.BackToMenu()});
    } else if (query.data == "back_to_menu") {
        await query.message.editText("fucku", {reply_markup: keyboard.Menu()})
    } 
}

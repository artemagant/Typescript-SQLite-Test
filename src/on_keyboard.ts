import { Keyboard, ButtonsData } from "./keyboard.ts"
import { MenusLabels } from "./menus_labels.ts"
import { Data } from "./data.ts"

const data = new Data();

export async function OnKeyboard(ctx)
{
    await ctx.answerCallbackQuery();
    let query = ctx.callbackQuery;

    /* 
     * Menu buttons
     * */
    if (query.data == ButtonsData.Start[0]) {
        await query.message.editText(MenusLabels.Menu, {reply_markup: Keyboard.Menu})
    }
    else if (query.data ==  ButtonsData.Start[1]) {
        await query.message.editText(MenusLabels.About, {reply_markup: Keyboard.About, parse_mode: "HTML"})
    }

    else if (query.data == ButtonsData.Menu[0]) {
        await query.message.editText(MenusLabels.Register);
        let register: bool = await data.CreateUser(query.from.username)
        if (register) {
            await query.message.editText(MenusLabels.Register_Success, {reply_markup: Keyboard.Register_Success})
        } else {
            await query.message.editText(MenusLabels.Register_Unsuccess, {reply_markup: Keyboard.Register_Unsuccess})
        }
    } 
    else if (query.data == ButtonsData.Menu[1]) {
        await query.message.editText(MenusLabels.Delete);
        let deleting: bool = await data.DeleteUser(query.from.username)
        if (deleting) {
            await query.message.editText(MenusLabels.Delete_Success, {reply_markup: Keyboard.Delete_Success})
        } else {
            await query.message.editText(MenusLabels.Delete_Unsuccess, {reply_markup: Keyboard.Delete_Unsuccess})
        }
    } 
    else if (query.data == ButtonsData.Menu[2]) {
        await query.message.editText(MenusLabels.Earn);
        let earning: bool = await data.AddCoinToUser(query.from.username)
        if (earning) {
            await query.message.editText(MenusLabels.Earn_Success, {reply_markup: Keyboard.Earn_Success})
        } else {
            await query.message.editText(MenusLabels.Earn_Unsuccess, {reply_markup: Keyboard.Earn_Unsuccess})
        }
    } 
    else if (query.data == ButtonsData.Menu[4]) {
        await query.message.editText(MenusLabels.Start, {reply_markup: Keyboard.Start})
    }

    else if (query.data == ButtonsData.Register[0]) {
         await query.message.editText(MenusLabels.Menu, {reply_markup: Keyboard.Menu})
    }
   

    else if (query.data == ButtonsData.About[0]) {
        await query.message.editText(MenusLabels.Start, {reply_markup: Keyboard.Start})
    }


    else {
        await query.message.editText(MenusLabels.Default, {reply_markup: Keyboard.Default})
    }

}

import { InlineKeyboard } from "grammy";

const default_keyboard = new InlineKeyboard();

export class Keyboard
{
    DefaultKeyboard()
    {
        return new InlineKeyboard();
    }
    Start()
    {
        return new InlineKeyboard()
            .text("1", "fuck1")
            .text("2", "fuck2").row()
            .text("3", "fuck3")
            .url("google", "https://www.google.com/");
    }

    Menu()
    {
        return this.DefaultKeyboard()
            .text("fuck around", "fuck_around")
            .text("find out", "find_out")
    }

    BackToMenu()
    {
        return this.DefaultKeyboard()
            .text("<- go back", "back_to_menu")
    }
}

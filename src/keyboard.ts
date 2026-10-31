import { InlineKeyboard } from "grammy";

function get_DK(): InlineKeyboard
{
    return new InlineKeyboard()
}

type NonEmptyArray<T> = [T, ...T[]]

export const ButtonsData: Record<string, NonEmptyArray<string>> = {
    "Default": [
        "back_to_start"
    ],

    "Start": [
        "menu",
        "aboaut"
    ],

    "Menu": [
        "register",
        "delete",
        "earn",
        "buy_random",
        "back_to_start"
    ],
    "Register": [
        "back_to_menu",
        "register"
    ],
    "Delete": [
        "back_to_menu",
        "delete"
    ],
    "Earn": [
        "back_to_menu",
        "earn"
    ],

    "About": [
        "back_to_start"
    ]
}

export const Keyboard: Record<string, InlineKeyboard> = {

    "Default": get_DK()
        .text("Back To The Start", ButtonsData.Default[0]),

    "Start": get_DK()
        .text("Menu", ButtonsData.Start[0]).row()
        .text("About", ButtonsData.Start[1]),

    "Menu": get_DK()
        .text("Register New User", ButtonsData.Menu[0])
        .text("Delete Ur User", ButtonsData.Menu[1]).row()
        .text("Earn Coin", ButtonsData.Menu[2])
        .text("Buy Random Item", ButtonsData.Menu[3]).row()
        .text("Back To The Start", ButtonsData.Menu[4]),
    
    "Register_Success": get_DK()
        .text("Back To The Menu", ButtonsData.Register[0]),
    "Register_Unsuccess": get_DK()
        .text("Retry", ButtonsData.Register[1]).row()
        .text("Return To Menu", ButtonsData.Register[0]),
    
    "Delete_Success": get_DK()
        .text("Back To The Menu", ButtonsData.Delete[0]),
    "Delete_Unsuccess": get_DK()
        .text("Retry", ButtonsData.Delete[1]).row()
        .text("Return To Menu", ButtonsData.Delete[0]),

    "Earn_Success": get_DK()
        .text("Back To The Menu", ButtonsData.Earn[0]).row(),
    "Earn_Unsuccess": get_DK()
        .text("Retry", ButtonsData.Earn[1]).row()
        .text("Return To Menu", ButtonsData.Earn[0]),

    "About": get_DK()
        .text("Back To The Start", ButtonsData.About[0])
}

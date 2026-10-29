import { GrammyError, HttpError } from "grammy"

export function CatchErrors(err)
{
        const ctx = err.ctx;
        console.error(`Error on update: ${ctx.update.update_id}`)

        const error = err.error;

        if(error instanceof GrammyError) {
            console.error("Error in request: ", error.description);
        } else if(error instanceof HttpError) {
            console.error("Can connect to Telegram");
        } else {
            console.error("Unknown error: ", error);
        }
}

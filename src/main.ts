import { Bot } from "grammy";
import { hydrate } from "@grammyjs/hydrate"
import { autoRetry } from "@grammyjs/auto-retry"
import { limit } from "@grammyjs/ratelimiter"
import { distribute, run } from "@grammyjs/runner"
import { apiThrottler } from "@grammyjs/transformer-throttler"

import { CatchErrors } from "./catch_errors.ts"
import { Commands } from "./commands.ts"
import { OnKeyboard } from "./on_keyboard.ts"

const Token: String = Bun.env.TOKEN;

const bot = new Bot(Token);
bot.use(hydrate());
bot.use(limit({
    timeFrame: 2000,
    limit: 3,

    onLimitExceeded: async (ctx) => {
        await ctx.reply("Stop spamming fucking buttons!");
    }
}))
bot.api.config.use(autoRetry({
    maxRetryAttempts: 2,
    maxDelaySeconds: 5,
    rethrowInternalServerErrors: true,
    rethrowHttpErrors: true
}));
bot.api.config.use(apiThrottler(/*{
    global: {
        reservoir: 1000,
        reservoirRefreshAmount: 1000,
        reservoirRefreshInterval: 100
    },
    group: {
        maxConcurrent: 100,
        minTime: 100,
        resevoir: 1000,
        reservoirRefreshAmount: 1000,
        reservoirRefreshInterval: 100
    },
    out: {
        maxConcurrent: 100,
        minTime: 100
    }
}*/));

const commands = new Commands();

bot.api.setMyCommands([
    {command: "start", description: "start"},
    {command: "about", description: "about"},
    {command: "menu", description: "menu"}
]);

bot.command("start", commands.Start);
bot.command("about", commands.About);
bot.command("menu", commands.Menu);

bot.on("callback_query:data", OnKeyboard);

bot.catch(CatchErrors);

console.log("fucku");

const handle = run(bot);

/*handle.task().then(() => {
    console.log("Stopping");
});

await handle.stop();*/

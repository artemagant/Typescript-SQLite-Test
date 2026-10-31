import Database from "better-sqlite3"

const db = new Database("app.db");

// Create users Table
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY UNIQUE,
        username STRING NOT NULL UNIQUE,
        money INTEGER
    )
`);

console.log("DB is running");

export class Data
{
    async CreateUser(username: string): bool
    {
        const result = db.prepare("INSERT INTO users (username, money) VALUES (?, ?) ON CONFLICT DO NOTHING").run(username, 0);

        return result.changes != 0;
    }

    async DeleteUser(username: string): bool
    {
        const result = db.prepare("DELETE FROM users WHERE username = ?").run(username);
        return result.changes != 0;
    }

    async AddCoinToUser(username: string): bool
    {
        const result = db.prepare("UPDATE users SET money = money + 1 WHERE username = ?").run(username);
        return result.changes != 0;
    }

    async BuyRandomItem(username: string, id: number): bool
    {
        return false
    }
}

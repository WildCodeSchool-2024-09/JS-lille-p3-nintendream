import { RequestHandler } from "express";
import databaseClient from "../../../../database/client";
import type { Result, Rows } from "../../../../database/client";

type Account = {
  id: number;
  role: string;
  username: string;
  password: string;
  mail: string;
  user_id: number;
  hashedPassword: string;
};

class AccountRepository {
  async create(account: Omit<Account, "id" | "role">) {
    const [result] = await databaseClient.query<Result>(
      "insert into account (username, password, mail) values (?, ?, ?)",
      [account.username, account.password, account.mail],
    );
    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from account where id = ?",
      [id],
    );
    return rows[0] as Account;
  }

  async readByMailWithPassword(mail: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from account where mail = ?",
      [mail],
    );
    return rows[0] as Account;
  }
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from account");
    return rows as Account[];
  }
}

export default new AccountRepository();

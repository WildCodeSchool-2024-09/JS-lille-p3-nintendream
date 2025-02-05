import { RequestHandler } from "express";
import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  username: string;
  password: string;
  first_name: string;
  name: string;
  age: number;
  mail: string;
};

class UserRepository {
  async create(user: Omit<User, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (first_name, name, age, mail, username, password) values (?, ?, ?, ?, ? ,?)",
      [
        user.first_name,
        user.name,
        user.age,
        user.mail,
        user.username,
        user.password,
      ],
    );
    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where id = ?",
      [id],
    );
    return rows[0] as User;
  }

  async readByMail(mail: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where mail = ?",
      [mail],
    );
    return rows[0] as User;
  }
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from user");
    return rows as User[];
  }
}

export default new UserRepository();

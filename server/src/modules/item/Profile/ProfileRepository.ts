import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";
type Profile = {
  id: number;
  role: string;
  username: string;
  password: string;
  mail: string;
  user_id: number;
};

class ProfileRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from account");
    return rows as Profile[];
  }
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from account where id = ?",
      [id],
    );
    return rows[0] as Profile;
  }
}

export default new ProfileRepository();

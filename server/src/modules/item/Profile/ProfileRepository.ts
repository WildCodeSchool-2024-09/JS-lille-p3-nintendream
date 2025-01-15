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
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from account");

    // Return the array of items
    return rows as Profile[];
  }
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from account where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Profile;
  }
}

export default new ProfileRepository();

import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Attraction = {
  id: number;
  name: string;
  waiting_time: string;
  type: string;
  min_height: string;
  zone_id: number;
  schedule: string;
  description: string;
  state: string;
  img_src: string;
};

class AttractionRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from attraction");

    // Return the array of items
    return rows as Attraction[];
  }
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from attraction where id = ?",
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Attraction;
  }
}

export default new AttractionRepository();

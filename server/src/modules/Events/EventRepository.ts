import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Events = {
  id: number;
  name: string;
  short_description: string;
  description: string;
  schedule: string;
  img_src: string;
  zone_id: number;
};

class EventRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from event");

    // Return the array of items
    return rows as Events[];
  }
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from event where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Events;
  }
}

export default new EventRepository();

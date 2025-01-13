import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Restaurant = {
  id: number;
  nom: string;
  img: string;
  intro: string;
  texte: string;
  prix_adulte: number;
  prix_enfants: number;
};
class RestaurantRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from restaurant");

    // Return the array of items
    return rows as Restaurant[];
  }
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from restaurant where id = ?",
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Restaurant;
  }
}

export default new RestaurantRepository();

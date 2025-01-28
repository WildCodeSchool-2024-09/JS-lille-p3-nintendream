import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Restaurant = {
  id: number;
  name: string;
  img: string;
  intro: string;
  text: string;
  adult_price: number;
  kids_price: number;
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
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Restaurant;
  }

  async update(restaurant: Restaurant) {
    const [result] = await databaseClient.query<Result>(
      "update restaurant set name = ? where id = ?",
      [restaurant.name, restaurant.id],
    );

    return result.affectedRows;
  }

  async create(restaurant: Omit<Restaurant, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into restaurant (name, img,intro, text, adult_price, kids_price) values (?, ?, ?, ?, ?, ?)",
      [
        restaurant.name,
        restaurant.img,
        restaurant.intro,
        restaurant.text,
        restaurant.adult_price,
        restaurant.kids_price,
      ],
    );
    return result.insertId;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from restaurant where id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new RestaurantRepository();

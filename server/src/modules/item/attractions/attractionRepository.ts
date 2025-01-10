import databaseClient from "../../../../database/client";
import type { Result, Rows } from "../../../../database/client";

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
    const [rows] = await databaseClient.query<Rows>("select * from attraction");
    return rows as Attraction[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from attraction where id = ?",
      [id],
    );
    return rows[0] as Attraction;
  }

  async update(attraction: Attraction) {
    const [result] = await databaseClient.query<Result>(
      "update attraction set name = ? where id = ?",
      [attraction.name, attraction.id],
    );

    return result.affectedRows;
  }

  async create(attraction: Omit<Attraction, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into attraction (name) values (?)",
      [attraction.name],
    );
    return result.insertId;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from attraction where id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new AttractionRepository();

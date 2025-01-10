import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Attraction = {
  id: number;
  img: string;
  name: string;
  description: string;
  location: string;
};

class AttractionRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from attraction");
    return rows as Attraction[];
  }
}

export default new AttractionRepository();

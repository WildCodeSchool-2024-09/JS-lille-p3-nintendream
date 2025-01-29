import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type hotel = {
  id: string;
  name: string;
  distance: string;
  hotel_price: string;
  description: string;
  secondary_description: string;
  tertiary_description: string;
};

type room = {
  id: number;
  img: string;
  title: string;
  description: string;
  price: string;
  link_title: string;
};

class hotelRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from hotel");
    return rows as hotel[];
  }

  async getHotelInfos(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from hotel where id = ?",
      [id],
    );
    return rows[0] as hotel;
  }

  async getRoomsByHotelId(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM room where hotel_id = ?",
      [id],
    );
    return rows as room[];
  }

  async update(hotel: hotel, room: room) {
    const [result] = await databaseClient.query<Result>(
      "update hotel set name = ?, distance = ?, hotel_price = ?, description = ?, secondary_description = ?, tertiary_description = ? where id = ?",
      [
        hotel.name,
        hotel.distance,
        hotel.hotel_price,
        hotel.description,
        hotel.secondary_description,
        hotel.tertiary_description,
        hotel.id,
      ],
    );

    const [roomResult] = await databaseClient.query<Result>(
      "update room set img = ?, title = ?, description = ?, price = ?, link_title = ? where id = ?",
      [
        room.img,
        room.title,
        room.description,
        room.price,
        room.link_title,
        room.id,
      ],
    );

    return result.affectedRows;
  }

  async create(hotel: Omit<hotel, "id">, rooms: room[]) {
    const [result] = await databaseClient.query<Result>(
      "insert into hotel (name, distance, hotel_price, description, secondary_description, tertiary_description) values (?, ?, ?, ?, ?, ?)",
      [
        hotel.name,
        hotel.distance,
        hotel.hotel_price,
        hotel.description,
        hotel.secondary_description,
        hotel.tertiary_description,
      ],
    );

    const hotelId = result.insertId;

    for (const room of rooms) {
      await databaseClient.query<Result>(
        "insert into room ( img, title, description, price, link_title) values ( ?, ?, ?, ?, ?)",
        [room.img, room.title, room.description, room.price, room.link_title],
      );
    }

    return hotelId;
  }

  async deleteByHotelId(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from hotel where id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new hotelRepository();

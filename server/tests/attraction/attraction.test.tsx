import supertest from "supertest";
import app from "../../src/app";

describe("GET /api/attractions", () => {
  it("devrait retourner un statut 200", async () => {
    const response = await supertest(app).get("/api/attractions");

    expect(response.status).toBe(200);
  });
});

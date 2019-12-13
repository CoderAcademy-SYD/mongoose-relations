const request = require("supertest");
const app = require("./../../../app");
require("./../../setup");

describe("Retrieve all authors", () => {
    test("GET /authors", async () => {
        const response = await request(app).get("/authors").expect(200);

    });
});
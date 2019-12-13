const request = require("supertest");
const app = require("./../../../app");
require("./../../setup");

describe("Creating authors", () => {
    test("POST /authors", async () => {
        const response = await request(app)
            .post("/authors")
            .send({
                name: "Garret",
                bio: "My bio",
                gender: "male"
            })
            .expect(302);

        expect(response.body).toEqual({});
        expect(response.headers.location).toMatch(/^\/authors\/.*$/);
    });
});
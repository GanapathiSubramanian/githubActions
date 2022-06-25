const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

const Todos = require('./index');
const assert = require('assert').strict;

describe("/test endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/test")
        // /expect(response.status).toBe(200)
        // expect(response.text).toBe("Hello world");
        assert.equal(response.status,201)
    })
})
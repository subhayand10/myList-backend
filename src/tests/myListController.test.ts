import request from "supertest";
import app from "../index";
import mongoose from "mongoose";

describe("My List API", () => {
  beforeAll(async () => {
    await mongoose.connect(
      "mongodb+srv://subhayansd10:SUBHAYAN2001@cluster0.pg28axs.mongodb.net/myListDB?retryWrites=true&w=majority&appName=Cluster0"
    );
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  let userId = "test-user-id";
  let itemId = "test-item-id";

  test("should add an item to the list", async () => {
    const response = await request(app)
      .post("/api/mylist/add")
      .send({ userId, itemId });
    expect(response.status).toBe(200);
    expect(response.body).toContain(itemId);
  });

  test("should remove an item from the list", async () => {
    await request(app).post("/api/mylist/add").send({ userId, itemId });
    const response = await request(app)
      .post("/api/mylist/remove")
      .send({ userId, itemId });
    expect(response.status).toBe(200);
    expect(response.body).not.toContain(itemId);
  });

  test("should list items in the list", async () => {
    await request(app).post("/api/mylist/add").send({ userId, itemId });
    const response = await request(app)
      .get(`/api/mylist/list/${userId}`)
      .query({ page: 1, limit: 10 });
    expect(response.status).toBe(200);
    expect(response.body).toContain(itemId);
  });
});

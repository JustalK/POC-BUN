import { describe, expect, it } from "bun:test";
import { app } from "../..";

const dirname = import.meta.dirname;
const folder = dirname.split("/").pop();

describe("Experience 16", () => {
  it("Test the get endpoint", async () => {
    const response = await app
      .handle(
        new Request(`${app.server?.hostname}:${app.server?.port}/${folder}`)
      )
      .then((res) => res.text());

    expect(response).toBe("This is experience 16");
  });
  it("Test the get all endpoint", async () => {
    const response = await app
      .handle(
        new Request(
          `${app.server?.hostname}:${app.server?.port}/${folder}/all?id=123`
        )
      )
      .then((res) => res.json());

    expect(response.query.id).toBe(123);
  });
  it("Test the post endpoint", async () => {
    const request = new Request(
      `${app.server?.hostname}:${app.server?.port}/${folder}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1337,
        }),
      }
    );

    const response = await app.handle(request).then((res) => res.json());

    expect(response.id).toEqual(1337);
  });
});

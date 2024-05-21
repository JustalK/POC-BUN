import { assertEquals } from "std/assert/mod.ts";
import { sayHello, Test } from "./index.ts";

Deno.test("sayHello function", () => {
  const test: Test = {
    name: "Robert",
  };

  assertEquals("Hello, Robert!", sayHello(test));
});
import { expect, test } from "vitest";
import { sum } from "./validation.ts";

test("1과 2를 더하면 3이 나와야 한다.", () => {
  expect(sum(1, 2)).toBe(3);
});

import { expect, test } from "vitest";
import { sum, validate } from "./validation.ts";

test("1과 2를 더하면 3이 나와야 한다.", () => {
  expect(sum(1, 2)).toBe(3);
});

test("email 과 password가 필수적으로 입력되어야 한다", () => {
  expect(validate("", "")).toStrictEqual({
    error: "이메일 또는 비밀번호를 입력해주세요.",
  });
  expect(validate("test@test.com", "")).toStrictEqual({
    error: "이메일 또는 비밀번호를 입력해주세요.",
  });
  expect(validate("", "1234")).toStrictEqual({
    error: "이메일 또는 비밀번호를 입력해주세요.",
  });
  expect(validate("test@test.com", "1234")).toStrictEqual({
    email: "test@test.com",
    password: "1234",
  });
});

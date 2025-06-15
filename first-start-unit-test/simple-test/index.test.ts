import { add, sub } from "./index";

describe("사칙 연산 테스트", () => {
  describe("두 수를 빼는 함수 sub 테스트", () => {
    test("subs 2 - 1 to equal 1", () => {
      expect(sub(2, 1)).toBe(1);
    });
    test("subs 5 - 3 to equal 2", () => {
      expect(sub(5, 3)).toBe(2);
    });
  });
  describe("두 수를 더하는 함수 add 테스트", () => {
    test("adds 1 + 2 to equal 3", () => {
      expect(add(1, 2)).toBe(3);
    });
    test("adds 2 + 2 to equal 4", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
});

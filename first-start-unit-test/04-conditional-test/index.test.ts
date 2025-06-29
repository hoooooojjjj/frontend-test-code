import { add, sub } from ".";

describe("사칙연산은 100이하, 0이상의 반환값을 가져야 한다", () => {
  describe("add 함수 반환값의 상한선은 100이다", () => {
    test("두 수의 합이 100보다 클 경우 100을 반환한다", () => {
      expect(add(50, 80)).toBe(100);
    });

    test("두 수의 합이 100이하일 경우 두 수의 합을 반환한다", () => {
      expect(add(30, 30)).toBe(60);
    });
  });

  describe("sub 함수 반환값의 하한선은 0이다", () => {
    test("두 수의 차가 0보다 작을 경우 0을 반환한다", () => {
      expect(sub(90, 100)).toBe(0);
    });

    test("두 수의 차가 0이상일 경우 두 수의 차를 반환한다", () => {
      expect(sub(30, 30)).toBe(0);
    });
  });
});

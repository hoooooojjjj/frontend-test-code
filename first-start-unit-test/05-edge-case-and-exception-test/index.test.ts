import { add, RangeError } from ".";

describe("add 함수의 입력값 범위 검증 테스트 ", () => {
  test("입력값이 0~100 사이가 아니면 에러를 발생시킨다", () => {
    const errorMessage = "0~100 사이 값을 입력해주세요";
    expect(() => add(-10, 120)).toThrow(errorMessage);
    expect(() => add(10, 120)).toThrow(errorMessage);
    expect(() => add(30, -10)).toThrow(errorMessage);
  });

  test("입력값이 0~100 사이가 아니면 RangeError를 발생시킨다", () => {
    expect(() => add(-10, 120)).toThrow(RangeError);
    expect(() => add(10, 120)).toThrow(RangeError);
    expect(() => add(30, -10)).toThrow(Error);
  });
});

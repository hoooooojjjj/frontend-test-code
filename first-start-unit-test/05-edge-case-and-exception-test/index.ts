export class HttpError extends Error {}
export class RangeError extends Error {}

const checkRange = (value: number) => {
  if (value < 0 || value > 100) {
    throw new RangeError("0~100 사이 값을 입력해주세요");
  }
};

export function add(a: number, b: number) {
  checkRange(a);
  checkRange(b);

  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}

export function sub(a: number, b: number) {
  const sum = a - b;
  if (sum < 0) {
    return 0;
  }
  return sum;
}

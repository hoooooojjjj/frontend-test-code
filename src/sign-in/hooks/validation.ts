export const sum = (a: number, b: number) => {
  return a + b;
};

export const validate = (email: string, password: string) => {
  if (!email || !password) {
    return {
      error: "이메일 또는 비밀번호를 입력해주세요.",
    };
  }

  return {
    email,
    password,
  };
};

function checkType(type: "A" | "B" | "C"): string | Error {
  const message = "valid type";
  if (type === "A") {
    return message;
  }
  if (type === "B") {
    return message;
  }

  throw new Error("invalid type");
}

checkType("C");

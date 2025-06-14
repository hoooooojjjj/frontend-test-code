function checkType(type: "A" | "B" | "C") {
  const message = "valid type";
  if (type === "A") {
    return message;
  }
  if (type === "B") {
    return message;
  }

  throw new Error("fuck");
}

checkType("C");

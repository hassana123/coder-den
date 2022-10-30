export function countryNames(ethiopia) {
  let message;
  const contries = ["nigeria", "ghana", "libya", "london"];
  if (contries.includes(ethiopia)) {
    message = "ETHIOPIA";
  } else {
    contries.push("ethiopia");
  }
  return message;
}
console.log(countryNames("ethiopia"));

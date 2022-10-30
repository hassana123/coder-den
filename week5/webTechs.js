export function webTechNames(sass) {
  let message = "no sass";
  const webTech = ["html", "javascript", "css", "react"];
  if (webTech.includes(sass)) {
    message = "sass is a css preprocessor";
  } else {
    webTech.push("sass");
    console.log(webTech);
  }
  return message;
}
console.log(webTechNames("sass"));

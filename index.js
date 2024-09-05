const local = require("./lib/local");
const remote = require("./lib/remote");

(async () => {
  let result = "";
  try {
    result = await local();
  } catch (error) {
    result = error;
  }
  console.log("Local");
  for (const i in result) {
    console.log(`${i}\n${result[i]}\n`);
  }
  console.log("");
})();

(async () => {
  let result = "";
  try {
    result = await remote();
  } catch (error) {
    result = error;
  }
  console.log("Remote");
  console.log(result);
  console.log("");
})();

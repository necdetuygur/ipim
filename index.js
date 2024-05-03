const local = require("./lib/local");

local().then((res) => {
  for (const i in res) {
    console.log(`${i}\n${res[i]}\n`);
  }
});

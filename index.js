const local = require("./lib/local");
const { ifconfig, ipifyV4, ipifyV6 } = require("./lib/remote");

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
  let ifconfig_ = "";
  let ipifyV4_ = "";
  let ipifyV6_ = "";
  try {
    ifconfig_ = await ifconfig();
    ipifyV4_ = await ipifyV4();
    ipifyV6_ = await ipifyV6();
  } catch (error) {
    ifconfig_ = error;
    ipifyV4_ = error;
    ipifyV6_ = error;
  }
  console.log("Remote");
  console.log("Ifconfig: \n" + ifconfig_);
  console.log("IpifyV4: \n" + ipifyV4_);
  console.log("IpifyV6: \n" + ipifyV6_);
  console.log("");
})();

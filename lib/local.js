const os = require("os");

const hasOwn = Object.prototype.hasOwnProperty;

function getIPAdress() {
  return new Promise((resolve, reject) => {
    const addresses = {};
    try {
      const interfaces = os.networkInterfaces();
      for (const device in interfaces) {
        if (hasOwn.call(interfaces, device)) {
          interfaces[device].forEach((it) => {
            if (
              it.family === "IPv4" &&
              it.address !== "127.0.0.1" &&
              !it.internal
            ) {
              addresses[device] = it.address;
            }
          });
        }
      }
      resolve(addresses);
    } catch (e) {
      reject("IP address not found");
    }
  });
}

module.exports = getIPAdress;

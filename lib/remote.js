const axios = require("axios");

const ifconfig = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("https://ifconfig.co/ip");
      resolve(result.data.trim());
    } catch (e) {
      reject("IP address not found");
    }
  });
};

const ipifyV4 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("https://api.ipify.org");
      resolve(result.data.trim());
    } catch (e) {
      reject("IP address not found");
    }
  });
};

const ipifyV6 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("https://api6.ipify.org");
      resolve(result.data.trim());
    } catch (e) {
      reject("IP address not found");
    }
  });
};

module.exports = { ifconfig, ipifyV4, ipifyV6 };

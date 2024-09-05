const axios = require("axios");

const getIPAdress = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("https://ifconfig.co/ip");
      resolve(result.data);
    } catch (e) {
      reject("IP address not found");
    }
  });
};

module.exports = getIPAdress;

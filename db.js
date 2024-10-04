const dataCategory = require("./data/dataCategory");
const promoImages = require("./data/dataPromoImages");
const datafhp = require("./data/data_fhp");
const dataFilter = require("./data/dataFilter");
const dataPDPprod= require("./data/dataPDPprod")


module.exports = () => {
  return {
   dataCategory,promoImages,datafhp,dataFilter,dataPDPprod
  };
};

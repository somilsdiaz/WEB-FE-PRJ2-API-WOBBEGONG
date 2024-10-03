const dataCategory = require("./data/dataCategory");
const promoImages = require("./data/dataPromoImages");
const datafhp = require("./data/data_fhp");
const dataFilter = require("./data/dataFilter");


module.exports = () => {
  return {
   dataCategory,promoImages,datafhp,dataFilter
  };
};

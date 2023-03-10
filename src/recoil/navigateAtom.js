const { atom } = require("recoil");

const navigateState = atom({
  key: "navigatestate",
  default: "beranda",
});

export default navigateState;

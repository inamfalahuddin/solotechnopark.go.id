const { atom } = require("recoil");

const navigateState = atom({
  key: "",
  default: "beranda",
});

export default navigateState;

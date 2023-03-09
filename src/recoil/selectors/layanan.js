const { default: axios } = require("axios");

const layananState = selector({
  key: "layananState", // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    const response = await axios.get("http://31.220.6.155:5000/v1/stp/layanan");

    return response.data.data;
  },
});

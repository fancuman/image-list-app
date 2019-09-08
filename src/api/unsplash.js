import axios from "axios";
const unsplash = axios.create({
  baseURL: "https://api.unsplash.com//search/photos",
  headers: {
    Authorization:
      "Client-ID df35e01678d0f6137b5966ffa4186150252be897c5e9b09f4191cb99bc02aa6a"
  }
});

export default unsplash;

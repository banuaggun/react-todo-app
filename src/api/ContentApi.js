import axios from "axios"
import config from "../config"

export const contentApi = async (data) => {
  await axios.post(config.url + config.endpoint, {content:data});
};


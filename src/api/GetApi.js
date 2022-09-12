import axios from "axios";
import config from "../config";

export const getApi = async () => {
  const {data} = await axios(config.url + config.endpoint);
  return data;
};


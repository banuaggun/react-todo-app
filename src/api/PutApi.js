import axios from "axios"
import config from "../config"

export const putApi = async (content) => {
  return await axios.put(config.url + config.endpoint + `/${content.id}`, content);
};
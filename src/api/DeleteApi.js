import axios from "axios";
import config  from "../config";


 const deleteApi = async (id) => {
  return  await axios.delete(config.url + config.endpoint + `/${id}`);
};

export default deleteApi;
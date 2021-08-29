import axios from "axios";

const list = () => axios.get("/sections");

const sectionsApi = {
  list
};

export default sectionsApi;

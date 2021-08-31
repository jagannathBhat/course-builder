import axios from "axios";

const create = payload => axios.post("/sections/", payload);

const list = () => axios.get("/sections");

const sectionsApi = {
  create,
  list
};

export default sectionsApi;

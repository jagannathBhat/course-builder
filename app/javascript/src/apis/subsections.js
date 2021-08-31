import axios from "axios";

const create = payload => axios.post("/subsections/", payload);

const list = () => axios.get("/subsections");

const subsectionsApi = {
  create,
  list
};

export default subsectionsApi;

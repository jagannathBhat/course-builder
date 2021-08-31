import axios from "axios";

const create = payload => axios.post("/sections/", payload);

const list = () => axios.get("/sections");

const update = ({ id, payload }) => axios.put(`/sections/${id}`, payload);

const sectionsApi = {
  create,
  list,
  update
};

export default sectionsApi;

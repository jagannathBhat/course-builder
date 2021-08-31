import axios from "axios";

const create = payload => axios.post("/sections/", payload);

const destroy = id => axios.delete(`/sections/${id}`);

const list = () => axios.get("/sections");

const update = ({ id, payload }) => axios.put(`/sections/${id}`, payload);

const sectionsApi = {
  create,
  destroy,
  list,
  update
};

export default sectionsApi;

import axios from "axios";

const create = payload => axios.post("/subsections/", payload);

const destroy = id => axios.delete(`/subsections/${id}`);

const list = () => axios.get("/subsections");

const update = ({ id, payload }) => axios.put(`/subsections/${id}`, payload);

const subsectionsApi = {
  create,
  destroy,
  list,
  update
};

export default subsectionsApi;

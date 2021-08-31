import axios from "axios";

const create = payload => axios.post("/subsections/", payload);

const list = () => axios.get("/subsections");

const update = ({ id, payload }) => axios.put(`/subsections/${id}`, payload);

const subsectionsApi = {
  create,
  list,
  update
};

export default subsectionsApi;

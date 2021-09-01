import axios from "axios";

const create = payload => axios.post("/steps/", payload);

const destroy = id => axios.delete(`/steps/${id}`);

const list = () => axios.get("/steps");

const update = ({ id, payload }) => axios.put(`/steps/${id}`, payload);

const stepsApi = {
  create,
  destroy,
  list,
  update
};

export default stepsApi;

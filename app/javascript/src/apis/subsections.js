import axios from "axios";

const list = () => axios.get("/subsections");

const subsectionsApi = {
  list
};

export default subsectionsApi;

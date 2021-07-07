import api from "../../../api/api";

export const getPosts = async () => {
  const { data } = await api.get("/posts");
  return data;
};

export const getPostById = async (id) => {
  const { data } = await api.get(`/posts/${id}`);
  return data;
};

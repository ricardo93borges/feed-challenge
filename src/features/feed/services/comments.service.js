import api from "../../../api/api";

export const getCommentsByPost = async (postId) => {
  const { data } = await api.get(`/comments?postId=${postId}`);
  return data;
};

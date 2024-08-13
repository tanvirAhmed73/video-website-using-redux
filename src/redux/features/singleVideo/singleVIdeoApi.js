import axiosInstance from "../../../utlis/axios";

export const singleApi = async (id) => {
  const response = await axiosInstance.get(`/videos/${id}`);
  return response.data;
};

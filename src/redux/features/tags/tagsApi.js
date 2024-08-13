import axiosInstance from "../../../utlis/axios";

export const tagsApi = async () => {
  const response = await axiosInstance.get("/tags");

  return response.data;
};

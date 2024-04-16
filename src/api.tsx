import axios from "axios";

export const BASE_URL = "http://192.168.0.36:5000";

const generateAuthHeader = (config: any = {}) => {
  const token: string | null = localStorage.getItem("auth-token");
  if (token && token.length > 0) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
};

const post = async (url: string, data = {}, _config = {}) => {
  const config: any = generateAuthHeader({ ..._config });
  return axios
    .post(url, data, { ...config })
    .then((res: any) => {
      if (res.status) {
        const { data, status } = res;
        return { data, status };
      } else {
        return {
          status: 200,
          data: res,
        };
      }
    })
    .catch(({ response }: any) => {
      return response;
    });
};

export const put = async (url: string, data = {}, _config = {}) => {
  const config: any = generateAuthHeader({ ..._config });
  return axios
    .put(url, data, { ...config })
    .then((res: any) => {
      if (res.status) {
        const { data, status } = res;
        return { data, status };
      } else {
        return {
          status: 200,
          data: res,
        };
      }
    })
    .catch(({ response }) => {
      if (response.status === 400) {
        return response.data;
      }
      return response;
    });
};

const get = async (url: string, _config: any = {}) => {
  const config: any = generateAuthHeader({ ..._config });
  return await axios.get(url, { ...config }).then((res: any) => res.data);
};

export const _delete = async (url: string, _config: any = {}) => {
  const config: any = generateAuthHeader({ ..._config });
  return await axios.delete(url, { ...config }).then((res: any) => res.data);
};

export const api = {
  getModels: () => get(`${BASE_URL}/models`),

  uploadModals: async (params: any) => {
    try {
      const response = await post(`${BASE_URL}/upload`, params);
      return response;
    } catch (error) {}
  },

  getOrder: (id: any) => get(`${BASE_URL}/order/${id}`),

  generateImage: async (params: any) => {
    try {
      const response = await post(`${BASE_URL}/generate_image`, params);
      return response;
    } catch (error) {}
  },
};

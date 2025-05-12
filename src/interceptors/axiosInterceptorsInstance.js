import axios from "axios";

const axiosInstance = axios.create({
  timeout: 1000,
});

// axios.interceptors.request.use(
//  (config) => {
//   const currentAccessToken = accessToken;

//   if(currentAccessToken && currentAccessToken !== "random_token_not_applicable"){
//     config.headers['Authorization'] = `Bearer ${accessToken}`;
//   } 
//   return config;
//  },
//  (err) => {
//   return Promise.reject(err);
//  }
// );

axios.interceptors.response.use(
 (response) => {
  return response;
 },
 async (ResponseError) => {
  if (ResponseError.response?.status === 403 
    && ResponseError.response.data.credentials !== "caducated"){
   try{

    const newAccessToken = await axios.post('/auth/refresh', {});
    ResponseError.config.headers['Authorization'] = `Bearer ${newAccessToken.data.accessToken}`;
    return await axios(ResponseError.config);

   } catch(RefreshError){
    return await Promise.reject(RefreshError);
   }
  }
  return Promise.reject(ResponseError);
 }
);

export default axiosInstance;

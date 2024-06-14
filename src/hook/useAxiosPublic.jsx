import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://blood-donation-green.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
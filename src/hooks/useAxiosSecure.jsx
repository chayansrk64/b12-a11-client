import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const {user} = useAuth()
    
    useEffect(() => {
        // request Interceptor
        const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${user.accessToken}`
            return config;
        })

        // response interceptor

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor)
        }

    }, [user])
};

export default useAxiosSecure;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useClientMessage = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: messages = [], refetch } = useQuery({
        queryKey: ["messages"],
        queryFn: async () => {
            const res = await axiosSecure.get("/clients-message")
            return res.data;
        }
    })
    return [messages, refetch]
};

export default useClientMessage;
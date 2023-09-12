import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import SectionHead from '../../components/SectionHead';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import useClientMessage from '../../Hooks/useClientMessage';
import { useNavigate, useParams } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const EmailConfirmation = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id);
    const [axiosSecure] = useAxiosSecure();
    const [messages, refetch] = useClientMessage();

    const [message, setMassage] = useState({})

    useEffect(() => {
        const message = messages.find(message => message._id === id);
        setMassage(message)
    }, [messages])


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const response = await axiosSecure.patch(`/message/confirm/${id}`, data );
        if (response.data.modifiedCount > 0) {
            // console.log(response.data.message);
            // const res = await axiosSecure.patch(`/message/${id.toString()}}`);
            // if (res.data.modifiedCount > 0) {
                refetch();
                navigate("/dashboard/manageClients")
                Swal.fire({
                    title: 'Success!',
                    text: "Message confirmed and email sent!",
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            // }
        }
    }

    return (
        <div>
            <SectionTitle
                subTitle="Manage Clients Send A Confirmation Email To client"
            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 md:w-1/2 mx-auto">
                <label className='font-bold brandFont'>Sender<sup className='text-error'>*</sup></label>
                <input type='text' defaultValue={message.email}
                    {...register("receiver", { required: true })}
                    aria-invalid={errors.receiver ? "true" : "false"}
                    className='inputField' />
                {errors.receiver?.type === 'required' && <p role="alert" className='text-error font-medium'>Receiver email is required</p>}

                <label className='font-bold brandFont'>Subject<sup className='text-error'>*</sup></label>
                <input type='text' defaultValue={message.service}
                    {...register("subject", { required: true })}
                    aria-invalid={errors.subject ? "true" : "false"}
                    className='inputField' />
                {errors.subject?.type === 'required' && <p role="alert" className='text-error font-medium'>Subject email is required</p>}


                <label className='font-bold brandFont'>Response Message<sup className='text-error'>*</sup></label>
                <textarea rows="5" cols="10" placeholder='Response Message'
                    {...register("message", { required: true })}
                    aria-invalid={errors.message ? "true" : "false"}
                    className='inputField' />
                {errors.message?.type === 'required' && <p role="alert" className='text-error font-medium'>Message is required</p>}

                <div className="flex items-end justify-end my-5">
                    <button className="px-4 py-1 bg-primary text-white hover:bg-transparent border border-primary rounded-md hover:text-primary inline-flex items-center gap-1 transition-all duration-500 cursor-pointer font-semibold">Send<HiOutlinePaperAirplane className='h-6 w-6' /></button>
                </div>
            </form>
        </div>
    );
};

export default EmailConfirmation;
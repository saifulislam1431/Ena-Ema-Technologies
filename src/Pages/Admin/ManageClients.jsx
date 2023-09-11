import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { HiEnvelope, HiMiniXMark, HiOutlinePaperAirplane } from 'react-icons/hi2';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import useClientMessage from '../../Hooks/useClientMessage';

const ManageClients = () => {
    const [messages, refetch] = useClientMessage();


    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }




    return (
        <section>
            <Helmet>
                <title>Manage Clients | Ena Ema Technologies</title>
            </Helmet>
            <SectionTitle
                subTitle="Manage Clients"
            ></SectionTitle>

            <div className='lg:mx-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                messages.map(message => <tr key={message._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{message?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-semibold'>
                                        {message?.email}
                                    </td>
                                    <td className='font-semibold'>
                                        {message?.number}
                                    </td>
                                    <td className={`font-semibold ${message?.status ? "text-green-700" : "text-primary"}`}>
                                        {message?.status ? message.status : "New"}
                                    </td>
                                    <th className='inline-flex gap-3 items-center'>
                                        <label htmlFor={message._id} className="myBtn">View Details</label>
                                        <Link to={`/dashboard/confirmProject/${message._id}`} className={`${message.status ? "bg-green-700 px-3 py-1 disabled:bg-opacity-40 disabled:cursor-not-allowed font-semibold" : "myBtn"}`}>Confirm</Link>
                                    </th>

                                    <input type="checkbox" id={message._id} className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="brandFont font-bold text-lg">{message.service}</h3>
                                            <p className="py-4">{message.projectDetails}</p>
                                            <div className="modal-action">
                                                <label htmlFor={message._id} className="text-neutral hover:text-primary transition-all duration-500 absolute top-6 right-6 cursor-pointer"><HiMiniXMark className='h-7 w-7' /></label>
                                            </div>
                                        </div>
                                    </div>
                                </tr>)

                            }


                        </tbody>


                    </table>

                </div>
            </div>
        </section>
    );
};

export default ManageClients;
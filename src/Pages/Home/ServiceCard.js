import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, title, price, _id } = service;
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Title:{title}</h2>
                    <h1 className=' p-4 rounded-2xl bg-blue-700 text-white text-3xl'>Price:${price}</h1>
                    <div className="card-actions">
                        <Link to={`/checkout/${_id}`} > <button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
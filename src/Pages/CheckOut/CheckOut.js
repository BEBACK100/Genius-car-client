import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthProvider/AuthProvider';



const CheckOut = () => {
    const { title, _id, price } = useLoaderData();
    const { user } = useContext(Authcontext)
    const handlesubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered'
        const address = form.address.value;
        const phone = form.phone.value;

        const order = {
            service: _id,
            serviceName: title,
            costomer: name,
            price,
            email,
            phone,

        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Order pLaced,successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className='w-1/2 mx-auto text-3xl'> <marquee>This is CheckOut page ,your order name is:<span className='font-bold text-red-400'>{title}</span></marquee></div>


            <form onSubmit={handlesubmit} className="form-control grid grid-cols-1 lg:grid-cols-2 my-8 gap-5 ">

                <label className="input-group input-group-vertical text-center">
                    <span>Name</span>
                    <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                </label>
                <label className="input-group input-group-vertical">
                    <span>Email</span>
                    <input type="text" name='email' placeholder="info@site.com" className="input input-bordered" defaultValue={user?.email} readOnly />
                </label>
                <label className="input-group input-group-vertical">
                    <span>Phone Number</span>
                    <input type="text" name='phone' placeholder="Your Mobile Number" className="input input-bordered" required />
                </label>
                <label className="input-group input-group-vertical">
                    <span>Address</span>
                    <input type="text" name='address' placeholder="address" className="input input-bordered" required />
                </label>
                <div className='  m-4'>
                    <button className="btn btn-primary mx-auto w-full">Submit</button>

                </div>
            </form>

        </div>
    );
};

export default CheckOut;
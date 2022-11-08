import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../Context/AuthProvider/AuthProvider';

const Order = () => {
    const { user } = useContext(Authcontext)
    const [orders, setorders] = useState({});




    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setorders(data))
    }, [user?.email])
    return (
        <div>
            <h1 className='text-5xl'>You have :{orders.length}Orders</h1>
        </div>
    );
};

export default Order;
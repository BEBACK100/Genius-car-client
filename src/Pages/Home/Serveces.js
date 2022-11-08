import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Serveces = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-orange-300 text-center'>Serveces</h1>
            <div>
                <h1>services:{services.length}</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}

                        ></ServiceCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Serveces;
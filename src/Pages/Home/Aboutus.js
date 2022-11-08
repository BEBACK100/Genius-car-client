import React from 'react';
import img from '../../assets/images/about_us/person.jpg'
import img1 from '../../assets/images/about_us/parts.jpg'
const Aboutus = () => {
    return (
        <div>
            <h1>This is About Us page</h1>
            <div className="hero w-full  ">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className='relative '>
                        <img src={img} className=" w-4/5 h-full  rounded-lg shadow-2xl" />
                        <img className='absolute top-1/3  border-r-slate-500 right-5 w-1/3 h-2/3  ' src={img1} alt="" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
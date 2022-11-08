import React from 'react';

const Slideimg = ({ slide }) => {
    const { image, previous, id, next } = slide
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full h-3/4 backgroundImage mb-4">
            <div className='img-gradient'>
                <img className='rounded-2xl' src={image} alt="" />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2  left-5  top-1/4 pl-4 gap-4  ">
                <div className='text-5xl text-white font-bold'>
                    <h1 >Affordable <br /> Price For <br></br> Car Servicing</h1>
                    <h1 className='text-lg w-1/2 mt-2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</h1>
                    <div className='gap-4 mt-5 '>
                        <button className="btn btn-outline btn-primary mr-3">Button</button>
                        <button className="btn btn-outline btn-secondary">Button</button></div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-4 gap-4">
                <a href={`#slide${previous}`} className="btn btn-circle bg-orange-400">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-orange-400">❯</a>
            </div>
        </div>

    );
};

export default Slideimg;
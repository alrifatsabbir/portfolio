import React from 'react';
import certificate1 from '../../assets/images/ostad.png';
import certificate2 from '../../assets/images/w3schools.png';
import certificate3 from '../../assets/images/freecodecamp.png';

const Certification = () => {
    return (
        <div>
            <section className="body-font certification">
                <div className='section-title pt-10'>
                    <h1 className='text-5xl font-bold text-center tracking-widest'>Certified by</h1>
                </div>
                <div className="container px-2 py-2 mx-auto overflow-hidden">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-3 sm:w-1/3 w-1/2 certify">
                            <img src={certificate1} alt="certification-1" className='w-86 cf1' />
                        </div>
                        <div className="p-3 sm:w-1/3 w-1/2 certify">
                            <img src={certificate2} alt="certification-2" className='w-86 cf2' />
                        </div>
                        <div className="p-3 sm:w-1/3 w-1/2 certify">
                            <img src={certificate3} alt="certification-3" className='w-86 cf3' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certification;
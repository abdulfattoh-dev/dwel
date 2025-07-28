import React from 'react'
import img from '../../assets/hero.svg'

const Hero = () => {
    return (
        <div>
            <div className='container'>
                <div className='flex justify-center bg-[url(./assets/heroBack.png)] bg-center'>
                    <button className='py-[368px]'>
                        <img src={img} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
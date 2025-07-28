import React from 'react'
import img from '../../assets/footerLogo.svg'

const Footer = () => {
    return (
        <div>
            <div className='container'>
                <div className='flex justify-between py-25 max-sm:flex flex-col'>
                    <div>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <p>Powered by Webflow.</p>
                    </div>
                    <div className='flex justify-between gap-[200px] max-lg:gap-[100px] max-md:gap-[50px] max-sm:flex-col'>
                        <div>
                            <p>Password</p>
                            <p>404</p>
                        </div>
                        <div>
                            <p>Licenses</p>
                            <p>Style Guide</p>
                            <p>Changelog</p>
                        </div>
                        <div>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
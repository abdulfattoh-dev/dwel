import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import Popup from '../ui/Popup';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleCloseLogin = () => setShowLogin(false);

    const [showRegister, setShowRegister] = useState(false);
    const handleShowRegister = () => setShowRegister(true);
    const handleCloseRegister = () => setShowRegister(false);
    return (
        <div>
            <div className='container'>
                <div className='flex justify-between items-center h-[105px]'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex gap-5'>
                        <button onClick={handleShowLogin}>Login</button>
                        <button onClick={handleShowRegister}>Register</button>
                        <Popup isShow={showLogin} onClose={handleCloseLogin}>
                            <div className="w-[414px] bg-white p-8 flex flex-col items-center">
                                <div>
                                    <img src={logo} alt="" />
                                </div>
                                <h2 className='text-2xl font-semibold mt-12 mb-6'>DWEL'ga kirish</h2>
                                <input className="w-[100%] px-4 py-3 bg-[#dee0e5] rounded-[10px]" type="email" placeholder='Enter your email' />
                                <input className="w-[100%] px-4 py-3 bg-[#dee0e5] rounded-[10px] my-6" type="password" placeholder='Enter your password' />
                                <button className='w-[100%] py-3 bg-[#7000ff] text-white rounded-[10px] font-semibold'>Submit</button>
                            </div>
                        </Popup>
                        <Popup isShow={showRegister} onClose={handleCloseRegister}>
                            <div className="w-[414px] bg-white p-8 flex flex-col items-center">
                                <div>
                                    <img src={logo} alt="" />
                                </div>
                                <h2 className='text-2xl font-semibold mt-12 mb-6'>DWEL'dan ro'yxatdan o'tish</h2>
                                <input className="w-[100%] px-4 py-3 bg-[#dee0e5] rounded-[10px]" type="email" placeholder='Enter your email' />
                                <input className="w-[100%] px-4 py-3 bg-[#dee0e5] rounded-[10px] my-6" type="password" placeholder='Enter your password' />
                                <button className='w-[100%] py-3 bg-[#7000ff] text-white rounded-[10px] font-semibold'>Submit</button>
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
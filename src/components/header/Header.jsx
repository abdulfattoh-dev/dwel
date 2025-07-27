import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import Popup from '../ui/Popup';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div>
            <div className='container'>
                <div className='flex justify-between items-center h-[105px]'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex gap-5'>
                        <button onClick={handleShow}>Login</button>
                        <button onClick={handleShow}>Register</button>
                        <Popup isShow={show} onClose={handleClose}>
                            <div className="size-80 bg-white p-4">
                                <h2>Login form</h2>
                                <input className="border" type="text" />
                                <input className="border" type="text" />
                                <div>
                                    <button>Submit</button>
                                    <button onClick={handleClose}>Cancel</button>
                                </div>
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
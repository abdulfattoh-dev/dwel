import React from 'react'

const Popup = ({ children, onClose, isShow = false }) => {
    return (
        isShow &&
        <>
            <div onClick={onClose} className='fixed top-0 left-0 w-full h-screen bg-black/50 z-40'></div>
            <div className='z-40 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 popup-animation'>
                {children}
            </div>
        </>
    )
}

export default Popup
import React, { useState } from 'react'
import Popup from '../ui/Popup'
import { PROJECTS } from '../../static'

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div className='container'>
                <div className='my-30'>
                    <h4 className='mb-8'>PROJECTS</h4>
                    <div className='grid grid-cols-2 gap-8'>
                        {
                            PROJECTS?.map((item, index) => (
                                <div key={index}>
                                    <div>
                                        <img onClick={() => setSelectedImage(item.image)} src={item.image} alt="" />
                                    </div>
                                    <h4 className='mt-[18px] text-2xl'>{item.title}</h4>
                                </div>
                            ))
                        }
                        <Popup isShow={selectedImage} onClose={() => setSelectedImage(null)}>
                            <img
                                className=" h-[80vh] object-contain"
                                src={selectedImage}
                                alt=""
                            />
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
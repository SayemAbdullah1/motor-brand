import PhotoAlbum from "react-photo-album";
// import { useState } from "react";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";


import photos1 from "./../../assets/album/1.jpeg";
import photos2 from "./../../assets/album/2.jpeg";
import photos3 from "./../../assets/album/3.jpeg";
import photos4 from "./../../assets/album/4.jpeg";
import photos5 from "./../../assets/album/5.jpeg";
import photos6 from "./../../assets/album/6.jpeg";
import photos7 from "./../../assets/album/7.jpeg";
import photos8 from "./../../assets/album/8.jpeg";
import photos9 from "./../../assets/album/9.jpeg";
import photos10 from "./../../assets/album/10.jpeg";


const Gallery = () => {
    const photos = [
        { src: photos1, width: 400, height: 300 },
        { src: photos2, width: 500, height: 400 },
        { src: photos3, width: 400, height: 500 },
        { src: photos4, width: 300, height: 300 },
        { src: photos5, width: 500, height: 300 },
        { src: photos6, width: 350, height: 300 },
        { src: photos7, width: 400, height: 300 },
        { src: photos8, width: 400, height: 300 },
        { src: photos9, width: 500, height: 300 },
        { src: photos10, width: 400, height: 300 },
    ];

    return (
        <div>
            <div className='grid grid-cols-10 my-12 mx-6'>
                <div className='col-span-1'>
                    <h2 className='text-3xl font-bold'>Gallery</h2>
                </div>
                <div className='border-b-2 border-green-600 col-span-9 mb-2'>
                    <p></p>

                </div>
            </div>
            <PhotoAlbum layout="rows" photos={photos} />;
        </div>
    )
    
    
};

export default Gallery;



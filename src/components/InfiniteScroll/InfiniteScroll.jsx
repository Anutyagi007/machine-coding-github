import React, { useEffect, useState } from 'react';
import './InfiniteScroll.css';
const InfiniteScroll = () => {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const fetchImages = async() => {
        const data = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=3`);
        const json = await data.json();
        setPhotos((data) => [...data, ...json]);
    }
    useEffect(()=> {
        fetchImages()
    },[currentPage]);
    useEffect(()=> {
        const observer = new IntersectionObserver((params)=>{
            if(params[0]?.isIntersecting) {
                observer.unobserve(lastImage);
                setCurrentPage((page)=>page+1);
            }
        })

        const lastImage = document.querySelector('.image-post:last-child');
        console.log(lastImage);
        if(!lastImage) {
            return;
        }
        observer.observe(lastImage);
        // return() => {
        //     if(lastImage) {
        //         observer.unobserve(lastImage);
        //     }
        //     observer.disconnect();
        // }
    }, [photos])
    console.log(photos);
  return (
    <div>
        <h2>Infinite Scroll Component</h2>
        <div className='infinite-image-container'>
            {
                photos?.map((photo)=> {
                    return <img className='image-post' key={photo.id} src={photo.download_url} alt={photo.url}/>
                })
            }
        </div>
    </div>
  )
}

export default InfiniteScroll
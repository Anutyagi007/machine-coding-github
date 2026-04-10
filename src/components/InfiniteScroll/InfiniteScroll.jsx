import React, { useEffect, useState } from 'react'
import './InfiniteScroll.css';
const InfiniteScroll = () => {
    const [photos, setPhotos] = useState([]);
    const fetchImages = async() => {
        const data = await fetch('https://picsum.photos/v2/list?page=1&limit=3');
        const json = await data.json();
        setPhotos(json);
    }
    useEffect(()=> {
        fetchImages()
    },[]);
    console.log(photos);
  return (
    <div>
        <h2>Infinite Scroll Component</h2>
        <div className='infinite-image-container'>
            {
                photos?.map((photo)=> {
                    return <img key={photo.id} src={photo.download_url} alt={photo.url}/>
                })
            }
        </div>
    </div>
  )
}

export default InfiniteScroll
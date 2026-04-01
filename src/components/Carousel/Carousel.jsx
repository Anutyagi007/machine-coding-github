import React, { useEffect, useState } from 'react'
import './Carousel.css';

const Carousel = () => {
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const getImages = async () => {
        const data = await fetch('https://picsum.photos/v2/list?limit=6');
        const res = await data.json();
        console.log(res);
        setImages(res);
    }
    useEffect(()=> {
        getImages();
    }, [])

    useEffect(()=> {
        if(images.length === 0 || isHovering) return;
        const interval = setInterval(()=> {
            setActiveIndex((prev) => prev < images.length -1 ? prev + 1 : 0);
        }, 3000)
        return () => clearInterval(interval);
    }, [images, isHovering])    

        
  return (
    <div>
        <h2>Carousel Component</h2>
        <div className='content-container' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <button className='left' onClick={() => setActiveIndex((prev) => prev > 0 ? prev -1 : prev)}>{'<'}</button>
            <button className='right' onClick={()=> setActiveIndex((prev) => prev < images.length -1 ? prev+1 : prev)}>{'>'}</button>
            <div className='image-div'>
                <img key={images[activeIndex]?.id} src={images[activeIndex]?.download_url} alt={images[activeIndex]?.id} />
                <div className='nav-dot-container'>
                    {
                    images.map((_, index) => {
                        return (
                            <span onClick={()=>setActiveIndex(index)} key={index} className= {`nav-dots ${index === activeIndex ? 'active' : ''}`}></span>
                        )
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel
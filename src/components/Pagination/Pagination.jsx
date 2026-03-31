import React, { useEffect, useState } from 'react'
import './Pagination.css';
const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products?limit=500');
        const json = await data.json();
        setProducts(json.products);
        console.log(json.products);
    }
    useEffect(()=> {
        fetchData();
    }, []);
    const totalPages = Math.ceil (products.length /10);
    const button = [];
    for(let i=1;i<=totalPages;i++) {
        button.push(i);
    }
  return (
    <div>
        <h2>Pagination Component</h2>
        <div className='product-container'>
            {
                products.slice((currentPage-1)*10, currentPage*10).map((product) => {
                    return (
                        <div key={product.id} className='product'>
                            <img src={product.thumbnail} alt={product.title} />
                            <h4>{product.title}</h4>
                        </div>
                    )
                })
            }
        </div>
        <div className='pagination-container'>
            <button onClick={()=>setCurrentPage((prev)=> prev > 1 ? prev -1 : prev)}>{'<'}</button>
            {
                button.map((btn) => {
                    return <button className={currentPage === btn ? 'active' : ''} onClick={()=>setCurrentPage(btn)}>{btn}</button>
                })
            }
            <button onClick={()=>setCurrentPage((prev) => prev < totalPages ? prev +1 : prev)}>{'>'}</button>
        </div>
    </div>
  )
}

export default Pagination
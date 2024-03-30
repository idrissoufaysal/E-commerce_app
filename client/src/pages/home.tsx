import React from 'react'
import useProductStore from '../context/ProductStore'


const Home = () => {
  const {products,fetchPoducts}=useProductStore()
  //console.log(products);
  //fetchPoducts()
  const filtererdProducts=products.filter((item)=>{
    return(
      item.category==="women's clothing" || item.category==="men's clothing"
    )
  })
  console.log(filtererdProducts);
  
  
  return (
    <div>
      
    </div>
  )
}

export default Home

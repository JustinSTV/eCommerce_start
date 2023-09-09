import React from 'react'
import { useQuery } from 'react-query'
import { getAllProducts } from '../Services/Products'
import { OneProductInterface, ProductResponse } from '../Services/Interfaces'
import OneProduct from './OneProduct/OneProduct'
import { useParams } from 'react-router-dom'


const MainPage:React.FC = () => {

  const { term } = useParams()
  const { data } = useQuery<ProductResponse>('products', () => getAllProducts(), {enabled: term === undefined})
  console.log(term)



  return (
    <div className='grid gap-4 grid-rows-3 grid-cols-3
    justify-items-center
    '>
      {
        data?.products?.map((product: OneProductInterface) => (
          <OneProduct product={product} />
        ))
      }
    </div>
  )
}

export default MainPage
import React from 'react'
import { useQuery } from 'react-query'
import { getAllProducts } from '../Services/Products'

interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  stock: number,
  images: string[],
  thumbnail: string,
  category: string,
}

const MainPage:React.FC = () => {

  const { data , error} = useQuery<Product[]>('products', () => getAllProducts())
  console.log(error)

  return (
    <div>
      {
        data?.map((product: Product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <p>{product.category}</p>
          </div>
        ))
      }
    </div>
  )
}

export default MainPage
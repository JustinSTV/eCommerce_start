export const getAllProducts = () => {
  return fetch('https://dummyjson.com/products')
  .then(res => res.json())
}

export const searchProducts = (searchTerm: string) => { 
  return fetch(`https://dummyjson.com/products?search=${searchTerm}`)
  .then(res => res.json())
}
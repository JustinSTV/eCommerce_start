export interface OneProductInterface {
   id: number,
   title: string,
   description: string,
   price: number,
   stock: number,
   images: string[],
   thumbnail: string,
  category: string,
}

export interface ProductResponse{
   products: OneProductInterface[]
}
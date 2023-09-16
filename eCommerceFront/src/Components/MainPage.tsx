import React, { useEffect } from "react"
import { useQuery } from "react-query"
import { getAllProducts, searchProducts } from "../Services/Products"
import { OneProductInterface, ProductResponse } from "../Services/Interfaces"
import OneProduct from "./OneProduct/OneProduct"
import { useParams } from "react-router-dom"

const MainPage: React.FC = () => {
    const { search } = useParams()
    const { data } = useQuery<ProductResponse>(
        "allProducts",
        () => getAllProducts(),
        { enabled: search === undefined }
    )
    const { data: searchData, refetch } = useQuery<ProductResponse>(
        "searchedProducts",
        () => searchProducts(search ?? ""),
        { enabled: search !== undefined }
    )

    useEffect(() => {
        console.log(search)
    }, [search])

    return (
        <div
            className="grid gap-4 grid-rows-3 grid-cols-3
    justify-items-center
    ">
            {!search
                ? data?.products?.map((product: OneProductInterface, i) => (
                      <OneProduct product={product} key={i} />
                  ))
                : searchData?.products?.map(
                      (product: OneProductInterface, i) => (
                          <OneProduct product={product} key={i} />
                      )
                  )}
        </div>
    )
}

export default MainPage

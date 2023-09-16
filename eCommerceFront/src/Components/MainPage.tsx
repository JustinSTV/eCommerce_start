import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getAllProducts, searchProducts } from "../Services/Products"
import { OneProductInterface, ProductResponse } from "../Services/Interfaces"
import OneProduct from "./OneProduct/OneProduct"
import { useParams, useSearchParams } from "react-router-dom"

const MainPage: React.FC = () => {

  let [ searchParams, setSearchParams ] = useSearchParams()
  const [search, setSearch] = useState<string | undefined>()

  //kai pasikeicia searchParams, setiname use state
  useEffect(() => {
    setSearch(searchParams.get("search") ?? undefined)
  }, [searchParams])

    //jai nera search parametro, rodeome visus produktus
    const { data } = useQuery<ProductResponse>("allProducts",() => getAllProducts(),{ enabled: search === undefined })
    //jai yra search parametras, rodeome paieskos rezultatus
    const { data: searchData, refetch } = useQuery<ProductResponse>("searchedProducts",() => searchProducts(search ?? ""), { enabled: search !== undefined })

    //kai pasikeicia search parametras, refetchinam duomenis
    useEffect(() => {
      console.log("refetching")
        refetch()
    }, [searchParams, refetch])

    return (
        <div
            className="grid gap-4 grid-rows-3 grid-cols-3 justify-items-center">
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

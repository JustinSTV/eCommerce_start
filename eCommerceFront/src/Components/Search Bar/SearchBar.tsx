import React, {useState, useEffect} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

interface SearchBarInterface {
  name: string,
  lable: string
}

const SearchBar: React.FC<SearchBarInterface> = ({name, lable}) => {
  const [searchProductName, setSearchProductName] = useState<string | undefined>()
  let [ searchParams, setSearchParams ] = useSearchParams()
  
  useEffect(() => {
    setSearchParams((params) => {
      params.set("search", searchProductName ?? "")
      return params
    })
  }, [searchProductName, setSearchParams])

  return (
    <div>
      <input
        className="w-64 h-12 border-solid border-2
        border-black
        rounded-lg"
        type="text"
        name={name}
        placeholder={lable}
        onChange={(e) => setSearchProductName(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
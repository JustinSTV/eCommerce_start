import React from "react"
import { OneProductInterface } from "../../Services/Interfaces"
interface Props {
    product: OneProductInterface
}

const OneProduct: React.FC<Props> = ({ product }) => {
    return (
        <div key={product.id} className="border border-black w-3/4 text-center">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}€</p>
        </div>
    )
}

export default OneProduct
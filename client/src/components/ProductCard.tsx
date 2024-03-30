import { Product } from "../utils/types"

interface props{
    product:Product
}

const ProductCard = ({product}:props) => {
//const {title,id,image,category,price,description,rating}=props

  return (
    <div className="product">
        <div className="img">
            <img src={product.image} alt="" />
            
        <p>{product.price}</p>

        </div>
        <h4>{product.title}</h4>
        <div className="button">
            <button>
                Add to cart
            </button>
        </div>
    </div>
  )
}

export default ProductCard

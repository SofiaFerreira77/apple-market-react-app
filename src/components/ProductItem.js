export default function ProductItem({product}) {
    return (
        <li className="Product">
            <a href={'detail/'+product.id}>
                <img src={product.thump} alt="" title=""/>
                {product.title}
            </a>
        </li>
    )
}
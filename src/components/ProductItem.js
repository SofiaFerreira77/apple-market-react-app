import styles from './ProductItem.module.css'

export default function ProductItem({product}) {
    return (
        <article className={styles.Product}>
            <a href={'detail/'+product.id}>
                <img src={product.thump} alt="" title=""/>
                {product.title}
            </a>
        </article>
    )
}
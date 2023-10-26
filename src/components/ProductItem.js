import styles from '../styles/ProductItem.module.css'

export default function ProductItem({product}) {
    console.log(product)

    return (
        <article className={styles.Product}>
            <a href={'detail/'+product.id}>
                <img src='https://www.apple.com/v/mac/home/bv/images/overview/compare/compare_mba_m1__9d4o64w6wv6m_large_2x.png' alt="" title=""/>
                <h3>{product.baseName}</h3>
                {product.price.display.smart}
            </a>
        </article>
    )
}
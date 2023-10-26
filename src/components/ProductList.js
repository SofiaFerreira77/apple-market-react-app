import { isArrayEmpty } from "../utils/Utils"
import styles from '../styles/ProductList.module.css'
import ProductItem from "./ProductItem"

export default function List() {
    const productsList = Object.entries(ProductListData.items)
    const products = Object.values(productsList);

    const showProductList = isArrayEmpty(products) ? [] : products.map((product) => <ProductItem key={product.id} product={product[1]} />)

    return (
        <main className={styles.ProductList}>
            <div className={styles.ProductListContainer}>
                {showProductList}
            </div>
        </main>
    )
}
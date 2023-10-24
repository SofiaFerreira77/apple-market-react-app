import { dumpLogs, isArrayEmpty } from "../utils/Utils"
import ProductListData from '../data/ProductListData'
import styles from './ProductList.module.css'
import ProductItem from "./ProductItem"

export default function List() {

    dumpLogs(ProductListData)
    
    const showProductList = isArrayEmpty(ProductListData) ? [] : ProductListData.map((product) => <ProductItem key={product.id} product={product} />)

    return (
        <main className={styles.ProductList}>
            {showProductList}
        </main>
    )
}
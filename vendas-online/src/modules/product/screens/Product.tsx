import { useEffect } from 'react'
import { useDataContext } from "../../../share/hooks/useDataContext";
import { useRequests } from '../../../share/hooks/useRequests';
import { MethodsEnum } from '../../../share/enums/methods.enum';
import { ProductType } from '../types/ProductType';
import { URL_PRODUCT } from '../../../share/functions/connection/urls';

const Product = () => {
    const { products, setProducts } = useDataContext();
    const { request } = useRequests();

    useEffect(() => {
        request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts)
    }, [])

    return (
        <div>
            {`PRODUTOS ${products.length}`}
        </div>
    )
}

export default Product;
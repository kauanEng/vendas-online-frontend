import { useGlobalContext } from "../../../share/hooks/useGlobalContext";

const Product = () => {
    const { user } = useGlobalContext();

    return (
        <div>Página de produtos
            {`PRODUTOS ${user?.name}`}
        </div>
    )
}

export default Product;
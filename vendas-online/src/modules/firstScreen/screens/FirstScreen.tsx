import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../share/hooks/useGlobalContext';
import { ProductRoutesEnum } from '../../product/routes';


const FisrtScreen = () => {
    const { user } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(ProductRoutesEnum.PRODUCT)
        }
    }, [])
    return <Spin />
}

export default FisrtScreen;
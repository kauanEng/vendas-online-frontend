import axios from "axios";
import { useState } from "react"
import { useGlobalContext } from "./useGlobalContext";
import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { URL_AUTH } from "../functions/connection/urls";
import { ERROR_INVALID_PASSWORD } from "../functions/connection/errorStatus/errorStatus";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../../modules/product/routes";
import { setAuthorizationToken } from "../functions/connection/auth";
import { AuthType } from "../../modules/login/types/AuthType";

export const useRequests = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setNotification } = useGlobalContext();

    const getRequest = async (url: string) => {
        setLoading(true);
        return await axios({
            method: "get",
            url: url,
        })
            .then((result) => {
                console.log(`${result.data.accessToken}`);
                return result.data;
            })
            .catch(() => {
                setNotification('Problema de requisição', 'error')
            })
    }

    const postRequest = async <T>(url: string, body: any): Promise<T | undefined> => {
        setLoading(true);
        const returnData = await connectionAPIPost<T>(url, body)
            .then((result) => {
                setNotification('Login efetuado com sucesso!', 'success');
                return result;
            })
            .catch((error: Error) => {
                setNotification(error.message, 'error')
                return undefined;
            });

        setLoading(false)
        return returnData;
    }


    const authRequest = async (body: any): Promise<void> => {
        setLoading(true);

        await connectionAPIPost<AuthType>(URL_AUTH, body)
            .then((result) => {
                setAuthorizationToken(result.accessToken)
                navigate(ProductRoutesEnum.PRODUCT);
                return result;
            })
            .catch(() => {
                setNotification(ERROR_INVALID_PASSWORD, 'error')
                return undefined;
            });
        setLoading(false)
    }

    return {
        loading,
        authRequest,
        getRequest,
        postRequest
    }
}
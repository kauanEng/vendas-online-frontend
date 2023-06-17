import axios from "axios";
import { useState } from "react"

export const useRequests = () => {
    const [loading, setLoading] = useState(false);

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
                alert('Usuário ou senha inválidos')
            })
    }

    const postRequest = async (url: string, body: any) => {
        setLoading(true);
        const returnData = await axios({
            method: "post",
            url: url,
            data: body,
        })
            .then((result) => {
                alert(`Fez o login: ${result.data.accessToken}`);
                return result.data;
            })
            .catch(() => {
                alert('Usuário ou senha inválidos')
            })
        setLoading(false)
        return returnData;
    }

    return {
        loading,
        getRequest,
        postRequest
    }
}
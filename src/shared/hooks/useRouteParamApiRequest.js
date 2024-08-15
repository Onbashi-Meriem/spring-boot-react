import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export function useRouteParamApiRequest(param, apiFunction) {
    console.log(param)
    const params = useParams();
    console.log(params)
    const pathParams = params[param]
    console.log(pathParams)
    const [apiProgress, setApiProgress] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState();

    useEffect(() => {
        const sendRequest = async () => {
            setApiProgress(true);
            try {
                const response = await apiFunction(pathParams);
                setData(response.data);
            } catch (error) {
                setError(error.response.data.message);
            } finally {
                setApiProgress(false);
            }
        };
        sendRequest();
    }, [pathParams]);
    return { apiProgress, data, error }
}

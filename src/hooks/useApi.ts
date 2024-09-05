// src/hooks/useApi.js
import { useState, useEffect, useCallback, useMemo } from 'react';
import api from '../service/axios.config';

type useApiType<T> = {
    endpoint: string;
    method?: "GET" | "POST" | "PUT" | "DELETE" | "";
    body?: {} | null;
    options?: {}
}

const  useApi = <T>({ endpoint, method = "GET", body = null, options = {} }: useApiType<T>) => {

    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Função para realizar a requisição
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {

            const config = {
                method,
                url: endpoint,
                ...options,
                ...(body ? { data: body } : {}),
            };

            const response = await api(config);

            setData(response.data?.data as T);

        } catch (err: any) {
            setError(err.response ? err.response.data : 'Network Error');
        } finally {
            setLoading(false);
        }
    }, [endpoint, method, body, options]);

    // Efetua a requisição no primeiro render se o método for GET
    useMemo(() => {
        if (method === 'GET') {
            fetchData();
            method = ""
        }
    }, [method]);

    // Retorna os dados, erros, estado de loading, e a função fetchData para chamadas manuais
    return { data, error, loading, resolve: fetchData };
};

export default useApi;

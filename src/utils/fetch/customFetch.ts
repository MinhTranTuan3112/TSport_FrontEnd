type FetchOptions = {
    method?: string;
};

type Props = {
    endpointPath: string;
    options?: FetchOptions;
    baseUrl?: string;
    headers?: Record<string, string>;
    body?: any;
};

export const customFetch = async ({
    endpointPath,
    options = {},
    baseUrl = 'http://localhost:8080/api',
    headers = {},
    body
}: Props): Promise<Response> => {
    const fullUrl = `${baseUrl}${endpointPath}`;

    const allHeaders = {
        ...headers
    };

    const allOptions = {
        ...options,
        headers: allHeaders,
        body: JSON.stringify(body)
    };

    const response = await fetch(fullUrl, allOptions);

    return response;
};
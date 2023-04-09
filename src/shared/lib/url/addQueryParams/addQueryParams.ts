import { OptionalRecord } from 'app/types/global';

export function getQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.localStorage.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
}

/**
 * Function to add query string parameters to URL
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}

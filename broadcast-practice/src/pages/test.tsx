import { useEffect } from 'react';
import useSWR from 'swr';


const test = () => {

    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    function useLogoutListener() {
        const { data, error } = useSWR('/api/logout', fetcher, {
            refreshInterval: 0,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        });

        if (error) {
            console.error('Error listening for logout event:', error);
        }

        if (data === 'user logged out') {
            // Clear user session data and redirect to login page
            // ...
        }
    }

    useLogoutListener();

    return (
        <div>test</div>
    )
}

export default test
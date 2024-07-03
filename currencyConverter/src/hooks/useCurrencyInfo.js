import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.rates);
                console.log(res.rates); // Log the fetched data
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error); // Proper error handling
            });
    }, [currency]);
 
    return data;
}

export default useCurrencyInfo;

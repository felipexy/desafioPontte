import { useState, useEffect } from 'react';

function LoadData(){

    const [dataAPI, setDataAPI] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        const response = await fetch('https://testfrontend.pontte.com.br/');
        const data = await response.json();
        setDataAPI(data);
        setLoading(true);
    }, []);

return {dataAPI, loading};
}

export default LoadData;
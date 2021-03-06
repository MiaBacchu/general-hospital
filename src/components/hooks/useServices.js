import { useEffect, useState } from "react"

const useServices = function() {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return {services};
}

export default useServices;
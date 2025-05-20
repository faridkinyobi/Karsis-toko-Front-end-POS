// export default const postData =()=>{

import axios from "axios";
import { config } from "../config";

// }

export default async function postData({
    url,
    payload,
}: {
    url: string;
    payload: unknown;
}) {
    try {
        const getTokenAuth = localStorage.getItem("auth");
        const { token } = getTokenAuth ? JSON.parse(getTokenAuth) : {};

        return await axios.post(`${config.api_host_dev}/${url}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log(error);
    }
}

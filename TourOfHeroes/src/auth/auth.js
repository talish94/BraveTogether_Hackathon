const axios = require('axios').default;

export default async function getToken() {
    try{
        const response = await axios.get("http://10.0.2.2:5000/token", {
            headers: {
                "Authorization": "Basic YWRtaW5AYWRtaW4uY29tOjAxMjM0NTY3ODk=",
                'Content-Type': 'application/json'
            },
        });
        return response.data.token;

    }
    catch(e){
        console.log(e);
    }
}




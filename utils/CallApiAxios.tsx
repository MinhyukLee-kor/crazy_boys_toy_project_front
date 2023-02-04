import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://localhost:8080'
});

const AUTH_TOKEN = "123";
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.defaults.timeout = 2500;

export default async function callApi(method: string, params: any) {
    console.log("method : " + method);
    console.log("params : " + JSON.stringify(params));
    return;
    if (method === 'get') { // GET
        try {
            // GET 요청은 params에 실어 보냄
            const response = await instance.get('/user', {
                params: {
                    ID: 12345
                }
            });
            
            // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.
            
            await axios.get('/user?ID=12345'); // 위의 요청과 동일
            
            var userId = 12345;
            await axios.get(`/user?ID=${userId}`); // Backtick(`)을 이용해 이렇게 요청할 수도 있다.
            
            console.log(response);
        } catch (e) {
            // 실패 시 처리
            console.error(e);
        }
    } else if (method === 'post') { // POST
        try {
        // POST 요청은 body에 실어 보냄
        await instance.post('/user', params);
        } catch (e) {
        console.error(e);
        }
    }
}
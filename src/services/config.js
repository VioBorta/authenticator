import axios from "axios";
import { retrieveData } from "../asyncStorage";

const baseUrl = 'https://microservice-auth.cbim.it'

export const  instance = axios.create({
    baseURL: `${baseUrl}`,
});


const login = (psw, username) => {
    const url = '/api/auth/login'
    return instance.post(url, { psw, username })
}

const verifyStrongConfirmationCode = (verifyCodePayload, Authorization) => {
    const url = '/api/verifycode';
    return instance.post(url, { verifyCodePayload, Authorization })
}

function getStrongConfirmCode(Authorization) {
    return instance.get(`/api/confirmationcode?Authorization=${Authorization}`)
}

async function checkPhoneCode(code) {
    await retrieveData('uuid').then((response) => {
        const uuidAsyncStorage = response;
        const url = `/api/auth/phone/code?code=${code}`
        let config = {
            headers: {
                'uuid': uuidAsyncStorage
            }
        };
        return instance.post(url, {}, config);
    })


}

function phoneVerification(phone, Authorization) {
    const url = (`/api/auth/phone/sms?phone=${phone}`)
    return instance.post(url, Authorization)
}

getPhoneNumber = () => {
    return instance.get(`/api/auth/getphone`)
}

phoneCertification = () => {
    return instance.post('/api/auth/phone/certifica')
}

export default {
    instance,
    checkPhoneCode,
    phoneVerification,
    login,
    getPhoneNumber,
    getStrongConfirmCode,
    verifyStrongConfirmationCode,
    phoneCertification
};

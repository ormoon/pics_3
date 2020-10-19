import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID olO28Mc2Qgl6eaZLo1_cv2RdwPHbaW22jL2V89sF7Js'
    }
})
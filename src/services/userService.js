

// dùng backage axios ở phía client để gửi req lên sever
import { stringify } from 'react-auth-wrapper/helpers'
import axios from '../axios'

const handleLogin = (email, password) => {
    // userEmail and userPassword là cái mà client gửi lên sau đó nó gán bằng email và passwork
    // 
    return axios.post('/api/login', {email: email, password: password})
}

// đối với thằng react nó k có module.export mà thay thành export{handleLogin}

export {
    handleLogin
}

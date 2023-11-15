

// dùng backage axios ở phía client để gửi req lên sever
import axios from '../axios'

const handleLogin = (email, password) => {
    return axios.post('/api/login')
}

// đối với thằng react nó k có module.export mà thay thành export{handleLogin}

export {
    handleLogin
}



// dùng backage axios ở phía client để gửi req lên sever
import { stringify } from 'react-auth-wrapper/helpers'
import axios from '../axios'

const handleLogin = (email, password) => {
    // userEmail and userPassword là cái mà client gửi lên sau đó nó gán bằng email và passwork
    // 
    return axios.post('/api/login', {email: email, password: password})
}

// react lấy dữ liệu người dùng hiển thị
const getAllUsers = (inputId) =>{
    // đường link api trung vs dduongf link bên backend
    // sử dung temple string 
    return axios.get(`/api/get-all-user?id=${inputId}`);
}

// reactjs Create new User


// reactjs Edit User

// đối với thằng react nó k có module.export mà thay thành export{handleLogin}
export {
    handleLogin,
    getAllUsers
}

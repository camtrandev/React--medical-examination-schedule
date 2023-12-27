

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
const createNewUserService = (data) => {
    return axios.post('/api/create-new-user',data)

}

// reactjs delete User
const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', {id:userId})
    return axios.delete('/api/delete-user',{
        data: {
            id: userId
        }
    });
}

// Edit User
// đầu vào data là email pass ...
const EditUserService = (inputData) => {
    return axios.put('/api/edit-user',inputData);
}

// thấy thông tin dữ liệu phần allCode
const getAllCodeService = async(inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
}

const getTopDoctorServicer = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

// đối với thằng react nó k có module.export mà thay thành export{handleLogin}
export {
    handleLogin,
    getAllUsers, 
    createNewUserService,
    deleteUserService,
    EditUserService,
    getAllCodeService,
    getTopDoctorServicer
}



// dùng backage axios ở phía client để gửi req lên sever
import { stringify } from 'react-auth-wrapper/helpers'
import axios from '../axios'

const handleLogin = (email, password) => {
    // userEmail and userPassword là cái mà client gửi lên sau đó nó gán bằng email và passwork
    // 
    return axios.post('/api/login', { email: email, password: password })
}

// react lấy dữ liệu người dùng hiển thị
const getAllUsers = (inputId) => {
    // đường link api trung vs dduongf link bên backend
    // sử dung temple string 
    return axios.get(`/api/get-all-user?id=${inputId}`);
}

// reactjs Create new User
const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)

}

// reactjs delete User
const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', {id:userId})
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}

// Edit User
// đầu vào data là email pass ...
const EditUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}

// thấy thông tin dữ liệu phần allCode
const getAllCodeService = async (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
}

const getTopDoctorServicer = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

// Gọi Api lấy thông tin của Bác sĩ

const getAllDoctors = (limit) => {
    return axios.get(`/api/get-all-doctors`)
}

const saveDetailDoctorService = (data) => {
    return axios.post('/api/save-infor-doctors', data)
}

const getDetailInforDoctor = (inputId) => {
    return axios.get(`api/get-detail-doctor-by-id?id=${inputId}`);
}

const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data)
}

const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`);
}


const getExtraInforDoctorById = (doctorId) => {
    return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`);
}

const getProfileDoctorById = (doctorId) => {
    return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`);
}

const postPatientBookAppointment = (data) => {
    return axios.post('/api/patient-book-appointment', data)
}

const postVerifyBookAppointment = (data) => {
    return axios.post('/api/verify-book-appointment', data)
}

const createNewSpecialty = (data) => {
    return axios.post('/api/create-new-specialty', data)
}

const getAllSpecialty = () => {
    return axios.get(`/api/get-specialty`);
}

// đối với thằng react nó k có module.export mà thay thành export{handleLogin}
export {
    handleLogin, getAllUsers,
    createNewUserService, deleteUserService,
    EditUserService, getAllCodeService,
    getTopDoctorServicer, getAllDoctors,
    saveDetailDoctorService, getDetailInforDoctor,
    saveBulkScheduleDoctor, getAllSpecialty,
    getScheduleDoctorByDate,
    getExtraInforDoctorById,
    getProfileDoctorById,
    postPatientBookAppointment,
    postVerifyBookAppointment,
    createNewSpecialty
}

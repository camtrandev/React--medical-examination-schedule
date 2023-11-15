import React, { Component } from 'react'; // import component từ ract vào login
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import  { handleLogin } from '../../services/userService';



class Login extends Component {
    // trước khi render nó sẽ chạy hàm này trc
    // hàm khởi tạo constructor
    constructor(props) {
        super(props);
        // lưu trang thái tại 1 thời điểm bằng biến state
        // giá trị của state là 1 object
        // this.state = {
        //     username:'',
        //     password:'',
        //     isShowPassword: false
        // }
        this.state = {
            username: '',
            password: '',
            isShowPassword: false
        }

    }

    // lưu trạng thái của userName và passwork

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
           
        })

    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
           
        })
    }
// ấn vào login thì trả ra giá trị vừa nhập
    handleLogin = async () => {
        await handleLogin(this.state.username, this.state.password);
    }
// tạo sự kiện mở mắt nhắm mắt khi nhập paswork
    handleShowPassword = () => {
        this.setState({
            isShowPassword : !(this.state.isShowPassword),
        })
    }


//code Jsx trong render
    render() {   
        return (
            // nó chỉ return ra 1 khối (1 div) nếu muốn return ra 2 hay nhiều thì bọc vào 1 div 
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>UserName:</label>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Enter your userName...'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                             /> 
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>PassWorkd:</label>
                            <div className='custom-input-password'>
                                <input 
                                    type= {this.state.isShowPassword ? "text":"password"} 
                                    className='form-control'                                    
                                    placeholder='Enter your passWord...' 
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span
                                    onClick ={() => {this.handleShowPassword()} }
                                >
                                    <i class= {this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"}></i>

                                </span>
                            </div>

                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => {this.handleLogin()}} >Login</button>
                        </div>
                        
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password</span>

                        </div>
                        <div className='col-12 text-center'>
                            <span className='text-other-login mt-3'>Or Login with</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i  className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

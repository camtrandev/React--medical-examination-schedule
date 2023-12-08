import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
// để sử dụng userAction, adminAction, appAction
import * as actions from '../../../store/actions'

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr:[]
        }
    }
    

 async componentDidMount () {

    //dung redux
     this.props.getGenderStart();

    // lấy từ dưới database lên
        // try {
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState ({
        //             genderArr: res.data
        //         })
        //     }
        //     console.log("check res: ", res);
        // } catch(e) {
        //     console.log('error',e)
        // }
    }


    // 1 function giúp nhận biết được biến props thay đổi 
    // Biến prevProp so sánh biến props hiện tại và biến sắp tới
    componentDidUpdate(prevProp, prevState, snapshot) {
        // render -> didUpdate
        // check hiện tại và quá khứ
        // quá khứ là [] và hiện tại là [3] ptu 
        // setState lại rồi render ra màn hình
        if (prevProp.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux,
            })
        }
    }

    render() {
        let genders = this.state.genderArr;
        let language = this.props.language;

        return (
            <div className='user-redux-container'>
                <div className='title'>
                    User Redux CamtranDev
                </div>
                <div className="user-redux-body">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'> <FormattedMessage id="manage-user.add"/></div>

                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input className='form-control' type='email'/>
                            </div>

                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input className='form-control' type='password' />
                            </div>

                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.lastName" /></label>
                                <input className='form-control' type='text' />
                            </div>

                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.firstName" /></label>
                                <input className='form-control' type='text' />
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.phoneNumber" /></label>
                                <input className='form-control' type='text' />
                            </div>

                            <div className='col-9'>
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input className='form-control' type='text' />
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select className='form-control'>
                                {genders && genders.length > 0 && 
                                   genders.map((item, index) =>{
                                    return (
                                        <option 
                                            key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    )
                                   }) 
                                }
            
                                </select>
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.position" /></label>
                                <select className='form-control'>
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.roleId" /></label>
                                <select className='form-control'>
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>

                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.image" /></label>
                               <input className='form-control' typeof='text' />
                            </div>
                            <div className='col-12 mt-3'>
                                <button className='btn btn-primary'><FormattedMessage id="manage-user.save" /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
        //processLogout: () => dispatch(actions.processLogout()),
        //changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    componentDidMount() {
    }


    render() {
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
                                    <option selected>Choose...</option>
                                    <option>...</option>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

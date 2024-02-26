import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ProfileDoctor.scss';
import { getProfileDoctorById } from '../../../services/userService';
import { LANGUAGES } from '../../../utils'
import NumberFormat from 'react-number-format'


class ProfileDoctor extends Component {


    constructor(props) {
        super(props);
        this.state = {
            dataProfile: {}
        }
    }


    async componentDidMount() {
        let data = await this.getInforDoctor(this.props.doctorId);
        this.setState({
            dataProfile: data
        })
    }

    getInforDoctor = async (id) => {
        let result = {};
        if (id) {
            let res = await getProfileDoctorById(id);
            if (res && res.errCode === 0) {
                result = res.data;
            }
        }
        return result;
    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
        if (this.props.doctorId !== prevProps.doctorId) {

        }
    }

    render() {
        let { language } = this.props;
        let { dataProfile } = this.state;

        return (
            <div className='price'>
                Giá khám:
                {dataProfile && dataProfile.Doctor_infor && language === LANGUAGES.VI ?
                    < NumberFormat
                        value={dataProfile.Doctor_infor.priceTypeData.valueVi}
                        displayType='text'
                        thousandSeparator={true}
                        suffix={'VND'}
                    />
                    : ''

                }

                {dataProfile && dataProfile.Doctor_infor && language === LANGUAGES.EN ?

                    < NumberFormat
                        value={dataProfile.Doctor_infor.priceTypeData.valueEn}
                        displayType='text'
                        thousandSeparator={true}
                        suffix={'$'}
                    />
                    : ''

                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);

import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import './DoctorSchedule.scss';
import Select from 'react-select';
import moment, { lang } from 'moment';
import localization from 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService';

class DoctorSchedule extends Component {


    constructor(props) {
        super(props);
        this.state = {
            allDays: [],
            allAvaibleTime: []
        }
    }

    // hàm được chay khi cái conponent DoctorSchedule nó render
    async componentDidMount() {
        let { language } = this.props;

        this.setArrDays(language);
    }

    // tạo trư t viết hoa trong đặt lịch 

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    setArrDays = (language) => {
        let arrDate = [];
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === LANGUAGES.VI) {
                let labelVi = moment(new Date()).add(i, 'days').format('dddd-DD/MM');
                object.label = this.capitalizeFirstLetter(labelVi);
            } else {
                object.label = moment(new Date()).add(i, 'days').locale('en').format("ddd-DD/MM");
            }

            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();


            arrDate.push(object);
        }

        this.setState({
            allDays: arrDate
        })

    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            this.setArrDays(this.props.language);
        }
    }

    handleOnChangeSelect = async (event) => {


        if (this.props.doctorIdFromParent && this.props.doctorIdFromParent !== -1) {
            let doctorId = this.props.doctorIdFromParent;
            let date = event.target.value;
            let res = await getScheduleDoctorByDate(doctorId, date)
            console.log("check res:     ", res)

            if (res && res.errCode === 0) {

                this.setState({
                    allAvaibleTime: res.data ? res.data : []
                })
            }
        }
    }

    render() {


        let { allDays, allAvaibleTime } = this.state;
        let { language } = this.props;

        return (
            <div className='doctor-schedule-container'>
                <div className='all-schedule'>
                    <select onChange={(event) => this.handleOnChangeSelect(event)}>
                        {allDays && allDays.length > 0 &&
                            allDays.map((item, index) => {
                                return (
                                    <option key={index} value={item.value}>
                                        {item.label}
                                    </option>
                                )
                            })};

                    </select>
                </div>
                <div className='all-available-time'>
                    <div className='text-calendar'>
                        <i className="fas fa-calendar-alt"><span>Lịch khám</span></i>
                    </div>
                    <div className='time-content'>
                        {allAvaibleTime && allAvaibleTime.length > 0 ?
                            allAvaibleTime.map((item, index) => {

                                return (
                                    <button key={index}>{language === LANGUAGES.VI ? item.timeTypeData.valueVi : item.timeTypeData.valueEn}</button>
                                )
                            }) : <div>Bác sĩ không có thời gian khám bệnh vui lòng chọn thời gian khác</div>
                        }

                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);

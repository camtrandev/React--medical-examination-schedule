import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import specialtyImg from '../../../assets/specialty/da-lieu-tham-my.jpg'


// đây là cách import biến 
import { FormattedMessage } from 'react-intl';

// import thư viện tạo cái thanh cuộn content
import Slider from 'react-slick';



class Specialty extends Component {


    render() {
        
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem Thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div className='section-customize-text'>Thẩm mĩ trị liệu da 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div className='section-customize-text'>Thẩm mĩ trị liệu da 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div className='section-customize-text'>Thẩm mĩ trị liệu da 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div className='section-customize-text'>Thẩm mĩ trị liệu da 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div className='section-customize-text'>Thẩm mĩ trị liệu da 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty' />
                                <div className='section-customize-text'>Thẩm mĩ trị liệu da 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}


// hàm chuyền các state từ redux vào comp..
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};


// Tạo biến kết nối giữa Redux và React
const mapDispatchToProps = dispatch => {
    return {
    };
};

// hàm dùng để kết nốt React và redux 
export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

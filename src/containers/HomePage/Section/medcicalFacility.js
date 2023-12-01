import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedcicalFacility.scss';
// import thư viện tạo cái thanh cuộn content
import Slider from 'react-slick';


class MedcicalFacility extends Component {

    render() {
        return (
            <div className='section-share section-Medcical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật</span>
                        <button className='btn-section'>Xem Thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div className='section-customize-text'>Hệ thông y tế 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div className='section-customize-text'>Hệ thông y tế 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div className='section-customize-text'>Hệ thông y tế 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div className='section-customize-text'>Hệ thông y tế 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div className='section-customize-text'>Hệ thông y tế 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image' />
                                <div className='section-customize-text'>Hệ thông y tế 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedcicalFacility);

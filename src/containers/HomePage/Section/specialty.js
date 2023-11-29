import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'


// đây là cách import biến 
import { FormattedMessage } from 'react-intl';

// import thư viện tạo cái thanh cuộn content
import Slider from 'react-slick';
// import css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


class Specialty extends Component {


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        
        return (
            <div className='section-specialty'>
                <div className='specialty-content'>
                    <Slider {...settings}>
                        <div className='img-customize'>
                            <h3>1</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>2</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>3</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>4</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>5</h3>
                        </div>
                        <div className='img-customize'>
                            <h3>6</h3>
                        </div>
                    </Slider>
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

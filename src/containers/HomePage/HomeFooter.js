



import React, { Component } from 'react';
import { connect } from 'react-redux';
// đây là cách import biến 
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {


    render() {

        return (
            <div className='home-footer'>
                <p>&copy; 2023 Trần Cầm Dev, <a target='-blank' href='https://www.facebook.com/thanh.stat'>Click me</a></p>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

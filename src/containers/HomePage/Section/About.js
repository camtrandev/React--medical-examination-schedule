

import React, { Component } from 'react';
import { connect } from 'react-redux';
// đây là cách import biến 
import { FormattedMessage } from 'react-intl';


class About extends Component {


    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông Nói về Trần Mạnh Cầm
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe 
                            width="100%" height="400" 
                            src="https://www.youtube.com/embed/vTJdVE_gjI0" 
                            title="Đen x JustaTee - Đi Về Nhà (M/V)" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>

                        </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Lại sắp hết một năm với bao nhiêu là thăng chầm trong cuộc sống hàng ngày,
                               bao nhiêu những dự định trong năm chưa làm được. Vậy mong còn 1 tháng 
                               cuối cùng của năm cũ hãy cố gắng hết mình làm thật tốt những điều còn 
                               gian dở đó dù có thành công hay thất bại thì cũng đừng bỏ cuộc. Bước 
                               sang năm mới chúc bản thân cùng với tất cả các mọi người 1 năm mới đạt
                               được nhiều thành công ,  may mắn.... Happy New Year!!!
                        </p>
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
export default connect(mapStateToProps, mapDispatchToProps)(About);

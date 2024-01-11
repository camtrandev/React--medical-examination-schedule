import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from '../../assets/bookingcare-2020.svg';
// đây là cách import biến 
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
// import action redux
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {


    changLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        // hiển thị redux event : actions
    }

    render() {
        let language = this.props.language;

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <img className='header-logo' src={logo} />
                            <div className='header-logo'></div>

                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b> <FormattedMessage id="homeHeader.speciality" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeHeader.search-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.health-facility" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeHeader.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.doctor" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeHeader.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.fee" /></b></div>
                                <div className='sub-title'><FormattedMessage id="homeHeader.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className='fas fa-question-circle'></i>
                                <FormattedMessage id="homeHeader.support" />
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                {this.props.isShowBanner == true &&
                    <div className='home-header-banner'>
                        <div className='content-up'>
                            <div className='search'>
                                <i className='fas fa-search'></i>
                                <input type='text' placeholder='Tìm Kiếm...' />
                            </div>
                        </div>
                        <div className='content-down'>
                            <div className='options'>
                                <div className='options-child'>
                                    <div className='icon-child'><i className='far fa-hospital'></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child1" /></div>
                                </div>
                                <div className='options-child'>
                                    <div className='icon-child'><i className='fas fa-mobile-alt'></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child2" /></div>
                                </div>
                                <div className='options-child'>
                                    <div className='icon-child'><i className='fas fa-procedures'></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child3" /></div>
                                </div>
                                <div className='options-child'>
                                    <div className='icon-child'><i className="fas fa-flask"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child4" /></div>
                                </div>
                                <div className='options-child'>
                                    <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child5" /></div>
                                </div>
                                <div className='options-child'>
                                    <div className='icon-child'><i className='fas fa-briefcase-medical'></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child6" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

// hàm dùng để kết nốt React và redux 
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

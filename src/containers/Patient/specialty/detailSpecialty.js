import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './detailSpecialty.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import { withRouter } from 'react-router';



class detailSpecialty extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }


    async componentDidMount() {

    }


    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    render() {

        return (
            <>
                <HomeHeader />
                <div className='-container'>
                    hello world
                </div>

            </>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(detailSpecialty));

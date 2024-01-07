import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ManageDoctor.scss';
// để sử dụng userAction, adminAction, appAction
import * as actions from '../../../store/actions'


import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'chocolate' },
    { value: 'strawberry', label: 'strawberry' },
    { value: 'vanilla', label: 'vanilla' }
];

const mdParser = new MarkdownIt(/* Markdown-it options */);


class ManageDoctor extends Component {

    // hàm khởi tạo giá trị đầu tiên khi hàm render nó sẽ chạy vào hàm constructor
    constructor(props) {
        super(props);

        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: ''
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // Finish!
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    handleSaveContentMarkdown = () => {
        console.log("check state:  ", this.state)

    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };


    handleOnChangeDesc = (event) => {
        this.setState({
            description: event.target.value
        })
    }


    render() {

        return (
            <div className='manage-doctor-container'>
                <div className='manage-doctor-title'>
                    Tạo thêm thông tin Doctor
                </div>
                <div className='more-infor'>

                    <div className='content-left form-group'>
                        <label> Chon Bac si</label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={ this.handleChange}
                            options={options}

                        />
                    </div>

                    <div className='content-right'>
                        <label> Thong tin gioi thi</label>
                        <textarea
                            onChange={(event) => this.handleOnChangeDesc(event)}
                            value={this.state.description}
                            className='form-control' rows="4">
                            b
                        </textarea>
                    </div>

                </div>
                <div className='manage-doctor-editor'>
                    <MdEditor style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange} />
                </div>
                <button
                    onClick={() => this.handleSaveContentMarkdown()}
                    className='save-content-doctor'>
                    Lưu thông tin
                </button>
            </div>
        );
    }

}
// hàm này nó sẽ map các biến state của redux vào cái props của component này 
const mapStateToProps = state => {

    return {
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);

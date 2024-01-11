import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './tableManageUser.scss';
// để sử dụng userAction, adminAction, appAction
import * as actions from '../../../store/actions'


import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}


class TableManageUser extends Component {

    // hàm khởi tạo giá trị đầu tiên khi hàm render nó sẽ chạy vào hàm constructor
    constructor(props) {
        super(props);
        // thí là đối tượng class TableManageUser
        this.state = {
            usersRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user.id)
    }

    handleEditUser = (user) => {
        this.props.handleEditUserFromParentKey(user)
    }


    render() {

        let arrUsers = this.state.usersRedux
        return (
            
                <table id='TableManageUser'>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>

                        {arrUsers && arrUsers.length > 0 &&

                            arrUsers.map((item, index) => {
                                return (
                                    <tr key={index} >
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button
                                                onClick={() => this.handleEditUser(item)}
                                                className='btn-edit' >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button
                                                onClick={() => this.handleDeleteUser(item)}
                                                className='btn-delete'>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table >

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

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);

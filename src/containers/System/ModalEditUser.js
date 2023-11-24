import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { emitter } from "../../utils/emitter";
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }

    }
    // child nghe event của parent và setState lại cái form tạo user
    
    // khi ấn vào biểu tượng edit sẽ lấy cái user mà cha nó chuyền cho
    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                password: 'cannot be corrected',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
        console.log('didmout edit modal', this.props.currentUser)
    }
    // Chuyền 1 function từ cha (Usermanage) sang con ModalEditUser
    // đóng mở modal Edit
    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
       
        // good code
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        })

    }


    // xác định thông tin phía người dùng
    checkValideInput = () => {
        let isValue = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValue = false;
                alert("Missing parameter:  " + arrInput[i]);
                break;
            }
        }
        return isValue;
    }

    handleSaveUser = () => {
        let isvalid = this.checkValideInput();
        if (isvalid === true) {
            //if true  call API  Edit user
            this.props.EditUser(this.state);
        }

    }


    render() {

        // kiem tra cacs chuyen tu cha sang con 

        // console.log("check child props:", this.props);
        // console.log("check child open modal:", this.props.isOpen);

        return (
            // toggle là 1 function nó đại diện cho nút đóng và mở khi clink ra ngoài thì tắt đi

            // cú pháp truy cập đến 1 biên cụ thể trong <ModalEditUser/> this.props.[tên biến] */}
            // isopen ddongs mowr model
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
                centered
            >

                <ModalHeader toggle={() => { this.toggle() }}>
                   Edit a User
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">

                        <div className="col-6 input-container">
                            <label>Email</label>
                            <input
                                type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className="col-6 input-container">
                            <label>PassWord</label>
                            <input type="password" 
                            onChange={(event) => { this.handleOnChangeInput(event, "password") }} value={this.state.password} 
                            disabled
                            />
                        </div>
                        <div className="col-6 input-container">
                            <label>FirstName</label>
                            <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "firstName") }} value={this.state.firstName} />
                        </div>
                        <div className="col-6 input-container">
                            <label>LastName</label>
                            <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "lastName") }} value={this.state.lastName} />
                        </div>
                        <div className="col-6 input-container max-with-input">
                            <label>Address</label>
                            <input type="text" onChange={(event) => { this.handleOnChangeInput(event, "address") }} value={this.state.address} />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary" className="px-3"
                        onClick={() => { this.handleSaveUser() }}>
                        Edit
                    </Button>
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);





import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            firstName: '',
            lastName:'',
            address:''
        }
    }

    componentDidMount() {
    }
    // Chuyền 1 function từ cha (Usermanage) sang con ModalUser
    // đóng mở modal Edit
    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event,id) => {
        // bad code 
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log("check bad code:", this.state)
        // })

        // good code
        let copyState= {...this.state};
        copyState[id]= event.target.value;

        this.setState({
            ...copyState 
        })
        
    }


    // xác định thông tin phía người dùng
    checkValideInput = ()=> {
        let isValue = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName','address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValue = false;
                alert("Missing parameter:  "+ arrInput[i]);
                break;
            }
        }
        return isValue;
    }

    handleAddNewUser = () => {
        let isvalid = this.checkValideInput();
        if (isvalid === true) {
            //if true  call API  create user
            this.props.createNewUser(this.state);
        }
        
    }


    render() {

        // kiem tra cacs chuyen tu cha sang con 

        // console.log("check child props:", this.props);
        // console.log("check child open modal:", this.props.isOpen);

        return (
            // toggle là 1 function nó đại diện cho nút đóng và mở khi clink ra ngoài thì tắt đi

            // cú pháp truy cập đến 1 biên cụ thể trong <ModalUser/> this.props.[tên biến] */}
            // isopen ddongs mowr model
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
                centered
            >

                <ModalHeader toggle={() => { this.toggle() }}>
                    Create a new User
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">

                        <div className="col-6 input-container">
                            <label>Email</label>
                            <input 
                            type="text" 
                            onChange={(event) => {this.handleOnChangeInput(event,"email")}}
                            value={this.state.email}
                            />
                        </div>
                        <div className="col-6 input-container">
                            <label>PassWord</label>
                            <input type="password" onChange={(event) => { this.handleOnChangeInput(event, "password") }} value={this.state.password} />
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
                        onClick={() => { this.handleAddNewUser() }}>
                        Add new
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);





import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }
    // Chuyền 1 function từ cha (Usermanage) sang con ModalUser
    // đóng mở modal Edit
    toggle = () => {
        this.props.toggleFromParent();
    }


    render() {
        console.log("check child props:", this.props);
        console.log("check child open modal:", this.props.isOpen);

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
                            <input type="text" />
                        </div>
                        <div className="col-6 input-container">
                            <label>PassWord</label>
                            <input type="password" />
                        </div>
                        <div className="col-6 input-container">
                            <label>FirstName</label>
                            <input type="text" />
                        </div>
                        <div className="col-6 input-container">
                            <label>LastName</label>
                            <input type="text" />
                        </div>
                        <div className="col-6 input-container">
                            <label>Address</label>
                            <input type="text" />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { this.toggle() }}>Do Something</Button>
                    <Button color="primary" onClick={() => { this.toggle() }}>Cancel</Button>
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





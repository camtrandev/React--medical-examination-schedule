import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { 
  getAllUsers ,
  createNewUserService
} from '../../services/userService';
import ModalUser from './ModalUser';

class UserManage extends Component {

  // hàm khởi tạo giá trị đầu tiên khi hàm render nó sẽ chạy vào hàm constructor
  constructor(props) {
    super(props);
    // thí là đối tượng class UserManage
    this.state = {
      arrUsers: [],
      isOpenModal: false,
    }
  }

  // hàm Did Mount có nhiệm vụ là lấy dữ liệu từ ngoài vào

  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUsers('All');
    if (response && response.errCode === 0) {
      // hàm setState là bất đồng bộ nên với dữ liệu mà lớn thì thì nó sảy ra vậy hãy dùng callback function ngay sau dấu ngoặc kép
      this.setState({
        arrUsers: response.users
      })
    }
  }

  handleAddNewUser = () => {
    this.setState({
      isOpenModal: true,
    })
  }


  // đóng mở modal
  toggleUserModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    })
  }
// chuyền hàm gọi từ Node bên userService
  createNewUser =async (data) => {
    try {
      let reponse = await createNewUserService(data);
      if (reponse && reponse.errCode !== 0) {
        alert(reponse.errMessage)
      }else {
        await this.getAllUsersFromReact();
        this.setState({
          isOpenModal: false
        })
      }
    } catch(e) {
       console.log(e)
    }
   
  }

  /** Từ khóa làm việc với Fontend framworklife cycle (1 vòng đời ) dưới đây là chu trình chay
   * 1 - run construct -> init state
   * 2- Did mount (set state) -> muốn gán giá trị cho biến state nào đó
   * 3- hàm Render
   *  // chú ý nếu muốn cái hàm render chạy lại thì hãy dùng setState
   */
  render() {

    let arrUsers = this.state.arrUsers;
    return (
      <div className="user-container ">
        {/* cái props của thằng con chính là cái state của thằng cha để hiểu hơn xem vd: #40    37:30s */}
        {/* cú pháp truy cập đến 1 biên cụ thể trong <ModalUser/> this.props.[tên biến]  chuyền từ cha xuống con*/}
        <ModalUser
          isOpen={this.state.isOpenModal}
          // tạo toggle đóng mở
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        <div className='title'>Manage User With CamTranDev</div>

        <div className='mx-1'>
          <button className='btn btn-primary px-3'
            onClick={() => this.handleAddNewUser()}
          >
            <i className='fas fa-plus'> </i>
              Add new Users
          </button>
        </div>
        
        <div className="users-table mt-3 mx-1">
          
          <table id="customers">
          <tbody>
            <tr>
              <th>Email</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Address</th>
              <th>Action</th>
            </tr>

            {arrUsers && arrUsers.map((item, index) => {
              return (
                // phải return ra 1 khôi không thì sẽ có lỗi vậy phải bộ trong <> </>
                <tr>
                  <td>{item.email}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.address}</td>
                  <td>
                    <button className='btn-edit'>
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button className='btn-delete'>
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              )
            })
            }

        </tbody>
          </table>
          
        </div>
        
      </div >
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

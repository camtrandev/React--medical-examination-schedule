import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';

class UserManage extends Component {

  // hàm khởi tạo giá trị đầu tiên khi hàm render nó sẽ chạy vào hàm constructor
  constructor(props) {
    super(props);
    // thí là đối tượng class UserManage
    this.state = {
      arrUsers: []
    }
  }

  // hàm Did Mount có nhiệm vụ là lấy dữ liệu từ ngoài vào

  async componentDidMount() {
    let response = await getAllUsers('All');
    if (response && response.errCode === 0) {
      // hàm setState là bất đồng bộ nên với dữ liệu mà lớn thì thì nó sảy ra vậy hãy dùng callback function ngay sau dấu ngoặc kép
      this.setState({
        arrUsers: response.users
      })
    }

  }

  /** Từ khóa làm việc với Fontend framworklife cycle (1 vòng đời ) dưới đây là chu trình chay
   * 1 - run construct -> init state
   * 2- Did mount (set state) -> muốn gán giá trị cho biến state nào đó
   * 3- hàm Render
   *  
   */
  render() {

    console.log('check', this.state)

    let arrUsers = this.state.arrUsers;
    return (
      <div className="user-container ">
        <div className='title'>Manage User With CamTranDev</div>

        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
           
              {arrUsers && arrUsers.map((item, index) => {
                console.log('camtrandev',item,index)
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
                        <i class="fas fa-trash"></i>
                        </button>
                    </td>
                  </tr>
                )
              })
              }
          

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

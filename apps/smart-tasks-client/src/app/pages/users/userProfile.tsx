import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './userProfile.scss';
import { RootState } from '../../store/store';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCookies } from '@repo-hubs/smart-tasks-ui';
import { addCrntUser, addBname } from '../../features/user/userSlicer';
import { userById, ticketsByUserId, businessByUser } from '../../../api/api';
import { getTickets } from '../../features/tickets/ticketsSlicer';
import avatar from '../../../assets/images/default-avatar.png';

const Member = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const businessName = useSelector((state: RootState) => state.user.businessName);
  const tickets = useSelector((state: RootState) => state.tickets.tickets);

  const dispatch = useDispatch();
  useEffect(() => {
    const userId = getCookies('UTIP');
    const fetchUser = async () => {
      if (userId) {
        const res = await userById(userId);
        dispatch(addCrntUser(res.data.user));
        const response = await businessByUser(res.data.user.businessId)
        dispatch(addBname(response.data.name))
      } else {
        console.log('');
      }
    };

    const fetchTickets = async () => {
      if (userId) {
        const res = await ticketsByUserId();
        dispatch(getTickets(res.data.tickets));
      } else {
        console.log('');
      }
    };

    fetchUser();
    fetchTickets();
  }, [dispatch]);

  return (
    <div className="col-md-12 mt-4">
      <Helmet>
        <title>Member</title>
        <meta name="Member-Profile" />
      </Helmet>
      <h1 className="text-center mb-4 h5 text-capitalize">Business: <span className='text-danger'>{businessName}</span></h1>
      {user && (
        <div className="card row">
          <div className="card-header col-md-12">
            <h1 className="text-center h3 text-capitalize">{user.name}</h1>
          </div>
          <hr />
          <div className="card-body row">
            <div className="col-md-3">
              <img className="col-12" src={avatar} alt="profile-pic" />
              <form className="form-group d-flex justify-content-center align-items-center mt-3 ">
                <fieldset className=" btn btn-sm mx-2  d-flex justify-content-around align-items-center bg-dark text-light rounded ">
                  <span className="image-preview-input-title ">Choose</span>
                  <div className="position-relative w-100 h-100">
                    <input
                      type="file"
                      className="position-absolute top-0 end-0 left-0 right-0 "
                      style={{ opacity: 0 }}
                    />
                  </div>
                </fieldset>
                <button className="bg-dark btn btn-sm text-light mx-2 d-flex justify-content-center align-items-center rounded">
                  save
                </button>
              </form>
            </div>
            <hr className="d-block d-md-none col-12 mt-4" />
            <div className="table-responsive col-md-8 mt-5 mt-md-0 h-100 ">
              <h2 className="h5 text-primary text-md-start text-center">
                Your tasks
              </h2>
              <table className="table  table-inverse table-hover ">
                <thead>
                  <tr className=" table-default">
                    <th scope="">#</th>
                    <th>Title</th>
                    <th>Short-desc</th>
                    <th>Created-by</th>
                    <th>Creation-date</th>
                    <th>Status</th>
                    <th>Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets &&
                    tickets?.length > 0 &&
                    tickets.map((ticket: any, index: any) => {
                      return (
                        <tr className="my-4 col-12 " key={index}>
                          <td>{index + 1}</td>
                          <td>{ticket.title}</td>
                          <td>{ticket.shortDesc}</td>
                          <td>{ticket.created_by}</td>
                          <td>{ticket.createdAt}</td>
                          <td>{ticket.finished}</td>
                          <td>
                            <Link
                              className="btn btn-sm bg-dark text-light"
                              to="#"
                            >
                              Deatails
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Member;

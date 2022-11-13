import { useSelector } from 'react-redux';
import Card from '../../components/cardComponent';
import { cardData } from '@repo-hubs/smart-tasks-ui';
import './userProfile.scss';
import { RootState } from '../../store/store';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCookies } from '@repo-hubs/smart-tasks-ui';
import { addCrntUser } from '../../features/user/userAuthSlicer';
import { userById, ticketsByUserId } from '../../../api/api';
import { getTickets } from '../../features/tickets/ticketsSlicer';

const Member = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const tickets = useSelector((state: RootState) => state.tickets.tickets);

  const dispatch = useDispatch();
  useEffect(() => {
    const userId = getCookies('UTIP');
    const fetchUser = async () => {
      if (userId) {
        const res = await userById(userId);
        dispatch(addCrntUser(res.data.user));
      }else{
        console.log('')
      }
    };

    const fetchTickets = async () => {
      if (userId) {
        const res = await ticketsByUserId();
        dispatch(getTickets(res.data.tickets));
      }else{
        console.log('')
      }
    };

    fetchUser();
    fetchTickets();
  }, []);

  return (
    <div className="col-md-12 mt-4">
      <Helmet>
        <title>Member</title>
        <meta name="Member-Profile" />
      </Helmet>
      <h1 className="text-center mb-4 h5">Business name</h1>
      {user && (
        <div className="card row">
          <div className="card-header col-md-12">
            <h1>{user.name}</h1>
          </div>
          <hr />
          <div className="card-body"></div>
        </div>
      )}
    </div>
  );
};

export default Member;

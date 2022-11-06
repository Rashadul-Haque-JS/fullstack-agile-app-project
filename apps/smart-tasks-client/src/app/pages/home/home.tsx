import { useSelector } from 'react-redux';
import Card from '../../components/cardComponent';
import { cardData } from '@repo-hubs/smart-tasks-ui';
import './home.scss';
import { RootState } from '../../store';
import businessLogo from '../../../assets/images/lapis.png';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCookies } from '@repo-hubs/smart-tasks-ui';
import { addCrntBusiness } from '../../features/business/businessAuthSlicer';
import { businessById } from 'apps/smart-tasks-client/src/api/api';

const Home = () => {
  const business = useSelector(
    (state: RootState) => state.business.currentBusiness
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const businessId = getCookies('BTIP');
    const fetchBusiness = async () => {
      if (businessId) {
        const res = await businessById(businessId);
        dispatch(addCrntBusiness(res.data.business));
      }
    };

    fetchBusiness();
  }, []);
  return (
    <div className="col-md-12 mt-4">
      <Helmet>
        <title>Home</title>
        <meta name="Home" />
      </Helmet>
      <h1 className="text-center mb-4 h5">Business Overview</h1>
      {business && (
        <div className="card card-home">
          <div className="card-header card-header-home d-flex justify-content-center align-items-center">
            <h1 className="h2 text-center">{business.name}</h1>
          </div>
          <hr />
          <div className="card-body row col-md-12 flex-wrap-reverse">
            <div className=" row col-lg-4 col-md-4 gy-4 d-flex flex-column justify-content-center align-items-center text-center text-lg-start">
              <hr className=" d-sm-block d-lg-none d-md-none" />
              <div className="row justify-content-center justify-content-lg-start">
                <img
                  style={{ width: 200, height: 100 }}
                  src={businessLogo}
                  alt="Business tradsmark"
                />
              </div>
              <div className="row justify-content-center justify-content-lg-start mt-4 ">
                <h2 className="h5">Address</h2>
                <span className="text-sm ">{business.street}</span>
                <span>{business.post}</span>
                <span className="text-sm">{business.city}</span>
                <span>{business.country}</span>
              </div>
              <div className="row justify-content-center justify-content-lg-start mt-3">
                <h2 className="h5">Contact</h2>
                <span>
                  {' '}
                  <i className="fa fa-envelope"></i> {business.email}
                </span>
                <span>
                  <i className="fa fa-phone"></i> 08 000 000 000
                </span>
              </div>
            </div>
            <div className="col-md-8">
              <div className="col-md-12 row mb-4 cards-container gy-4 ">
                <Card
                  title={cardData.users.title}
                  subTitle={cardData.users.subTitle}
                  icon={cardData.users.icon}
                  number={cardData.users.number}
                />
                <Card
                  title={cardData.tickets.title}
                  subTitle={cardData.tickets.subTitle}
                  icon={cardData.tickets.icon}
                  number={cardData.tickets.number}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

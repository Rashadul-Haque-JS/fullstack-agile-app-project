import Card from '../../components/cardComponent';
import { cardData } from '@repo-hubs/smart-tasks-ui';
import './home.scss';
import businessLogo from '../../../assets/images/lapis.png';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="col-md-12 mt-4">
      <Helmet>
        <title>Home</title>
        <meta name="Home" />
      </Helmet>
      <h1 className="text-center mb-4 h5">Business Overview</h1>
      <div className="card card-home">
        <div className="card-header card-header-home d-flex justify-content-center align-items-center">
          <h1 className="h2 text-center">Lapis AB</h1>
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
            <div className="row justify-content-center justify-content-lg-start mt-5 ">
              <h4>Address</h4>
              <p>
                <span>TTT 12</span>, <span>30328</span>
              </p>
              <p>
                <span>dalarna</span>,<span>Sweden</span>
              </p>
            </div>
            <div className="row justify-content-center justify-content-lg-start">
              <h4>Contact</h4>
              <p>Email: abcd@example.com</p>
              <p>Ph: 08 000 000 000</p>
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
    </div>
  );
};

export default Home;

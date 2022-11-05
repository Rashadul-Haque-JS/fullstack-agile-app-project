import Card from '../../components/cardComponent';
import './home.scss';
import businessLogo from '../../../assets/images/lapis.png';
import { Helmet } from 'react-helmet';

const Home = () => {
  const obj = {
    title: 'User',
    subTitle: 'Overview of total users',
    icon: 'fa-users',
    number: 4,
  };

  return (
    <div className="col-md-12 mx-4 mt-5">
      <Helmet>
        <title>Home</title>
        <meta name="Home" />
      </Helmet>
      <div>
        <h1 className="h3 text-center">
          Overview <span>👋</span>{' '}
        </h1>

        <div className="row col-md-12 mt-4">
          <div className="row">
            <div className="col-md-6 bg-dark p-4 text-light">
              <h1>DEV AB</h1>
              <h3>Business info</h3>
            </div>
            <div className="col-md-3 bg-dark p-4 text-light">
              <img
                className="img-thumbnail"
                src={businessLogo}
                alt="Business's logo"
              />
            </div>
            <div className="col-md-3 bg-dark p-4 text-light">
              <p>Contact</p>
              <p>Email: abcd@example.com</p>
            </div>
          </div>
          <div className="col-md-12 row mb-4 cards-container g-4 ">
            <Card
              title={obj.title}
              subTitle={obj.subTitle}
              icon={obj.icon}
              number={obj.number}
            />
            <Card
              title={obj.title}
              subTitle={obj.subTitle}
              icon={obj.icon}
              number={obj.number}
            />
            <Card
              title={obj.title}
              subTitle={obj.subTitle}
              icon={obj.icon}
              number={obj.number}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

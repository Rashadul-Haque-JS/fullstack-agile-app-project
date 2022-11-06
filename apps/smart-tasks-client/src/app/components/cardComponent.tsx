import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/home/home.scss';
export interface ICard {
  title: string;
  subTitle: string;
  icon: string;
  number: number;
}

const Card = (data: ICard) => {
  return (
    <div className="card col-md-6 col-lg-6 p-0">
      <div>
        <div className="card-header text-center">
          <h4>{data.title}</h4>
        </div>
        <p className="m-3 text-center">{data.subTitle}</p>
        <div className="card-body mt-3" style={{ fontSize: '3.5rem' }}>
          <div className="text-center">
            <i className={`fa ${data.icon} mx-2`} aria-hidden="true"></i>
            <span className='mx-2'>{data.number}</span>
          </div>
          <div className='d-flex justify-content-center'>
          <div className="centered text-center mx-1  ">
            <Link className="btn btn-sm btn-dark text-light" to="#">
            <i className='fa fa-list mx-2' aria-hidden="true"></i>
              List
            </Link>
          </div>
          <div className="centered text-center mx-1">
            <Link className="btn btn-sm btn-dark text-light" to="#">
            <i className='fa fa-plus mx-2' aria-hidden="true"></i>
              Create
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

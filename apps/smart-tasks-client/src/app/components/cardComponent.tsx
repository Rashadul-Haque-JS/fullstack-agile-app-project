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
    <div className="card col-md-4 p-0">
      <div className="mt-2">
        <div className="card-header text-center">
          <h4>{data.title}</h4>
        </div>
        <p className="m-3">{data.subTitle}</p>
        <div className="card-body mt-3" style={{ fontSize: '3.5rem' }}>
          <div className="text-center">
            <i className={`fa ${data.icon}`}></i>
            <span>{data.number}</span>
          </div>
          <div className='d-flex justify-content-center'>
          <div className="centered text-center mx-1  ">
            <Link className="btn btn-md btn-dark text-light" to="#">
            <i className='fa fa-list mx-2'></i>
              List
            </Link>
          </div>
          <div className="centered text-center mx-1">
            <Link className="btn btn-md btn-dark text-light" to="#">
            <i className='fa fa-plus mx-2'></i>
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

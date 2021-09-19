import React from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectItem(props) {
  return (
    <>
      <li className='jobs__item'>
        <Link
          className='jobs__item__link'
          to={{
            pathname: props.path,
          }}
          target='_blank'
        >
          <figure className='jobs__item__pic-wrap'>
            <img
              src={props.src}
              alt='Job Description'
              className='jobs__item__img'
            />
          </figure>
          <div className='jobs__item__info'>
            <h5 className='jobs__item__text'>{props.text}</h5>
            <h5 className='jobs__item__date'>{props.date}</h5>
            <div className='jobs__item__desc'>
              {props.items.map((item) => (
                <li>{item}</li>
              ))}
            </div>
            <div className='button-style'>
              <Button
                href='https://github.com/DanielTavernese/Protect'
                type='submit'
              >
                Github
              </Button>
              <Button className='video-button' type='submit'>
                Video
              </Button>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProjectItem;

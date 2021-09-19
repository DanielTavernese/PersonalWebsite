import React from 'react';
import ProjectItem from '../ProjectItem';
import '../Jobs.css';
import protectLogo from '../../images/protect.png';
import pathfinderLogo from '../../images/pathfinder.png';
import swingmanLogo from '../../images/swingman.jpg';
import qcoursesLogo from '../../images/qcourses.png';

function Projects() {
  return (
    <>
      <div className='jobs'>
        <div className='jobs__container'>
          <div className='jobs__wrapper'>
            <div className='jobs__spacing'>
              <ProjectItem
                src={protectLogo}
                text='Protect!'
                path='https://aws.amazon.com/'
                date='Summer 2020'
                items={[
                  'Game application built using Android Studio and LibGDX libraries.',
                  'Contains an entity system, sound manager, inventory system and a custom-made game engine that handles sprite rendering and game updating.',
                  'Portable to iOS, Android, and Desktop devices.',
                ]}
              />
            </div>
            <div className='jobs__spacing'>
              <ProjectItem
                src={pathfinderLogo}
                text='Pathfinder Visualization'
                path='https://aws.amazon.com/'
                date='April 2021'
                items={[
                  'GUI which allows user to visualize different pathfinding algorithms.',
                  'Currently Supports: Djkstras algorithm and A* search algorithm.',
                ]}
              />
            </div>
            <div className='jobs__spacing'>
              <ProjectItem
                src={swingmanLogo}
                text='Swingman'
                path='https://aws.amazon.com/'
                date='December 2019'
                items={[
                  'Created with group members over 4 month course.',
                  'Utilizes SDL 2.0 Engine and contains game physics, obstacles, sound, highscores.',
                ]}
              />
            </div>
            <div className='jobs__spacing'>
              <ProjectItem
                src={qcoursesLogo}
                text='QCourses'
                path='https://aws.amazon.com/'
                date='Summer 2021'
                items={[
                  'Utilizes Spring-boot framework with a back end written in Java and Front end written in JavaScript, HTML and CSS',
                  'Data is loaded into relational database (Postgres) and utilizes a web scraper written in Python',
                  'Obtained hundreds of student users',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

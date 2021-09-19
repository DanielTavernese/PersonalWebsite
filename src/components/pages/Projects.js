import React from 'react';
import ProjectItem from '../ProjectItem';
import '../Jobs.css';
import protectLogo from '../../images/protect.png';
import pathfinderLogo from '../../images/pathfinder.png';
import swingmanLogo from '../../images/swingman.jpg';
import qcoursesLogo from '../../images/qcourses.png';
import fallingBallLogo from '../../images/FallingBall2DGame.png';
import robotLogo from '../../images/robot.png';

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
                path='https://github.com/DanielTavernese/Protect'
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
                path='https://github.com/DanielTavernese/Pathfinding'
                date='April 2021'
                items={[
                  'GUI which allows user to visualize different pathfinding algorithms.',
                  'Currently Supports: Djkstras algorithm and A* search algorithm.',
                ]}
              />
            </div>
            <div className='jobs__spacing'>
              <ProjectItem
                src={robotLogo}
                text='Dice Collecting Robot'
                path='https://github.com/DanielTavernese/DiceCollectingRobot'
                date='Winter 2018'
                items={[
                  'Autonomous Robot created in robot engineering course that was programmed to collect dice around playfield.',
                  'Hardware sensors were used to detect how far the robot was from walls and when to turn.',
                  'Programmed in C and used Arduino Board for hardware hookups.',
                ]}
              />
            </div>
            <div className='jobs__spacing'>
              <ProjectItem
                src={swingmanLogo}
                text='Swingman'
                path='https://github.com/DanielTavernese/Swing-Man'
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
            <div className='jobs__spacing'>
              <ProjectItem
                src={fallingBallLogo}
                text='Falling Ball 2D Game'
                path='https://github.com/DanielTavernese/FallingBall2DGame'
                date='Summer 2017'
                items={[
                  'Programmed in Java using Java swing libraries',
                  'Custom game engine, graphics, updating system and entity system.',
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

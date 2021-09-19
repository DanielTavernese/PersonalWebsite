import React from 'react';
import JobItem from '../JobItem';
import '../Jobs.css';
import awsImage from '../../images/aws.png';
import ericssonImage from '../../images/ericsson.jpg';
import queensImage from '../../images/queens.png';

function Jobs() {
  return (
    <>
      <div className='jobs'>
        <div className='jobs__container'>
          <div className='jobs__wrapper'>
            <ul className='jobs__items'>
              <JobItem
                src={awsImage}
                text='Amazon Web Services'
                path='https://aws.amazon.com/'
                title='Software Dev Engineer I Intern'
                date='May 2021 - July 2021'
                items={[
                  'Created event searching tool for AWS service EventBridge that helped engineers and AWS customers find more details about their events.',
                  ' Backend was written in Java for lambda functions and used TypeScript for CDK which created and deployed lambda functions and a step functions workflow to a CloudFormation stack.',
                ]}
              />
              <JobItem
                src={ericssonImage}
                text='Ericsson'
                path='https://www.ericsson.com/en'
                title='Software Developer Intern'
                date='May 2020 - April 2021'
                items={[
                  'Worked on KPI (Key-Performance Indicator) code base written in Java which maintained the framework by running tests on the simulations produced by the main code base.',
                  'Worked on the main code base. Developed a tool with a front-end in PHP, JS, HTML and CSS with a back end of Java. This tool helped with choosing optimal values for telecommunication products.',
                ]}
              />
              <JobItem
                src={queensImage}
                text='Queens University'
                path='https://www.queensu.ca/'
                title='Teaching Assistant - Data Structurs & Algorithms'
                date='September 2019 - December 2019'
                items={[
                  'Assisted students in labs by helping them understand data structures and sorting algorithms such as trees, linked lists, heap sorting, quick sorting, bucket sorting, bubble sorting and selection sorting',
                ]}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;

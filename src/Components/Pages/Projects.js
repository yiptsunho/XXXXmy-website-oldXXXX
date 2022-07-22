import React from 'react';
import CardItem from '../CardItem';
import photo1 from '../../assets/images/img-1.jpg';
import Cover from '../Cover';

function Projects() {
  return (
    <>
      <Cover className="projects" pageName="Projects" />
      <div>
        <br></br>
        <h1>Check out my mini projects!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
              <div className="cards__items">
                <CardItem 
                  src={photo1}
                  text="Simple tic tac toe game"
                  label='Mini game'
                  path='/'
                />
                <CardItem 
                  src={photo1}
                  text="Calculator"
                  label='Tool'
                  path='/'
                />
              </div>
              <div className="cards__items">
                <CardItem 
                  src={photo1}
                  text="Minesweeper"
                  label='Mini game'
                  path='/'
                />
                <CardItem 
                  src={photo1}
                  text="Explore the hidden waterfall deep inside the Amazon Jungle"
                  label='Adventure'
                  path='/'
                />
              </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Projects;

import React from 'react';
import '../../App.css';
import Cover from '../Cover';
import '../Resume.css';

function Resume() {
  return (
    <>
      <Cover className="resume" pageName="Resume" />
      <br></br>
      <div>
        {/* education */}
        <div className="container-fluid">
          <div className="row education-part1">
            <h2>BBA (Finance and Information System)</h2>
            <h3>HKUST Sept 2017 - May 2022</h3>
            <h4>Awards: Dean's List 2018</h4>
          </div>
          <div className="row education-part2">
            <h2>Academic Exchange Program</h2>
            <h3>BI Norwegian Business School Jan 2020 - Apr 2020</h3>
          </div>
        </div>
        {/* professional experience */}
        <div className="container-fluid">
          <div className="row professional-part1">
            <h2>Technology Consulting Placement</h2>
            <h3>Advisory, PricewaterhosueCoopers Hong Kong Jan 2021 - Aug 2021</h3>
            <li>Managed a mini project to implement a project management software</li>
            <li>Self-learnt Oracle ERP system, mastered 5 out of 10 modules in 8 months</li>
            <li>Analyed special user requirements and researched on how the system can accommodate such requirements</li>
            <li>Presented numerous times to managers, clients and even partners</li>
          </div>
          <div className="row professional-part2">
            <h2>Placement Student Program</h2>
            <h3>IT Application Support 1 Division, Hong Kong Monetary Authority Jun 2020 - Dec 2020</h3>
            <li>Supported internal users on the trading system CALYPSO, such as debugging and ticketing</li>
            <li>Created programs to enhance daily workflow, including cybersecurity procedures</li>
            <li>Led other interns in providing technical support to Investment Products Trade Repository System and other core systems</li>
          </div>
        </div>
        {/* other experience */}
        <div className="container-fluid">
          <div className="row other-part1">
            <h2>ACCA-CFA Institute Business Competition</h2>
            <h3>Final 12 teams Oct 2019 - Jan 2020</h3>
            <li>Reached top 12 teams among 200 teams from local universities</li>
            <li>Created a sustainable and profitable business model as well as incorporating AI and other technology</li>
            <li>Invited to work with a startup company that has similar busienss model</li>
          </div>
          <div className="row other-part2">
            <h2>Placement Student Program</h2>
            <h3>IT Application Support 1 Division, Hong Kong Monetary Authority Jun 2020 - Dec 2020</h3>
            <li>Supported internal users on the trading system CALYPSO, such as debugging and ticketing</li>
            <li>Created programs to enhance daily workflow, including cybersecurity procedures</li>
            <li>Led other interns in providing technical support to Investment Products Trade Repository System and other core systems</li>
          </div>
        </div>
        {/* Skills/qualifications */}
        <div className="container-fluid">
          <div className="row skill">
            <p>Final 12 teams Oct 2019 - Jan 2020</p>
          </div>
        </div>
        {/* Language */}
        <div className="container-fluid">
          <div className="row language">
            <h3>Final 12 teams Oct 2019 - Jan 2020</h3>
          </div>
        </div>
      </div>
    </>
  )
};

export default Resume;

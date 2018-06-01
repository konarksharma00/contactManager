import React from 'react';

const Readme = (props) => (
  <div className="col-sm-12">
    <div className="col-xs-12 readme-header">
      <h4>
        CONTACT MANAGER
      </h4>
      <span>
        Using local storage to save the contacts. Can't save a contact with Same Number twice.
      </span>
    </div>
    <div className="readme-left col-xs-12 col-sm-6">
      <h4>
        Technologies
      </h4>
      <ul>
        <li>Node/Express for the server</li>
        <li>Bootstrap/CSS media queries for responsiveness</li>
        <li>React</li>
        <li>Redux</li>
        <li>ES6</li>
      </ul>

      <h4>
        Description
      </h4>
      <label>
        WHY React!?
      </label>
      <ul>
        <li>
          React is "V" view part of the MVC system it is used for representational aspects of the site.
        </li>
        <li>
          It creates a virtual dom which is compared and then only changes are updated, hence faster.
        </li>
        <li>
          Componential structure and easy to with third party lib.
        </li>
      </ul>

      <label>
        WHY Redux!?
      </label>
      <ul>
        <li>
          It is state management lib and creates on store instance per app.
        </li>
        <li>
          Combinig with react it makes MVC framework to work on.
        </li>
        <li>
          Individual lib, hence quite easy to use.
        </li>
      </ul>

      <label>
        WHY ES6!?
      </label>
      <ul>
        <li>
          To make the coding better and up to date, leveraging class syntax.
        </li>
        <li>
          using short hand methods provided, block scoping arrow functions etc
        </li>
        <li>
          Backward compatible, fast, modular.
          <a href="http://es6-features.org/#Constants" target="_blank"> Know it all</a>
        </li>
      </ul>
    </div>
    <div className="readme-right col-xs-12 col-sm-6">
      <h4>
        Tools & Task Runners
      </h4>
      <ul>
        <li>SCSS</li>
        <li>WEBPACK</li>
        <li>BABEL</li>
        <li>GIT</li>
      </ul>
      <label>
        SCSS?
      </label>
      <ul>
        <li>
          Creatings Style settings i.e theme of the site, changing few variables should change whole look and feel, if need be.
        </li>
        <li>
          Modular & readable than CSS
        </li>
        <li>
          Leveraging variables, mixins, style block etc
        </li>
      </ul>
      <label>
        WHY WEBPACK!?
      </label>
      <ul>
        <li>
          Used as a task runners, generating single file js, css img, etc..
        </li>
        <li>
          Can be used to integrate third party loaders and pluggin
        </li>
        <li>
          Avoid complicated sub task writing in like in gulp grunt etc
        </li>
      </ul>
      <label>
        WHY BABEL!?
      </label>
      <ul>
        <li>
          To transplie ES6 into ES5 as many browsers doesn't still supports all the ES6 functionality.
        </li>
        <li>
          Using many plugins like it's jsx plugin to read jsx files for REACT
        </li>
      </ul>
      <label>
        WHY GIT!?
      </label>
      <ul>
        <li>
          version control system to manage, update and share source code.
        </li>
      </ul>
    </div>
  </div>
);

export default Readme;

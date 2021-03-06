// File: Home.jsx
// Date: 7/22/2020
// Note: React ES6 Component API
import React from 'react'
import './theme.sass'

import MainView from './MainView';

import {
  // DefinitionList,
  // Division
} from '../components/Shapes'

// import UINavbarViewController from '../../components/Site/UINavbarViewController';
// import { Speedometer } from '../components/SVGR'
// import { Refs1, Refs2, Refs3, Refs4 } from '../components/Refs';
// import InputModel from '../components/Refs/Refs4'

// import { ScrollingList } from '../components/Lists';
// import {  ClassNameButton } from '../../components/Buttons'

// import { 
  // FormLayout, 
  // ListLayout, 
  // PageFormLayout, 
  // PageListLayout, 
  // TableLayout,
  // GridLayout,
// } from '../components/Layouts';

// import {
  // ComplexTable,
  // SimpleTable,
// } from '../components/Tables';

// import { ChangeButton } from '../components/Buttons';
// import { Clock, Timer, Pomodoro } from '../components/Clocks';
// import {
//   DerivedProperties,
//   Intro,
//   ErrorBoundary,
//   Lifecycle,
//   LiftingState,
//   Props,
//   PropsCode,
//   PropsPass,
//   PropsSyntax,
//   State,
// }
// from '../patterns';

// import MyComponent from '../components/State/MyComponent';
// import { HackerNews, Comment } from '../components/Messages';
// import { PictureView, VideoView } from '../components/Pictures'
// import FilterableProductTable from './Dashboard/FilterableProductTable';
// import { LoginForm, LoginFormOnSubmit } from '../components/Loggings';

// import { 
  // SubmitForm, 
  // Reservations, 
  // Reservation,
  // HTML5Form 
// } from '../components/Forms';

// import { 
//   Flexbox,
//   WelcomeDialog,
//   ReactChildren, 
//   IgnoreFirstChild, 
//   ChildrenCounter,
//   SortChildren,
//   RadioGroup,
//   RadioButton,
//   SignUpDialog,
// } from '../components/Compositions';

import { 
  // DataLocations, 
  // Datasource 
} from '../components/PromiseApi';

const styles = {
  background: 'black',
  border: '1px solid white ',
  padding: 20,
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

// const message = 
//   `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
//  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
//  voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
//  deserunt mollit anim id est laborum.                              `        
// ;

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy coding React JSX with ES6+!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

function Home() {
    
      // const PRODUCTS = [
      //   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      //   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},    
      //   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      //   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      //   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      //   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus'},
      // ];
      
      return (
        <div className='homeview'>
          <h1>Home</h1>

          <div style={styles}>
            <MainView />
          </div>

          {/* <ClassNameButton label='Banner' />
          <ClassNameButton label='Banner' />
          <ClassNameButton label='Banner' /> */}

          <div className='homeview'>
            <hr />
            {/* <DataLocations /> */}
            {/* <Datasource /> */}
            {/* <AxiosAPI /> */}

            {/* <DefinitionList /> */}
            {/* <Division /> */}
            {/* <HTML5Form />           */}
            {/* <HackerNews /> */}
            {/* <FilterableProductTable products={PRODUCTS} /> */}
            {/* <PictureView /> */}
  
            {/* <ReactChildren>{() =><h1>Hello React Children: Function as a child!</h1>}</ReactChildren>
            <IgnoreFirstChild>
              <h2>First Child</h2>
              <h2>Second Child</h2>
            </IgnoreFirstChild>

            <ChildrenCounter>
              <h2>First Child</h2>
              <h2>Second Child</h2>
            </ChildrenCounter>
            <SortChildren>
              {'bananas'}{'oranges'}{'apples'}
            </SortChildren>

            <RadioGroup name="g1">
              <RadioButton value="First" />
              <RadioButton value="Second" />
              <RadioButton value="Third" />
            </RadioGroup>
            <hr />
            <RadioGroup name="g2">
              <RadioButton value="Fourth" />
              <RadioButton value="Fifth" />
              <RadioButton value="Sixth" />
            </RadioGroup>

            <ErrorBoundary>
              <Lifecycle />
              <Lifecycle name='Redux' />
            </ErrorBoundary> */}

            {/* <HTML5Form /> */}
            {/* <FormLayout 
              heading="FormLayout in React JSX"
              content="CSS Flexbox Module in SASS" /> */}

            {/* <ListLayout 
              id='508674' 
              name='HTML source order vs CSS display order'/> */}

            {/* <PageFormLayout /> */}
            {/* <PageListLayout /> */}

            {/* <GridLayout id='506874' name='Basic Grid Layout' /> */}
            {/* <TableLayout /> */}

            {/* <ComplexTable /> */}

            {/* <ChangeButton label='Change Button' /> */}

            {/* <Comment 
              date={comment.date}
              text={comment.text}
              author={comment.author}          
            /> */}
              {/* <Clock /> */}
              {/* <Timer /> */}
              {/* <ScrollingList 
                userID='RLI831'
                message={message}
              />
              <Pomodoro /> */}
              {/* <Refs1 label="Change" action={() => alert("Hello")} />
              <Refs2 label="Change: createRef" action={() => alert("Hello: createRef")} />
              <Refs3 label="Change: useRef" action={() => alert("Hello: useRef")} /> */}

              {/* <Speedometer /> */}
            </div>
          </div>
        );
      }

export default Home;

  // eof
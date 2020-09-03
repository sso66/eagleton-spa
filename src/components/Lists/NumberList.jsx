// File: NumberList.jsx
// Date: 6/27/2020
// Note: List and Keys

import React from 'react';

// Correct Key Usage
function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

// Correct Key Usage
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       // Correct! Key should be specified inside the array./
//       <ListItem key={number.toString()} value={number} />
//     );
  
//     return (
//       <div>
//         <h2>List and Keys</h2>
//         <ul>
//           {listItems}
//         </ul>
//       </div>
//   ) ;
// }
// // In the examples above we declared a separate listItems variable and included it in JSX.


// // Embedding map() in JSX
// // JSX allows embedding any expression in curly braces so we could inline the map() result:
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}

export default NumberList;

// eof
  
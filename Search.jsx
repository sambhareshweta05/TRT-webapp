import React, { useState } from 'react';

class Search extends React.Component {
    render() {
        return(
            <div className="search-phase">
            <label for="city">Choose a city:</label>
            <select name="city" id="city" onChange={(e)=>this.props.handleOnChange(e)}>
                <option value="Seattle">Seattle</option>
                <option value="Texas">Texas</option>
                <option value="California">California</option>
                <option value="Florida">Florida</option>
                <option value="Alaska">Alaska</option>
                <option value="New Jersey">New Jersey</option>
                <option value="Georgia">Georgia</option>
                <option value="Oregon">Oregon</option>
                <option value="New York">New York</option>
                <option value="Maryland">Maryland</option>
                <option value="Mexico">New Mexico</option>
                <option value="Dieago">san Dieago</option>
            </select>
            <button onClick={()=>this.props.searchLocation(this.props.location)}>Search</button>
            </div>
        )
    }
}

export default Search


// This holds a list of some fiction people
// Some  have the same name but different age and id
// const USERS = [
//   { id: 1, city: 'India'},
//   { id: 2, city: 'Russia' },
//   { id: 3, city: 'Italy' },
//   { id: 4, city: 'France' },
//   { id: 5, city: 'US' },
//   { id: 6, city: 'Sandieago' },
//   { id: 7, city: 'Seatle' },
// ];

// function Search() {
//   const [city, setName] = useState('');
//   const [foundUsers, setFoundUsers] = useState(USERS);

//   const filter = (e) => {
//     const keyword = e.target.value;

//     if (keyword !== '') {
//       const results = USERS.filter((user) => {
//         return user.city.toLowerCase().startsWith(keyword.toLowerCase());
//         // Use the toLowerCase() method to make it case-insensitive
//       });
//       setFoundUsers(results);
//     } else {
//       setFoundUsers(USERS);
//       // If the text field is empty, show all users
//     }

//     setName(keyword);
//   };

//   return (
//     <div className="container">
//       <input
//         type="search"  
//         value={city}
//         onChange={filter}
//         className="input"
//         placeholder="Filter"
//       />

//       {/* <div className="user-list">
//         {foundUsers && foundUsers.length > 0 ? (
//           foundUsers.map((user) => (
//             <li key={user.id} className="user">
//               <span className="user-id">{user.id}</span>
//               <span className="user-city">{user.city}</span>
//             </li>
//           ))
//         ) : (
//           <h1>No results found!</h1>
//         )}
//       </div> */}
//     </div>
//   );
// }

//export default Search;
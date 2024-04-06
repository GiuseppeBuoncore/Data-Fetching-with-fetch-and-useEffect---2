/* Starting from the previous exercise, create a new GithubUsers component that has a form with a text input and a submit button.
The input will be used for searching a user by providing their username.
Each user will be displayed in a list, where each list item is a GithubUser component.
These components will take username as a prop. */
import React,{useState} from 'react'
import GithubUser from './GithubUser'; 

const GithubUser2 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json();
      setSearchResults(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter username"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    
      <div>
        {searchResults.map(user => (
          <GithubUser key={user.id} username={user.login} />
        ))}
      </div>
    </div>
  );
};

export default GithubUser2;


import './App.css';
import "./style1.css";
import {
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  Prompt
} from "react-router-dom";
import React, { useState } from 'react';



function Header(){
return (
  <div>
    <ul className="header">
          <li>
          <NavLink exact activeClassName="selected" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/addBook">Add Book</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/company">Company</NavLink>
          </li>
        
 </ul>
 </div>
)  
}

function Home(){
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
} 
function AddBook({bookFacade}){
  const emptyBook = {id: "", title: "", info:""};
  const [book,setBook] = useState ({...emptyBook});
  let [isBlocking, setIsBlocking] = useState(false);

const handleChange = e => {
  const{id,value} = e.target;
  setBook({...book, [id]: value});
  setIsBlocking(true);
}

const handleSubmit = e => {
  e.preventDefault();
  bookFacade.addBook(book);
  setBook({...emptyBook});
  setIsBlocking(false);
}

  return (
    <div>
      <h1>Add Book</h1>
      <form>
        <input
        id="title"
        value={book.title}
        placeholder="Add Title Here"
        onChange={handleChange}
        />
        <br/>
        <input
        id="info"
        value={book.info}
        placeholder="Add Info Here"
        onChange={handleChange}
        />
        <br/>
        <button onClick={handleSubmit}>Press to Save</button>
      </form>

      <Prompt 
      when={isBlocking}
      message={location => 
      `You have unsaved changes, are you sure you want to go to ${location.pathname}`
      }
      
      />

    </div>
    )
}


function Products({bookFacade}){
 const books = bookFacade.getBooks();
 let { path, url } = useRouteMatch();

 const listOfBooks = books.map(book => {
   return(
     <li key={book.id}>
    {book.title}
    &nbsp;
    <Link to={`${url}/${book.id}`}>details</Link>
     </li>
   );
 });
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {listOfBooks}
      </ul>
    </div>
  )
}

function Company(){
  return (
    <div>
      <h1>Company</h1>
    </div>
  )
}


function NoMatch(){
  return (
    <div>
      <h1>No Match Found for this URL</h1>
    </div>
  )
}




function App({bookFacade}) {
  return (
    <div className="App">
     <div>
  <Header />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/products" >
      <Products bookFacade={bookFacade}/>
    </Route>
    <Route path="/company">
      <Company />
    </Route>
    <Route path="/addBook">
      <AddBook bookFacade={bookFacade}/>
    </Route>
    <Route>
      <NoMatch/>
    </Route>
  </Switch>
</div>

    </div>
  );
}

export default App;

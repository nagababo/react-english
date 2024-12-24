import { useState } from 'react';
import './App.css'
import AdminPanel from './components/AdminPanel';
import LoginForm from './components/LoginForm';
import MyButton from './components/MyButton';
import ShoppingList from './components/ShoppingList';
import TictacGame  from './tictac';
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const user = {
  name: 'Hedy Lamarr',
  imageUrl: '',
  imageSize:90,
};
let isLoggedIn:any = true
function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1);
  }
  const listItems = products.map(product =>
    <li key = {product.id}>
      {product.title}
    </li>
  );
 
  let content ;
  if (isLoggedIn){
    content = <AdminPanel/>

  } else{
    content = <LoginForm/>
  }

  return (
   
      // <>
      // <h1>Welcome to my app</h1>
      // {}
      // <MyButton />
    
      // </>
      <>
      {/* <ul>{listItems}</ul> */}
      {/* {isLoggedIn && <AdminPanel/>} */}
     {/* {isLoggedIn ? (<AdminPanel/>): (<LoginForm/>)} */}
      {/* <h1>{user.name}</h1> */}
      {/* <img
        className="avatar"
        src={user.imageUrl}
        //alt={'Photo of ' + user.name} + 'from india'
        alt ={`Photo of ${user.name}`}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      /> */}

      {/* <ShoppingList/> */}
      {/* <MyButton count = {count} onClick={handleClick}/>
      <MyButton count = {count} onClick={handleClick}/> */}

<TictacGame/>
    </>
      
      
    
  )
}

export default App

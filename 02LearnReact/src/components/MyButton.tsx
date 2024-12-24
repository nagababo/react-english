import '../App.css'
//import { useState } from 'react';
interface Ibutton {
  count: number,
  onClick :()=>{}
}
export default function MyButton({count, onClick}:Ibutton) {
  // const [count, setCount] = useState<number>(0)
  //  function handleClick (){
  //   setCount(count + 1);
  //  }
    return (
      <button className="button" onClick={onClick}>
       {/* {'Clicked ' +count + ' times'} */}
       {`Clicked ${count} times`}
      </button>
    );
  }
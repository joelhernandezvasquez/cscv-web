import {useState} from 'react';

const useToggle = (initialValue = false) => {
  const [isToggle,setToggle] = useState(initialValue);
  
  const handleToggle = () =>{
    setToggle(!isToggle);
  }
  
 return {isToggle,handleToggle};
}

export default useToggle;
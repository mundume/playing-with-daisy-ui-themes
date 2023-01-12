import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    //check if is a finction
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;

    //set to state
    setLocalStorageValue(value);
    // set to local storage
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  return [localStorageValue, setValue];
};
//get local storage value
const getLocalStorageValue = (key, initialValue) => {
  const itemFromLs = window.localStorage.getItem(key);
  return itemFromLs ? JSON.parse(itemFromLs) : initialValue;
};

export default useLocalStorage;

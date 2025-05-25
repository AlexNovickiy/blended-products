//Робота з loacalStorage
export function useLocalStorage(key, initialValue) {
  let storedValue = '';

  try {
    const item = localStorage.getItem(key);
    storedValue = item
                  ? JSON.parse(item)
                  : initialValue;
  }
  catch (error) {
    console.error('Error reading data localStorage:', error);
  }

  function setValue(value) {
    try {
      storedValue = typeof value === 'function'
                    ? value(storedValue)
                    : value;
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
    catch (error) {
      console.error('Error set data to localStorage:', error);
    }
  }

  return [storedValue,setValue]
}

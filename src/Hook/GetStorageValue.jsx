function GetStorageValue(key, defaultValue) {
  // getting stored value
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
  return 'error';
}
export default GetStorageValue;
/* export const useLocalStorage = (key, defaultValue)=>{
    console.log(key);
    console.log(defaultValue);
    const [value, setValue]= useState(()=>{
     
        console.log(getStorageValue(key, defaultValue));
        return getStorageValue(key, defaultValue);
    });
    useEffect(()=>{
        console.log(value);
        localStorage.setItem(key, JSON.stringify(value));
    },[key, value]);
    console.log([value, setValue]);
    return [value, setValue];
} */

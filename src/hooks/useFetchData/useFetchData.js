import React, {useState, useEffect} from 'react';
import axios from 'axios';
//hooks tanımlama
const useFetchData = url => {
  const [date, setDate] = useState([]);
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(true);
  //data çekme fonksiyonu tanımla
  const fetchData = async () => {
    try {
      const {data: responceData} = await axios.get(url);
      setDate(responceData);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      setErr(error.message);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {date, err, load};
};

export default useFetchData;
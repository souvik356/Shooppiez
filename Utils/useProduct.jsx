import { useEffect, useState } from 'react';
import { const2 } from '../Utils/Constants';

export const useProduct = (prodId) => {
  const [prodInfo, setProdInfo] = useState(null);
  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    const data = await fetch(const2 + prodId);
    const json = await data.json();
    console.log(json);
    setProdInfo(json);
  };
  return prodInfo;
};

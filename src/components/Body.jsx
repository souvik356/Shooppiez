import React, { useEffect, useState } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { const1 } from '../../Utils/Constants';
import { useOnlineStatus } from '../../Utils/useOnlineStatus';

function Body() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let filtered = product.filter((elem) =>
        elem.title.toLowerCase().includes(search.toLowerCase())
      );
      if (selectedCategory) {
        filtered = filtered.filter((elem) => elem.category === selectedCategory);
      }
      setFilteredData(filtered);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search, selectedCategory, product]);

  const fetchData = async () => {
    const data = await fetch(const1);
    const json = await data.json();
    console.log(json);
    setProduct(json);
    setFilteredData(json);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Please check your internet connection</h1>;
  }

  if (product.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-2">
      <div className="flex items-center justify-center mb-4">
        <input
          type="search"
          placeholder="Enter Product name"
          className="w-[300px] shadow-xl rounded-2xl p-2 mb-4 ml-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="ml-8 p-1.5 bg-pink-200 rounded-lg"
          onClick={() => {
            const top = product.filter((elem) => elem.rating.rate > 4);
            setFilteredData(top);
          }}
        >
          Top Rated Products
        </button>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`p-2 rounded-lg ${selectedCategory === "men's clothing" ? 'bg-blue-500 text-white' : 'bg-blue-200'}`}
          onClick={() => setSelectedCategory("men's clothing")}
        >
          Men
        </button>
        <button
          className={`p-2 rounded-lg ${selectedCategory === "women's clothing" ? 'bg-blue-500 text-white' : 'bg-blue-200'}`}
          onClick={() => setSelectedCategory("women's clothing")}
        >
          Women
        </button>
        <button
          className={`p-2 rounded-lg ${selectedCategory === 'electronics' ? 'bg-blue-500 text-white' : 'bg-blue-200'}`}
          onClick={() => setSelectedCategory('electronics')}
        >
          Electronics
        </button>
        <button
          className={`p-2 rounded-lg ${selectedCategory === 'jewelery' ? 'bg-blue-500 text-white' : 'bg-blue-200'}`}
          onClick={() => setSelectedCategory('jewelery')}
        >
          Jewellery
        </button>
        <button
          className={`p-2 rounded-lg ${selectedCategory === '' ? 'bg-blue-500 text-white' : 'bg-blue-200'}`}
          onClick={() => setSelectedCategory('')}
        >
          All
        </button>
      </div>
      <div className="flex gap-4 flex-wrap">
        {filteredData.map((elem) => (
          <Link key={elem.id} to={'/product/' + elem.id}>
            <Card data={elem} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;

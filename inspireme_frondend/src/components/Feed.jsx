import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { feedQuery, searchQuery } from '../utils/data';
import Pins from '../containers/Pin';




const Feed = () => {

  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);


  const { categoryId } = useParams() //https://reactrouter.com/en/main/hooks/use-params

  useEffect(() => {
    // setLoading(true)
    if (categoryId) {
      const query = searchQuery(categoryId) //to fetch a category from sanity same as we did in home component for userInfo
      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        })


    } else {
      client.fetch(feedQuery)
        .then((data) => {
          console.log(data);
          setPins(data)
        })
        .catch((error) => {
          console.log(error);
        })

    }

  }, [categoryId])

  if (loading) return <Spinner message='we are adding new ideas to your feed!' />

  return (
    <div>
      {pins && (
        <MasonryLayout pins={pins} />
      )}
    </div>
  )
};

export default Feed


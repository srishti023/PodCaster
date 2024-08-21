import React from 'react'
import { Link } from 'react-router-dom';

const PodcastCard = ({items}) => {
  return (
    <div>
      <Link
       to={`/description/${items._id}`}
        className='border p-4 rounded flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300'
        >
            <div>
            <img src={`http://localhost:1000/${items.frontImage}`} />
            </div>
        </Link>
    </div>
  );
};

export default PodcastCard;

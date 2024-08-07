import React from 'react'
import { Link } from 'react-router-dom';

const categories = () => {
  const cat = [
    {
        name : "Comedy",
        color : "bg-purple-200",
        to : "/categories/Comedy",
        img : "https://img.freepik.com/free-photo/3d-rendering-emotions_23-2149081943.jpg?t=st=1722628473~exp=1722632073~hmac=73b83d27cd7e9d8e32db1227b8e400a8dba57aacfc44c9b93f5d9fea21277e14&w=900"
    },
    {
        name : "Business",
        color : "bg-green-200",
        to : "/categories/Business",
        img : "https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?t=st=1722628620~exp=1722632220~hmac=b32e92aeb293d8d8fa054307327d3a79d3907e049fe086665d02d8f3013d1654&w=1060",
    },
    {
        name : "Education",
        color : "bg-red-200",
        to : "/categories/Education",
        img : "https://img.freepik.com/free-photo/city-committed-education-collage-concept_23-2150062222.jpg?t=st=1722628710~exp=1722632310~hmac=fa91e03e998694da5f4c67734b30ab9bdaa056beb6595061b21790e15fb8c43a&w=996",
    },
    {
        name : "Hobbies",
        color : "bg-zinc-200",
        to : "/categories/Hobby",
        img : "https://img.freepik.com/free-photo/relax-woman-painting-watercolor-art-work-green-garden-forest-nature_1150-17425.jpg?t=st=1722628850~exp=1722632450~hmac=5bcf4049c94d5b61669355f683a35e622237855331f07caca803fb71031be7e8&w=996",
    },
    {
        name : "Government",
        color : "bg-indigo-200",
        to : "/categories/Government",
        img : "https://img.freepik.com/free-photo/law-justice-converge-antique-gavel-generative-ai_188544-9402.jpg?t=st=1722628986~exp=1722632586~hmac=52c7456d4fbd0cbb9ebce6e6707d40e4eb4944dbb50163e8b38fc36f7ca5b7b3&w=1060",
    },
  ];
  return (
    <div className='h-screen lg:h-[78vh]'>
        <div className='px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {cat.map((items,i)=>(
                <Link to={items.to} key={i} className={`rounded px-8 py-4 text-xl font-semibold ${items.color} hover:scale-105 shadow-xl transition-all duration-300 relative h-[22vh] overflow-hidden `}>
                    <div>{items.name}</div>
                    <div className='w-[100%] flex items-center justify-end absolute -bottom-2 -right-2'>
                        <img src={items.img} alt="category" className='rounded rotate-12 h-[15vh] md:h-[17vh] lg:h-[18vh]' />
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
};

export default categories;

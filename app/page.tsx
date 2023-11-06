import Card from '@/components/Card';
import CardCopy from '@/components/CardCopy';
import React from 'react';
// import Card from '../components/Card';
const images = [
  { id:1,
    src: 'image-1.webp',
    alt: 'Image 1',
  },
  {
    id:2,
    src: 'image-2.webp',
    alt: 'Image 2',
  }, 
  {id:3,
    src: 'image-3.webp',
    alt: 'Image 2',
  },
  { 
    id:4,
    src: 'image-4.webp',
    alt: 'Image 2',
  },
  { 
    id:5,
    src: 'image-5.webp',
    alt: 'Image 2',
  },
  {
    id:6,
    src: 'image-6.webp',
    alt: 'Image 2',
  },
  {
    id:7,
    src: 'image-7.webp',
    alt: 'Image 2',
  },
  {
    id:8,
    src: 'image-8.webp',
    alt: 'Image 2',
  },{
    id:9,
    src: 'image-9.webp',
    alt: 'Image 2',
  },
  {
    id:10,
    src: 'image-10.jpeg',
    alt: 'Image 2',
  },
  {
    id:11,
    src: 'image-11.jpeg',
    alt: 'Image 2',
  },
  // Add more images as needed
];

const GalleryPage = () => {
  return (
    <div className='bg-slate-100 p-10'>

    <div className="container mx-auto  bg-white text-black">
  
    <Card images={images} />

    {/* <CardCopy images={images}/> */}
   </div>
    </div>
  );
};

export default GalleryPage;

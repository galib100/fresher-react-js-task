import React from 'react';
import Card from '../components/DraggableImage';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const images = [
    {
      src: 'image-1.webp',
      alt: 'Image 1',
    },
    {
      src: 'image-2.webp',
      alt: 'Image 2',
    }, 
    {
      src: 'image-3.webp',
      alt: 'Image 2',
    },
    {
      src: 'image-4.webp',
      alt: 'Image 2',
    },
    {
      src: 'image-5.webp',
      alt: 'Image 2',
    },
    {
      src: 'image-6.webp',
      alt: 'Image 2',
    },
    {
      src: 'image-7.webp',
      alt: 'Image 2',
    },
    {
      src: 'image-8.webp',
      alt: 'Image 2',
    },{
      src: 'image-9.webp',
      alt: 'Image 2',
    },
    {
      src: 'image-10.jpeg',
      alt: 'Image 2',
    },
    {
      src: 'image-11.jpeg',
      alt: 'Image 2',
    },
    // Add more images as needed
  ];
  const Demo = () => {


  
  return (
    <div>
    <div className="container mx-auto py-8">
  
      <Card images={images} />
    </div>
    </div>
  )
}

export default Demo
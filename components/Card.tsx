'use client'
import React, { useState } from 'react';

const Card = ({ images }: any) => {
  const [allItem, setAllItem]: any[] = useState(images)
  const [selectedImages, setSelectedImages]: any[] = useState([]);
  const [count, setCount]: any[] = useState(0)
  //           drag & drop functions start
  // const [draggedItem, setDraggedItem] = useState(null);
  const [draggedItem, setDraggedItem] = useState(0);

  const handleDragStart = (e: any) => {
    setDraggedItem(e.target.id);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();


  };

  const handleDrop = (e: any, destination: any) => {
    if (draggedItem) {
      destination.appendChild(draggedItem);
      setDraggedItem(0);
    }
  };
  const dropHandle = (dropId: any) => {
    const updatedItems = allItem.map((item: any) => {
      // console.log(draggedItem)
      // console.log(item.id)
      let tmp = dropId;
      if (item.id == dropId) {
        return { ...item, id: draggedItem };
      }
      if (item.id == draggedItem) {
        console.log(item.id)
        return { ...item, id: dropId };
      }


      return item;
    });
    setAllItem(updatedItems)
  }
  //           drag & drop functions end


  const toggleImageSelection = (image: any) => {
    // console.log("clicked")
    if (selectedImages.includes(image)) {
      setSelectedImages(selectedImages.filter((selected: any) => selected !== image));
      setCount(count - 1)
    } else {
      setSelectedImages([...selectedImages, image]);
      setCount(count + 1)
    }
  };
  const deleteHandler = (deletingImages: any) => {
    console.log(deletingImages)
    const remainingItem = allItem.filter((image: any) => !deletingImages.includes(image))
    // console.log(remainingItem)
    setAllItem(remainingItem)
    // console.log(allItem)
    // setAllItem(allItem.filter((vai:any)=> vai !== allItem.includes(vai)));
    setSelectedImages([])
    setCount(0)
    // setAllItem(deletingImages)

  }
  const imagAscending = [...allItem].sort((a, b) => a.id - b.id);
  return (



    <div className="p-4 border border-gray-300 rounded-md shadow-md">
      <div className='flex justify-between py-6 text-black '>
        <div>
          
          <p className='text-2xl font-semibold'>{`${count == 0 ? 'Gallery ' : `${count} Files Selected `} `}</p>
        </div>
        <div className='pb-6 text-red-600 font-medium cursor-pointer' onClick={() => deleteHandler(selectedImages)}>
          <p> {`${count == 1 && count < 2 ? 'Delete file' : ''}`}</p>
          <p> {`${count >= 2 ? 'Delete files' : ''}`}</p>
        </div>

      </div>
      <hr className='my-6' />

      <div className="grid grid-cols-5 gap-4 "
        id='dp1'
        onDragOver={handleDragOver}
      // onDrop={(e) => handleDrop(e, document.getElementById('dp1'))}
      >

        {imagAscending.map((image: any, index: any) => (


          // <Draggable>

          <div
            key={index}
            id={image.id}
            className={` relative group border rounded ${image.id == 1 ? 'row-span-2 col-span-2 ' : ''}`}
            draggable="true"
            onDragStart={handleDragStart}

            onDrop={() => dropHandle(image.id)}
          >
            {/* <span> {index}</span> */}
            <img src={image.src} alt={image.alt} className="w-100 h-100 object-cover rounded-md" />
            <button
              // onMouseEnter={() => toggleImageSelection(image)}
              onClick={() => toggleImageSelection(image)}
              className={`${selectedImages.includes(image) ? 'bg-blue-500 text-2xl' : 'group-hover:bg-white z-10'
                } w-5 h-5 absolute top-5 left-5 text-white flex items-center justify-center transform scale-100 group-hover:scale-100 transition-transform duration-300`}
            >
              {selectedImages.includes(image) ? '✔ ' : ''}

            </button>
            <div onClick={() => toggleImageSelection(image)} className={`${selectedImages.includes(image) ? 'flex items-center justify-center bg-white bg-opacity-50 visible' : 'hidden'}  absolute inset-0  group-hover:flex items-center justify-center bg-black bg-opacity-50 rounded-md cursor-pointer `}>
              {/* <span className="text-white text-xl"></span> */}
            </div>
          </div>
          // {/* </Draggable> */}


        ))}
        <div className='relative group border-none   rounded '>
          <div className="">
            <img className=" absolute h-12 w-12 top-20 left-32 object-cover rounded-md" src="image-regular.svg" alt="Current profile photo" />
          </div>
          <input type="file"
            placeholder='Add Images'
            className=' w-full rounded 
            file:h-72 file:w-full
            file:border-dotted 
            file:text-sm file:font-semibold
          file:bg-violet-50 file:text-slate-500 
          hover:file:bg-gray-200' />
        </div>
      </div>
    </div>
  );
};

export default Card;

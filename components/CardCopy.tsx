'use client'
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const CardCopy = ( {images}:any ) => {
  const [allItem, setAllItem]:any[] = useState(images);
  const [selectedImages, setSelectedImages]:any[] = useState([]);
  const [count, setCount] = useState(0);

  const onDragEnd = (result:any) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = Array.from(allItem);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 0);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);

    setAllItem(reorderedItems);
  };

  const toggleImageSelection = (image:any) => {
    if (selectedImages.includes(image)) {
      setSelectedImages(selectedImages.filter((selected:any) => selected !== image));
      setCount(count - 1);
    } else {
      setSelectedImages([...selectedImages, image]);
      setCount(count + 1);
    }
  };

  const deleteHandler = (deletingImages:any) => {
    const remainingItem = allItem.filter((image:any) => !deletingImages.includes(image));
    setAllItem(remainingItem);
    setSelectedImages([]);
    setCount(0);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="gallery">
        {(provided:any) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="p-4 border border-gray-300 rounded-md shadow-md"
          >
            <div className="flex justify-between py-6 text-black">
              <div>
                <p className="text-2xl font-semibold">{`${count === 0 ? 'Gallery' : ` ${count} Files Selected`}`}</p>
              </div>
              <div className="pb-6 text-red-600 font-medium cursor-pointer" onClick={() => deleteHandler(selectedImages)}>
                <p>{`${count === 1 ? 'Delete file' : ''}`}</p>
                <p>{`${count >= 2 ? 'Delete files' : ''}`}</p>
              </div>
            </div>
            <hr className="my-6" />

            <div className="grid grid-cols-5 gap-4" id="dp1">
              {allItem.map((image:any, index:any) => (
                <Draggable key={image.id} draggableId={image.id}  index={index}>
                  {(provided:any, snapshot:any) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`relative group border rounded ${image.id === 1 ? 'row-span-2 col-span-2' : ''}`}
                      style={{
                        userSelect: 'none',
                        padding: 16,
                        margin: 8,
                        backgroundColor: snapshot.isDragging ? 'lightblue' : 'white',
                      }}
                    >
                      <img src={image.src} alt={image.alt} className="w-100 h-100 object-cover rounded-md" />
                      <button
                        onClick={() => toggleImageSelection(image)}
                        className={`${selectedImages.includes(image) ? 'bg-blue-500 text-2xl' : 'group-hover:bg-white z-10'
                          } w-5 h-5 absolute top-5 left-5 text-white flex items-center justify-center transform scale-100 group-hover:scale-100 transition-transform duration-300`}
                      >
                        {selectedImages.includes(image) ? '✔' : ''}
                      </button>
                      <div
                        className={`${
                          selectedImages.includes(image)
                            ? 'flex items-center justify-center bg-white bg-opacity-50 visible'
                            : 'hidden'
                        } absolute inset-0 group-hover:flex items-center justify-center bg-black bg-opacity-50 rounded-md cursor-pointer`}
                      ></div>
                    </div>
                  )}
                </Draggable>
              ))}
              <div className="relative group border-none rounded">
                <div>
                  <img
                    className="absolute h-12 w-12 top-20 left-32 object-cover rounded-md"
                    src="image-regular.svg"
                    alt="Current profile photo"
                  />
                </div>
                <input
                  type="file"
                  placeholder="Add Images"
                  className="w-full rounded file:h-72 file:w-full file:border-dotted file:text-sm file:font-semibold file:bg-violet-50 file:text-slate-500 hover:file:bg-gray-200"
                />
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default CardCopy;


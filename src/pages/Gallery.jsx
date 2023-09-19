import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const imageArray = [
  {
    id: 1,
    src: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwcGFpbnRpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "art",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0JTIwcGFpbnrmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "art",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1577720643272-265f09367456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0JTIwcGFpbnRpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "painting",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1577084381380-3b9ea4153664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFydCUyMHBhaW50aW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    alt: "mural",
  },
  {
    id: 5,
    src: "https://plus.unsplash.com/premium_photo-1674815482384-8c9d646ad52e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0JTIwcGFpbnRpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "painting",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1584730428103-078e6636bd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGFydCUyMHBhaW50aW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    alt: "art",
  },
  {
    id: 7,
    src: "https://plus.unsplash.com/premium_photo-1677679817996-95b53a2cd801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFydCUyMHBhaW50aW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    alt: "painting",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1674346440545-342af2fa5475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFydCUyMHBhaW50aW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    alt: "mural",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1590732261664-0ff7e1aef21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    alt: "mural",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1547890316-3bb90edb9004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    alt: "mural",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    alt: "painting",
  },
  {
    id: 12,
    src: "https://plus.unsplash.com/premium_photo-1663937576065-706a8d985379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "art",
  },
  {
    id: 13,
    src: "https://plus.unsplash.com/premium_photo-1664272436668-78437b92929e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "art",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1583225238311-0278ade1070d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11cmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "mural",
  },
  {
    id: 15,
    src: "https://plus.unsplash.com/premium_photo-1674814950032-ba7058dede79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    alt: "painting",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    alt: "painting",
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "painting",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhaW50aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "painting",
  },
  {
    id: 19,
    src: "https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "art",
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    alt: "art",
  },
  {
    id: 21,
    src: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    alt: "art",
  },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1567985128495-d36d642f7dcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG11cmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "mural",
  },
  {
    id: 23,
    src: "https://images.unsplash.com/photo-1484136199491-6603c473c88b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG11cmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "mural",
  },
  {
    id: 24,
    src: "https://images.unsplash.com/photo-1600440699677-c6f39725adf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG11cmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    alt: "mural",
  },
];

function Gallery() {
  const [galleryItems, setGalleryItems] = useState(imageArray);
  const [query, setQuery] = useState("");

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...galleryItems];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setGalleryItems(items);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setQuery(inputValue);

    const filteredItems = imageArray.filter((item) =>
      item.alt.toLowerCase().includes(inputValue)
    );

    setGalleryItems(filteredItems);
  };

  return (
    <div className="bg-purple-900 p-2 flex flex-col gap-4">
      <div className="flex items-center justify-between flex-col md:flex-row p-4">
        <h1 className="lg:text-start font-bold text-6xl mb-4 text-white">
          The Gallery
        </h1>
        <input
          type="text"
          placeholder="Search images by art, painting, or mural"
          value={query}
          onChange={handleInputChange}
          className="w-96 h-10 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="gallery" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 md:grid-cols-3 items-center mx-auto lg:mx-0 lg:grid-cols-4 gap-4"
            >
              {galleryItems.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="w-96 sm:w-full md:w-80 border-4 border-white rounded-md mx-auto"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-[30rem]"
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Gallery;

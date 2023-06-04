import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const UploadImages = () => {
  const [images, setImages] = useState([]);
  const {id} = useParams()
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('image', images[i]);
    }
    try {
      const response = await axios.post(`https://gdsc-main-site.onrender.com/v1/project/upload-image/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` ,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 top-0 right-0 absolute h-screen w-2/3">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-gray-700" htmlFor="images">
              Select Images
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              type="file"
              id="images"
              name="images"
              accept="image/*"
              multiple
              onChange={(e) => setImages(Array.from(e.target.files))}
            />
          </div>
          <div
            className="w-full h-40 p-20 border-2 border-dashed border-gray-400 rounded-lg"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <p className="text-gray-400">Drag and drop images here</p>
          </div>
          <div className="mt-4">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadImages;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// const UploadImages = () => {
//   const [images, setImages] = useState([]);
//   const {id} = useParams()

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const files = Array.from(e.dataTransfer.files);
//     setImages(files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     images.forEach((image) => {
//       formData.append('image', image);
//       console.log(image)
//     });
//     try {
//       const response = await axios.post(`https://gdsc-main-site.onrender.com/v1/project/upload-image/${id}`, formData, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container flex flex-col items-center justify-center h-screen bg-gray-100 top-0 right-10 absolute h-screen w-2/3">
//       <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2 font-bold text-gray-700" htmlFor="images">
//               Select Images
//             </label>
//             <input
//               className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               type="file"
//               id="images"
//               name="images"
//               accept="image/*"
//               multiple
//               onChange={(e) => setImages(Array.from(e.target.files))}
//             />
//           </div>
//           <div
//             className="w-full h-40 p-20 border-2 border-dashed border-gray-400 rounded-lg"
//             onDrop={handleDrop}
//             onDragOver={(e) => e.preventDefault()}
//           >
//             <p className="text-gray-400">Drag and drop images here</p>
//           </div>
//           <div className="mt-4">
//             <button
//               className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
//               type="submit"
//             >
//               Upload
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UploadImages;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const UploadImages = () => {
//   const [images, setImages] = useState([]);
//   const {id} = useParams()

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const files = Array.from(e.dataTransfer.files);
//     setImages(files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     images.forEach((image) => {
//       formData.append('images', image);
//     });
//     try {
//       const response = await axios.post(`https://gdsc-main-site.onrender.com/v1/project/upload-image/${id}`, formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
//       <form onSubmit={handleSubmit}>
//         <input type="file" multiple onChange={(e) => setImages(Array.from(e.target.files))} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UploadImages;

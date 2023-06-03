import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';
import {  Button } from 'react-bootstrap';


function SponsorForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [sponsorLink, setSponsorLink] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await axios.post('https://gdsc-main-site.onrender.com/v1/sponser', {
        name,
        sponnser_link: sponsorLink,
       
      }, 
      {headers: {  Authorization: `Bearer ${localStorage.getItem('token')}`}}

      );
      if (response.status === 200) {
      
        navigate('/admin/sponsor');
    } 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
   <div  className='container mx-auto max-w-5xl'>
    <div >
    <Form onSubmit={handleSubmit} method='POST' action='' className='container mx-auto max-w-7xl'>
 
      <div>
            <FloatingLabel controlId="floatingInputGrid" label="name of company" className='mb-3'>
               <Form.Control size="lg" type="text" id='name' placeholder="Large text" value={name} onChange={(event) => setName(event.target.value)} />
            </FloatingLabel>
      </div>
      <div>
            <FloatingLabel controlId="floatingInputGrid" label="Link of company" className='mb-3'>
               <Form.Control size="lg" type="text" id='sponsorLink' placeholder="Large text" value={sponsorLink} onChange={(event) => setSponsorLink(event.target.value)} />
            </FloatingLabel>
      </div>
      <button className='btn btn-block btn-success' type="submit">Create Sponsor</button>
      {error && <div className='p-5 border w-100'>{error}</div>}
    </Form>
    </div>
   </div>
  );
}

export default SponsorForm;


// import React, { useState, useEffect, createContext, useContext } from 'react';
// import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import {  Button } from 'react-bootstrap';



// const SponsorAdd = () => {
//     const [images, setImages] = useState([]);

//     const handleDrop = (e) => {
//         e.preventDefault();
//         const files = Array.from(e.dataTransfer.files);
//         const filteredFiles = files.filter((file) => file.type.startsWith('image/'));
//         setImages([...images, ...filteredFiles]);
//     };

//     const handleFileInput = (e) => {
//         const files = Array.from(e.target.files);
//         const filteredFiles = files.filter((file) => file.type.startsWith('image/'));
//         setImages([...images, ...filteredFiles]);
//     };

//   const handleRemoveImage = (index) => {
//     const newImages = [...images];
//     newImages.splice(index, 1);
//     setImages(newImages);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // handle image upload logic here
//   };
//   return (
//     <div>
        
//         <div  className='container mx-auto max-w-5xl'>
//             <div className='container mx-auto max-w-7xl border border-solid border-gray-400 p-2 rounded d-flex justify-content-between mb-5 mt-3'>
//             <h4 className='fw-bold mt-1'> new Sponseor</h4>
//             </div>
//         <Form method='POST' action='' className='container mx-auto max-w-7xl'>
//             <FloatingLabel controlId="floatingInputGrid" label="name of company" className='mb-3'>
//                 <Form.Control size="lg" type="text" placeholder="Large text" />
//             </FloatingLabel>
            
            
//             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Control placeholder='description...' as="textarea" rows={3} /> 
//             </Form.Group>
  
//             <br />

//             <Form onSubmit={handleSubmit} className='mb-3'>
//                 <Form.Group>
//                 <Form.Control
//                     type="file"
//                     multiple
//                     accept="image/*"
//                     onChange={handleFileInput}
//                 />
//                 <Form.Text className="text-muted mb-2">
//                     Or drag and drop images here
//                 </Form.Text>
//                 </Form.Group>
//             <div
//               className="dropzone p-20  border border-solid border-gray-400 mb-3"
//               onDrop={handleDrop}
//               onDragOver={(e) => e.preventDefault()}
//             >
//               {images.map((image, index) => (
//                 <div key={index} className="image-preview">
//                   <img src={URL.createObjectURL(image)} alt="" />
//                   <Button
//                     variant="danger"
//                     size="sm"
//                     onClick={() => handleRemoveImage(index)}
//                   >
//                     Remove
//                   </Button>
//                 </div>
//               ))}
//             </div>
//                 <Button className='btn-success btn-block mb-3'>upload</Button>
//             </Form>
//             <div className='d-flex justify-content-between'>
//                 <Button type='submit' variant='dark'>cancel</Button>
//                 <Button type='submit' variant='success'>save changes</Button>
//             </div>
            
            
//         </Form>
//         </div>
//     </div>

//   )
// }

// export default SponsorAdd;
import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {  Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
const SponsorContext = createContext();

const SponserProvider = ({ children }) => {
    const [sponsor, setSponsor] = useState(null);


    const { id } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(`https://gdsc-main-site.onrender.com/v1/sponser/${id}`);
        setSponsor(result.data);
      };
     
  
      fetchData();
    
    }, [id]);
  
    return (
      <SponsorContext.Provider value={{ sponsor }}>
        {children}
      </SponsorContext.Provider>
    );
  };
  

const UpdateSponsor = () => {
    const [images, setImages] = useState([]);
    const { sponsor } = useContext(SponsorContext);

    
    if (!sponsor) {
      return <div>Loading...</div>;
    }
    
    console.log(sponsor)

    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const filteredFiles = files.filter((file) => file.type.startsWith('image/'));
        setImages([...images, ...filteredFiles]);
    };

    const handleFileInput = (e) => {
        const files = Array.from(e.target.files);
        const filteredFiles = files.filter((file) => file.type.startsWith('image/'));
        setImages([...images, ...filteredFiles]);
    };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle image upload logic here
  };
  return (
    <div>
        <div onSubmit={handleSubmit} className='container mx-auto max-w-5xl '>
        <div className='container mx-auto max-w-7xl border border-solid border-gray-400 p-2 rounded d-flex justify-content-between mb-5 mt-3'>
            <h3 className='fw-bold mt-1 text-center'> Edit sponsor</h3>
        </div>
        <Form method='POST' action='' className='container mx-auto max-w-7xl'>
            <FloatingLabel controlId="floatingInputGrid" label="project title" className='mb-3'>
                <Form.Control className='text-sm' size="lg" type="text" placeholder="Large text" value={sponsor.name}/>
            </FloatingLabel>
            
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} value={sponsor.description} /> 
            </Form.Group>
            

            <br />

            <Form className='mb-3'>
            <Form.Group>
              <Form.Control
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileInput}
              />
              <Form.Text className="text-muted mb-2">
                Or drag and drop images here
              </Form.Text>
            </Form.Group>
            <div
              className="dropzone p-20  border border-solid border-gray-400 mb-3"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              {images.map((image, index) => (
                <div key={index} className="image-preview">
                  <img src={URL.createObjectURL(image)} alt="" />
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
                <Button className='btn-success btn-block mb-3'>upload</Button>
            </Form>
            <div>
                <br />
                <hr />
                <br />
            </div>
           
            <div className='d-flex justify-content-between cursor-pointer'>
                <div>
                  <Button  size='sm'>
                    <i class="fas fa-trash"></i> <span> remove</span>
                  </Button>
                </div>
                <div >
                <Button color='gray-400' className='mx-3' size='sm'>
                  cancel
                </Button>
                <Button variant='success' size='sm' p-7>    
                   save changes
                </Button>
                </div>
                
            </div> 

        </Form>
        </div>
    </div>

  )
}

const Updatesponsor = () => {
  return (
        <SponserProvider>
            <UpdateSponsor />
        </SponserProvider>
  )
}


export default Updatesponsor
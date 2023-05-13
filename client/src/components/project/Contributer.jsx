import  react from 'react'
import Card from 'react-bootstrap/Card';
import user from "../../assets/Sample_User_Icon.png"
const Contributer = () => {
  return (
    <Card style={{ width: '18rem' }} className='contributer mb-5'>
        <div className='container'>
            <Card.Img 
            variant="top" 
            src={user} 
            style={{
                maxHeight: "25vh"
            }}
            
            />
        </div>
        <Card.Body>
        <Card.Title>Your name</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        </Card.Body>
        <div className='social-media container mb-3'>
            <i class="fab fa-telegram social-media-icon"></i>
            <i class="fab fa-github social-media-icon"></i>
            <i class="fab fa-linkedin-in social-media-icon"></i>
        </div>
  </Card>
  )
}

export default Contributer
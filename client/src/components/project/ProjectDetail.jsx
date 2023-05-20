import react from '@heroicons/react';
import {projectSessions} from './fakedata';
import ProjectMiniCard from './ProjectMiniCard'
import Contributer from './Contributer';
import Button from 'react-bootstrap/Button';
const ProjectDetail = () => {
  return (
    <div className='container'>
        <div className='header-image container mt-3'>
            <div className=''>
                <h6>App development session 1</h6>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='project-detail-description container'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ab corrupti nemo quod 
                        porro cumque numquam voluptatem voluptas, adipisci vel perferendis laboriosam, unde earum voluptates,
                        minima doloribus! Voluptatum, fugit at!
                        Facilis id enim dolorum pariatur exercitationem. Alias eum officia pariatur molestias quae sed, 
                        optio possimus nihil asperiores eveniet iusto odit atque veritatis magnam a, ratione quam debitis 
                        nobis sunt voluptatum.
                    </p>
            </div>
            <div className='project-detail-main container mt-5'>
                <h6>project Detail</h6>
                
                <div className='project-detail-type-and-link'>
                    <span>
                        Project type: <span className='project-detail-type-text text-muted'>inperson sessions</span>
                    </span>
                    <span>
                        Project link: <a href='https://project.org'>https://prject.org</a>
                    </span>
                </div>
                <div className='project-detail-mini-image-card mt-4 mb-5 row'>
                        {
                            projectSessions.map((item) =>{
                                return(
                                    <div className="col-sm-3 mt-3">
                                        <ProjectMiniCard />
                                    </div>
                                )
                            })
                        }
                </div>
                <br />
                <div className='contributors mt-5 mb-3'>
                    <div className='mt-5'>
                    <h6>Contributors</h6>
                    </div>
                <div className='row'>
                    {
                        projectSessions.map((item) => {
                            return (
                                <div className='col-sm-4 mt-3'>
                                    <Contributer />
                                </div>  
                            )
                        })
                    }
                </div>
                
                </div>
            
                <div className='d-flex justify-content-center'>
                  <a className='back-to-project-btn mb-5' href='https://aser.com'>Back to Project</a>
                </div>
                <br />
          
            </div>
        </div>
        
    </div>
  )
}

export default ProjectDetail
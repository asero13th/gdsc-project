import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import {fakedata,} from "./fakedata"
import MemberCard from "./MemberCard"
const Team = () => {
  return (
   <div className='container'>
    <div className='mb-4'>
      <h5 className='text-left team-header'>Meet our team</h5>
      <p className='text-left text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quidem vel aperiam animi cum, minima reiciendis 
        amet numquam, deleniti iusto rerum velit nostrum aliquid eveniet sequi optio et fuga? Quod!</p>
    </div>
     <div className='container'>
     <Accordion defaultActiveKey="0" className='mb-5'>
          {
          fakedata.map((item,idx) =>{
            return(
                <Accordion.Item eventKey={`${idx}`} className='mt-5 mx-5'>
                  <Accordion.Header><span>{item.startYear}</span>/<span>{item.endYear}  year</span></Accordion.Header>
                    <Accordion.Body className='row core-team-member-card mt-4'>
                      {
                        item.teamMembers.map((item) =>{
                          return(
                            <div className='col-sm-4'>
                              <MemberCard />
                            </div>
                          )
                        })
                      }
                  </Accordion.Body>
                </Accordion.Item>
            )
          })
        }
      </Accordion>
      
    </div>
   </div>
  )
}

export default Team
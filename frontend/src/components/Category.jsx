import React from 'react'
import { Button, Card } from 'react-bootstrap'

import mrFoodLogo from '../images/mrFoodLogo.jpeg'


function Category() {
  return (
    <div>
          <Card style={{ width: '25rem' }} className='shadow'>
              <Card.Img variant="top" src={mrFoodLogo} />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Go somewhere</Button>
              </Card.Body>
          </Card>   
    </div>
  )
}

export default Category
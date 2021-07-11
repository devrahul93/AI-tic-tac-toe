import React, { useState } from 'react'
import Icon from './components/Icon'

// import react toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Tilty from 'react-tilty'

import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

// Create nine empty default array that can be filled with cross or circle
const itemArray = new Array(9).fill('empty')

const reloadGame = () => {
  //
}

const checkIsWinner = () => {
  //
}

const changeItem = (itemNumber) => {
  //
}

function App() {
  //boolian checker to check whether that is cross or check there
  const [isCross, setIsCross] = useState(false)
  //to check who is the winner
  const [winMessags, setWinMessage] = useState('')

  return (
    <div className='App'>
      <Tilty
        className='Tilt'
        options={{}}
        style={{}}
        speed={300}
        glare={true}
        max-glare={2}
      >
        <Container className='p-5'>
          <ToastContainer position='bottom-center' />
          <Row>
            <Col className=''>
              <div className='grid'>
                {/* using map feature to loop through the item Array */}
                {itemArray.map((item, index) => (
                  <Card>
                    <CardBody className='box'>
                      <Icon name={item} />
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Tilty>
    </div>
  )
}

export default App

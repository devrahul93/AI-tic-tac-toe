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

function App() {
  //boolian checker to check whether that is cross or check there
  const [isCross, setIsCross] = useState(false)
  //to check who is the winner
  const [winMessage, setWinMessage] = useState('')

  const reloadGame = () => {
    setIsCross(false)
    winMessage('')
    itemArray.fill('empty', 0, 9)
  }

  const checkIsWinner = () => {
    //
  }

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: 'success' })
    }
    if (itemArray[itemNumber] === itemNumber) {
      //filling the value in each array
      itemArray[itemNumber] = isCross ? 'cross' : 'circle'
      //flip the value
      setIsCross(!isCross)
    } else {
      return toast('already filled', { type: 'error' })
    }
    checkIsWinner()
  }

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
            {/* to show msg like win or whose turn is this */}
            {winMessage ? (
              <div className='mb-2 mt-2'>
                <h1 className='text-success text-uppercase text-center'>
                  {winMessage}
                </h1>
                <Button color='success' block onClick={reloadGame}>
                  Reload the Game
                </Button>
              </div>
            ) : (
              <h1 className='text-center text-warning'>
                {isCross ? 'Cross' : 'Circle'} turns
              </h1>
            )}
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

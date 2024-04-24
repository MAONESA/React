import { useState } from 'react'
import OriginalQuestions from "./assets/data/questions"
import { Row, Question, Container } from "./app/styles"
import Modal from './components/Modal'
import { shuffleArray } from './app/utils'
const Questions = shuffleArray(OriginalQuestions)

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [displayModal, setDisplayModal] = useState(0)
  const pregunta = Questions[currentQuestionIndex]

  return (
    <Container>
      <Question>
        {
          pregunta.question
        }
      </Question>

      <Row>
        {
          pregunta.answers.map(a => <p key={0}><button onClick={() => {
            if (a.isRight) {
              if (currentQuestionIndex === Questions.length - 1) {
                setDisplayModal(true)
              } else {
                setCurrentQuestionIndex(currentQuestionIndex + 1)
              }
            } else {
              setCurrentQuestionIndex(currentQuestionIndex === 0 ? 0 : currentQuestionIndex - 1)
            }
          }
          }>X</button> {a.txt}</p >)
        }
      </Row>
      <Modal visible={displayModal} />
    </Container>
  )
}

export default App

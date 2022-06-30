import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

import Llama from './assets/llama.png'
import SpinSound from './assets/sound.mp3'
import Pare from './assets/pare.mp3'

import { Container } from './styles'

function App() {
  const [spin, setSpin] = useState<boolean>(false)
  const data = [
    { option: 'Condomínio Vários Djanho' },
    { option: 'Circuito Muito Djanho' },
    { option: 'Lenharinha Haja Djanho' },
    { option: 'Estação do Djanho' },
    { option: 'Bosque do Djanho' },
    { option: 'Caverna do Djanho' },
    { option: 'Toada do Djanho' },
    { option: 'Bobinhas do Djanho' },
    { option: 'Os Djanhosies' },
    { option: 'Djanhuário' },
    { option: 'O Djanhim Diário' },
    { option: 'Minas Djaneiras' },
    { option: 'Caverna do Djanho' },
    { option: 'Djanho Cremoso' }
  ]

  return (
    <div className="App">
      <Container spinning={spin}>
        <div className="parent-container">
          <Wheel
            mustStartSpinning={spin}
            prizeNumber={Math.floor(Math.random() * (data.length - 0 + 1) + 0)}
            data={data}
            spinDuration={0.62}
            onStopSpinning={() => {
              setSpin(false)
            }}
            outerBorderColor={'transparent'}
            radiusLineColor={'transparent'}
            outerBorderWidth={1}
            radiusLineWidth={1}
            fontSize={12}
            backgroundColors={[
              '#9400D3',
              '#4B0082',
              '#0000FF',
              '#00FF00',
              '#FFFF00',
              '#FF7F00',
              '#FF0000'
            ]}
          />
          <button
            disabled={spin}
            onClick={() => {
              setSpin(true)
              new Audio(SpinSound).play()
              setTimeout(() => {
                new Audio(Pare).play()
              }, 6500)
            }}
          >
            <img src={Llama} alt="Girar" />
          </button>
        </div>
      </Container>
    </div>
  )
}

export default App

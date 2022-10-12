import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

import Llama from './assets/llama.png'
import SpinSound from './assets/sound.mp3'
import Pare from './assets/pare.mp3'
import Uepa from './assets/uepa.mp3'

import { Container } from './styles'

function App() {
  const [spin, setSpin] = useState<boolean>(false)
  const data = [
    { option: 'Greasy Grove' },
    { option: 'Sleepy Sound' },
    { option: 'Chonkers Speedway' },
    { option: 'Rocky Reels' },
    { option: 'Tilted Towers' },
    { option: 'Synapse Station' },
    { option: 'Rave Cave' },
    { option: 'Logjam Junction' },
    { option: 'Fort Jonesy' },
    { option: 'Heralds Sanctum' },
    { option: 'Shimmering Shrine' },
    { option: 'Lustrous Lagoon' },
    { option: 'Reality Tree' },
    { option: 'Cloudy Condos' },
    { option: 'Grim Gables' },
    { option: 'Chrome Crossroads' },
    { option: 'Flutter Barn' }
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
              '#1C1C1C',
              '#CAC4B0',
              '#7D8471',
              '#8D948D',
              '#B32428',
              '#FAD201',
              '#FFFFFF',
              '#633A34',
              '#755C48',
              '#F4A900',
              '#FFFFFF',
              '#7FB5B5',
              '#89AC76',
              '#3E5F8A',
              '#FF2301',
              '#592321',
              '#6F4F28'
            ]}
          />
          <button
            disabled={spin}
            onClick={() => {
              new Audio(Uepa).play()
              setSpin(true)
              setTimeout(() => {
                new Audio(SpinSound).play()
              }, 500)
              setTimeout(() => {
                new Audio(Pare).play()
              }, 6700)
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

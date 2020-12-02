import ColorBox from './components/ColorBox'
import { ColorProvider } from './contexts/color'
import SelectColors from './components/SelectColors'


const App = () => {
  return (
    <div>
      <ColorProvider>
        <SelectColors/>
        <hr/>
        <ColorBox/>
      </ColorProvider>
    </div>
  )
}
export default App;

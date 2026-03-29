import './App.css'
import { Application } from './components/application/application'
import { Counter } from './components/counter/counter'
import { Skills } from './components/skills/skills'

function App() {
  return (
    <>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={['HTML', 'CSS', 'JavaScript']} /> */}
        <Counter />
      </div>
    </>
  )
}

export default App

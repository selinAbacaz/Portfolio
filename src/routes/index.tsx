
import Header from '#/components/Header'
import { createFileRoute } from '@tanstack/react-router'
import "../styles.css"
import { CloudColumns } from '#/components/ui/clouds'
import myPicture from '../images/MeField.jpg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  

  return (
    <div
      style={{ minHeight: '100vh', backgroundColor: 'var(--myDirtyAntique)' }}
    >
      <Header></Header>
      <section className="hero">
        <CloudColumns />
        <div className= "photoPlaceholder">
          <img  src= {myPicture}/>
        </div>
        
        <div className="heroText">
          <h1 className="heading">
            Hello ! <span className="sparkle">✦</span>
          </h1>
          <p className="subheading">
            Welcome to my
            <br />
            Portfolio Website...
          </p>
        </div>
      </section>
    </div>
  )
}





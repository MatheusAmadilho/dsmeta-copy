import NotificationButton from "./componetes/botao de notificacao"
import Header from "./componetes/Header"
import SalesCard from "./componetes/SalesCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main> 
    </>  
  )
}

export default App

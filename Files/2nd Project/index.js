import react from "react"
import ReactDOM from "react-dom"
import './style.css'
import Header from './Header'
import Footer from './Footer'
import MainContent from "./MainContent"


function App(){
    return(
        <div>
           <Header />
           <MainContent />
           <Footer />
        </div>
    )
}

ReactDOM.render (<App />, document.getElementById("root") )
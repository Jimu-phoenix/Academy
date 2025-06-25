import Nav from "../components/Nav"
import FrontSec from "./FrontSec"
import "../index.css"
import DefButton from "../components/DefButton"


function Home(){

    return(
        <>
        <Nav></Nav>
        <main>
            <FrontSec className = "screen_a page_1" h_top = "Master" h_b = "Programming" 
            desc = "Step by step course designed for you" action_btn = "Start Learning"/>

            <FrontSec className = "screen_a" h_top = "Flexible &" h_b = "Accessible" 
            desc = "Learn anytime, anywhere, on any device." action_btn = "Contact Us"/>

            <FrontSec className = "screen_a" h_top = "Unlock" h_b = "Your Potential" 
            desc = "Learn from the best Malawian tailor-made tutorials." action_btn = "Explore Courses"/>

            
        </main>
        </>
    )
}
export default Home
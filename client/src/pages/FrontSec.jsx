import DefButton from "../components/DefButton"

function FrontSec(props){
    return(
        <section className= {props.className}>
                <div className="left">
                    <h2 className="h_text">{props.h_top} <br /> {props.h_b}</h2>
                    <p>{props.desc}</p>
                    <DefButton text = {props.action_btn}/>
                </div>
                <div className="right">
                    <p>image goes here</p>
                </div>
            </section>
    )
}
export default FrontSec
import React from "react";

export default function About(props) {

/*  const [mystyle , setMyStyle] = useState(
    {
        color: "black",
        backgroundColor: "white",
    }
  )  */

  let mystyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor : props.mode ==='dark'?'rgb(36 74 104)':'white',
    
  }
  // const [btntext , setBtnText] = useState("Enable Dark Mode")

/*  const toggleStyle =() =>{
      if(mystyle.color ==='black'){
          setMyStyle({
              color: "white",
              backgroundColor: "black",
              border: '1px solid white'

          })
          setBtnText("Enable Light Mode")
      }
      else{
        setMyStyle({
            color: "black",
            backgroundColor: "white"
        })
        setBtnText("Enable Dark Mode")
      }
  }      */

  return (
    <div className="container" >
      <h2 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h2>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne" style={mystyle} >
                  <strong> Analyze your text </strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show"
               aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={mystyle}>
              This is the first item's accordion body. It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseTwo"
              aria-expanded="false" aria-controls="collapseTwo" style={mystyle} >
             <strong>  Free to use </strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse"
            aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={mystyle}>
              This is the second item's accordion body.It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseThree"
              aria-expanded="false" aria-controls="collapseThree" style={mystyle} >
             <strong> Browser compatible </strong> 
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse"
            aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
            <div className="accordion-body" style={mystyle}>
              This is the third item's accordion body. It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

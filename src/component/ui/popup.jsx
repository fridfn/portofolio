import react from "react";

const Popup = ({ data, handler, index }) => {
  return (
   <div className="container-popup">
    <div 
     className="popup"
     data-aos="fade-down"
     data-aos-duration="300">
     <div className="heading-popup">
      <ion-icon 
       name="link"
       className="icon" 
       style={{"--color": "#ffce62"}}>
      </ion-icon>
      <p className="title">View Certification</p>
      <ion-icon 
       name="close"
       className="icon"
       onClick={() => handler({
        action: "popup",
        data: ""
       })}
       style={{"--color": "#989696"}}>
      </ion-icon>
     </div>
     <div className="content">
      <p className="description" 
       style={{"--color": "#ccdfeb"}}>You'll be redirected to an external page in a new tab</p>
      <p className="description"
       style={{"--color": "#989696"}}><i>https://github.com/fridfn</i></p>
     </div>
     <div className="wrapper">
      <button 
       style={{"--color": "#989696"}}
       onClick={() => handler({
        action: "popup",
        data: ""
       })}>
       <ion-icon className="icon" name="close"></ion-icon>
       Cancel
      </button>
      <button 
       style={{"--color": "#ffce62"}}
       onClick={() => {
         window.open(data, "_blank");
         handler({
           action: "redirect",
           data: data
         });
       }}>
       Proceed
       <ion-icon className="icon" name="caret-forward"></ion-icon>
      </button>
     </div>
    </div>
   </div>
  )
}

export default Popup;
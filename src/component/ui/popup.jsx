import react from "react";

const Popup = ({  }) => {
  return (
   <div className="popup">
    <div className="heading-popup">
     <ion-icon className="icon" name="link"></ion-icon>
     <p className="title">View Certification</p>
     <ion-icon className="icon" name="close"></ion-icon>
    </div>
    <div className="content">
     <p className="description">You'll be redirected to an external page in a new tab</p>
     <p className="link">https://github.com/fridfn</p>
    </div>
    <div className="wrapper">
     <button>
      <ion-icon className="icon" name="close"></ion-icon>
      Cancel
     </button>
     <button>
      Proceed
      <ion-icon className="icon" name="caret-forward"></ion-icon>
     </button>
    </div>
   </div>
  )
}

export default Popup;
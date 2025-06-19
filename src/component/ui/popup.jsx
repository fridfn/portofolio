import react from "react";

const Popup = ({ data, isOpen, onClose }) => {
  if (!isOpen || !data) return null;
  
  const { selectedLink } = data;
  return (
    <div className="container-popup">
      <div className="popup" data-aos="fade-up" data-aos-duration="400">
        <div className="heading-popup">
          <ion-icon 
            name="link"
            className="icon" 
            style={{ "--color": "#ffce62" }}
          />
          <p className="title">View Certification</p>
          <ion-icon 
            name="close"
            className="icon"
            onClick={onClose}
            style={{ "--color": "#989696" }}
          />
        </div>

        <div className="content">
          <p className="description" style={{ "--color": "#ccdfeb" }}>
            You'll be redirected to an external page in a new tab
          </p>
          <p className="description" style={{ "--color": "#989696" }}>
            <i style={{ width: "100%",}}>{selectedLink || "No link available"}</i>
          </p>
          <p className="description" style={{ "--color": "#ccdfeb" }}>
            Please confirm if you'd like to continue.
          </p>
        </div>

        <div className="wrapper">
          <button
            style={{ "--color": "#989696" }}
            onClick={onClose}
          >
            <ion-icon className="icon" name="close"></ion-icon>
            Cancel
          </button>

          <button
            style={{ "--color": "#ffce62" }}
            onClick={() => {
              if (selectedLink) window.open(selectedLink, "_blank");
              else alert("Link not available.");
            }}
          >
            Proceed
            <ion-icon className="icon" name="caret-forward"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
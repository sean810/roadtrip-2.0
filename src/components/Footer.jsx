import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"}}>
        <div>
          <strong>RoadTrip Travel & Courier Services Ltd</strong><br/>
          <small style={{color:"#cfe6ff"}}>Reliable. Professional. On time.</small>
        </div>
        <div style={{textAlign:"right"}}>
          <div>Contact: +254 711 273 884</div>
          <div><a href="mailto:roadtriptravel.courier@gmail.com">roadtriptravel.courier@gmail.com</a></div>
        </div>
      </div>
    </footer>
  );
}

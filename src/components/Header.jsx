
function Header() {

  return (
    <div>
      <div style={{ justifyContent: "space-between",display:"flex" }}>
      <div>
       </div>
        <div>
          <img
            style={{ width: "85px",margin:"5px" }}
            src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-built_black.svg"
          />
        </div>
      </div>

     
        <div style={{ fontSize: "65px", marginTop: "25px" }}>
          <strong>Say Hi!</strong>
        </div>
   
    </div>
  );
}

export default Header;

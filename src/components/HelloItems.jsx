function HelloItems({item}) {
  return (
    <>
      <div
        style={{
          
          width: "270px",
          margin:"10px",
          boxShadow: "2px 3px #888888",
          border: "2px solid",

         
        }}
        className="card border-dark mb-3 carddd"
      ><a href="#" style={{textDecoration:"none", color:"black"}}>
        <div style={{fontSize:"21px"}} className="card-header">{item.name}</div>
        <div className="card-body">
          <div
            style={{
              display: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span>👋 Said Hi!</span>
          </div>
        </div></a>
      </div>
    </>
  );
}

export default HelloItems;

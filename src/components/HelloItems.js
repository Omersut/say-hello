function HelloItems({ item }) {
  const a =
    item.social[0] == "h" && item.social[1] == "t"
      ? item.social
      : "http://" + item.social;
  console.log(a);
  return (
    <>
      <div
        style={{
          width: "300px",
          margin: "10px",
          boxShadow: "2px 3px #888888",
          border: "2px solid",
        }}
        className="card border-dark mb-3 carddd"
      >
        <a
          href={a}
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div style={{ fontSize: "21px" }} className="card-header">
            {item.name}
          </div>
          <div className="card-body">
            <div
              style={{
                display: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              <span>👋 Said Hi!</span>
            </div>
            <hr />
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                padding: "0px 15px",
              }}
            >
              <div>
                <button className="btn btn-outline-warning">edit</button>
              </div>
              <div>
                <button className="btn btn-black">✖ </button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default HelloItems;

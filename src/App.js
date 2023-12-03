import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComp from "./NavbarComp";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Products from "./Products";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // const [btn,setBtn] = useState(true)

  function countHandler(id) {
    for (var i = 0; i < Products.length; i++) {
      if (
        i === id &&
        Products[i].btn === true &&
        Products[i].btnText !== "View Options"
      ) {
        setCount(count + 1);
        Products[i].btn = false;
      } else if (
        i === id &&
        Products[i].btn === false &&
        Products[i].btnText !== "View Options"
      ) {
        Products[i].btn = true;
        setCount(count - 1);
      }
    }
  }

  return (
    <>
      <NavbarComp count={count} />
      <div className="Banner">
        <h1
          style={{
            color: "white",
            fontWeight: "bolder",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "40%",
            fontSize: "60px",
          }}
        >
          Shop In Style
        </h1>
        <h3
          style={{
            color: "grey",
            fontWeight: "bolder",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "40%",
            fontSize: "20px",
          }}
        >
          With this shop hompeage template
        </h3>
      </div>

      <div className="container mt-5">
        <div className="row">
          {Products.map((elem, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={elem.src} />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>{elem.title}</Card.Title>
                  <Card.Text>
                    <span
                      style={{ textDecoration: "line-through", opacity: "0.3" }}
                    >
                      {elem.prevPrice}
                    </span>
                    {elem.price}
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    onClick={() => {
                      countHandler(index);
                    }}
                  >
                    {elem.btn ? elem.btnText : elem.btnAltText}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

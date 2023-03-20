import "./menu.css";

function Menu() {
  return (
    <header>
      {window.location.href === "http://localhost:3000/" ? (
        <h1>
          <a
            href="/myList"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Mi lista
          </a>
        </h1>
      ) : (
        <h1>
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Buscador
          </a>
        </h1>
      )}
      <p style={{ backgroundColor: "green" }}></p>
    </header>
  );
}

export default Menu;

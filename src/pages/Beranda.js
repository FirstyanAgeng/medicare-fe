import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "lightgreen",
          textAlign: "center",
          color: "white",
          paddingTop: "50px",
        }}
      >
        <h1 className="text-center">Medical Record</h1>
        <p className="text-center">selamat datang </p>
        <button
          onClick={() => Navigate("/medical")}
          style={{
            padding: "20px",
            border: "none",
            backgroundColor: "brown",
            color: "white",
          }}
        >
          MASUK KE DASHBOARD
        </button>
      </div>
    </>
  );
};

export default Beranda;

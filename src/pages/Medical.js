import Layout from "../components/Sidebar/Layouts/Layout";
import "./medical.css"
const Medical = () => {
  return (
    <div className="Apps">
      <Layout/>
      <div className="main">
      <div style={{
        borderRadius:"20px",
        backgroundColor: "#FFFFFF",
        marginTop:"50px",
        padding:"20px"
       }}>
        <h3 >Data Diri Pasien</h3>
        <hr style={{
          color:"black",
          width:"97%",
          margin:"0 auto"
        }}/>
          <h5>Nama : </h5>
          <h5>Tanggal Lahir : </h5>
          <h5>Alamat : </h5>
       </div>
      </div>
    </div>
  );
};

export default Medical;

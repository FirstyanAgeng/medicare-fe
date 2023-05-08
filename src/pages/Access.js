import Layout from "../components/Sidebar/Layouts/Layout";
import { Container } from "react-bootstrap";

const Access = () => {
  return (
    <Layout>
      <Container>
        <table className="table w-100">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">No. STR</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Dr.Jhom Tua Silaban</td>
              <td>1122338348438484</td>
              <td>Berikan Akses</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Dr.Josua Nainggolan</td>
              <td>1122338348433456</td>
              <td>Batalkan Akses</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Dr.Josua Nainggolan</td>
              <td>1122338348433456</td>
              <td>Batalkan Akses</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Layout>
  );
};

export default Access;

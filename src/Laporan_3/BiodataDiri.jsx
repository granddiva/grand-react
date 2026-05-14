import React from "react";
import "./custom.css";

import Container from "./Container";
import Nama from "./Nama";
import Umur from "./Umur";
import Alamat from "./Alamat";
import Email from "./Email";
import Telepon from "./Telepon";
import Hobi from "./Hobi";
import FotoProfil from "./FotoProfil";

const BiodataDiri = () => {
  return (
    <Container>
      <h1>Biodata Diri</h1>
      <FotoProfil />
      <Nama />
      <Umur />
      <Alamat />
      <Email />
      <Telepon />
      <Hobi />
    </Container>
  );
};

export default BiodataDiri;
import React from 'react';
import { Container,Col,Row,Button }  from "react-bootstrap";
import {Card,CardContent}  from '@material-ui/core'

function AboutContent() {
  return (
    <Container>
      <br />
      <Row>
        <Col md={{ span: 8, offset: 2 }} xs={12}>
          <Card>
            <CardContent>
              <Row>
                <Col xs={12}>
                  <h3 className='text-center'>Visi dan misi product</h3>
                </Col>
                <Col xs={12}>
                  <br /><br />
                  <p className='text-center'><b>Visi </b></p>
                  <ol style={{listStyleType:'none'}}>
                    <li>Menjadi sebuah platform yang bersifat luas & mendidik, serta dikemas dalam bentuk unik dan efisien</li>
                  </ol>
                </Col>
                <Col xs={12}>
                  <p className='text-center'><b>Misi :</b></p>
                  <ol>
                    <li>Menjadi pusat platform tutorial dimana semua orang dapat menemukan tutorial yang mereka cari</li>
                    <li>Menjadi platform yang mendidik dan terpercaya</li>
                    <li>Menjadi media penyebar ilmu untuk mengeksplorasi metode tutorial terbaru</li>
                    <li>Membantu masyarakat untuk mendapatkan informasi bermanfaat dari dunia maya</li>
                    <li>Senantiasa menyediakan layanan & fitur terbaik</li>
                    <li>Menjadi salah satu platform yang selalu update dengan teknologi terbaru didunia teknologi</li>
                    <li>Menjadi platform yang akan memblokir konten negatif secara otomatis, ketika ada yang memasukan ke sistem.</li>
                    <li>Menjadi platform tutorial yang bisa membuat user mengasah kreativitas dirinya, melalui fitur editing vidio</li>
                  </ol> 
                </Col>
              </Row>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutContent;

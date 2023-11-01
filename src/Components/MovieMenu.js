import CardContent from './CardContent'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const MovieMenu = () => {
  return (
    <section id='Movie' className='bg-light'>
      <Container>
        <div className='text-center'>
          <h3 className='py-5'>IMDb Top Rated Movies</h3>
        </div>
        <Row>
          <Col className='d-flex flex-wrap  justify-content-around'>
            <CardContent />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MovieMenu
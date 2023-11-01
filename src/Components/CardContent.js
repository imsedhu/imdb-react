import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import img1 from '../images/interstellar.jpg';
import img2 from '../images/dunkirk.jpg';
import img3 from '../images/fastandfurious.jpg';
import img4 from '../images/madmax.jpg';
import img5 from '../images/jhonwick.jpg';
import img6 from '../images/endgame.jpg';






const CardContent = () => {
  const [items, setItems] = useState(
    [
      {id:1,
        title:"Interstellar",
        content:"Drama/Sci-fi",
        img:img1,
      },
      {id:2,
        title:"Dunkirk",
        content:"Drama/War",
        img:img2,
      },
      {id:1,
        title:"Fast & Furious",
        content:"Drama/Action",
        img:img3
      },
      {id:1,
        title:"Mad Max: Fury ROad",
        content:"Action/Adventure",
        img:img4
      },
      {id:1,
        title:"Jhonwick",
        content:"Action/Thriller",
        img:img5
      },
      {id:1,
        title:"Avengers: Endgame",
        content:"Action/Sci-fi",
        img:img6
      },
      /* {id:1,
        title:"Oppenheimer",
        content:"Drama/Thriller",
        img:"../images/oppenheimer.jpg"
      },
      {id:1,
        title:"Tenet",
        content:"Action/Sci-fi",
        img:"../images/tenet.jpg"
      } */
    ]);


  return (
    <>
      {items.map((item) => (
      <Card style={{ width: '18rem' }} className='m-3'>
          <Card.Img variant="top" src={item.img} />
          <Card.Body className='card-body'>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.content}
            </Card.Text>
            <Button variant="primary" className='btn-warning'>Watch Trailer</Button>
          </Card.Body>
      </Card>
      ))} 
    </>
  )
}

export default CardContent
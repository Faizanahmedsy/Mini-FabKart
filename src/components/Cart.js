import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch()

  const productCart = useSelector(state => state.cart)
  const removeFromCart = (id) => {
    dispatch(remove(id))
  }


return (
  <>
    <h1 className="text-center m-5">Your Items 🛒</h1>

    <div className="row">
      {productCart.map(product => (
        <div className="col-md-6 bg-light my-2" key={product.id}>
          <Card className="h-100 d-flex flex-column justify-content-between">
            <div className="text-center">
              <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Price: {product.price}
                </Card.Text>
              </Card.Body>
            </div>
            <Card.Footer className="mt-auto text-center">
              <Button variant="success" >Take my money</Button>
              <Button variant="danger" onClick={() => removeFromCart(product.id)} >Remove Item</Button>
            </Card.Footer>
          </Card>
        </div>
      ))}

    </div>
  </>
)
}

export default Cart
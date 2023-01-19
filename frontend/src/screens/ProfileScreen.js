
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userAction.js'
import { listUserOrders } from '../actions/orderActions'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDetails = useSelector(state => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListUser = useSelector(state => state.orderListUser)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListUser

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      console.log(user)
      if (!user || !user.name){
        dispatch(getUserDetails('profile'))
        dispatch(listUserOrders())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch,  userInfo, user, orders])

  const submitHandler = (e) => {
    e.preventDefault()
    // Dispatch register
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      //dispatch update profile
      dispatch(updateUserProfile({
        id: user._id,
        name, email, password
      }))
    }


  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {
          message && <Message variant='danger'>{message}</Message>
        }
        {
          error && <Message variant='danger'>{error}</Message>
        }
        {
          success && <Message variant='success'>Changes Updated</Message>
        }
        {
          loading && <Loader />
        }
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            >
            </Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>

      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders ? <Loader /> 
          : errorOrders ? <Message variant='danger'>{errorOrders}</Message> : (
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                      <i className='fa fa-times' style={{color: 'red'}}></i>
                    )}</td>
                    <td>{order.isDelivered ? order.paidAt.substring(0, 10) : (
                      <i className='fa fa-times' style={{ color: 'red' }}></i>
                    )}</td>
                    <td>
                      <Link to={`/order/${order._id}`}>
                        <Button className='btn-sm' variant='light'>Details</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) }
      </Col>
    </Row>
  )
}

export default ProfileScreen

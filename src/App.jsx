import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import React from 'react';
import uuid from 'react-uuid';

function App() {
  const [products, setProduct] = React.useState([
    {
        id: uuid(),
        name: 'Product 1',
        price : '100'
    },
    {
        id: uuid(),
        name: 'Product 2',
        price : '200'
    },
    {
        id: uuid(),
        name: 'Product 3',
        price : '300'
    },
])

const [name, setName] = React.useState('')
const [price, setPrice] = React.useState('')
const [edit, setEdit] = React.useState('')
// const [editProduct, setEditProduct] = React.useState('')
const handleName = (e) => {
  setName(e.target.value)
}
const handlePrice = (e) => {
  setPrice(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
  if (name!=='' && price>0) {
    if (edit) {
      const allProduct = products.map(product => {
        const id = product.id
        console.log("name1", product.name)
        console.log("name2", name)
        return product.id === edit ? {id, name, price} : product
      })

      setProduct(allProduct)
      setEdit(false)
      setName('')
      setPrice('')

    }
    else{
      const singleProduct = {id:uuid(),name,price}
      setProduct(prev => [...prev, singleProduct])
      setName('')
      setPrice('')
    }
  }
  else{
    console.log("error")
  }

  

}
const handleAllRemove = e => {
  setProduct('')
  if (edit) {
    setEdit('')
    setName('')
    setPrice('')
  }

}
const handleDelete = id => {
  const filteredProductArr = products.filter(product => product.id !== id)
  setProduct(filteredProductArr)
  if (id === edit) {
    setEdit('')
    setName('')
    setPrice('')
  }
}
const handleEdit = id => {
  const foundedProduct = products.find(product => product.id === id)
  console.log("productsss", products)
  setEdit(foundedProduct.id)
  console.log("founded", edit)
  setName(foundedProduct.name)
  setPrice(foundedProduct.price)
}
const handleCancel = () => {
  setEdit('')
  setName('')
  setPrice('')
}
  return (
    <>
      <ExpenseForm handleName={handleName} handlePrice={handlePrice} handleSubmit={handleSubmit} name={name} price={price} products={products} edit={edit} handleCancel={handleCancel}/>
      <ExpenseList products={products} handleAllRemove={handleAllRemove} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  );
}

export default App;

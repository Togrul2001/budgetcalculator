import React from "react";
import {MdEdit, MdDelete, MdCheck, MdEditOff} from 'react-icons/md'

function ExpenseForm({products,name,price,handleName,handlePrice,handleSubmit, edit, handleCancel}){
    let priceSum = 0
    if (products) products.map(product => priceSum+= parseFloat(product.price))
    return (
        <div className="form_div">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleName} className="expense_name" placeholder="Name"/>
                <input type="number" value={price} onChange={handlePrice} className="expense_price" placeholder="Price"/>
                <button className="form_check" type="submit">{edit ? <MdEditOff/> : <MdCheck/>}</button>
                {edit ? <span style={{cursor:'pointer'}} onClick={handleCancel}>Cancel</span> : ''}
                
                
            </form>
            <div className="products_info">
                <span>Count of products: {products.length}</span>
                <span>Sum of prices: {priceSum}</span>
            </div>
        </div>
        
    )
}

export default ExpenseForm
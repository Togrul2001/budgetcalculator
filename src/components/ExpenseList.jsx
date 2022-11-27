import React from "react";
import ExpenseItem from "./ExpenseItem";
import {MdDelete} from 'react-icons/md'

function ExpenseList({products, handleAllRemove, handleDelete, handleEdit}){

    // const [plus, setPlus] = React.useState(true)
    // const togglePlus = () => {
    //     return setPlus(!plus)
    // }
    return (
        <>
            <div className="expense_list">
                {
                    products.length ? products.map(product => <ExpenseItem key={product.id} product={product} handleDelete={handleDelete} handleEdit={handleEdit}/>) : ''
                }
                <br />
                <br />
                {products.length ? <button className="all_product_remove" onClick={handleAllRemove}>All Remove <MdDelete/></button> : ''}
                
            </div>
        </>
    )
}

export default ExpenseList
import React from "react";
import {MdAddCircle,MdModeEdit,MdDeleteForever,MdCancel, MdEdit} from 'react-icons/md'

function ExpenseItem({product,handleDelete,handleEdit}){
    return <div className="expense_items">
                <span className="expense_item_name">{product.name}</span>
                {/* <div className="actions1">
                    
                    {plus ? <MdAddCircle className="plus" onClick={() => togglePlus()}/> : <> <MdCancel onClick={() => togglePlus()}/> <MdModeEdit className="edit"/> <MdDeleteForever className="delete"/> </>}
                    
                </div> */}
                <span className="expense_item_price">{product.price}$</span>
                <div className="actions">
                    <MdModeEdit onClick={() => handleEdit(product.id)} style={{cursor:'pointer', color:'blue'}}/>
                    <MdDeleteForever onClick={() => handleDelete(product.id)} style={{cursor:'pointer',color:'red'}}/>
                </div>
            </div>
}

export default ExpenseItem
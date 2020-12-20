import React from 'react'
import {Modal} from 'antd'

function ModalEditItem(props) {
    const {visible, handleOk, handleCancel, onChange, blog} = props
    return(
        <Modal
            title="Basic Modal"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
         >
           <form>
               <fieldset>
                   <label>Title</label>
                   <input name="title" onChange={onChange} value={blog.title}/>
               </fieldset>
               <fieldset>
                   <label>Description</label>
                   <input name="desc" onChange={onChange} value={blog.desc}/>
               </fieldset>
           </form>
        </Modal>
    )
}

export default ModalEditItem
import React from 'react'
import {Card} from 'antd'

function Blog(props) {
    const {title, desc, handleOpenEdit, index} = props;
    return(
        <Card title={title} extra={<div><button onClick={() => handleOpenEdit({title: title, desc: desc}, index)}>Edit</button></div>} style={{ width: 300 }}>
            <p>{desc}</p>
        </Card>
    )
}

export default Blog
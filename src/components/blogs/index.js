import { Button } from 'antd';
import React, {useState} from 'react'
import Blog from '../blog'
import ModalItem from '../modal'
import ModalEditItem from '../modal/edit';

function Blogs(props) {
    const [visible, setVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [blog, setBlog] = useState({
        title: ``,
        desc: ``
    })
    const [editId, setEditId] = useState(null)
    const [blogs, setBlogs] = useState([
        {
            title: 'title1',
            desc: 'title1title1'
        },
        {
            title: 'title2',
            desc: 'title1title2'
        },
        {
            title: 'title3',
            desc: 'title1title3'
        }
    ]
)

    const handleOpenModal = () => {
        resetBlog()
        setVisible(true)
    }

    const handleCloseModal = () => {
        setVisible(false)
    }

    const onChange = e => {
        console.log(e.target.value)
        setBlog(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handelAdd = () => {
        setBlogs([...blogs, blog])
        handleCloseModal()
    }

    const resetBlog = () => {
        setBlog({title: ``, desc: ``})
    }

    const handleOpenEditModal = (blog, i) => {
        console.log(i)
        setEditVisible(true)
        setBlog(blog)
        setEditId(i)
    }

    const handleEdit = () => {
       blogs.splice(editId, 1, blog);
       setBlogs([...blogs]);
      handleEditCloseModal()
    }

    const handleEditCloseModal = () => {
        setEditVisible(false)
    }

    const blogItems = blogs.map((item, i) => <Blog handleOpenEdit={handleOpenEditModal} key={i} index={i} title={item.title} desc={item.desc}/>)

    return(
        <div>
            {blogItems}
            <Button type="primary" onClick={handleOpenModal}>Add blog</Button>
            <ModalItem 
                blog={blog}
                onChange={onChange}
                visible={visible} 
                handleOk={handelAdd} 
              
                handleCancel={handleCloseModal}
            />
             <ModalItem 
                blog={blog}
                onChange={onChange}
                visible={editVisible} 
                handleOk={handleEdit} 
                handleCancel={handleEditCloseModal}
            />
        </div>
    )
}

export default Blogs
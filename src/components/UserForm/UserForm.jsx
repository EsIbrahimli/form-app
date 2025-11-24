import styles from './UserForm.module.css'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';


import React from 'react'

const UserForm = () => {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        username: '',
        fullName: ''
    });


    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [name]: value
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(form);
        setUsers([...users, form]);
        setForm({
            username: '',
            fullName: ''
        });
    }

    const deleteBtn = (index) => {
        const filteredUsers = users.filter((user, i) => index !== i);
        setUsers(filteredUsers);
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1 className={styles.title}>Login Form</h1>
                <input name='username' value={form.username} onChange={handleChange} className={styles.input} type="text" placeholder='Username' />
                <input name='fullName' value={form.fullName} onChange={handleChange} className={styles.input} type="text" placeholder='Full Name' />
                <button onClick={submitForm} className={styles.btn} type='submit' >Add User</button>
            </form>
            <div className={styles.tableContainer}>
                <h1 className={styles.title}>User Data</h1>
                <Table className={styles.table} bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Full Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.fullName}</td>
                                    <td><button className={styles.deleteBtn} onClick={()=>{deleteBtn(index)}}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default UserForm
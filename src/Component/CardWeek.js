import React from 'react';
import UserList from './UserList'

export default function CardWeek({ title, data }) {
    return (
        <div className="card">
            <div className="title">{title}</div>
            <UserList data={data} />
        </div>
    )
}
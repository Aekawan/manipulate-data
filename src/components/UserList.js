import React from 'react';

export default function UserList({ data }) {
    const listItems = data.map((u, i) =>
        <div className="card-item" key={i}>
            <img className="img-card" src={u.photo} alt={u.name}></img>
            <div className="card-body">
                <p>{u.name}</p>
            </div>
        </div>
    );
    return (
        listItems
    );
}
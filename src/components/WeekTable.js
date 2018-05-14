import React from 'react';
import WeekColumn from './WeekColumn'

export default function WeekTable({ data }) {
    
    const listItems = data.map((user, i) => <WeekColumn key={i} title={createTitle(user.group_name)} data={user.data} />)

    function createTitle(name) {
        return name.substr(0, 3).toUpperCase()
    }

    return (
        <div className="container">
            {
                listItems
            }
        </div>
    )
}
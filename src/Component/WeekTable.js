import React, { Component } from 'react';
import WeekColumn from './WeekColumn'

export default class WeekTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monData: [],
            tueData: [],
            wedData: [],
            thuData: [],
            friData: [],
            satData: [],
            sunData: [],
        }
    }

    componentDidMount() {
        this.findDay(this.props.data)
    }

    parseDay = (timestamp) => {
        const day = new Date(timestamp * 1000).getDay()
        return day
    }

    findDay = (users = []) => {
        let sunData = [], monData = [], tueData = [], wedData = [], thuData = [], friData = [], satData = []
        for (let user of users) {
            let rawDate = user.birthday.raw
            if (this.parseDay(rawDate) === 0) sunData.push(user)
            if (this.parseDay(rawDate) === 1) monData.push(user)
            if (this.parseDay(rawDate) === 2) tueData.push(user)
            if (this.parseDay(rawDate) === 3) wedData.push(user)
            if (this.parseDay(rawDate) === 4) thuData.push(user)
            if (this.parseDay(rawDate) === 5) friData.push(user)
            if (this.parseDay(rawDate) === 6) satData.push(user)
        }
        this.setState({ sunData, monData, tueData, wedData, thuData, friData, satData })
    }

    render() {
        let { sunData, monData, tueData, wedData, thuData, friData, satData } = this.state
        return (
            <div className="container">
                <WeekColumn title={"SUN"} data={sunData} />
                <WeekColumn title={"MON"} data={monData} />
                <WeekColumn title={"TUE"} data={tueData} />
                <WeekColumn title={"WED"} data={wedData} />
                <WeekColumn title={"THU"} data={thuData} />
                <WeekColumn title={"FRI"} data={friData} />
                <WeekColumn title={"SAT"} data={satData} />
            </div>
        )
    }
}
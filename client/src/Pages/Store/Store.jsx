import React from 'react'
import avatar1 from "../../Images/avatar1.png"
import Button from '@mui/material/Button';

import "./Store.css"

function Store() {
  return (
    <div className="container">
        <div className="part1">
            <div className="item1">
                <img src={avatar1} alt="avatar" />
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <img src={avatar1} alt="avatar" />
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <img src={avatar1} alt="avatar" />
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <img src={avatar1} alt="avatar" />
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <img src={avatar1} alt="avatar" />
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <img src={avatar1} alt="avatar" />
                <Button variant="outlined">Buy</Button>
            </div>
        </div>

        <div className="part2">
            <div className="item1">
                <span className="badge">Badge</span>
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <span className="badge">Badge</span>
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <span className="badge">Badge</span>
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <span className="badge">Badge</span>
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <span className="badge">Badge</span>
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <span className="badge">Badge</span>
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <span className="badge">Badge</span>
                <Button variant="outlined">Buy</Button>
            </div>
            <div className="item1">
                <span className="badge">Badge</span>
                <Button variant="outlined">Buy</Button>
            </div>
        </div>
    </div>
  )
}

export default Store
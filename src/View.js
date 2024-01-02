import React from 'react'

const View = ({ count, handleInc, handleDeg }) => {
    return (
        <div className='bg-warning'>
            <div className='d-flex align-items-center justify-content-center flex-column vh-100 '>
                <div className='display-2 mb-4'>Counter</div>
                <div className="btn-group btn-group-lg shadow-lg">
                    <a href="#" onClick={() => handleDeg()} className="btn btn-dark" aria-current="page">-</a>
                    <div className="btn btn-outline-dark">{count}</div>
                    <a href="#" onClick={() => handleInc()} className="btn btn-dark">+</a>
                </div>
            </div>
        </div>
    )
}

export default View
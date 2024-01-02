import React, { useState } from 'react'
import View from './View'

const Controller = () => {
    const [count, setCount] = useState(0)
    const handleInc = () => {
        setCount(count + 1)
    }

    const handleDeg = () => {
        setCount(count - 1)
    }
    return (
        <View count={count} handleInc={handleInc} handleDeg={handleDeg} />
    )
}

export default Controller
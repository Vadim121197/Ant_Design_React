import React from 'react'
import { useSelector } from 'react-redux'
import { getName } from '../../redux/selectors/formSelectors'
import FirstForm from '../Forms/FirstForm/FirstForm'

import './App.css'

const App = () => {
    const userName = useSelector(getName)

    return (
        <div className="app">
            <p>Hello, {userName} </p>
            <FirstForm />
        </div>
    )
}

export default App

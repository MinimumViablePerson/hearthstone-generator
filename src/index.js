import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import cards from './data/hs-card-data'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

console.log(cards[1])

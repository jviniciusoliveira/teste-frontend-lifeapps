import './app.css'

import { App } from './app'
import { createRoot } from 'react-dom/client'

const htmlElement = document.getElementById('root')
const root = createRoot(htmlElement)

root.render(<App />)

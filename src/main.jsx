import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import Container from './component/Container'
import './tailwind/main.css'

createRoot(document.getElementById('root')).render(
  <Fragment>
    <Container />
  </Fragment>
)

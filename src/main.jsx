import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Container from './component/Container'

createRoot(document.getElementById('root')).render(
  <Fragment>
    <Container />
  </Fragment>,
)

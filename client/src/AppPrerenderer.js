// src/AppPrerenderer.js
import AppContainer from './App'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
exports.prerender = function () {
  return ReactDOMServer.renderToString(<App />)
}

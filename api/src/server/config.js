const express = require('express')
const morgan = require('morgan')

module.exports = app => {
  /**
   * SETTINGS
   */
  app.set('port', process.env.PORT || 3000)

  /**
   * MIDDLERWARES
   */
  // Logger
  app.use(morgan('dev'))
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())

  /**
   * ROUTES
   */
  app.use('/api/posts', require('../routes/posts'))

  return app
}

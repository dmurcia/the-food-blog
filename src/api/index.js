/**
 * @module API generator
 */

import { merge } from '../utils'

/**
 * Endpoints
 * @type {object}
 */
export const paths = {
  spoonacular: {
    endpoint: 'https://api.spoonacular.com',
    apiKey: '5ff72f7977d34a369424878f17f6fd6a'
  }
}

/**
 * Default options to use in fetch opts
 * @type {object}
 */
const defaults = {
  headers: {},
  method: 'GET'
}

export const apiEngine = async (method, input, ...more) => {
  const data = await api(
    `${input}${/\?/.test(input) ? '&' : ''}`,
    merge({}, defaults, { base: paths.spoonacular.endpoint }),
    ...more
  )
  console.log('apiengine data :>> ', data)
  return data
}

const api = async (input, ...more) => {
  const { base, ...init } = merge({}, ...more)

  if (base) input = normalizePath(base, input)

  init.body.apiKey = paths.spoonacular.apiKey

  if (init?.body instanceof FormData && !init.headers?.['Content-Type']) {
    init.headers['Content-Type'] = 'multipart/form-data'
  }

  if (
    !['GET', 'OPTIONS'].includes(init?.method) &&
    !init.headers?.['Content-Type']
  ) {
    init.headers['Content-Type'] = 'application/json'
  }

  if (
    init?.method === 'GET' &&
    init?.body !== undefined &&
    typeof init.body !== 'string'
  ) {
    const body = new URLSearchParams(init.body)

    delete init.body
    input = `${input}?${body.toString()}`
  }

  if (init?.body !== undefined && typeof init.body !== 'string') {
    if (init.headers['Content-Type'] === 'application/json') {
      init.body = JSON.stringify(init.body)
    }

    if (init.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      const body = new URLSearchParams(init.body)

      init.body = body.toString()
    }
  }

  try {
    return await fetch(input, init)
      .then((response) => response.json())
      .then((data) => data)
  } catch (err) {
    console.error(err)
  }
}

function normalizePath (base, input) {
  if (typeof input === 'string' && !/^(?:\w+:\/\/|\/)/.test(input)) { return `${base}/${input}` }
  if (input instanceof Function) return input(base)
  return input
}

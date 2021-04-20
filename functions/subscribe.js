require('dotenv').config()
const fetch = require('node-fetch')
const { BUTTONDOWN_API_KEY } = process.env

exports.handler = async (event, _, callback) => {
  const email = JSON.parse(event.body).email
  console.log(email)

  if (!email) {
    return {
      statusCode: 400,
      message: "Email is required."
    }
  }

  try {
    const API_KEY = BUTTONDOWN_API_KEY
    const response = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      {
        body: JSON.stringify({email}),
        headers: {
          Authorization: `Token ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    if (response.status >= 400) {
      return {
        statusCode: 303
      }
    }
    return {
      statusCode: 200
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 303
    }
  }
}

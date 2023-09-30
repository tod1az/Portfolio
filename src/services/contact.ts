import axios from 'axios'

type emailParameters = {
  message: string
  sender: string
  target: string
}

export const sendEmail = async ({ message, sender, target }: emailParameters): Promise<any> => {
  const sended = (await axios.post('https://portfolio-sv-tomadiaz.koyeb.app/email', { message, sender, target })).data
  return sended
}

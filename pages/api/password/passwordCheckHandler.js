import { passwordCheckHandler } from 'next-password-protect'

export default passwordCheckHandler('27102016', {
  // Options go here (optional)
  cookieName: 'next-password-protect',
})

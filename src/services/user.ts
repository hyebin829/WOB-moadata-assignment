// export {}

import adminData from '../assets/jsons/user/admin.json'

export const checkValidation = (id: string, password: string) => {
  const idArray = adminData.map((item) => item.user_id)
  const passwordArray = adminData.map((item) => item.password)

  let isValid = false
  idArray.map((item, index) => {
    if (item === id && password === passwordArray[index]) {
      isValid = true
    }
  })
  return isValid
}

export const getUrl = (idInstance, apiToken, method, receiptId) => {
  let url
  if (receiptId) {
    url = `https://api.green-api.com/waInstance${idInstance}/${method}/${apiToken}/${receiptId}`
  } else {
    url = `https://api.green-api.com/waInstance${idInstance}/${method}/${apiToken}`
  }

  return { url }
}

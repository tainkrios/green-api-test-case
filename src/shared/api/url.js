export const getUrl = (idInstance, apiToken) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiToken}`

  return { url }
}

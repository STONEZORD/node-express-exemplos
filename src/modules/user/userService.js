let users = [] // variavel temporaria enqt nao ultiza banco de dados

const getUserByEmail = (searchEmail) =>   // 
users.find((obj) => obj.email === searchEmail) // users.find((obj) se achar retorna esse dado se n retorna undefined



export const signup = (data) => {
  if (getUserByEmail(data.email)) {
    console.log("EMAIL CADASTRADO")
  } else {
    users.push(data) // no data se n tiver o email cadastrado ele cadastra
  }
  return true
}
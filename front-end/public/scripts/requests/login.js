export default function postLogin( commomHeader, requestBody){

    const url = "http://localhost:3333/usuarios/auth"

    const headers = { "Content-Type": "application/json"}
    
    var body = JSON.stringify(requestBody);
    
    var init = {
      "method": "POST",
      "headers": commomHeader,
      "body": body,
      "redirect": 'follow'
    }

    return { "url": url, "init": init }
}
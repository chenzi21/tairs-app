export default function RandomId(length = 10){
    let id = ""
    let alpahbet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    for (let i = 0; i < length; i++){
        id += alpahbet[Math.round(Math.random()*alpahbet.length)]
    }
    return id
}
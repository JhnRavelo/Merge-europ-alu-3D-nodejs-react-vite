

const handleClassNewMessage = (setClassNewMessage, commercials, notif) => {
    const classNewMessages = new Array()
    if(notif?.length > 0){
        commercials.map((item)=>{
            const find = notif.find((n)=>n.send.ID_user == item.ID_user)
            if(find){
                classNewMessages.push("newMessage")
            }else {
                classNewMessages.push("")
            }
        })
      }
}

export default handleClassNewMessage
const messages = [];
let id = 0;

module.exports = {
    createMessage: (req,res) => {
        const { text, time, name } = req.body;
        const newMessage = {
            id,
            text,
            time,
            name
        }
        id++;
        messages.push(newMessage);
        res.json(messages)
    },
    readMessage: (req,res) => {
        res.json(messages)
    },
    updateMessage: (req,res) => {
        const messagesId = req.params.id;
        const indexOfMessage = messages.findIndex(message => message.id === parseInt(messagesId));
        if (indexOfMessage === -1){
            res.status(404).send(`${messagesId} doesnt exist`)
        } else {
            messages[indexOfMessage] = {...req.body, id: messages[indexOfMessage].id }
            res.json(messages);
        }
    },
    deleteMessage: (req,res) => {
        const messagesId = req.params.id;
        const indexOfMessage = messages.findIndex(message => message.id === parseInt(messagesId));
        if (indexOfMessage === -1){
            res.status(404).send(`${messagesId} doesnt exist`)
        } else {
            messages.splice(indexOfMessage, 1);
            res.json(messages)
        }
    }

}
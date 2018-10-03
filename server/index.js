const express = require('express');
const bodyParser = require('body-parser');
const messagesController = require('./controllers/messages_controller')

const app = express();
app.use(bodyParser.json());
app.post('/api/messages', messagesController.createMessage)
app.put('/api/messages/:id', messagesController.updateMessage)
app.get('/api/messages', messagesController.readMessage)
app.delete('/api/messages/:id', messagesController.deleteMessage)
app.use( express.static( __dirname + '/../public/build' ) );



const port = 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

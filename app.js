var MyServer = require('./myServer/myServer')
var sv = new MyServer(3000);
sv.initApp();
app.getApp().get('/api/webhook', (req, res) => {
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === '112233445566xxccvvbb') {
        console.log('Validating webhook')
        res.status(200).send(req.query['hub.challenge'])
    } else {
        console.error('Failed validation. Make sure the validation tokens match.')
        res.sendStatus(403)
    }
})
app.getApp().post('/api/webhook', (req, res) => {
    var data = req.body
    console.log(data);
    io.emit('chat', data)
});
sv.getApp().get('/', (req, res) => {
    res.json({ message: 'api working' });
});
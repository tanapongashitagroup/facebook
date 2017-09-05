var MyServer = require('./myServer/myServer')
var sv = new MyServer(3000);
sv.initApp();
sv.getApp().get('/', (req, res) => {
    res.json({ message: 'api working' });
});
var env = process.env;

var restify     = require('restify');
var app         = restify.createServer()

app.use(restify.queryParser());
app.use(restify.CORS());
app.use(restify.fullResponse());

// Routes
app.get('/status', function (req, res, next)
{
  res.send("{status: 'ok'}");
});

app.get('/versions', function (req, res, next)
{
  res.send(JSON.stringify(process.version));
});

app.get('/', function (req, res, next)
{
  res.send("{hello: 'world'}");
});


app.listen(env.OPENSHIFT_DIY_PORT, env.OPENSHIFT_DIY_IP, function () {
  console.log( "Listening on " + env.OPENSHIFT_DIY_IP + ", port " + env.OPENSHIFT_DIY_PORT )
});

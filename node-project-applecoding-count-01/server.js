const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))
app.set('view engine', 'ejs')

const {
  MongoClient
} = require('mongodb');
const uri = 'mongodb+srv://enekelx1:qwer1234@yoggaebi-project.hhhyv.mongodb.net/yoggaebi-project?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

client.connect(err => {
  if (err) {
    return console.log(err)
  }

  app.listen(8080, function () {
    console.log('listening on 8080')
  })
});

const db = client.db('todoapp')

app.get('/pet', function (req, res) {
  res.send('펫용품 쇼핑할 수 있는 페이지입니다.')
})

app.get('/beauty', function (req, res) {
  res.send('뷰티 용품을 쇼핑할 수 있는 페이지입니다.')
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/write', function (req, res) {
  res.sendFile(__dirname + '/write.html')
})

app.post('/add', function (req, res) {
  res.send('전송완료')

  db.collection('post')
    .insertOne({제목: req.body.title, 날짜: req.body.date}, function (err, result) {
      console.log('저장 완료')
    })

  console.log(req.body)
})

app.get('/list', function(req,res) {
  db.collection('post').find().toArray(function(err, result) {
    if(err) {
      return console.log(err)
    }

    console.log(result)
    res.render('list.ejs', {posts: result})
  })
})
let http=require('http');
let fs=require('fs');
let url=require('url');
function readBook(cb) {
  fs.readFile('./books.json','utf8',function (err,data) {
    if(err||data.length===0)data='[]';
    cb(JSON.parse(data))
  })
}
function writeBook(data,cb) {
  fs.writeFile('./books.json',JSON.stringify(data),cb)
}
let server=http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  if(pathname==='/book'){
    var id=query.id;
    switch(req.method){
      case 'GET':
      if(id){
          readBook(function (books) {
            var book=books.find(item=>item.id==id)
            res.end(JSON.stringify(book))
          })
        }else{
          readBook(function (books) {
            res.end(JSON.stringify(books))
          })
        }

        break;
      case 'PUT':
        if(id){
          var str='';
          req.on('data',function (chunk) {
            str+=chunk;
          })
          req.on('end',function () {
            var book=JSON.parse(str);
            readBook(function (books) {
              books=books.map(function (item) {
                if(item.id==id){
                  return book;
                }
                return item;
              })
              writeBook(books,function () {
                res.end(JSON.stringify(book))
              })
            })
          })
        }
        break;
      case 'POST':
        var str='';
        req.on('data',function (chunk) {
          str+=chunk;
        });
        req.on('end',function () {
          var book=JSON.parse(str);
          readBook(function (books) {
            book.id=books.length==0?1:books[books.length-1].id+1;
            books.push(book);
            writeBook(books,function () {
              res.end(JSON.stringify(book))
            })
          })
        })
        break;
      case 'DELETE':
        if(id){
          readBook(function (books) {
            books=books.filter(item=>item.id!=id)
            writeBook(books,function () {
              res.end(JSON.stringify({}))
            })
          })
        }
        break;
    }
  }else{
    res.end('404')
  }
});
server.listen(9090)

/**
 * Created by Desire on 2017/5/11.
 */
//主要是提供接口的
//  /book
let http=require('http');
let url=require('url');
let fs=require('fs');
let mime=require('mime');
function readBooks(cb) {
  fs.readFile('./books.json','utf8',function (err,data) {
    if(err|| data.length===0)data='[]';
    cb(JSON.parse(data))
  })
}
/*console.log(JSON.stringify([
 {id:1,bookName:'小说',bookPrice:30.258,bookCover:'//img14.360buyimg.com/jdcms/s150x150_jfs/t4480/40/413878394/877655/f51642dc/58cf8f74N4901b323.jpg'},
 {id:2,bookName:'小说',bookPrice:30.258,bookCover:'//img14.360buyimg.com/jdcms/s150x150_jfs/t4480/40/413878394/877655/f51642dc/58cf8f74N4901b323.jpg'},
 {id:3,bookName:'小说',bookPrice:30.258,bookCover:'//img14.360buyimg.com/jdcms/s150x150_jfs/t4480/40/413878394/877655/f51642dc/58cf8f74N4901b323.jpg'},
 ]))*/
function writeBooks(data,cb) {
  fs.writeFile('./books.json',JSON.stringify(data),cb)
}
/*writeBooks([{传递要写的内容},{传递要写的内容}],function () {

})*/
http.createServer(function (req,res) {
  let {pathname,query}=url.parse(req.url,true);
  if(pathname==='/book'){
    let id=query.id;
    switch (req.method){
      case 'GET':
        if(id){
          readBooks(function (data) {
           var book= data.find(item=>item.id==id);
           res.end(JSON.stringify(book))
          })
        }else{
          readBooks(function (data) {
            //data 代表所有图书
            res.end(JSON.stringify(data))
          })
        }

        break;
      case 'PUT':
        if(id){
          var str='';
          req.on('data',function (chunk) {
            str+=chunk;
          });
          req.on('end',function () {
            var book=JSON.parse(str);//book代表前台要我们改成和这个结果
            readBooks(function (books) {
              books=books.map(function (item) {
                if (item.id==id){
                  return book;
                }
                return item
              });
                writeBooks(books,function () {
                  res.end(JSON.stringify(book))//修改成功后，返回修改的那一项
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
          readBooks(function (books) {
            book.id=books.length==0?1:books[books.length-1].id+1;
            books.push(book);
            writeBooks(books,function () {
              //一般 添加成功后 返回添加的那一项
              res.end(JSON.stringify(book))
            })
          })
        })
        break;
      case 'DELETE':
        if(id){
          readBooks(function (books) {
            books= books.filter((item=>item.id!=id));
            writeBooks(books,function () {
              res.end(JSON.stringify({}))
            })
          })
        }

        break;

    }
  }else{
    res.statusCode=404;
    res.end();

  }
}).listen(9090);

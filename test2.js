
console.log('node is beginning to read the file')


const http = require('http')
const port = 3000
const makePage = (header,) => {
    return `
      <html>
        <head>
          <title>`+header+` </title>
        </head>
        <body>
          <h1>`+header+`</h1>
          
        </body>
      </html>
    ` 
  }
const server = http.createServer( (request, response) => {
    const url = request.url
    if(url == `/secret`){
    response.end(`
    <html>
    <head>
        <title> SECRET PAGE </title>
        </head>
        <body>
            <h1>Hello!</h1>
            <p>you reached the secret page!!!</p>
            </body>
            </html>
            `)}
           else if(url == `/about`){

            response.end(makePage('About Page'))  
            
           }
           
           else if(url == `/posts/`){
            
                        response.end(makePage('Posts Page'))  
                        
                       }
                       else if(url == `/posts/posts1`){
                        
                                    response.end(makePage('Posts 1'))  
                                    
                                   }
                                   else if(url == `/posts/posts1/posts2`){
                                    
                                                response.end(makePage('Posts 2'))  
                                                
                                               }
                       else if(url == `/home`){
                        
                                    response.end(makePage('Home Page'))  
                                    
                                   }
                  else {
                    response.end(makePage('error 404'))  

                  }
     })
    
    server.listen(port, (err) => {
        if (err) {
          console.log('something bad happened', err)
        }
        else{
          console.log(`server is listening on port ${port}`)
        }
      })
      console.log('node has read the whole file, now it will run')
      
const content = `
<\!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello World Lambda@Edge</title>
  </head>
  <body>
    <h1>Hello World from the Edge!</h1>
  </body>
</html>
`;

// This is the ENTRY POINT for your Lambda function
// This is what runs when you Lambda is triggered
exports.handler = (event, context, callback) => {
    
    // build a response
    const response = {
        status: '200',
        statusDescription: "OK",
        body: content
    };

    // print out some stuff from the event object
    console.log("*** Origin Request Received from the Edge ***");
    let request = event.Records[0].cf.request;
    console.log(`Request Method: ${request.method}`)

    callback(null, response) // you always need to call the callback! 
}

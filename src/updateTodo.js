
const AWS=require('aws-sdk');

const updateTodo = async (event) => {

  const dynamodb= new AWS.DynamoDB.DocumentClient();

  const { completed }=event.body;
  const { id }= event.pathParameters;

  console.log("This is an id",id);


  await dynamodb.update({
      TableName: "TodoTable",
      Key: { id },
      UpdateExpression: 'set completed = :completed',
      // ExpressionAttributeValues: { ':completed': completed },
      ReturnValues:"ALL_NEW"
    }).promise()
  
  return {
    statusCode: 200,
    body: JSON.stringify({
        msg:"Todo Updated"
    }),
  };
};



module.exports={
  handler:updateTodo
}
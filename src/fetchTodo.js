const AWS=require('aws-sdk');

const fetchTodo = async (event) => {

  const dynamodb= new AWS.DynamoDB.DocumentClient();
  const { id }= event.pathParameters
  let todo;
   console.log("id",id);
    try{
        const result=await dynamodb.scan({
             TableName:"TodoTable",
             key: { id }
            }).promise()
        todo=result.Item
        console.log("This is an id===>",result);
    }catch(err){ 
        console.log(err);
    }
    
  return {
    statusCode: 200,     
    body: JSON.stringify(todo),
  };
};



module.exports={
  handler:fetchTodo
}
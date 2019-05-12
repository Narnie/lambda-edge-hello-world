# Hello World Lambda@Edge Example

You will need the AWS CLI and AWS SAM installed to run this demo. 

https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html

## Set Environment variables 

Set env vars in your terminal, fill in with your AWS username and a unique bucket name.

`export AWS_USER_NAME=your-user-name LAMBDA_STORAGE_BUCKET=unique-bucket-name`

If you do not have a bucket for your Lambda code you will need to create one. Create the bucket for the lambda code in the same aws account where your static bucket will go, for example:

`aws s3api create-bucket --bucket ${LAMBDA_STORAGE_BUCKET} --profile ${AWS_USER_NAME} --region us-east-1`

#### Deploy the stack 

run the following command

```./deploy-stack```


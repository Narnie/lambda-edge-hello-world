# hello world Lambda@Edge

If you do not have a bucket for your Lambda code you will need to create one. Create the bucket for the lambda code in the same aws account where your static bucket will go, for example:

`aws s3api create-bucket --bucket lambda-storage-bucket-1234 --profile AWS_USER_NAME --region us-east-1`

#### Deploy the stack 

Deploy your code 

```AWS_USER_NAME=my-user-name LAMBDA_STORAGE_BUCKET=lambda-storage-bucket-1234 ./deploy-stack```


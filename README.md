[![CircleCI](https://dl.circleci.com/status-badge/img/gh/alicehccn/thrive/tree/main.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/alicehccn/thrive/tree/main)

# Thrive

## Prequesites
    Node 17.9.0
    Docker 20.10.16

## Development
    yarn install
    yarn start

## Deployment

  ### Pipeline
    
    Github => CircleCI => Docker => ECR => EC2

  ### SSH to EC2
    chmod 400 thrive.pem

    ssh -i "thrive.pem" ec2-user@ec2-${AWS_EC2_IPv4}.${AWS_REGION_2}.compute.amazonaws.com

  ### Install Docker
    sudo yum install docker
    sudo service docker start
    sudo chmod 777 /var/run/docker.sock

  ### Login Docker
    aws ecr get-login-password --region ${AWS_REGION_1} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION_1}.amazonaws.com

  ### Pull Image
    docker pull ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION_1}.amazonaws.com/thrive:latest

  ### Run App
    docker-compose up


## Dependencies

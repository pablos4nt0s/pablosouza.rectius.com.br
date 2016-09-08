Pablo Souza - Personal Website
==============================

It is the source code of my persoanl website that was developed using Node v4, Hapi framework and Bootstrap. 

Gulp tasks were used to perform uglify and compress of css/js/image files.

It was deployed into cloud using Amazon Elastic Beanstalk and an Nginx proxy server.

## Installation

```bash
$ git clone https://github.com/rectius/pablosouza.rectius.com.br.git
$ cd pablosouza.rectius.com.br
$ npm install -g bower
$ npm install -g gulp
$ npm install -g supervisor
$ npm install
```

## Running

```bash
$ npm start
```

## Compile

```bash
$ gulp
```

## Manual Deploy to Amazon Elastic Beanstalk

```bash
$ $version = git rev-parse --short HEAD
$ aws elasticbeanstalk delete-application-version --application-name "{your-ebs-app-name}" --version-label $version --delete-source-bundle
$ aws s3 cp ZIP_NAME.zip s3://{your-s3-bucket-name}/ZIP_NAME-$version.zip
$ aws elasticbeanstalk create-application-version --application-name "{your-ebs-app-name}" --version-label $version --source-bundle S3Bucket="{your-s3-bucket-name}",S3Key="ZIP_NAME-$version.zip"
$ aws elasticbeanstalk update-environment --environment-name "{your-ebs-env-name}" --version-label $version
```

## Credits
Credit goes to all of the open source code that people have made available.
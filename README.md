Pablo Souza - Personal Website
==============================

## Installation

```bash
$ git clone https://github.com/rectius/pablosouza.rectuis.com.br.git
$ cd pablosouza.rectuis.com.br
$ npm install -g bower
$ npm install -g gulp
$ npm install -g supervisor
$ npm install
```

## Running

```bash
$ npm start
```

## Compile & Deploy

```bash
$ gulp

## Deploy to Amazon AWS

```bash
$ $version = git rev-parse --short HEAD
$ aws elasticbeanstalk delete-application-version --application-name "{your-ebs-app-name}" --version-label $version --delete-source-bundle
$ aws s3 cp ZIP_NAME.zip s3://{your-s3-bucket-name}/ZIP_NAME-$version.zip
$ aws elasticbeanstalk create-application-version --application-name "{your-ebs-app-name}" --version-label $version --source-bundle S3Bucket="{your-s3-bucket-name}",S3Key="ZIP_NAME-$version.zip"
$ aws elasticbeanstalk update-environment --environment-name "{your-ebs-env-name}" --version-label $version

## Credits
Credit goes to all of the open source code that people have made available.

#### License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

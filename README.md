<p align="center">
    <a href="https://github.com/yiisoft" target="_blank">
        <img src="https://github.com/yiisoft.png" height="100px">
    </a>
    <h1 align="center">Yii debug frontend</h1>
    <br>
</p>

This extension is a frontend for [Yii Debug API](https://github.com/yiisoft/yii-debug-api) extension.

[![Latest Stable Version](https://poser.pugx.org/yiisoft/yii-debug-api/v/stable.png)](https://packagist.org/packages/yiisoft/yii-debug-frontend)
[![Total Downloads](https://poser.pugx.org/yiisoft/yii-debug-api/downloads.png)](https://packagist.org/packages/yiisoft/yii-debug-frontend)
[![Build Status](https://travis-ci.com/yiisoft/yii-debug-api.svg?branch=master)](https://travis-ci.com/yiisoft/yii-debug-frontend)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/yiisoft/yii-debug-api/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/yiisoft/yii-debug-frontend/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/yiisoft/yii-debug-api/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/yiisoft/yii-debug-frontend/?branch=master)

## Installation

You'll need [NodeJs](https://nodejs.org/en/) version 12+.

1. Clone this repository.
2. Run `npm install` in project root directory.
3. Edit your `environments.ts` file to configure the URL, where Yii debug API is located, i.e. : 
`apiUrl: 'http://yiidemo.test'`. Please notice, that you should only set the base URL of your Yii3 app.
4. Run `ng serve --open` to start your application.
5. Configure CORS Middleware for the Yii debug API, to allow access from different domain name.



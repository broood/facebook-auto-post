facebook-auto-post
==================

A Node.js module to automate posting to a facebook page/wall.

## Basic Usage

``` javascript
var facebook = require("facebook-auto-post");

facebook.post({
	message:<text-to-post>,
	pageId:<id-of-the-page-you-are-posting-to>,
	accessToken:<token-granting-permission-to-post-to-page>,
	callback:function(err, result) {
		if(!err) {
			console.log("result: " + result);
			console.log("posted successfully to facebook!");
		}
	}
});
```

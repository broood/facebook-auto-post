var request = require("request");
var baseUrl = "https://graph.facebook.com/";

var facebook = (function() {
	return {
		post: function(obj) {
			obj = obj || {};
			var callback = obj.callback || function(){};
			var message = obj.message;
			var pageId = obj.pageId;
			var accessToken = obj.accessToken;

			if(message && pageId && accessToken) {
				var url = baseUrl + pageId + "/feed";

				var body = "message=" + encodeURIComponent(message) + "&access_token=" + accessToken;

				request({
					url:url,
					method:"POST",
					headers:null,
					body:body
				}, function(err, response, body) {
					if(err) {
						callback(err);
					} else {
						callback(null, body);
					}
				});
			} else {
				callback("Message, pageId and accessToken must all be provided");
			}
		}
	};
})();

module.exports = facebook;

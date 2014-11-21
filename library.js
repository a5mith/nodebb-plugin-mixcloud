(function(module) {
    "use strict";

    var MixCloud = {},
        embed = '<iframe src="//www.mixcloud.com/widget/iframe/?feed=http%3A%2F%2Fwww.mixcloud.com/$1&amp;replace=0&amp;embed_type=widget_standard" width="100%" frameborder="0" height="360"></iframe>'

    var MixcloudUrl = /<a href="(?:https?:\/\/)?(?:www\.)?(?:mixcloud\.com)\/?(.+)">.+<\/a>/g;


    MixCloud.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(MixcloudUrl)) {
            data.postData.content = data.postData.content.replace(MixcloudUrl, embed);
        }
        callback(null, data);
    };
    module.exports = MixCloud;
}(module));


(function(module) {
    "use strict";

    var MixCloud = {},
        embed = '<iframe src="//www.mixcloud.com/widget/iframe/?feed=http%3A%2F%2Fwww.mixcloud.com/$1&amp;replace=0&amp;embed_type=widget_standard" width="100%" frameborder="0" height="360"></iframe>'


    MixCloud.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a rel="nofollow" href="(?:http?:\/\/)?(?:www\.)?(?:mixcloud\.com)\/?(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = MixCloud;
}(module));

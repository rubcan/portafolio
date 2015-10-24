
var emojiBaseUrl = "./lib/angular-emoji-popup/src/";

requirejs.config({
    paths: {
        emoji_app: emojiBaseUrl + "app",
        emoji_config: emojiBaseUrl + "config",
        emoji_directives: emojiBaseUrl + "emojiDirectives",
        emoji_filters: emojiBaseUrl + "emojiFilters",
        emoji_area: emojiBaseUrl + "jquery.emojiarea",
        emoji_nanoscroller: emojiBaseUrl + "nanoscroller",
        emoji_util: emojiBaseUrl + "util"
    },
    shim: {
        emoji_directives: { deps: ['emoji_app'] },
        emoji_filters: { deps: ['emoji_app'] },
    }
});

define(["emoji_app", "emoji_config", "emoji_directives", "emoji_filters", "emoji_area", "emoji_nanoscroller", "emoji_util"]);
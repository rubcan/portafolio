var GlobalConstants = new function () {
    this.baseUrl = './';
}

var baseUrl = GlobalConstants.baseUrl;
var libsUrl = "../lib/";

requirejs.config({
    //baseUrl: '/',

    paths: {
        // App
        portafolioApp: baseUrl + "app",
        cvMod: baseUrl + "cv/cv.controller",

        // libs
        jquery: [
            libsUrl + "jquery-2.1.1.min", 
            "//ajax.googleapis.com/ajax/lib/jquery/2.1.1/jquery.min"
        ],
        jqueryEasing:           libsUrl + "jquery.easing.1.3",
        jqueryFisheye:          libsUrl + "jquery.fisheye",

        angular:                libsUrl + "angular.min",
        'angular-route':        libsUrl + "angular-route",
        angularSanitize:        libsUrl + "angular-sanitize.min",
        angularResource:        libsUrl + "angular-resource.min",
        modernizr:              libsUrl + "modernizr-2.8.3",
        ui_bootstrap:           libsUrl + "angular-ui/ui-bootstrap-tpls.min",
        lodash:                 libsUrl + "lodash",
        
        ngSanitize:             libsUrl + "angular-sanitize.min",
        ecmaScriptExtensions:   libsUrl + "ecmaScriptExtensions",
        scrollglue:             libsUrl + "scrollglue",
        ngFileUpload:           libsUrl + "ng-file-upload.min",

        // require plugins
        async: libsUrl + 'requirePlugins/async',
        //font: 'lib/requirePlugins/font',
        //goog: 'lib/requirePlugins/goog',
        //image: 'lib/requirePlugins/image',
        //json: 'lib/requirePlugins/json',
        //noext: 'lib/requirePlugins/noext',
        //mdown: 'lib/requirePlugins/mdown',
        //propertyParser : 'lib/requirePlugins/propertyParser',

        // CSS
        //messagingStyles: "styles/Messaging.less?",
        //emojis: "styles/emojis/jMinEmoji",
        //angular_emoji_popup: "lib/angular-emoji-popup/_index"
    },

    shim: {
        "portafolioApp": {
            deps: [
                "angular", "angular-route", "angularSanitize", "angularResource",
                "ui_bootstrap",
                "jqueryEasing", "jqueryFisheye",
                "cvMod"
            ]
        },
        'angular': { exports: 'angular' },
        'angular-route': { deps: ['angular'] },
        angularSanitize: { deps: ['angular'] },
        angularResource: { deps: ['angular'] },
        ngResource: { deps: ['angular'] },
        'ui_bootstrap': { deps: ['angular'] },
        scrollglue: { deps: ['angular'] },
        angular_emoji_popup: { deps: ['angular'] },
        ngFileUpload: { deps: ['angular'] },

        'jquery': { exports: 'jquery' },
        jqueryEasing: {deps:['jquery']},
        jqueryFisheye: {deps:['jquery']},
    }


});

define(["portafolioApp"]);
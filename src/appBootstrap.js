
require(["_index"], function () {
    require(["jquery", "angular", "lodash", "portafolioApp"], function ($, ng) {

        $(function () {
            ng.bootstrap(document, ["portafolioApp"]);

            $('.fisheye').Fisheye({
                maxWidth: 70,
                items: 'a',
                itemsText: 'span',
                container: 'ul',
                itemWidth: 60,
                proximity: 70,
                halign: 'left'
                }
	        );
        });

    });
})

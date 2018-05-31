$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7906278676',
        limit: 6    ,
        resolution: 'low_resolution',
        accessToken: '7906278676.1677ed0.7ee484a2165d4ee6ade17cc82687f08f',
        sortBy: 'most-recent',
        template: '<div class="col-sm-4 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
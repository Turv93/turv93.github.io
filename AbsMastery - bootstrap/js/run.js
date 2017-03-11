(function( $ ) {
    
    $( document ).ready(run);

    function run(){
        initTabs('.arbitrajTabs-js');
        initModals('.arbitrajModal-js');
    }

    function initTabs(tabSelector){
        $(tabSelector).arbitrajTabs();
    }

    function initModals(modalsSelector){
        $(modalsSelector).arbitrajModals();
    }

    window.initSelfLocationMap = function(){
        
        var prospectMira = {lat: 55.778583, lng: 37.632875};
        
        var map = new google.maps.Map(document.getElementById('map-selfLocation-js'), {
          zoom: 14,
          center: prospectMira,
          scrollwheel: false    
        });
        
        var marker = new google.maps.Marker({
          position: prospectMira,
          map: map
        });

    };

})(jQuery);
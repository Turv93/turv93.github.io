(function( $ ) {
  $.fn.arbitrajModals = function() {
  
    var $baseElement = this;
    var targetId = $baseElement.attr('modal');
    var $modal = $('#' + targetId);    
    
    //modal open
    $baseElement.on('click',function(event){
        event.preventDefault();
        $modal.show();
    });

    //modal close
    $modal.on('click','.modal-close-js',function(event){
        event.preventDefault();
        $modal.hide();
    });

    return this
  
  };
})(jQuery);
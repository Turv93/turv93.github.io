(function( $ ) {
  $.fn.arbitrajTabs = function() {
  
    var $baseElement = this;

    $baseElement.on('click','.tab-nav > li', function(event){

        event.preventDefault();

        var $clickedTab = $(this);
        
        //Make active tab & disable another
        $baseElement.find('.tab-nav > li').each(function(){
            
            var $iterationTab = $(this);
            
            if($iterationTab.attr('tab') != $clickedTab.attr('tab')){
                $iterationTab.removeClass('active');
            }else{
                $iterationTab.addClass('active');
            }
        });

        //Make active panel & disable another
        $baseElement.find('.tab-panels > div').each(function(){
            
            var $iterationPannel = $(this);
            
            if($iterationPannel.attr('id') != $clickedTab.attr('tab')){
                $iterationPannel.removeClass('active');
            }else{
                $iterationPannel.addClass('active');
            }
        });

    });

    return this
  
  };
})(jQuery);
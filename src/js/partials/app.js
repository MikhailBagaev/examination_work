$(document).ready(function(){

    function getJson() {
        $.ajax({
                type: 'GET',
                // url: 'http://api.pixplorer.co.uk/image?word=' + inputValue + '&amount=7&size=tb',
                url: 'https://pixabay.com/api/?key=3386150-3728a4222cc12bf99b52bbf09&q=' + inputValue + '&image_type=photo&per_page=7',
                dataType: 'json',
                success:  function(data) {
                              obj = {
                          data: data
                          };
                          renderSection(obj); 
                          console.log(obj);                          
                          }
            }); 
    };  

    function renderSection(obj) {
        var html = $('#parsed-resig').html();
        var destination = $('.ideas');
        var content = tmpl(html, obj);
        destination.append(content);
            $(document).ready(function(){
              $('.grid').imagesLoaded( function() {
                $('.grid').masonry({
                columnWidth: function( containerWidth ) {
                return containerWidth / 3;
                             },
                itemSelector: '.grid-item',                
                isResizable: true                             
                });
              });
            });  
    };

    var inputValue = '';
    getJson(inputValue);

    $('.buttonSearch').on('click', function(e){
        e.preventDefault();
        $('.clear-area').remove();     
        inputValue = $('.searchForm').val();     
        getJson(inputValue);                 
    });

$('input[type="text"]').keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault();
        $('.clear-area').remove();        
        inputValue = $('.searchForm').val();      
        getJson(inputValue);    
    }
})
});

function launchBxSlider(number) {
    $(document).ready(function(){
        $(number).bxSlider({
            mode: 'fade',
            auto: true,
            autoControls: false,
            pause: 4000
        });
    });  
};

launchBxSlider('.bxslider');
launchBxSlider('.bxslider2');
launchBxSlider('.bxslider3');





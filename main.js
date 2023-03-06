$(function(){
    $("input").on('keyup',function(e){
        if (e.key=='Enter'|| e.key==13){
            q=$('input').val();
            window.open('https://google.com/search?q='+q);
        }
    })
})
window.onload = function() {
    var vote=0;
     $(document).ready(function() {

     $('#menuopen').hide()
     $('#searchopen').hide()
     $('#back').click(function(){history.go(-1);
                                 return})
     $('#PostReply').dialog({
                    autoOpen: false,
                    title: 'New Reply',
                    minHeight: "auto",
                    minWidth: 1200,
                    modal: true,
                    autoResize: true,
                    buttons: {                   
                        Cancel: function() {
                            $('#PostReply').dialog( "close" );
                            },
                         "Post Reply": setR}   
                });
                
                $('#postbuttonr').click(function() {
                    $('#PostReply').dialog('open');
                    
                });
                
                $('#cat').keydown(function(e){
                    if(e.keyCode==13){
                    var newcat = $(this).val()
                    $('#categories').append('<br><input type="checkbox" name="category" value="Health" required=true checked>')
                    $('#categories').append(newcat)
                    $(this).val("")        
                    return false}
                        });
         
                $('#PostQuestion').dialog({
                    autoOpen: false,
                    title: 'New Question',
                    minHeight: 600,
                    minWidth: 1200,
                    modal: true,
                    buttons: {                                                
                        Cancel: function() {
                            $('#PostQuestion').dialog( "close" );
                            },
                         "Post Question": setQ}
                    
                });
                $('#postbutton').click(function() {
                    $('#PostQuestion').dialog('open');
//                  return false;
                    
                });
         
                $('#Submitbutton').click(function() {
                    $('#question').innerHTML = document.getElementById('question').value;
                    $('#PostQuestion').dialog('close');
//                  return false;
                });         
     });
    
    $('.voteup').click( function() {
        console.log('vote')
    var item = $(this).closest('.questionbox')
    if(vote ==0){
    var p = Number(item.find('.points').html())+1
    item.find('.points').html(p);
    }
    vote=0});
    
        $('.votedown').click( function() {
    var item = $(this).closest('.questionbox')
    if(vote ==0){
    var p = Number(item.find('.points').html())-1
    item.find('.points').html(p);}
    vote=0});
    
	$('.voteupr').click( function() {
    var item = $(this).closest('.replybox')
    if(vote ==0){
    var p = Number(item.find('.points').html())+1
    item.find('.points').html(p);
    }
    vote=0});
	$('.votedownr').click( function() {
    var item = $(this).closest('.replybox')
    if(vote ==0){
    var p = Number(item.find('.points').html())-1
    item.find('.points').html(p);}
    vote=0});
    
     $('#menuclosed').click( function(){
            if ($('#menuopen').is(":hidden"))
                {$('#menuopen').slideDown()}
            else
                {$('#menuopen').slideUp()}
                return})

     $('#search').click( function(){
            if ($('#searchopen').is(":hidden"))
                {$('#searchopen').slideDown()}
            else
                {$('#searchopen').slideUp()}
                return})



 }
    






function setQ() {
                        var item = $('.questionbox:first').clone(true)
                        item.find('.questionname').html  (question.value)
                        item.find('.points').html  (0)
                        item.appendTo('#main')
                        //$('#question1').html (question.value)
                        question.value=""
                        $('#qr').html (question.value)
                        $('#PostQuestion').dialog('close');
    return;}    

                
function setR(){
                  var item = $('.replybox:first').clone(true)
                        item.find('.questionname').html  (reply.value)
                        item.find('.points').html  (0)
                        item.appendTo('#main')
                        //$('#question1').html (question.value)
                        reply.value=""
                        $('#qr').html (question.value)
                        $('#PostReply').dialog('close');
    return}
    
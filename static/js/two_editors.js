var postAceInit = function(hook, context){
  var two_editors = clientVars.ep_two_editors;
  if(two_editors){
    if(two_editors.onByDefault){ // Setup testing else poop out
      if(two_editors.onByDefault){
        enabletwo_editors();
        showtwo_editors();
      }
    }
    else{
      $("#two_editors").hide();
      clientVars.ep_two_editors.enabled = false;
      // we don't two_editors it by default
    }

    $('.toggle_two_editors').click(function() {
      toggletwo_editors();
    });
  }

  try {
    if (clientVars.ep_two_editors.icon){
      $('.toggle_two_editors').css("background-image", 'url('+clientVars.ep_two_editors.icon+')');
    }
  } catch (e) {

  }

  try {
    if (clientVars.ep_two_editors.position){
      if(clientVars.ep_two_editors.position === "right"){
        $('.two_editors').parent().prependTo(".menu_right");
      }
    } 
  } catch (e) {

  }

}

function enabletwo_editors(){
  var authorName = 'Testing';
  var authorColor = $('#myswatch').css('background-color');
  var two_editors_host = clientVars.ep_two_editors.host;

  var padID = clientVars.padId;
  console.log("prepending");
  var url = "http://127.0.0.1:9002/p/"+padID+"_second_pad_instance";
  if($("#two_editors").length === 0){ // If it's not available already then two_editors it
//    $("#editorcontainer").prepend("<div id=two_editors><iframe id='two_editorsEmbed' src='//"+two_editors_host+"/p/"+padID+"_two_editors?showControls=false&authorName="+authorName+"&authorColor="+authorColor+"' width='100%' height='100%' style='border:none' frameborder='0' scrolling='no'></iframe></div>");
    $("#editorcontainer").prepend("<div id=two_editors><iframe id='two_editorsEmbed' src='"+url+"?showControls=false' width='100%' height='100%'></iframe></div>");
  }
  clientVars.ep_two_editors.enabled = true;
  showtwo_editors();
}

function showtwo_editors(){
  $('iframe[name="ace_outer"]').css("width","50%");
  $("#two_editors").css({"z-index":"999999", "position":"absolute", "top":"0px", "right":"0px", "height":"100%", "width":"50%", "border":"1px solid #ccc"}).show();
  $("#two_editorsEmbed").show().css({"overflow":"hidden"});
  if(clientVars.ep_two_editors.enabled !== true){
    enabletwo_editors();
/*
    $("#two_editors").hover(function(){
      clearTimeout($(this).data('timeout'));
      $("#two_editors").animate({"width":"100%", "height": "100%"});;
      clientVars.ep_two_editors.fullscreen = true;
    }, function(){
      var t = setTimeout(function() { // Dont zoom out right away, wait a while
        $("#two_editors").animate({"width":"200px", "height": "200px"});;
        clientVars.ep_two_editors.fullscreen = false;
      }, 500);
      $(this).data('timeout', t);
    });
*/
  }
  clientVars.ep_two_editors.visible = true;
}

function hidetwo_editors(){
  $("#two_editors").hide();
  clientVars.ep_two_editors.fullscreen = false;
  clientVars.ep_two_editors.visible = false;
}

function toggletwo_editors(){
  if(clientVars.ep_two_editors.visible === true && clientVars.ep_two_editors.fullscreen){
    hidetwo_editors();
    return;
  }
  if(!clientVars.ep_two_editors.visible){
    showtwo_editors();
    return;
  }
  if(clientVars.ep_two_editors.visible === true && !clientVars.ep_two_editors.fullscreen){
    fullScreentwo_editors();
    return;
  }
}

function fullScreentwo_editors(){
  clientVars.ep_two_editors.fullscreen = true;
  $("#two_editors").animate({"width":"100%", "height": "100%"});;
}

exports.postAceInit = postAceInit;
exports.enabletwo_editors = enabletwo_editors;
exports.showtwo_editors = showtwo_editors;
exports.hidetwo_editors = hidetwo_editors;

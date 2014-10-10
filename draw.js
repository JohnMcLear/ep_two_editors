var eejs = require('ep_etherpad-lite/node/eejs/');
var settings = require('ep_etherpad-lite/node/utils/Settings');
var two_editorsString = "";

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_two_editors/templates/editbarButtons.ejs");
  return cb();
}

exports.clientVars = function(hook, context, callback){
  var two_editors = {};

  try {
    if (settings.ep_two_editors.host){
      two_editors.host = settings.ep_two_editors.host;
    }else{
      console.warn("ep_two_editors.host NOT SET in settings.json.  The requirement is the host of the ethertwo_editors service IE two_editors.etherpad.org, copy/paste value to settings.json --  'ep_two_editors' { 'host': 'your.ethertwo_editorshost.com'}");
      two_editors.host = "two_editors.etherpad.org";
    }
  } catch (e){
    console.warn("ep_two_editors.host NOT SET in settings.json.  The requirement is the host of the ethertwo_editors service IE two_editors.etherpad.org, copy/paste value to settings.json --  'ep_two_editors' { 'host': 'your.ethertwo_editorshost.com'}");
    two_editors.host = "two_editors.etherpad.org";
  }

  try {
    if(settings.ep_two_editors.onByDefault){
      two_editors.onByDefault = true;
    }else{
      two_editors.onByDefault = false;
    }
  } catch (e){
    two_editors.onByDefault = false;
  }

  try {
    if(settings.ep_two_editors.icon){
      two_editors.icon = settings.ep_two_editors.icon;
    }else{
      two_editors.icon = "../static/plugins/ep_two_editors/static/img/icon.png";
    }
  } catch (e){
    two_editors.icon = "../static/plugins/ep_two_editors/static/img/icon.png";
  }
    
  try {
    if(settings.ep_two_editors.position){
      two_editors.position = settings.ep_two_editors.position;
    }else{
      two_editors.position = "left";
    }
  } catch (e){
    two_editors.position = "right";
  }


  return callback( { "ep_two_editors": two_editors } );
};


  var Ajax = new Object();
  Ajax.isUpdating = true;
  Ajax.Request = function(method, url, callback)
  {
   this.isUpdating = true;
   this.callbackMethod = callback;
   this.request = (window.XMLHttpRequest)? new XMLHttpRequest(): new ActiveXObject("MSXML2.XMLHTTP"); 
   this.request.onreadystatechange = function() { Ajax.checkReadyState(); };
   this.request.open(method, url, true);
   this.request.send(url);
  }
  Ajax.checkReadyState = function(_id)
  {
   switch(this.request.readyState)
   {
    case 1: break;
    case 2: break;
    case 3: break;
    case 4:
     this.isUpdating = false;
     this.callbackMethod(this.request.responseText);
   }
  }

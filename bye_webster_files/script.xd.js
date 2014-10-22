/*
	Copyright (c) 2004-2010, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[(typeof (djConfig)!="undefined"&&djConfig.scopeMap&&djConfig.scopeMap[0][1])||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojo.io.script"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojo.io.script"]){_4._hasResource["dojo.io.script"]=true;_4.provide("dojo.io.script");(function(){var _7=_4.isIE?"onreadystatechange":"load",_8=/complete|loaded/;_4.io.script={get:function(_9){var _a=this._makeScriptDeferred(_9);var _b=_a.ioArgs;_4._ioAddQueryToUrl(_b);_4._ioNotifyStart(_a);if(this._canAttach(_b)){var _c=this.attach(_b.id,_b.url,_9.frameDoc);if(!_b.jsonp&&!_b.args.checkString){var _d=_4.connect(_c,_7,function(_e){if(_e.type=="load"||_8.test(_c.readyState)){_4.disconnect(_d);_b.scriptLoaded=_e;}});}}_4._ioWatch(_a,this._validCheck,this._ioCheck,this._resHandle);return _a;},attach:function(id,_f,_10){var doc=(_10||_4.doc);var _11=doc.createElement("script");_11.type="text/javascript";_11.src=_f;_11.id=id;_11.charset="utf-8";return doc.getElementsByTagName("head")[0].appendChild(_11);},remove:function(id,_12){_4.destroy(_4.byId(id,_12));if(this["jsonp_"+id]){delete this["jsonp_"+id];}},_makeScriptDeferred:function(_13){var dfd=_4._ioSetArgs(_13,this._deferredCancel,this._deferredOk,this._deferredError);var _14=dfd.ioArgs;_14.id=_4._scopeName+"IoScript"+(this._counter++);_14.canDelete=false;_14.jsonp=_13.callbackParamName||_13.jsonp;if(_14.jsonp){_14.query=_14.query||"";if(_14.query.length>0){_14.query+="&";}_14.query+=_14.jsonp+"="+(_13.frameDoc?"parent.":"")+_4._scopeName+".io.script.jsonp_"+_14.id+"._jsonpCallback";_14.frameDoc=_13.frameDoc;_14.canDelete=true;dfd._jsonpCallback=this._jsonpCallback;this["jsonp_"+_14.id]=dfd;}return dfd;},_deferredCancel:function(dfd){dfd.canceled=true;if(dfd.ioArgs.canDelete){_4.io.script._addDeadScript(dfd.ioArgs);}},_deferredOk:function(dfd){var _15=dfd.ioArgs;if(_15.canDelete){_4.io.script._addDeadScript(_15);}return _15.json||_15.scriptLoaded||_15;},_deferredError:function(_16,dfd){if(dfd.ioArgs.canDelete){if(_16.dojoType=="timeout"){_4.io.script.remove(dfd.ioArgs.id,dfd.ioArgs.frameDoc);}else{_4.io.script._addDeadScript(dfd.ioArgs);}}return _16;},_deadScripts:[],_counter:1,_addDeadScript:function(_17){_4.io.script._deadScripts.push({id:_17.id,frameDoc:_17.frameDoc});_17.frameDoc=null;},_validCheck:function(dfd){var _18=_4.io.script;var _19=_18._deadScripts;if(_19&&_19.length>0){for(var i=0;i<_19.length;i++){_18.remove(_19[i].id,_19[i].frameDoc);_19[i].frameDoc=null;}_4.io.script._deadScripts=[];}return true;},_ioCheck:function(dfd){var _1a=dfd.ioArgs;if(_1a.json||(_1a.scriptLoaded&&!_1a.args.checkString)){return true;}var _1b=_1a.args.checkString;if(_1b&&eval("typeof("+_1b+") != 'undefined'")){return true;}return false;},_resHandle:function(dfd){if(_4.io.script._ioCheck(dfd)){dfd.callback(dfd);}else{dfd.errback(new Error("inconceivable dojo.io.script._resHandle error"));}},_canAttach:function(_1c){return true;},_jsonpCallback:function(_1d){this.ioArgs.json=_1d;}};})();}}};});

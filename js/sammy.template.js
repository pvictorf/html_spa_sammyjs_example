(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","sammy"],factory)}else{(window.Sammy=window.Sammy||{}).Template=factory(window.jQuery,window.Sammy)}})(function($,Sammy){var srender_cache={};var srender=function(name,template,data,options){var fn,escaped_string;if(srender_cache[name]){fn=srender_cache[name]}else{if(typeof template=="undefined"){return false}if(options&&options.escape_html===false){escaped_string='",$1,"'}else{escaped_string='",h($1),"'}fn=srender_cache[name]=new Function("obj","var ___$$$___=[],print=function(){___$$$___.push.apply(___$$$___,arguments);};"+'with(obj){___$$$___.push("'+String(template).replace(/[\r\t\n]/g," ").replace(/\"/g,'\\"').split("<%").join("	").replace(/((^|%>)[^\t]*)/g,"$1\r").replace(/\t=(.*?)%>/g,escaped_string).replace(/\t!(.*?)%>/g,'",$1,"').split("	").join('");').split("%>").join('___$$$___.push("').split("\r").join("")+"\");}return ___$$$___.join('');")}if(typeof data!="undefined"){return fn(data)}else{return fn}};Sammy.Template=function(app,method_alias){var template=function(template,data,name,options){if(typeof name=="undefined"){name=template}if(typeof options=="undefined"&&typeof name=="object"){options=name;name=template}return srender(name,template,$.extend({},this,data),options)};if(!method_alias){method_alias="template"}app.helper(method_alias,template)};return Sammy.Template});
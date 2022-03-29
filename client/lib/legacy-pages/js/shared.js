var adv_rule,war_checksum,ws,reconnectInterval,satoshi=1e8,show_adv=!1,symbol_btc={code:"BTC",symbol:"BTC",name:"Bitcoin",conversion:satoshi,symbolAppearsAfter:!0,local:!1},symbol_local={conversion:0,symbol:"$",name:"U.S. dollar",symbolAppearsAfter:!1,local:!0,code:"USD"},symbol=symbol_btc,root="https://blockchain.info/",resource="/legacy-pages/",min=!1,isExtension=!1,APP_VERSION="1.0",APP_NAME="javascript_web",IMPORTED_APP_NAME="external",IMPORTED_APP_VERSION="0";function stripHTML(t){return $.trim($("<div>"+t.replace(/(<([^>]+)>)/gi,"")+"</div>").text())}function setLocalSymbol(t){t&&(symbol===symbol_local?(symbol=symbol_local=t,calcMoney()):symbol_local=t)}function setBTCSymbol(t){t&&(symbol===symbol_btc?(symbol=symbol_btc=t,calcMoney()):symbol_btc=t)}if($.fn.center=function(){return scrollTo(0,0),this.css("top",parseInt(Math.max($(window).height()/2-this.height()/2,0))+"px"),this.css("left",parseInt(Math.max($(window).width()/2-this.width()/2,0))+"px"),this},!window.console){var names=["log","debug","info","warn","error","assert","dir","dirxml","group","groupEnd","time","timeEnd","count","trace","profile","profileEnd"];window.console={};for(var i=0;i<names.length;++i)window.console[names[i]]=function(){}}function webSocketConnect(t){try{function reallyConnect(){try{var e="wss://ws.blockchain.info/inv";if(console.log("Connect "+e),!(ws=new WebSocket(e)))return;t&&t(ws)}catch(t){console.log(t)}}window.WebSocket&&(reallyConnect(),reconnectInterval||(reconnectInterval=setInterval((function reconnectTimer(){ws&&ws.readyState!=WebSocket.CLOSED||reallyConnect()}),2e4)))}catch(t){console.log(t)}}function BlockFromJSON(t){return{hash:t.hash,time:t.time,blockIndex:t.blockIndex,height:t.height,txIndex:t.txIndexes,totalBTCSent:t.totalBTCSent,foundBy:t.foundBy,size:t.size}}function TransactionFromJSON(t){return{hash:t.hash,size:t.size,txIndex:t.tx_index,time:t.time,inputs:t.inputs,out:t.out,blockIndex:t.block_index,result:t.result,blockHeight:t.block_height,balance:t.balance,double_spend:t.double_spend,note:t.note,setConfirmations:function(t){this.confirmations=t},getHTML:function(t,e){var n=this.result,o=$('<div class="txdiv" style="padding-top:10px;"></div>');if(o.attr("id","tx-"+this.txIndex),this.note){var a=$('<div class="alert note"></div>');a.text(this.note),o.append(a)}var r=$('<table class="table table-striped" cellpadding="0" cellspacing="0" style="padding:0px;float:left;margin:0px;"></table>');o.append(r);var s=$("<tr></tr>");r.append(s);var l=$('<th colspan="4" align="left"></th>');s.append(l);var c=$('<a target="new" style="font-weight:normal"></a>');l.append(c),c.attr("href",root+"tx/"+this.hash),c.text(this.hash);var d=$('<span style="float:right"></span>'),u=$('<span class="can-hide" style="font-weight:bold"></span>');if(d.append(u),this.time>0){var p=new Date(1e3*this.time);u.text(dateToString(p))}l.append(d);s=$("<tr></tr>");if(r.append(s),(m=$('<td width="500px"></td>')).addClass("txtd"),n<0&&m.addClass("hidden-phone"),s.append(m),this.inputs.length>0)for(var h=0;h<this.inputs.length;h++)input=this.inputs[h],null==input.prev_out||null==input.prev_out.addr?(m.text("No Input (Newly Generated Coins)"),m.append($("<br />"))):m.append(formatOutput(input.prev_out,t,e));else m.text("Inputs Error"),m.append($("<br />"));var m=$('<td width="48px" class="hidden-phone" style="padding:4px;text-align:center;vertical-align:middle;"></td>');if(s.append(m),null==n){n=0;for(h=0;h<this.out.length;h++)n+=this.out[h].value}n>0?m.append($('<img src="'+resource+'arrow_right_green.png" />')):n<0?m.append($('<img src="'+resource+'arrow_right_red.png" />')):m.text(" ");m=$("<td></td>");s.append(m),m.addClass("txtd"),n>=0&&m.addClass("hidden-phone");var f=null;for(h=0;h<this.out.length;h++){var g=this.out[h];if(g.type>0&&!g.spent&&null==f){var b=t[g.addr];null==b&&(b=t[g.addr2]),null==b&&(b=t[g.addr3]),null!=b&&null!=b.priv&&(f=h,b)}m.append(formatOutput(g,t,e))}m=$('<td width="140px" style="text-align:right" class="txtd"></td>');s.append(m);for(h=0;h<this.out.length;h++)output=this.out[h],m.append('<span class="hidden-phone">'+formatMoney(output.value,!0)+"</span><br />");var y=$('<span style="float:right;padding-bottom:30px;clear:both;"></span>');o.append(y),null==this.confirmations?y.append('<button style="display:none"></button> '):0==this.confirmations?y.append('<button class="btn btn-danger">Unconfirmed Transaction!</button> '):this.confirmations>0&&(y.append('<button class="btn btn-primary"></button> '),y.text(this.confirmations+" Confirmations"));var v=$("<button>"+formatMoney(n,!0)+"</button> ");return y.append(v),n>0?v.addClass("btn btn-success cb"):n<0?v.addClass("btn btn-danger cb"):v.addClass("btn cb"),1==this.double_spend&&y.append('<button class="btn btn-danger">Double Spend</button> '),o}}}function padStr(t){return t<10?"0"+t:""+t}function dateToString(t){return t.sameDayAs(new Date)?"Today "+padStr(t.getHours())+":"+padStr(t.getMinutes())+":"+padStr(t.getSeconds()):padStr(t.getFullYear())+"-"+padStr(1+t.getMonth())+"-"+padStr(t.getDate())+" "+padStr(t.getHours())+":"+padStr(t.getMinutes())+":"+padStr(t.getSeconds())}function parseURLQuery(t){for(var e={},n=("?"===t[0]?t.substr(1):t).split("&"),o=0;o<n.length;o++){var a=n[o].split("=");e[decodeURIComponent(a[0])]=decodeURIComponent(a[1]||"")}return e}function formatSatoshi(t,e,n){if(!t)return"0.00";var o="";t<0&&(t=-t,o="-"),e||(e=0);var a=(t=""+parseInt(t)).length>8-e?t.substr(0,t.length-(8-e)):"0";n||(a=a.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"));var r=t.length>8-e?t.substr(t.length-(8-e)):t;if(r&&0!=r){for(;r.length<8-e;)r="0"+r;for(r=r.replace(/0*$/,"");r.length<2;)r+="0";return o+a+"."+r}return o+a}function convert(t,e){return(t/e).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}function formatBTC(t){return formatSymbol(t,symbol_btc)}function sShift(t){return(satoshi/t.conversion).toString().length-1}function formatSymbol(t,e,n){var o;return o=e!==symbol_btc?convert(t,e.conversion):formatSatoshi(t,sShift(e)),n&&(o=o.replace(/([1-9]\d*\.\d{2}?)(.*)/,'$1<span style="font-size:85%;">$2</span>')),e.symbolAppearsAfter?o+=" "+e.symbol:o=e.symbol+" "+o,o}function formatMoney(t,e){var n=formatSymbol(t,symbol);return e&&(n='<span data-c="'+t+'">'+n+"</span>"),n}function formatOutput(t,e,n){function formatOut(t,o){var a=null;if(null!=e&&(a=e[t]),null!=a){var r=$("<span></span>");return null!=a.label?r.text(a.label):r.text(t),r}var s=$('<a target="new"></a>');if(s.attr("href",root+"address/"+t),n&&n[t])s.text(n[t]);else{if(o.addr_tag){var l=$("<span></span>");s.addClass("tag-address"),s.text(t);var c=$('<span class="tag"></span>');if(c.text("("+o.addr_tag+") "),o.addr_tag_link){var d=$('<a class="external" rel="nofollow" target="new"></a>');d.attr("href",root+"r?url="+o.addr_tag_link),c.append(d)}return l.append(s),l.append(c),l}s.text(t)}return s}var o=$("<span></span>");return 0==t.type||(1==t.type||2==t.type||3==t.type?o.html('(<font color="red">Escrow</font> '+t.type+" of "):o.html('<font color="red">Strange</font> ')),null!=t.addr&&o.append(formatOut(t.addr,t)),null!=t.addr2&&(o.append(", "),o.append(formatOut(t.addr2,t))),null!=t.addr3&&(o.append(", "),o.append(formatOut(t.addr3,t))),1!=t.type&&2!=t.type&&3!=t.type||o.append(")"),o.append("<br />"),o}function toggleAdv(){setAdv(!show_adv)}function setAdv(t){show_adv=t,null!=adv_rule&&adv_rule.remove(),show_adv?(adv_rule=$("<style type='text/css'> .adv{display: inherit;} .basic{display: none;} </style>").appendTo("head"),$("a[class=show_adv]").text("Show Basic")):(adv_rule=$("<style type='text/css'> .adv{display: none;} .basic{display: inherit;} </style>").appendTo("head"),$("a[class=show_adv]").text("Show Advanced"))}function calcMoney(){$("span[data-c]").each((function(){$(this).text(formatMoney($(this).data("c")))}))}function setupSymbolToggle(){$(".cb").unbind("click").click((function(){toggleSymbol()})),$("span[data-c]").unbind("mouseenter mouseleave").mouseenter((function(){var t;(t=$(this)).data("time")&&(t.data("bs.tooltip")?t.tooltip("show"):$.ajax({timeout:6e4,type:"GET",dataType:"text",url:root+"frombtc",data:{value:t.data("c"),currency:symbol_local.code,time:t.data("time"),textual:!0,nosavecurrency:!0},success:function(e){e&&(t.tooltip({placement:"bottom",html:!1,trigger:"manual",title:e}),t.is(":hover")&&t.tooltip("show"))},error:function(t){console.log(t)}}))})).mouseleave((function(){$(this).data("bs.tooltip")&&$(this).tooltip("hide")}))}function toggleSymbol(){symbol_local&&symbol===symbol_btc?(symbol=symbol_local,SetCookie("local","true")):(symbol=symbol_btc,SetCookie("local","false")),$("#current-currency").text(symbol.name),calcMoney()}Date.prototype.sameDayAs=function(t){return this.getFullYear()==t.getFullYear()&&this.getMonth()==t.getMonth()&&this.getDate()==t.getDate()};var _sounds={};function playSound(t){try{_sounds[t]||(_sounds[t]=new Audio(resource+t+".wav")),_sounds[t].play()}catch(t){}}function setupToggle(){$("[class=show_adv]").unbind().click((function(){toggleAdv()}))}function updateQueryString(t,e,n){n||(n=window.location.href);var o=new RegExp("([?|&])"+t+"=.*?(&|#|$)(.*)","gi");if(o.test(n))return null!=e?n.replace(o,"$1"+t+"="+e+"$2$3"):n.replace(o,"$1$3").replace(/(&|\?)$/,"");if(null!=e){var a=-1!==n.indexOf("?")?"&":"?",r=n.split("#");return n=r[0]+a+t+"="+e,r[1]&&(n+="#"+r[1]),n}return n}function loadScript(t,e,n){var o=!1;if($("script").each((function(){var n=$(this).attr("src");if(n&&0==n.replace(/^.*[\\\/]/,"").indexOf(t))return e(),o=!0,!1})),!o){console.log("Load "+t);var a=!1,r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src=resource+t+(min?".min.js":".js")+"?"+war_checksum;try{r.addEventListener("error",(function(t){a=!0,n&&n("Error Loading Script. Are You Offline?")}),!1),r.addEventListener("load",(function(t){a||e()}),!1)}catch(t){setTimeout((function(){a||e()}),1e4)}document.getElementsByTagName("head")[0].appendChild(r)}}function SetCookie(t,e){document.cookie=t+"="+encodeURI(e.toString())+"; path=/; domain=blockchain.info; max-age=31536000"}function getCookie(t){return document.cookie.length>0&&(c_start=document.cookie.indexOf(t+"="),-1!=c_start)?(c_start=c_start+t.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),decodeURI(document.cookie.substring(c_start,c_end))):""}$(document).ready((function(){var isMobile=function(){return $(window).width()<=1024};$(".menu-button").click((function(){$("nav").hasClass("searching")&&$("nav").removeClass("searching"),$(this).toggleClass("is-active"),$("nav").toggleClass("open")})),$(".search-button").click((function(){$("nav").toggleClass("searching")}));var expandHeader=function(){$("nav").addClass("open")},collapseHeader=function(){$("nav").removeClass("open")};$(window).on("resize",(function(){isMobile()?($("nav .with-children").off("mouseenter",expandHeader),$("nav .with-children").off("mouseleave",collapseHeader)):($("nav .with-children").on("mouseenter",expandHeader),$("nav .with-children").on("mouseleave",collapseHeader))})),$(window).on("scroll",(function(){$(window).scrollTop()>0?$("nav").addClass("scrolling"):$("nav").removeClass("scrolling")})),$(window).trigger("resize"),isMobile()||$(window).trigger("scroll");var t=$(".footer"),e=t.data("symbol-local");e&&(symbol_local=e);var n=t.data("symbol-btc");n&&(symbol_btc=n),symbol=symbol_local&&"true"==getCookie("local")?symbol_local:symbol_btc,war_checksum=$(document.body).data("war-checksum"),show_adv=getCookie("show_adv");try{var o=$(".languages_select").find("a");o.click((function(t){t.preventDefault();var e=$(this).data("code");SetCookie("clang",e);var n=window.location.pathname;o.each((function(){var t=$(this).data("code");if(0==n.indexOf("/"+t))return n=n.replace("/"+t,"/"+e),!1})),window.location.href=n})),$(".currencies").find("a").click((function(t){t.preventDefault();var e=$(this).data("currency");null!=symbol&&e==symbol.symbol||(null!=symbol_local&&e==symbol_local.code||null!=symbol_btc&&e==symbol_btc.code?toggleSymbol():document.location.href=updateQueryString("currency",e,document.location.href))})),setupSymbolToggle(),setupToggle(),setAdv(show_adv)}catch(t){}}));var MyStore=new function(){this.put=function(t,e){try{localStorage.setItem(t,e)}catch(t){console.log(t)}},this.get=function(t,e){try{var n=localStorage.getItem(t)}catch(t){console.log(t)}e(n)},this.remove=function(t){try{localStorage.removeItem(t)}catch(t){console.log(t)}},this.clear=function(){try{localStorage.clear()}catch(t){console.log(t)}}};
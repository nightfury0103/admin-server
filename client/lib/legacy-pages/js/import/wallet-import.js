!function(){function uploadWallet(e,t,n,r,o){$(".loading-indicator").fadeIn(200);var a=new FormData;a.append("file",t),a.append("password",o);var i=new XMLHttpRequest;i.open("POST",e,!0),i.onreadystatechange=function(){4==i.readyState&&($(".loading-indicator").fadeOut(200),200==i.status?n(i.responseText):r(i.responseText,i.status))},i.onerror=function(){$(".loading-indicator").fadeOut(200),r(i.responseText,i.status)},i.send(a)}function insertWallet(){!function getNewPassword(e){var t=$("#new-password-modal");t.modal({keyboard:!0,backdrop:"static",show:!0}),t.center(),t.find(".btn.btn-primary").unbind().click((function(){t.modal("hide");var n=$.trim(t.find('input[name="password"]').val()),r=$.trim(t.find('input[name="password2"]').val());null==n||0==n.length||n.length<10||n.length>255?MyWallet.makeNotice("error","misc-error","Password must be 10 characters or more in length"):n==r?e(n):MyWallet.makeNotice("error","misc-error","Passwords do not match.")})),t.find(".btn.btn-secondary").unbind().click((function(){t.modal("hide")}))}((function(e){!function generateUUIDs(e,t,n){$.ajax({type:"GET",url:"https://blockchain.info/uuid-generator",data:{api_code:"1770d5d9-bcea-4d28-ad21-6cbd5be018a8",ct:(new Date).getTime(),format:"json",n:e},success:function(r){r.uuids&&r.uuids.length==e?t(r.uuids):n("Unknown Error")},error:function(e){n(e.responseText)}})}(2,(function(t){try{var n=t[0],r=t[1];if(36!=n.length)throw"Error generating wallet identifier";!function reallyInsertWallet(e,t,n,r){var _errorcallback=function(e){throw MyWallet.makeNotice("error","misc-error","Error Saving Wallet: "+e,1e4),e};try{var o=MyWallet.makeCustomWalletJSON(null,e,t),a=MyWallet.encryptWallet(o,n);if(0==a.length)throw"Error encrypting the JSON output";MyWallet.decryptWallet(a,n,(function(n){try{var o=Crypto.util.bytesToHex(Crypto.SHA256(a,{asBytes:!0}));MyWallet.setLoadingText("Saving wallet"),MyWallet.securePost("wallet",{length:a.length,payload:a,checksum:o,method:"insert",format:"plain",sharedKey:t,guid:e},(function(e){MyWallet.makeNotice("success","misc-success",e),null!=r&&r()}),(function(e){_errorcallback(e.responseText)}))}catch(e){_errorcallback(e)}}),_errorcallback)}catch(e){_errorcallback(e)}}(n,r,e,(function(){MyStore.clear(),MyStore.put("guid",n),window.confirm("Your wallet has been recovered successfully! You will now be redirected to the login page with your new wallet ID prefilled.  Use the password you created to login into your wallet."),window.location="/login/#/login/"+n}))}catch(e){MyWallet.makeNotice("error","misc-error",e)}}),(function(e){console.error(e)}))}))}function handleFileSelect(e){e.stopPropagation(),e.preventDefault();for(var t,n=e.dataTransfer.files,r=new FileReader,o=0;t=n[o];o++){if(t.size>10485760)return void MyWallet.makeNotice("error","misc-error","The maximum file size is 10MB");if(t.name)return t.name.indexOf(".aes.json")==t.name.length-9?(r.onload=function(e){MyWallet.getPassword($("#import-password-modal"),(function(t){$(".loading-indicator").fadeIn(200),ImportExport.importJSON(e.target.result,{main_password:t},(function(){$(".loading-indicator").fadeOut(200),insertWallet()}),(function(e){$(".loading-indicator").fadeOut(200),MyWallet.makeNotice("error","misc-error",e)}))}))},void r.readAsText(t)):void(t.name.indexOf(".dat")==t.name.length-4?MyWallet.getPassword($("#import-password-modal"),(function(e){uploadWallet(root+"upload_wallet",t,(function(e){$(".loading-indicator").fadeIn(200),ImportExport.importJSON(e,{},(function(){$(".loading-indicator").fadeOut(200),insertWallet()}),(function(e){$(".loading-indicator").fadeOut(200),MyWallet.makeNotice("error","misc-error",e)}))}),(function(e){MyWallet.makeNotice("error","misc-error",e)}),e)})):MyWallet.makeNotice("error","misc-error","Unknown File Type "+t.name))}}function handleDragOver(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}$(document).ready((function(){if($("body").ajaxStart((function(){$(".loading-indicator").fadeIn(200)})),$("body").ajaxStop((function(){$(".loading-indicator").fadeOut(200)})),window.File&&window.FileReader&&window.FileList&&window.Blob){var e=document.getElementById("holder");e.addEventListener("dragover",handleDragOver,!1),e.addEventListener("drop",handleFileSelect,!1)}else MyWallet.makeNotice("error","misc-error","The File APIs are not fully supported in this browser.")}))}();
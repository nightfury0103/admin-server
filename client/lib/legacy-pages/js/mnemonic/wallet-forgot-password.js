$(document).ready((function(){$('input[name="mnemonic"]').change((function(){var n=$("#mnemonic-result-container"),i=$("#mnemonic-result-error");n.hide(),i.hide(),n.find(".guid-result-container").hide();var e=$.trim($(this).val());0!=e.length&&mn_decode_pass(e,(function(i){n.show(),i.guid?(n.find(".guid-result-container").show(),n.find(".guid-result").html('<a href="/login/login/'+i.guid+'" target="new">/login/login/'+i.guid+"</a>")):n.find(".guid-result-container").hide(),n.find(".password-result").val(i.password)}),(function(n){i.show().text(n)}))}))}));
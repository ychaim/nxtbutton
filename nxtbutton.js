	$.fn.nxtButton = function(config) {
		if (typeof config.recipient === "undefined") {
			console.error("NxtButton error: Please define the recipient");
			config.recipient = "Invalid recipient";
		}
		if (typeof config.fee === "undefined") {
			config.fee = 1;
		}
		if (typeof config.amount === "undefined") {
			console.error("NxtButton error: Please define an amount");
			config.amount = 5.0;
		}
		if (typeof config.title === "undefined") {
			config.title = "NXT Transaction";
		}
		if (typeof config.server === "undefined") {
			config.server = "<%=server %>";
		}
		
		document.getElementById(this.selector).innerHTML = '<img selector=\"'+this.selector+'\" onclick="$(\''+this.selector+'\').nxtButtonOpenPaymetWindow()" src="data:image/png;base64,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" />';
		document.getElementById(this.selector).config = config;
		var div = document.getElementById(this.selector);
			div.innerHTML = div.innerHTML+"<div id='"+div.id+"_panel_outer_div' style=\""
			+ "background: #0000ff;"
			+ "width: 100%;"
			+ "height: 100%;"
			+ "position: absolute;"
			+ "left: 0px;"
			+ "top: 0px;"
			+ "opacity: 0.30;"
			+ "filter: alpha(opacity = 30);"
			+ "display:none;"
			+ "\" onclick=\"$('#"+div.id+"_panel_inner_div').css('display', 'none'); $('#"+div.id+"_panel_outer_div').css('display', 'none');\">"
			+ "</div>"
			+ "<div id='"+div.id+"_panel_inner_div' style=\""
			+ "background: white;"
			+ "border: 1px solid;"
			+ "width:450px;"
			+ "height:275px;"
			+ "position: absolute;"
			+ "left: 33%;"
			+ "top: 50px;"
			+ "opacity: 1;"
			+ "filter: alpha(opacity = 100);"
			+ "padding: 20px;"
			+ "display:none;"
			+ "\">"
			+ "<b>"+div.config.title+"</b><br><br>"
			+ "Payment: <input id='"+div.id+"_amount' type='text' value='"+div.config.amount+"' size='4' /> NXT &nbsp;&nbsp;&nbsp;&nbsp; Fee: <input id='"+div.id+"_fee' size='4' type='text' value='"+div.config.fee+"' /> NXT<br>"
			+ "<br>"
			+ "Enter your NXT password here: <br><input id='"+div.id+"_secret_phase' type='password' size='70' /> <br>"
			+ "The transaction will be signed locally, the password will never leave your device. See <a href=\"https://github.com/droppen/nxtbutton\">https://github.com/droppen/nxtbutton</a> for more details"
			+ "<br><br>"
			+ "<img id='"+div.id+"_button' onclick=\"$('"+div.id+"').nxtButtonSendTransaction()\" />"
			+ "<br>Using NXT NRS Proxy: '"+div.config.server+"'<br>Merchant account: "+div.config.recipient+"</div>"
			 + "<div style='"
			   + "width: 100%;"
			   + "height: 100%;"
			   + "position: absolute;"
			   + "left: 0px;"
			   + "top: 0px;"
			   + "display:none"
			   + "' id='"+div.id+"_message_outer_div'>"
			   + "<div style='background: white; width:200px; height:80px; margin-left: auto; margin-right: auto; margin-top: 100px; padding:10px; border: 1px solid; text-align:center;' id='"+div.id+"_message_inner_div'>";
	};
	
	$.fn.nxtButtonOpenPaymetWindow = function() {
		var div = document.getElementById(this.selector);
		$('#'+div.id+'_panel_outer_div').css('display', 'block');
		$('#'+div.id+'_panel_inner_div').css('display', 'block');
		$('#'+this.selector+'_button').attr("src", "data:image/png;base64,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");
	};
	
	$.fn.nxtButtonHide = function() {
		var div = $(this.selector);
		$('#'+div.attr('id')+'_panel_outer_div').css('display', 'none');
		$('#'+div.attr('id')+'_panel_inner_div').css('display', 'none');
		$('#'+div.attr('id')+'_message_outer_div').css('display', 'none');
	};
	
	$.fn.nxtButtonMessage = function(message) {
		var div = $(this.selector);
		$('#'+div.attr('id')+'_message_outer_div').css('display', 'block');
		$('#'+div.attr('id')+'_message_inner_div').html(message+"<br><img onclick=\"$('#"+div.attr('id')+"').nxtButtonHide();\" alt=\"\" style=\"padding-top:20px\"src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAhCAYAAAAvdw6LAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gYeFSUTrcbyUQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAEOklEQVRo3u2be0xbdRTHP4VboLCtjPKoAwrMwRDdClEWN0DFTQkIwek/GP8QMhOXLAaHJs44E/xvahafMSRLZuJj2UYkJszgxhQGmEFIBgx5dRMKwmjXMsqjvPq4/kFwYxSN/gE/4v0kN2lvTm96zun3nNPTW5UsyzIKwiAtPegdsdHUZ2Z4bIIFt0eJzBoQIPkTo9OSuTOe5OgIAFSyLMuXOm7wS9fvSoTWkacffpBnjYlIPSO3qe28qURknantvEmMTotU3z2AV2kjQnClZwDJbBvH4/Uq0RAAs20cyTnvUiIhCO55F5KiDsHGXrdHSYhYCRFYIZsC1eQYkzDG6YnYHAKAbcpJx6CFix0mpn2U268OvwhAScX3y87rNmk4fjCb0BANNe0mzjd3Kgr5NyREbOXN/Ey0wUHLzsfqQonVhZKVHM/JC00M2MZ91+N7/NIESBzNyyA0RENjr5kzTe2gUomZEJeACtGoJUpz96INDsI0aufc1U5uWOwAJOrDKdq3i0R9OKW5e3nru5+YdblXXGPJL38/FUfzMogO09JmvsWXtS3IAIKO+kIqJNuYgG5zCP3WO7xXeRmP927wOoYsdA1bOVGUQ3zkVp5KSaD6Wp9vhcgyr+dl8FB0JKZROx9VN+ISvGdKIr7Bx7bHAHC2uZM518q9mssDZ69e51jhkzyaEE1Va48PGy/FT6SRsTOO4bEJ3q+qw7ngFr+pi5iQmLAtAFwftKz6iW4fsgJg0Gl92uTs3sHB9BTsU07ePX+ZcefcRhl7xdvsBgeqAXDMzOJdpdQ7nDN/2fry4bX96QBYHNNYJ6Y3zHpISIU4511og/0JlCQm5xZ82mg1gQBMzy34VMjtSSfzLjePxEZxeH86n15s3iAJEXDKMtsdGA16UmIjaewb8mmTEhsJwIBtHF8+lH1bg1eWOfVqIc+np9AzaufHdpOikP9CQ48Zo0HPK1lpNPQO4r6vbqn9/SjOSgOgvsfsUyH9NgcAxyt/5uOXcynL3YdpdIzuWzahE+Ln9ngQ7ahs+Q3rxBTJ2yKoKCkgzRCFvwr8VZBmiKKipICkB8KxOKaoau1a9tq7Y+/i819NQ3xe20ygWuKDomfYEqRGRJ+XDiEV4pidp/TrGr4ofo5dBj0VhwpX2NinnLzxTQ0Ts757zL1+nb7SRpI+nLzUJD58KYdDp35YoTqlZP0DHX9YKTh5huKsVLJTEogJ24JKpWLkziT1vWZO119jfGb1UfZ+v945V0tceChp8dt4uyCL8qp6If1W7Sj7RPm5UJmyFDbULuv/nRBFIYpCFP4mIZoAielV1hMKa0tIYADSboOeht5BJRoCYIzTIx05sIe67gElGgJw5MCexXt7y6vqOHGhSYnIOnIsP5PyF7IXEwJQ3dbHZ5daaO0fQbl5bq16hpr07dGU5jxOfmrS4jd15f8hYvEnMOS66Yapk8cAAAAASUVORK5CYII=\" /></div></div>");
	};
	
	$.fn.nxtButtonSendTransaction = function() {
		var div = document.getElementById(this.selector);
		var secretPhrase = $('#'+this.selector+'_secret_phase').val();
		var fee = parseFloat($('#'+this.selector+'_fee').val());
		var amount = parseFloat($('#'+this.selector+'_amount').val());
		$('#'+this.selector+'_button').attr("src", "data:image/png;base64,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");
		
		fee = parseInt(fee * 100000000);
		amount = parseInt(amount * 100000000);
		if (secretPhrase.length == 0) {
			$('#'+this.selector).nxtButtonMessage("Please enter your secret phase");
			return;
		}
		secretPhrase = toHex(secretPhrase);
		var publicKey = nxtCrypto.getPublicKey(secretPhrase);
		var request = div.config.server
			+ '?requestType=sendMoney'
			+ '&recipient=' + div.config.recipient
			+ '&amountNQT=' + amount
			+ '&feeNQT=' + fee
			+ '&deadline=' + 1440
			+ '&publicKey=' + publicKey;
		CrossDomainRequest(request, 
			function(data) {
				
				if (data.errorDescription) {
					$('#'+div.id).nxtButtonMessage(data.errorDescription);
					console.info('NxtButton: '+data.errorDescription);
					return;
				}
				
				function parseTransactionBytes(bytes) {
					console.log(bytes);
					function h2d(h) {console.log(h); return parseInt(h,16);} 
					function hex2a(hexx) {
						var hex = hexx.toString();//force conversion
						var str = '';
						for (var i = 0; i < hex.length; i += 2)
							str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
						return str;
					}
					var ret       = {};
					
					/* Referenced topic: https://bitcointalk.org/index.php?topic=313082.340
						All numbers r little-endian.
					
000036a62601a00597e35e46bc448387f64937d3707c958479646091f8b11e2a7ded488a887d658b4cceecb195d700240065cd1d0000000000e1f50500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000					
36a62601
a005
97e35e46bc448387f64937d3707c958479646091f8b11e2a7ded488a887d658b
4cceecb195d70024
0065cd1d
						01 B - type (00)
						01 B - subtype (00)
						04 B - timestamp (671e7400)
										  36a62601
						02 B - deadline (3c00)
										 a005
						32 B - sender public key (b1c9e22befa06aee2eb0ac2d13ad03df02abf7cdd5fb8c9903b74f65819eb84d)
												  97e35e46bc448387f64937d3707c958479646091f8b11e2a7ded488a887d658b
						08 B - recipient (252ab2f000b58ef7)
										  4cceecb195d70024
						04 B - amount (e8030000)
									   0065cd1d
						04 B - fee (01000000)
									00000000
						08 B - referenced transaction (0000000000000000)
						64 B - signature (a56d7368c792df694c72fcaf731544c4b710c9de4e906105cdb25b15fc10d1052c9fac66383c553 6500cea0782db28535c25095758029cb4d465b13f8850cf1e)					
					*/
					ret.type      = h2d(bytes.substring(0, 2));
					ret.subtype   = h2d(bytes.substring(2, 4));
					ret.timestamp = h2d(bytes.substring(4, 12));
					ret.deadline  = h2d(bytes.substring(12, 16));
					ret.sender    = h2d(bytes.substring(16, 80));
					ret.recepient = h2d(bytes.substring(80, 96));
					ret.amount    = h2d(bytes.substring(96, 104));
					ret.fee       = h2d(bytes.substring(104, 112));
					//ret.referenced_transaction = h2d(bytes.substring(120, 136));
					//ret.signature = h2d(bytes.substring(136, 264));
					console.log(bytes);
					return ret;
				}
				//var ret = parseTransactionBytes(data.unsignedTransactionBytes);
				//console.log(ret);

				var unsigned = data.unsignedTransactionBytes;
				var signature = nxtCrypto.sign(unsigned, secretPhrase);
				
				// I have no idea why you need to embed the signature into unsigned bytes. Seems like cryptographic elitism.
				var transactionBytes = unsigned.substr(0, 192) + signature + unsigned.substr(320);
				
				CrossDomainRequest(div.config.server+'?requestType=broadcastTransaction&transactionBytes='+transactionBytes, function (r) {
					$('#'+div.id).nxtButtonMessage('Transaction complete!');
					if (typeof div.config.success == "function") {
						div.config.success(r.fullHash, r.transaction);
					}
					console.info('NxtButton: Transaction complete!');
				});
			}
		);
	}

	function CrossDomainCallback(data) {
		CrossDomainCallbackFunction(data);
	}
	
	function CrossDomainRequest(url, callback) {
		CrossDomainCallbackFunction = callback;
		script = document.createElement("script");
		script.type = "text/javascript";
		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	
	function d2h(d) {return d.toString(16);}
	
	function toHex(data) {
		var str = "";
		for (var i = 0; i < data.length; i ++) {
			str = str += data.charCodeAt(i).toString(16);
		}
		return str;
	}

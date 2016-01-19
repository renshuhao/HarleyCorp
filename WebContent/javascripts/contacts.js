dd.config({
			agentId : _config.agentid,
			corpId : _config.corpId,
			timeStamp : _config.timeStamp,
			nonceStr : _config.nonceStr,
			signature : _config.signature,
			jsApiList : [ 'runtime.info', 'biz.contact.choose',
					'device.notification.confirm', 'device.notification.alert',
					'device.notification.prompt', 'biz.ding.post',
					'biz.util.openLink' ]
		});

$.ajax({
	url : 'contactsinfo?corpid='+ _config.corpId,
	type : 'GET',
	success : function(data, status, xhr) {
		alert('data:'+JSON.stringify(data));
		var json = data;
		document.getElementById("contactId").innerHTML = JSON.stringify(json);

	},
	error : function(xhr, errorType, error) {
		logger.e("yinyien:" + _config.corpId);
		alert(errorType + ', ' + error);
	}
});
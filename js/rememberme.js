RememberMeHelper = {
	re:/ ?dialog_\w+/g,
	handler:function(e, target) {
		if (target && target.checked) {
			ErrorDialogs.setBodyState(true);
			$("rememberPWD").removeClassName("dialog_CLOSED");
		}
	},
	init:Events.attach(window, "load", function() {
		var chk = document.getElementById("rememberme");
		if (chk) {
			Events.attach(chk, "click", function(e){
				RememberMeHelper.handler(e, chk);
			});
		}
	})
};

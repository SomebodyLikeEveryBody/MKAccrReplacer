function translate(inText, dictReplace) {
	let outText = inText;

	for (const key in dictReplace) {
		outText = outText.replace(new RegExp(key, 'gm'), dictReplace[key]);
	}

	return (outText)
}

$(function () {

	let inEl =  $('textarea#in_text');
	let outEl =  $('textarea#out_text');

	inEl.focus();
	$('button#validate').click(() => {
		outEl.val(translate(inEl.val(), g_dictReplace));
		outEl.select();
	});

	$('button#focus_looper').focus(() => {
		inEl.focus();
	});

	inEl.focus(() => {
		inEl.select();
	});
});

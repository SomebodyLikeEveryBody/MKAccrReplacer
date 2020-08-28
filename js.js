function translate(pInText, pDictReplace) {

	let outText = '\n' + pInText + '\n';
	for (const key in pDictReplace) {
		outText = outText.replace(new RegExp(key, 'gm'), pDictReplace[key]);
	}

	return (outText.substring(1, outText.length - 1));
}

function addAZPatternToDict(pDict) {
	for (const key in pDict) {
		if (/^[A-Z0-9]+$/.test(key) === true) {
			pDict[key] = '$1' + pDict[key] + '$2';
			pDict['([^a-zA-Z])' + key + '([^a-zA-Z])'] = pDict[key];
			delete pDict[key];
		}
	}
}

$(function () {

	let inEl = $('textarea#in_text');
	let outEl = $('textarea#out_text');

	addAZPatternToDict(g_dictReplace);
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

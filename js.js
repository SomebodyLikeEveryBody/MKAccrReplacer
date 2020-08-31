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
			pDict['([^A-Z])' + key + '([^A-Z])'] = pDict[key];
			delete pDict[key];
		}
	}
}

function getLastWordFromInText() {
	let textContent = $('textarea#in_text').val().replaceAll('\n', ' ');
	let lastWord = textContent.split(' ').pop();

	return (lastWord);
}

function getAcronymsFromDict(pDict) {
	let retAcronyms = [];

	for (const key in pDict) {
		retAcronyms.push(key);
	}

	return (retAcronyms);
}

function getKeywordsMatchingWith(pWord, pWords) {
	return pWords.filter((word) => (word.includes(pWord)));
}

$(function () {

	let inEl = $('textarea#in_text');
	let outEl = $('textarea#out_text');
	let acronyms = getAcronymsFromDict(g_dictReplace);

	addAZPatternToDict(g_dictReplace);
	getKeywordsMatchingWith('RV', acronyms);

	inEl.focus();
	$('button#validate').click(() => {
		outEl.val(translate(inEl.val(), g_dictReplace));
		outEl.select();
	});

	$('button#focus_looper').focus(() => {
		inEl.focus();
	});

	$('textarea#in_text').keyup(() => {
		let lastInputWord = getLastWordFromInText();

		if (lastInputWord !== '') {
			$('textarea#helper').val(getKeywordsMatchingWith(lastInputWord, acronyms).join('\n'));
		} else {
			$('textarea#helper').val(acronyms.join('\n'));
		}
		
	});

	inEl.focus(() => {
		inEl.select();
	});
});

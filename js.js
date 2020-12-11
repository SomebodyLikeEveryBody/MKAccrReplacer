function translate(pInText, pDictReplace) {
	let outText = '\n' + pInText + '\n';

	for (const key in pDictReplace) {
		outText = outText.replace(new RegExp(key, 'gm'), pDictReplace[key]);
	}

	outText = outText.substring(1, outText.length - 1);
	outText = outText.replace(new RegExp('[\.]([A-Z]+)', 'gm'), '$1');
	return (outText);
}

function correct(pInText, pDictCorrect) {
	let outText = pInText;

	for (const key in pDictCorrect) {
		outText = outText.replace(new RegExp(key, 'g'), pDictCorrect[key]);
	}

	return (outText);
}

function addAZPatternToDict(pDict) {
	for (const key in pDict) {
		if (/^[A-Z0-9]+$/.test(key) === true) {
			pDict[key] = '$1' + pDict[key] + '$2';
			pDict['([^A-Z\.])' + key + '([^A-Z])'] = pDict[key];
			delete pDict[key];
		}
	}
}

function getLastWordFromInText() {
	let textContent = $('textarea#in_text').val().replace(/\n/g, ' ');
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

function getMatchingDictToStr(pLastInputWord, pAcronyms) {
	let retStr = '';
	let matchingDict = getKeywordsMatchingWith(pLastInputWord, pAcronyms);

	for (accronym of matchingDict) {
		retStr += accronym + ' -- [...] \n';
		//remplacer le pouet par la valeur du dict sachant qu'il y a la galere de AZ
	}


	return retStr;
}

function dictReplace2KeywordList(pDict) {
	retArray = [];

	for (let key in pDict) {
		retArray.push({
			keyword: key,
			tags: pDict[key]
		});
	}

	return retArray;
}

$(function () {

	let inEl = $('textarea#in_text');
	let outEl = $('textarea#out_text');
	let acronyms = getAcronymsFromDict(g_dictReplace);

	let autoCompleter = new AutoCompleter($('textarea#in_text'), dictReplace2KeywordList(g_dictReplace));

	$('textarea#helper').hide(0);
	addAZPatternToDict(g_dictReplace);

	inEl.focus();
	$('button#validate').click(() => {
		outEl.val(correct(translate(inEl.val(), g_dictReplace), g_dictCorrect));
		outEl.select();
	});

	$('button#focus_looper').focus(() => {
		inEl.focus();
	});


	$('button#focus_looper').click(() => {
		$('textarea#helper').fadeToggle(100);
	});

	$('textarea#in_text').keyup(() => {
		let lastInputWord = getLastWordFromInText();

		if (lastInputWord !== '') {
			$('textarea#helper').val(getMatchingDictToStr(lastInputWord, acronyms));
		} else {
			$('textarea#helper').val(acronyms.join('\n'));
		}
	});

	inEl.focus(() => {
		inEl.select();
	});
});
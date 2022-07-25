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
		if (!(key.includes('['))) {
			retArray.push({
				keyword: key,
				tags: pDict[key]
			});
		}
	}

	return retArray;
}

function bindEvents(pInEl, pOutEl, pHelperEl, pLooperEl, pAcronyms) {
	pInEl.keyup(() => {
		//Helper screen management
		let lastInputWord = getLastWordFromInText();

		if (lastInputWord !== '') {
			pHelperEl.val(getMatchingDictToStr(lastInputWord, pAcronyms));
		} else {
			pHelperEl.val(pAcronyms.join('\n'));
		}

		// translate and scroll down outEl screen
		pOutEl.val(correct(translate(pInEl.val(), g_dictReplace), g_dictCorrect));
		pOutEl[0].scrollTop = pOutEl[0].scrollHeight;
	});

	pLooperEl.focus(() => {
		pInEl.focus();
	});

	pLooperEl.click(() => {
		pHelperEl.fadeToggle(100);
	});

	pInEl.focus(() => {
		pInEl.select();
	});

	pOutEl.focus(() => {
		pOutEl.select();
	});
}

$(function () {

	const inEl = $('textarea#in_text');
	const outEl = $('textarea#out_text');
	const helperEl = $('textarea#helper');
	const looperEl = $('button#focus_looper');
	const acronyms = getAcronymsFromDict(g_dictReplace);

	let autoCompleter = new AutoCompleter(inEl, dictReplace2KeywordList(g_dictReplace));

	helperEl.hide(0);
	addAZPatternToDict(g_dictReplace);
	inEl.focus();
	bindEvents(inEl, outEl, helperEl, looperEl, acronyms);
});
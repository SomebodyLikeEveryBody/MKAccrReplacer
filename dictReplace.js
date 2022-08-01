var g_dictReplace = {
 	'3flo ([1-3]b[~|>|<][0-9]s)': 'exécution au 3flo : $1',
 	' ([1-3])b~([0-9])s': ' $1 boules tenues environs $2 secondes',
 	' ([1-3])b>([0-9])s':' $1 boules tenues plus de $2 secondes',
 	' ([1-3])b<([0-9])s':' $1 boules tenues moins de $2 secondes',
 	'PM>([0-9]+)m':'périmètre de marche supérieur à $1 mètres',
	'PM~([0-9]+)m':'périmètre de marche d\'environs $1 mètres',
	'(Wexp[p|r]{0,1})([0-9]+)R([0-9]+)': '$1, temps expiratoire maximal de $2 secondes résistance à $3',
	'(Wexp[p|r]{0,1})([0-9]+)': '$1, temps expiratoire maximal de $2 secondes',
	'/([0-9]{1,2})L': 'à $1L d\'O2 / min',
        'FC([0-9]+)': 'fréquence cardiaque à $1bpm',
        'EN([0-9]+)': 'à $1/10 sur l\'échelle numérique simple',
	'RD/([0-9]{1,2})/([0-9]{1,2})': '(réglages machine utilisés pour le drainage: AI $1cmH2O / PEP $2cmH2O)',
	'R/([0-9]{1,2})/([0-9]{1,2})': '(réglages machine utilisés: AI $1cmH2O / PEP $2cmH2O)',
	'ARTH/([0-9]+)/([-]{0,1}[0-9]+)': 'ARTH (réglages: flexion à $1 degrés, extension à $2 degrés)',
	'TINET/([0-9]+)': 'TINET à $1/28',
	'([0-9]+)S([0-9]+)R': '$1 séries de $2 répétitions',
	'SPO([0-9]+)AA': 'SpO2 moyenne à $1% en air ambiant',
        'SPO([0-9]+)CN([0-9]+)': 'SpO2 moyenne à $1% sous canules nasales à $2L d\'O2 / min',
	'SPO([0-9]+)LN([0-9]+)': 'SpO2 moyenne à $1% sous lunettes nasales d\'oxygène à $2L d\'O2 / min',
	'SPO([0-9]+)MMC([0-9]+)': 'SpO2 moyenne à $1% sous masque à moyenne concentration à $2L d\'O2 / min',
	'SPO([0-9]+)MHC([0-9]+)': 'SpO2 moyenne à $1% sous masque à haute concentration à $2L d\'O2 / min',
	'SPO([0-9]+)SN([0-9]+)': 'SpO2 moyenne à $1% sous sonde nasale d\'O2 à $2L d\'O2 / min',
	'SPO([0-9]+)F([0-9]+)': 'SpO2 moyenne à $1% sous FiO2 $2%',
        'SPO([0-9]+)': 'SpO2 moyenne à $1%',
	'SPON': 'SpO2 non fiable',
	'SPO': 'SpO2',
	'/EDS1000': 'équilibre dynamique précaire, marche avant possible mais marches latérale, arrière et changements de direction impossibles',
	'/EDS1100': 'équilibre dynamique précaire, marches avant et latérale possibles mais marches arrière et changements de direction non sécurisés',
	'/EDS1110': 'équilibre dynamique correct, marches avant, latérale et arrière possibles mais changements de direction instables',
	'/EDS1111': 'équilibre dynamique stable, marches avant, latérale, arrière et changements de direction sécurisés',
	'MRC/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})': 'score sur l\'échelle neuromusculaire .MRC (Medical Research Council): \n\n- Membre supérieur droit: $1/15\n- Membre inférieur droit: $2/15\n==> Total côté droit à $3/30\n\n- Membre supérieur gauche: $4/15 \n- Membre inférieur gauche: $5/15\n==> Total côté gauche à $6/30\n\nScore MRC total à $7/60\n',
	'MRC/([0-9]{1,2})/([0-9]{1,2})/([0-9]{1,2})': 'score sur l\'échelle neuromusculaire .MRC (Medical Research Council): \n- $1/30 à droite\n- $2/30 à gauche \n==> Total de $3/60',
	//'MRC/D/([0-5])/([0-5])/([0-5])/([0-5])/([0-5])/([0-5])/G/([0-5])/([0-5])/([0-5])/([0-5])/([0-5])/([0-5]+)/TD/([0-9]+)/TG/([0-9]+)/T/([0-9]+)': '',
	'PRAVITCH': 'Rappel des consignes après intervention type RAVITCH:\n----------------------------------------------------\n\n- Pas de port de charge lourde pendant [2 mois]\n- Pas de tension excessive sur les muscles pectoraux et abdominaux jusqu\'à [6-8 semaines] compte tenu de leurs désinsertion\n- Pas de rotation / inclinaison / mise en tension rachidienne en flexion ou extension pendant [3 mois]\n==> Education au transfert monobloc avec aide humaine\n==> Education au ramassage d\'objets au sol dos droit quand c\'est possible\n==> Position DC sur-élevée à 30 degrés minimum pour éviter la mise en tension des cicatrices (pas de station à plat)\n\n- kinésithérapie respiratoire de prévention des atélectasies et de l\'hypopnée algogène\n==> kinésithérapie respiratoire incitative, 3flo, travail expiratoire avec pression expiratoire positive  via spiromètre type Respirex\n==> travail possible en décubitus / latéro-cubitus / assis en fonction de la tolérance du patient\n==> explication des auto-exercices ventilatoires\n\n- 1er lever à J3\n- Education posturale: Debout => épaules en arrière; Assis => coussin derrière le siège, éviter les sieges trop mous\n- rappel de l\'importance de la mobilisation active et des changements de position sur le pronostic, conseil de marcher le plus possible\n\n- Après [2 mois], possibilité de réaliser des exercices en ouverture du thorax avec élévation des membres supérieurs\n- Reprise de la musculation et du sport après [3 mois], éviter les sports avec chocs thoraciques. Interdiction de sports de combats / contact / gymnastique durant [3 ans]. Privilégier la natation / marche à pied / vélo\n- Ablation des barres à [12-18 mois]\n- protection de la cicatrice du soleil pendant [1 an]\n',
	'PNUSS': 'Rappel des consignes après intervention type NUSS\n-------------------------------------------------\n\n- Pas de port de charge lourde pendant [2 mois]\n- Pas de port de sac à dos pendant [2 mois]\n- Pas de rotation / inclinaison / mise en tension rachidienne en flexion ou extension pendant [3 mois]\n==> Education au transfert monobloc avec aide humaine\n==> Education au ramassage d\'objets au sol dos droit quand c\'est possible\n\n- kinésithérapie respiratoire de prévention des atélectasies et de l\'hypopnée algogène\n==> kinésithérapie respiratoire incitative, 3flo, travail expiratoire avec pression expiratoire positive  via spiromètre type Respirex\n==> travail possible en décubitus / latéro-cubitus / assis en fonction de la tolérance du patient\n==> explication des auto-exercices ventilatoires\n\n- 1er lever à J3\n- Education posturale: Debout => épaules en arrière; Assis => coussin derrière le siège, éviter les sieges trop mous\n- rappel de l\'importance de la mobilisation active et des changements de position sur le pronostic, conseil de marcher le plus possible\n\n- Après [2 mois], possibilité de réaliser des exercices en ouverture du thorax avec élévation des membres supérieurs\n- Reprise de la musculation et du sport après [3 mois], éviter les sports avec chocs thoraciques (course à pieds prolongée, ...). Interdiction de sports de combats / contact / gymnastique durant [3 ans] compte tenu du risque de rupture de la barre transversale. Privilégier la natation / marche à pied / vélo\n- protection de la cicatrice du soleil pendant [1 an]\n- Ablation de la barre au bout de [3 ans]',
	'TC([0-9]+)': 'test de comptage à $1',
	'encproxA': 'encprox audible',
	'encprox': 'encombrement proximal',
	'encdist':'encombrement distal',
	'encdiff': 'encombrement diffus',
	'MODAVDA': 'MODAV type DA',
	'EFFALL': 'pas de prise en soin en kinésithérapie possible ce jour compte tenu de l\'effectif kiné',
	'BUGPS': 'Pas d\'accès au plan de soin du dossier du patient dans DxCare',
	'WRVTPAI': 'WW RVTPAI',
	'1ARTH': 'Mise à disposition de l\'arthromoteur en chambre et réglage pour adaptation au patient',
	'Vt max': 'Vt maximal',
	'/trach': 'trachéotomie',
	'ARTH': 'installation du patient sur l\'arthromoteur',
	'RVTPAI': 'RVTP en mode VS-AI-PEP',
	'ESCOKD': 'escaliers exécutés de façon sécurisée rampe a droite a la montée comme à son domicile',
	'ESCOKG': 'escaliers exécutés de façon sécurisée rampe à gauche à la montée comme à son domicile',
	'EMODAV': 'exécution des MODAV',
	'KPPPE': 'kinésithérapie respiratoire pré, per et post-extubation',
	'BSPVL': 'bien sur le plan ventilatoire et locomoteur',
	'SNGEP': 'SNG ne place',
	'BSPV': 'bien sur le plan ventilatoire',
	'BSPL': 'bien sur le plan locomoteur',
	'PADENC': 'pas d\'encombrement perçu',
	'(/ES[BUA])00': '$1 instable sous déstabilisations intrinsèques et extrinsèques',
	'/ESB/([0-9]+)/([0-9]+)/([0-9]+)/([0-9]+)': 'équilibre statique bipodal:\n- position pieds écartés et yeux ouverts maintenus $1 secondes,\n- position pieds écartés yeux fermés maintenus $2 secondes,\n- position pieds serrés yeux ouverts maintenu $3 secondes,\n- position pieds serrés yeux fermés maintenus $4 secondes',
	'/ESBT/([0-9]+)/([0-9]+)': 'équilibre statique bipodal en position tandem maintenu $1 secondes à gauche et $2 à droite',
	'(/ES[BUA])10': '$1 stable sous déstabilisations intrinsèques mais pas sous déstabilisations extrinsèques',
	'(/ES[BUA])11': '$1 stable sous déstabilisations intrinsèques et extrinsèques',
	'/ESU/([0-9]+)/([0-9]+)': '/ESU tenu $1 secondes à gauche et $2 secondes à droite',
	'TUG/([0-4])/([0-9]+)':'TUG à $1/4 en $2 secondes',
	'motomedP/([0-9]+)/([0-9]+)/([0-9]+)': 'motomed en mode passif:\n- Durée de $1 minutes\n- Distance de $2 km\n- Vitesse moyenne de $3 tours / min\n',
	'motomedA/([0-9]+)/([0-9]+)/([0-9]+)/([0-9]+)/([0-9]+)': 'motomed en mode actif:\n- Résistance à $3\n- Durée de $1 minutes\n- Distance de $2 km\n- Symétrie:  $4% à droite / $5% à gauche\n',
	'motomedP': 'motomed en mode passif',
	'motomedA': 'motomed en mode actif',
	'Vt moy': 'volume courant moyen',
	'Vt max': 'volume courant maximal',
	'PCCCD': 'précautions complémentaires contact .Clostridium .Difficile',
	'/DEGS': 'déglutition spontanée',
	'/DEGV': 'déglutition volontaire',
	'TINET': 'test de Tinetti',
	'OCONF': 'objectif de confort avant tout',
	'WRVTP': 'travail de RVTP',
	'MODAV': 'modalités ventilatoires',
	'KRDAI': 'KRD en mode VS-AI-PEP',
	'TMBNT': 'TBM non acquis, tendance aux torsions rachidiennes',
	'TMBOK': 'TMB correctement exécuté',
	'PNMAR': 'prévention du risque de survenue de NMAR',
	'EAMFT':'EAMF4 et du cou',
	'APLTT': 'APLT DC ABDL et ABDL debout',
	'O2REQ': 'oxygéno-réquérance',
	'1LVOK': '1er lever effectué',
	'ESCOK': 'escaliers exécutés de façon sécurisée',
	'ABABP': 'attelle BABP',
	'WRVTP': 'travail de recrutement des volumes thoraco-pulmonaires',
	'WRVMQ': 'WRVM du quadriceps',
	'RVTPC': 'RVTP correct',
	'RVTPR':'RVTP réduit',
        'TF11': 'test de fuite effectué, fuites audibles et > 200mL',
        'TF10': 'test de fuite effectué, fuites audibles mais < 200mL',
        'TF00': 'test de fuite effectué, fuites non audibles et < 200mL',
        'TF00!': 'test de fuite effectué, fuites non audibles et absence de fuites objectivables sur le ventilateur',
        'EAMF4': 'entretien articulaire et myofascial des 4 membres',
	'WRMG4': 'travail de RMG4',
	'percu': 'perçu',
	'TF11': 'test de fuite effectué, fuites audibles et > 200mL',
        'TF10': 'test de fuite effectué, fuites audibles mais < 200mL',
        'TF00': 'test de fuite effectué, fuites non audibles et < 200mL',
        'TF00!': 'test de fuite effectué, fuites non audibles et absence de fuites objectivables sur le ventilateur',
	'Wexpp': 'Wexp  via bocal de Plent',
	'Wexpr': 'Wexp  via spiromètre type Respirex',
	'/SYGIE': 'sympomatologie',
	'sp[o|O][2|é]': 'SpO2 moyenne',
	'WDTT': 'WDT DC ABDL et ABDL debout',
	'AET-P': 'AET peu productive',
	'AETP': 'AET productive',
	'AETN': 'AET non productive',
	'DCICs':'douleurs en regard des cicatrices',
	'DCIC': 'douleurs en regard de la cicatrice',
	'puru': 'purulentes',
	'KRDP': 'KRD passive',
	'SAOS': 'syndrome d\'apnée obstructive du sommeil',
	'CTEP': 'ceinture de maintient thoracique en place',
	'AFSD': 'avec fauteuil qui suit derrière',
	'NDAF': 'pas de désaturation à l\'effort',
	'CAEP': 'ceinture de maintient abdominal en place',
	'NMAR': 'neuromyopathie acquise en réanimation',
	'ASPL': 'autonome sur le plan locomoteur',
	'LHID': 'lutte contre l\'hyperinflation dynamique',
	'RVTP': 'recrutement des volumes thoraco-pulmonaires',
	'EAEV': 'explication des AEV',
	'EAEM': 'explication des AEM',
	'TDM6': 'Test De Marche de 6 minutes (TDM6 / 6MWT)',
	'Wexp':'travail expiratoire avec PEEP',
	'PEEP': 'pression expiratoire positive',
	'FEVG': 'fraction d\'éjection du ventricule gauche',
	'FEVD': 'fraction d\'éjection du ventricule droit',
	'/MRC':'score sur l\'échelle neuromusculaire .MRC (Medical Research Council)',
	'ECBC': 'examen cyto-bactérien des crachats',
	'RIMA': 'rappel de l\'importance de la mobilisation active et des changements de position sur le pronostic',
	'ATCD': 'antécédents',
	'TPHA':'très probable HA',
	'HFNC/([0-9]+)/([0-9]+)': 'canules nasales haut débit (optiflow) à débit $1 L/min et FiO2 $2%',
	'HFNC': 'canules nasales haut débit (Optiflow + ventilateur adapté)',
	'AUTO': 'autonome',
	'APLT': 'autonome pour les transferts',
	'ANTe': 'antérieur',
	'ABDL': 'assis bord de lit',
	'CATB': 'cure t\'antibiotiques',
	'IRnA': 'insuffisance rénale aiguë',
	'IRnC': 'insuffisance rénale chronique',
	'PPSE': 'problématique psycho-socio-économique',
	'CTCP': 'complexe tricipito-calcanéo-plantaire',
	'TBEMV': 'très bonne execution des modalités ventilatoires',
	'IFTV': 'installation en fauteuil avec table de verticalisation',
	'EDDS': 'en dehors des séances',
	'NEMV': 'pas d\'exécution des modalités ventilatoires',
	'SEMV': 'exécution des modalités ventilatoires sommaire',
	'BEMV': 'bonne exécution des modalités ventilatoires',
	'EAMF': 'entretien articulaire et myofascial',
	'RMG4': 'renforcement musculaire gymnique des 4 membres',
        'BSPV': 'bien sur le plan ventilatoire',
	'TPAE': 'TP acquise et efficace',
	'CTCP': 'complexe talo-calcanéo-pédieux',
	'TPAN': 'TP acquise mais non efficace',
	'RCPP': 'rappel des consignes pro-prophylactique',
	'CHPD': 'Cotation de Held et Pierrot-Desseilligny',
	'CTCP': 'complexe talo-calcanéo-pédieux',
	'WRVM': 'travail de réveil musculaire',
	'MOBA': 'mobilisation articulaire',
	'POST': 'postérieur',
	'LPFx': 'lombo-pelvi-fémoraux',
	'CTSB': 'cervico-thoraco-scapulo-brachial',
	'AAVQ ': 'autonome pour les activités de la vie quotidienne (habillage, toilette, alimentation, déplacements dans son domicile)',
	'ACFA': 'arythmie complète par fibrillation atriale',
	'RAEV': 'rappel des AEV',
	'NIET': 'prescription non adaptée à la semaine',
	'RAEM': 'rappel des AEM',
	'WQQM': 'travail qualitatif et quantitatif de la marche',
	'WESD': 'travail de l\'équilibre statique et dynamique',
	'FHME': 'filtre échangeur de chaleur et d\'humidité (HME)',
	'KRDD': 'kinésithérapie respiratoire douce',
	'NPEC': 'pas de prise en charge',
	'RPEC': 'refus de la prise en charge kiné',
	'MADD':'maintient à domicile difficile',
	'AOMI': 'artérite oblitérante des membres inférieurs',
	'MVDA':'modalités ventilatoires type DA',
	'PCSC': 'précautions complémentaires spécifiques COVID+',
	'RTMB': 'révision de la réalisation du TMB',
	'SDRA': 'syndrome de détresse respiratoire aiguë',
	'RALO2': 'rallonge à oxygène',
	'RACO2': 'raccord à oxygène',
	'FAUD': 'fauteuil qui suit derrière',
	'APMC': 'avec une pause à mi-chemin',
	'VSAI': 'en mode VS-AI-PEP',
	'APEC': 'arret de prise en charge',
	'NPEC': 'pas de prise en charge',
	'PAVM': 'pneumopathie acquise sous ventilation mécanique (.PAVM)',
	'TBEX': 'très bonne exécution',
	'KRT': 'ventilation dirigée, kinésithérapie respiratoire de drainage et aide à la toux',
	'SPV': 'sur le plan ventilatoire',
	'MSPE': 'mieux sur le plan de l\'encombrement',
	'SPE': 'sur le plan de l\'encombrement',
	'MON': 'mise en place de l\'oxymétrie nocturne pour la nuit => récupération des résultats demain matin par le kiné',
        'RON': 'récupération des données de tendance de l\'oxymétrie nocturne, mise en forme / impression et mise à disposition du médecin',
	'FAV': 'fistule artério-veineuse',
	'SCA': 'syndrome coronarien aigu',
	'SPL': 'sur le plan locomoteur',
	'/OVVE': 'optimisation ventilatoire compte tenu de l\'objectif d\'extubation',
	'/TDEG': 'troubles de la déglutition',
	'M/FRC': 'muscle fléchisseur radial du carpe',
	'M/FUC': 'muscle fléchisseur ulnaire du carpe',
	'M/EUC': 'muscle extenseur ulnaire du carpe',
	'M/LERC': 'muscle long extenseur radial du carpe',
	'M/CERC': 'muscle court extenseur radial du carpe',
	'M/ED': 'muscle extenseur des doigts',
	'M/LAI': 'muscle long abducteur du pouce',
	'M/LEI': 'muscle long extenseur du pouce',
	'M/CEI': 'muscle court extenseur du pouce',
	'M/CAI': 'muscle court abducteur du pouce',
	'M/FSD': 'muscle fléchisseur superficiel des doigts',
	'M/FPD': 'muscle fléchisseur profond des doigts',
	'M/IOP': 'muscle interosseux palmaire',
	'M/IOD': 'muscle interosseux dorsal',
	'M/IP': 'muscle ilio-psoas',
	'M/DF': 'muscle droit fémoral',
	'M/Q': 'muscle quadriceps',
	'M/IJ': 'muscle ischio-jambier',
	'M/BF': 'muscle biceps fémoral',
	'M/SM': 'muscle semimembraneux',
	'M/ST': 'muscle semitendineux',
	'M/TA': 'muscle tibial antérieur',
	'M/LF': 'muscle long fibulaire',
	'M/CF': 'muscle court fibulaire',
	'M/TP': 'muscle tibial postérieur',
	'M/TS': 'muscle triceps sural',
	'M/LEO': 'muscle long extenseur des orteils',
	'M/CEO': 'muscle court extenseur des orteils',
  	'M/TS': 'muscle triceps sural',
	'TMBN': 'TMB non acquis',
	'WRMG': 'travail de renforcement musculaire gymnique',
	'NFEA': 'pas de frein inspiratoire audible à l\'auscultation trachéale',
	'TAVI': 'TAVI (Transcatheter Aortic Valve Implantation)',
	'RRVA': 'reprise de remplacement valvulaire aortique',
	'RRVM': 'reprise de remplacement valvulaire mitral',
	'RRVT': 'reprise de remplacement valvulaire tricuspide',
	'SPVL': 'sur le plan de la ventilatoire et locomoteur',
	'RVA': 'remplacement valvulaire aortique',
	'TSA': 'troncs supra-aortiques',
	'OMI': 'oedème des membres inférieurs',
        'OMS': 'oedème des membres supérieurs',
	'EOT': 'extubation oro-trachéale',
        'ENT': 'extubation naso-trachéale',
        'SPE': 'sur le plan de l\'encombrement',
	'ETO': 'échographie trans-oesophagienne',
	'RGO': 'reflux gastro-oesophagien',
        'OMI': 'oedème des membres inférieurs',
        'OMS': 'oedème des membres supérieurs',
        'MON': 'mise en place de l\'oxymétrie nocturne pour la nuit => récupération des résultats demain matin par le kiné',
        'RON': 'récupération des données de tendance de l\'oxymétrie nocturne, mise en forme / impression et mise à disposition du médecin',
	'ETT': 'échographie trans-thoracique',
	'5PAC': 'quintuple pontage aorto-coronarien',
	'4PAC': 'quadruple pontage aorto-coronarien',
	'3PAC': 'triple pontage aorto-coronarien',
	'2PAC': 'double pontage aorto-coronarien',
	'PAC': 'pontage aorto-coronarien',
	'RVT': 'remplacement valvulaire tricuspide',
	'RVM': 'reprise de remplacement valvulaire mitral',
	'FEA': 'frein inspiratoire audible à l\'auscultation trachéale',
	'/EXE': 'exécution',
	'ESC': 'escaliers',
        'EOT': 'extubation oro-trachéale',
        'ENT': 'extubation naso-trachéale',
	'/ABD': 'abduction',
	'/ADD': 'adduction',
	'ADK': 'adénocarcinome',
	'DRA': 'détresse respiratoire aiguë',
	'AEV': 'auto-exercices ventilatoires',
	'ESV': 'épreuve de sevrage ventilatoire',
	'MOB': 'mobilisation',
	'AAE': 'attelle anti-équin',
	'AEM': 'auto-exercices moteurs',
	'MSPD': 'sur le plan de la douleur',
        'MSPS': 'sur le plan du sommeil',
	'SPD': 'sur le plan de la douleur',
        'SPS': 'sur le plan du sommeil',
	'ERC': 'en regard de la cicatrice',
	'PES': 'prise en soin',
	'EMV': 'exécution des modalités ventilatoires',
	'ESM': 'évaluation subjective manuelle',
	'AFE': 'accélération du flux expiratoire',
	'ROS': 'réponse aux ordres simples',
	'ROT': 'réflexes ostéo-tendineux',
	'DCD': 'décédé',
	'BEX': 'bonne exécution',
	'NEX': 'pas d\'exécution',
	'SEX': 'exécution sommaire',
	'ERS': 'en regard de la cicatrice de sternotomie',
        'ERL': 'en regard de la cicatrice de laparotomie',
	'/SM4': '/SM des 4 membres',
	'DAF': 'désaturation à l\'effort',
	'DAS': 'difficile à solliciter',
	'/PDP': 'pointes de pieds',
	'/OV': 'optimisation ventilatoire',
	'/OPT': 'optimisation',
	'FEA':'frein expiratoire audible',
	'EOC': 'écharpe orthopédique capitonnée',
	'AEG': 'altération de l\'état général',
	'ATC': 'articulation talo-crurale',
	'KAA': 'kinésithérapie active aidée',
	'WSM': 'travail du schéma de marche',
	'HAT': 'habillage, toilette, alimentation',
	'SMP': 'schéma de marche perturbé',
	'SMC': 'schéma de marche correct',
	'SMA': 'sensation de manque d\'air',
	'EFF': 'pas de prise en soin en kinésithérapie motrice possible ce jour compte tenu de l\'effectif kiné',
	'ACR': 'arrêt cardio-respiratoire',
	'AAA': 'anévrisme de l\'aorte abdominale',
        'SPD': 'sur le plan de la douleur',
        'SPS': 'sur le plan du sommeil',
	'PTH': 'prothèse totale de hanche',
	'PTG': 'prothèse totale de genou',
	'PTE': 'prothèse totale d\'épaule',
	'SCC': 'sterno-costo-claviculaire',
	'LT2':'lag test positif des 2 côtés',
	'LT0':'lag test négatif des 2 côtés',
	'LTD':'lag test positif à droite mais pas à gauche',
	'LTG':'lag test positif à gauche mais pas à droite',
	'VAS':'voies aériennes supérieures',
	'VAI':'voies aériennes inférieures',
	'SST': 'scapulo-serrato-thoracique',
	'ATF': 'attelle thermo-formée',
	'LAT': 'latéral',
	'RAS':'rien à signaler',
	'PAM': 'pression artérielle moyenne',
	'PAS': 'pression artérielle systolique',
	'PAD': 'pression artérielle diastolique',
	'MAD': 'mise à disposition',
	'MEP': 'mise en place',
	'TCP':  'tricipito-calcanéo-plantaire',
	'OLD': 'oxygénothérapie longue durée',
	'/SS0': 'sécrétions muqueuses fluides / salivaires',
	'/SS1': 'sécrétions muqueuses épaisses',
	'/SS2': 'sécrétions muco-purulentes',
	'/SS3': 'sécrétions purulentes',
	'/ESB': 'équilibre statique debout bipodal',
	'/ESU': 'équilibre statique debout unipodal',
	'/ESA': 'équilibre statique assis',
	'/ESD': 'équilibre statique et dynamique',
	'/ETP': 'explication de la TP',
	'/PSE': '/PS élargi',
	'/DEG00': 'pas de déglutition réalisée en spontanée ni à la demande',
        '/DEG01': 'pas de déglutition spontanément mais possibilité d\'exécution à la demande',
        '/DEG10': 'déglutition réalisée spontanément mais pas de réalisation sur demande',
        '/DEG11': 'déglutition réalisée spontanément et sur demande',
	'/DEGOK': 'déglutition efficace',
	'/DEGKO': 'déglutition non efficace',
	'/DEG': 'déglutition',
	'PSE': 'psycho-socio-économique',
	'/PS([0-9]+)': '/PS large d\'environs $1cm',
	'TVP': 'thrombose veineuse profonde',
	'MED': 'médial',
	'ANP': 'apiration naso-pharyngée',
	'AOP': 'aspiration oro-pharyngée',
	'OAP': 'oedeme aigu du poumon',
	'/FSD': 'fléchisseur superficiel des doigts',
	'/FPD': ' fléchisseur profond des doigts',
	'::C': 'correct',
	'::P': 'précaire',
	'::T': 'transfert',
	'/RCS':'rachis cervical supérieur',
	'/RCI':'rachis cervical inférieur',
	'PHA': 'probable HA',
	'SHA': 'solution hydro-alcoolique',
	'ANT': 'aspiration naso-trachéale',
	'IOT': 'intubation oro-trachéale',
	'INT': 'intubation naso-trachéale',
	'EPA': 'équilibre postural assis',
	'PPS': 'pieds à plat au sol',
	'HID': 'hyperinflation dynamique',
	'KRD': 'kinésithérapie respiratoire de drainage',
	'KRI': 'kinésithérapie respiratoire incitative',
	'AAT': 'aide à la toux',
	'AET': 'aspiration endotrachéale',
	'CEO': 'cohérent et orienté',
	'RTP': 'révision de la toux protégée',
	'WDT': 'travail des transferts',
	'VVP': 'voie veineuse périphérique',
	'SOH': ' syndrome d\'obésité-hypoventilation',
	'MPA': 'maladie de Parkinson',
	'TUG':'Timed Up And Go Test (TUG)',
	'/ES': 'équilibre statique',
	'/ED': 'équilibre dynamique',
	'/SS': 'sécrétions',
	'R2R': ' rollator 2 roues',
	'R3R': ' rollator 3 roues',
	'R4R': ' rollator 4 roues',
	'CDM': 'cadre de marche',
	'MMC': 'masque à moyenne concentration',
	'TSS': 'tirage supra-sternal',
	'MHC': 'masque à haute concentration',
	'SNG': 'sonde naso-gastrique',
	'PNF': 'facilitation proprioceptive neuromusculaire (PNF)',
	'WRM': 'travail de renforcement musculaire',
	'RMG': 'renforcement musculaire gymnique',
	'PNO': 'pneumothorax',
	'PNP': 'pneumopathie',
	'PAP': 'pied à perfusion',
	'CDB': 'collapsus dynamique bronchique',
	'PEC': 'prise en charge',
	'VRE': 'volume de réserve expiratoire',
	'VRI': 'volume de réserve inspiratoire',
	'CPT': 'capacité pulmonaire totale',
	'ATB': 'antibiotique',
	'RAD': 'retour à domicile',
	'SSH': 'sérum salé hypertonique',
	'EVA': 'sur l\'échelle visuelle analogique',
	'PCC': 'précautions complémentaires contact',
	'PCG': 'précautions complémentaires gouttelettes',
	'/RCG': 'rétropulsion posturale, centre de gravité postériorisé',
	'SRP': 'syndrome de rétropulsion posturale',
	'PLM': 'protocole lésé médullaire',
	'FAT': 'fatigable',
	'VTV': 'verticalisation avec table de verticalisation',
	'TDLXse': 'très douloureuse',
        'TDLX': 'très douloureux',
	'NDLXse': 'non douloureuse',
	'NDLX': 'non douloureux',
	'PDLXse': 'peu douloureuse',
	'PDLX': 'peu douloureux',
	'-DLXse': 'moins douloureuse',
	'-DLX': 'moins douloureux',
	'DLXse': 'douloureuse',
	'DLX': 'douloureux',
	'RXC': 'radiographie de contrôle',
	'DLse': 'douloureuse',
	'SPC': 'syndrome post-chute',
	'AVQ': 'activités de la vie quotidienne',
	'THB([0-9]+)':'taux d\'hémoglobine de $1g / 100mL',
	'THB': 'taux d\'hémoglobine',
	'FHA': 'friction avec solution hydro-alcoolique',
	'EEG': 'électro-encéphalogramme',
	'EPS': 'en post-séance',
	'TSg': 'transfusion sanguine',
	'PCA': 'précautions complémentaires air',
	'MAD': 'mise à disposition',
	'CEM': 'ce matin',
	'CEN': 'cette nuit',
	'SDB': 'salle de bain',
	'CAM': 'cette après-midi',
	'TEM': 'toux émétisante',
	'PCP': 'précautions complémentaires protectrices',
	'IRC': 'insuffisance respiratoire chronique',
	'IRA': 'insuffisance respiratoire aiguë',
	'1LV': '1er lever',
	'BAV': 'bloc atrio-ventriculaire',
	'WPM': 'travail du périmetre de marche',
	'TMB': 'transfert monobloc',
	'/POP': 'praxie oro-pharyngée',
	'/TF': 'triple flexion',
	'/TE':  'triple extension',
	'/TC':  'talo-crural',
	'ATC': 'articulation talo-crurale',
	'VS([^-])': 'ventilation spontanée$1',
	'LPF': 'lombo-pelvi-fémoral',
	'/PeV': 'patiente volontaire',
	'/PV': 'patient volontaire',
	'/SB': 'squats bipodaux',
	'/RL': 'rotation latérale',
	'/RM': 'rotation médiale',
	'/PS': 'prono-supination',
	'/SM': 'stimulation motrice',
	'/BT': 'bonne tolérance',
	'TD': 'toux dirigée',
	'KP': 'kinésithérapie passive',
	'KA': 'kinésithérapie active',
	'DL': 'douleur',
	'CJ': 'ce jour',
	'SB': 'spasticité bronchique',
	'FR': 'fréquence respiratoire',
	'VD': 'ventilation dirigée',
	'TP': 'toux protégée',
	'/RP':'rétropulsion posturale',
	'RP':'radiographie pulmonaire',
	'PB': 'plexus brachial',
	'PL': 'plexus lombal',
	'PS': 'plexus sacral',
	'DC': 'décubitus',
	'PM': 'périmètres de marche',
        'SP': 'sur le plan',
	'CN': 'canules nasales',
	'LN': 'lunettes nasales d\'oxygène',
	'TC': 'test de comptage',
	'LC': 'latéro-cubitus',
	'PC': 'pro-cubitus',
	'SM': 'schéma de marche',
	'FC': 'fréquence cardiaque',
	'SN': 'sonde nasale d\'O2',
	'en AA': 'en air ambiant',
	'AA': 'amplitudes articulaires',
	'EN': 'sur l\'échelle numérique simple',
	'HB': 'hémoglobine',
	'SP': 'sur le plan',
	'LT': 'lag test',
	'/CRDs': 'expectorations dégluties',
	'/CRD': 'expectoration déglutie',
	'/CR': 'expectoration',
	'/RC': 'rachis cervical',
	'DA': 'drainage autogène',
	'TA': 'tension artérielle',
	'MV': 'murmure vésiculaire',
	'AT': 'aide technique',
	'LP': 'lève-personne',
	'AR': 'allers-retours',
	'FE': 'fixateur externe',
	'MI': 'membre inférieur',
	'CS': 'canne simple',
	'CA': 'cannes anglaises',
	'CI': 'capacité inspiratoire',
	'HA':'hypopnée algogène',
	'VR': 'volume résiduel',
	'TS': 'toux spastique',
	' D([1-3])': ' degré $1',
	'Vt': 'volume courant',
	'CV': 'capacité vitale',
	'MC': 'masque chirurgical',
	'MS': 'membre supérieur',
	'SU': 'sonde vésicale urinaire',
	'RM': 'renforcement musculaire',
	'EP': 'embolie pulmonaire',
	'NK': 'pas de prise en soin en kinésithérapie motrice possible ce jour compte tenu de l\'effectif kiné',
	'/SP': 'stase pharyngée',
	'MK': 'kinésithérapeute',
	'FP': 'femoro-patellaire',
	'LP': 'lève-personne',
	'/PS': 'polygone de sustentation',
	'/CG': 'centre de gravité',
	'FT': 'femoro-tibial',
	'LV': 'lever',
	'KR': 'kinésithérapie respiratoire',
	'RX': 'radiographie',
	'CF': 'coxofémoral',
	'GH': 'glénohuméral',
	'KM': 'kinésithérapie motrice',
	'WW': 'travail de',
	'/D': 'droit',
	'/G': 'gauche',
	'/F': 'flexion',
	'/E': 'extension',
	'/R': 'rotation',
	'/I': 'inclinaison',
};

var g_dictCorrect = {
	'membre supérieurs':'membres supérieurs',
	'membre inférieurs': 'membres inférieurs',
	' 1 secondes': ' 1 seconde',
	' 1 boules': ' 1 boule',
	' 1 boule tenues': ' 1 boule tenue',
	' 1 mètres': ' 1 mètre',
	'1 cannes anglaises': '1 canne anglaise',
	'1 allers-retours': '1 aller-retour',
	'secretions': 'sécrétions',
	'Execution': 'Exécution',
	'execution': 'exécution',
	'deglutition': 'déglutition',
	'legerement': 'légèrement',
	'1 séries': '1 série',
	'1 répétitions': '1 répétition',
        'eupneique': 'eupnéique', 
        'legere': 'légère',
	'apprehension': 'appréhension',
        'receptive': 'réceptive',
        'receptif': 'réceptif',
};

// Lessons data — full grammar lessons linked from exam feedback
// Each lesson maps to a grammarRule id

export const lessons = [
    {
        id: 'modal-infinitive',
        title: 'Modalverber — Infinitiv uden "at"',
        titleEn: 'Modal Verbs — Infinitive without "at"',
        category: 'Verber',
        categoryEn: 'Verbs',
        difficulty: 'PD2',
        sections: [
            {
                heading: 'Hvad er modalverber?',
                headingEn: 'What are modal verbs?',
                content: `Modalverber er specielle verber, der bruges sammen med et andet verbum i infinitiv. De seks danske modalverber er:

• **kan** (can) — evne eller mulighed
• **skal** (shall/must) — nødvendighed eller fremtid
• **vil** (will/want to) — vilje eller ønske
• **må** (may/must) — tilladelse eller nødvendighed
• **bør** (should) — anbefaling
• **tør** (dare) — mod`,
                contentEn: `Modal verbs are special verbs used together with another verb in the infinitive. The six Danish modal verbs are:

• **kan** (can) — ability or possibility
• **skal** (shall/must) — necessity or future
• **vil** (will/want to) — will or wish
• **må** (may/must) — permission or necessity
• **bør** (should) — recommendation
• **tør** (dare) — courage`
            },
            {
                heading: 'Reglen: UDEN "at"',
                headingEn: 'The Rule: WITHOUT "at"',
                content: `Når et modalverbum bruges med et andet verbum, bruger vi infinitiv UDEN "at":

✅ Jeg **kan tale** dansk. (I can speak Danish)
❌ Jeg kan **at tale** dansk.

✅ Hun **skal arbejde** i morgen. (She must work tomorrow)
❌ Hun skal **at arbejde** i morgen.

✅ Vi **vil rejse** til Spanien. (We want to go to Spain)
❌ Vi vil **at rejse** til Spanien.`,
                contentEn: `When a modal verb is used with another verb, we use the infinitive WITHOUT "at":

✅ Jeg **kan tale** dansk. (I can speak Danish)
❌ Jeg kan **at tale** dansk.

✅ Hun **skal arbejde** i morgen. (She must work tomorrow)
❌ Hun skal **at arbejde** i morgen.

✅ Vi **vil rejse** til Spanien. (We want to travel to Spain)
❌ Vi vil **at rejse** til Spanien.`
            },
            {
                heading: 'Eksempler med alle modalverber',
                headingEn: 'Examples with all modal verbs',
                examples: [
                    { da: 'Jeg kan svømme', en: 'I can swim' },
                    { da: 'Du skal gå nu', en: 'You must go now' },
                    { da: 'Han vil lære dansk', en: 'He wants to learn Danish' },
                    { da: 'Vi må ikke ryge her', en: 'We must not smoke here' },
                    { da: 'I bør læse mere', en: 'You should read more' },
                    { da: 'Hun tør ikke springe', en: 'She dares not jump' },
                    { da: 'Kan du hjælpe mig?', en: 'Can you help me?' },
                    { da: 'Skal vi gå hjem?', en: 'Shall we go home?' },
                ]
            }
        ],
        practiceQuestions: [
            {
                sentence: 'Jeg vil gerne ______ en pizza.',
                sentenceEn: 'I would like to order a pizza.',
                answer: 'bestille',
                hint: 'at bestille (to order) — modal + infinitive'
            },
            {
                sentence: 'Man må ikke ______ i bussen.',
                sentenceEn: 'One must not eat on the bus.',
                answer: 'spise',
                hint: 'at spise (to eat) — modal + infinitive'
            },
            {
                sentence: 'Børnene kan ______ dansk og engelsk.',
                sentenceEn: 'The children can speak Danish and English.',
                answer: 'tale',
                hint: 'at tale (to speak) — modal + infinitive'
            },
        ]
    },
    {
        id: 'present-tense-r',
        title: 'Nutid — Verber i nutid ender på -r',
        titleEn: 'Present Tense — Verbs end in -r',
        category: 'Verber',
        categoryEn: 'Verbs',
        difficulty: 'PD2',
        sections: [
            {
                heading: 'Reglen',
                headingEn: 'The Rule',
                content: `Nutid (præsens) dannes ved at tilføje **-r** til infinitiven:

**at spise → spiser** (eats)
**at tale → taler** (speaks)
**at bo → bor** (lives)
**at arbejde → arbejder** (works)

Nutid bruges til:
1. Ting der sker nu: *Jeg spiser nu.* (I am eating now)
2. Vaner: *Han spiser morgenmad hver dag.* (He eats breakfast every day)
3. Fremtid: *Vi rejser i morgen.* (We travel tomorrow)`,
                contentEn: `Present tense is formed by adding **-r** to the infinitive:

**at spise → spiser** (eats)
**at tale → taler** (speaks)
**at bo → bor** (lives)
**at arbejde → arbejder** (works)

Present tense is used for:
1. Things happening now: *Jeg spiser nu.* (I am eating now)
2. Habits: *Han spiser morgenmad hver dag.* (He eats breakfast every day)
3. Future: *Vi rejser i morgen.* (We travel tomorrow)`
            },
            {
                heading: 'Eksempler',
                headingEn: 'Examples',
                examples: [
                    { da: 'Jeg taler dansk', en: 'I speak Danish' },
                    { da: 'Hun bor i Odense', en: 'She lives in Odense' },
                    { da: 'Vi spiser frokost kl. 12', en: 'We eat lunch at 12' },
                    { da: 'Han arbejder på et kontor', en: 'He works at an office' },
                    { da: 'De læser avisen hver morgen', en: 'They read the newspaper every morning' },
                    { da: 'Børnene leger i haven', en: 'The children play in the garden' },
                ]
            },
            {
                heading: 'Uregelmæssige nutidsformer',
                headingEn: 'Irregular present tense forms',
                content: `Nogle verber har uregelmæssige nutidsformer:

• at vide → **ved** (knows)
• at gøre → **gør** (does)
• at sige → **siger** (says)
• at have → **har** (has)
• at være → **er** (is/are)`,
                contentEn: `Some verbs have irregular present tense forms:

• at vide → **ved** (knows)
• at gøre → **gør** (does)
• at sige → **siger** (says)
• at have → **har** (has)
• at være → **er** (is/are)`
            }
        ],
        practiceQuestions: [
            {
                sentence: 'Min datter ______ i en børnehave.',
                sentenceEn: 'My daughter goes to a kindergarten.',
                answer: 'går',
                hint: 'at gå (to go) — present tense'
            },
            {
                sentence: 'Vi ______ dansk på sprogskolen.',
                sentenceEn: 'We learn Danish at the language school.',
                answer: 'lærer',
                hint: 'at lære (to learn) — present tense'
            },
            {
                sentence: 'Han ______ i Netto hver dag.',
                sentenceEn: 'He shops at Netto every day.',
                answer: 'handler',
                hint: 'at handle (to shop) — present tense'
            },
        ]
    },
    {
        id: 'past-tense-group1',
        title: 'Datid — Gruppe 1 verber (-ede)',
        titleEn: 'Past Tense — Group 1 verbs (-ede)',
        category: 'Verber',
        categoryEn: 'Verbs',
        difficulty: 'PD2',
        sections: [
            {
                heading: 'Gruppe 1 — den største gruppe',
                headingEn: 'Group 1 — the largest group',
                content: `Gruppe 1 er den største gruppe af danske verber. Datid dannes med **-ede**:

**at arbejde → arbejdede** (worked)
**at spille → spillede** (played)
**at bo → boede** (lived)

Førnutid (perfektum) dannes med **har + -et**:
**har arbejdet, har spillet, har boet**`,
                contentEn: `Group 1 is the largest group of Danish verbs. Past tense is formed with **-ede**:

**at arbejde → arbejdede** (worked)
**at spille → spillede** (played)
**at bo → boede** (lived)

Perfect tense is formed with **har + -et**:
**har arbejdet, har spillet, har boet**`
            },
            {
                heading: 'Eksempler',
                headingEn: 'Examples',
                examples: [
                    { da: 'Jeg arbejdede i en butik', en: 'I worked in a shop' },
                    { da: 'Hun spillede klaver', en: 'She played piano' },
                    { da: 'Vi boede i Århus', en: 'We lived in Aarhus' },
                    { da: 'De studerede dansk', en: 'They studied Danish' },
                    { da: 'Han cyklede til arbejde', en: 'He cycled to work' },
                ]
            }
        ],
        practiceQuestions: [
            {
                sentence: 'Vi ______ en ny lejlighed i Odense.',
                sentenceEn: 'We rented a new apartment in Odense.',
                answer: 'lejede',
                hint: 'at leje (to rent) — Group 1 past: -ede'
            },
            {
                sentence: 'Hun ______ hele aftenen.',
                sentenceEn: 'She danced the whole evening.',
                answer: 'dansede',
                hint: 'at danse (to dance) — Group 1 past: -ede'
            },
        ]
    },
    {
        id: 'past-tense-group2',
        title: 'Datid — Gruppe 2 verber (-te)',
        titleEn: 'Past Tense — Group 2 verbs (-te)',
        category: 'Verber',
        categoryEn: 'Verbs',
        difficulty: 'PD2',
        sections: [
            {
                heading: 'Gruppe 2 — kortere endelse',
                headingEn: 'Group 2 — shorter ending',
                content: `Gruppe 2 verber danner datid med **-te**:

**at købe → købte** (bought)
**at læse → læste** (read)
**at spise → spiste** (ate)
**at bruge → brugte** (used)

Førnutid: **har + -t**
**har købt, har læst, har spist, har brugt**`,
                contentEn: `Group 2 verbs form past tense with **-te**:

**at købe → købte** (bought)
**at læse → læste** (read)
**at spise → spiste** (ate)
**at bruge → brugte** (used)

Perfect: **har + -t**
**har købt, har læst, har spist, har brugt**`
            },
            {
                heading: 'Eksempler',
                headingEn: 'Examples',
                examples: [
                    { da: 'Han købte en ny cykel', en: 'He bought a new bicycle' },
                    { da: 'Vi spiste ude', en: 'We ate out' },
                    { da: 'Jeg læste avisen', en: 'I read the newspaper' },
                    { da: 'De brugte mange penge', en: 'They used a lot of money' },
                    { da: 'Hun besøgte sin mormor', en: 'She visited her grandmother' },
                ]
            }
        ],
        practiceQuestions: [
            {
                sentence: 'Jeg ______ en kop te i går aftes.',
                sentenceEn: 'I drank a cup of tea yesterday evening.',
                answer: 'drak',
                hint: 'Wait — at drikke is irregular (Group 3)!'
            },
            {
                sentence: 'Vi ______ en dejlig aftensmad.',
                sentenceEn: 'We ate a lovely dinner.',
                answer: 'spiste',
                hint: 'at spise (to eat) — Group 2 past: -te'
            },
        ]
    },
    {
        id: 'past-tense-group3',
        title: 'Datid — Gruppe 3 (Uregelmæssige verber)',
        titleEn: 'Past Tense — Group 3 (Irregular verbs)',
        category: 'Verber',
        categoryEn: 'Verbs',
        difficulty: 'PD2-PD3',
        sections: [
            {
                heading: 'Uregelmæssige verber — vokalskifte',
                headingEn: 'Irregular verbs — vowel change',
                content: `Gruppe 3 verber er uregelmæssige. De ændrer vokal i datid:

**at skrive → skrev** (wrote)
**at drikke → drak** (drank)
**at finde → fandt** (found)
**at gå → gik** (went)
**at komme → kom** (came)

Disse skal læres udenad! Der er ingen fast regel.`,
                contentEn: `Group 3 verbs are irregular. They change their vowel in past tense:

**at skrive → skrev** (wrote)
**at drikke → drak** (drank)
**at finde → fandt** (found)
**at gå → gik** (went)
**at komme → kom** (came)

These must be memorized! There is no fixed rule.`
            },
            {
                heading: 'De vigtigste uregelmæssige verber',
                headingEn: 'The most important irregular verbs',
                examples: [
                    { da: 'at skrive → skrev → har skrevet', en: 'write → wrote → have written' },
                    { da: 'at drikke → drak → har drukket', en: 'drink → drank → have drunk' },
                    { da: 'at gå → gik → er gået', en: 'go → went → have gone' },
                    { da: 'at komme → kom → er kommet', en: 'come → came → have come' },
                    { da: 'at se → så → har set', en: 'see → saw → have seen' },
                    { da: 'at tage → tog → har taget', en: 'take → took → have taken' },
                    { da: 'at give → gav → har givet', en: 'give → gave → have given' },
                    { da: 'at blive → blev → er blevet', en: 'become → became → have become' },
                    { da: 'at have → havde → har haft', en: 'have → had → have had' },
                    { da: 'at være → var → har været', en: 'be → was → have been' },
                ]
            }
        ],
        practiceQuestions: [
            {
                sentence: 'Jeg ______ en brev til min ven.',
                sentenceEn: 'I wrote a letter to my friend.',
                answer: 'skrev',
                hint: 'at skrive → skrev (irregular)'
            },
            {
                sentence: 'Vi ______ hjem kl. 22.',
                sentenceEn: 'We went home at 22.',
                answer: 'gik',
                hint: 'at gå → gik (irregular)'
            },
            {
                sentence: 'De ______ til festen i lørdags.',
                sentenceEn: 'They came to the party last Saturday.',
                answer: 'kom',
                hint: 'at komme → kom (irregular)'
            },
        ]
    },
    {
        id: 'perfect-tense',
        title: 'Førnutid — har/er + participium',
        titleEn: 'Perfect Tense — har/er + participle',
        category: 'Verber',
        categoryEn: 'Verbs',
        difficulty: 'PD2-PD3',
        sections: [
            {
                heading: 'Førnutid (Perfektum)',
                headingEn: 'Perfect Tense',
                content: `Førnutid dannes med **har** (eller **er**) + tillægsform (participium):

Gruppe 1: har + stamme + **-et** → har arbejdet, har spillet
Gruppe 2: har + stamme + **-t** → har købt, har læst
Gruppe 3: uregelmæssig → har skrevet, har drukket

**Bevægelsesverber** bruger **er** i stedet for har:
er gået, er kommet, er rejst, er flyttet`,
                contentEn: `Perfect tense is formed with **har** (or **er**) + past participle:

Group 1: har + stem + **-et** → har arbejdet, har spillet
Group 2: har + stem + **-t** → har købt, har læst
Group 3: irregular → har skrevet, har drukket

**Movement verbs** use **er** instead of har:
er gået, er kommet, er rejst, er flyttet`
            },
            {
                heading: 'Eksempler og brug',
                headingEn: 'Examples and usage',
                examples: [
                    { da: 'Jeg har boet i Danmark i to år', en: 'I have lived in Denmark for two years' },
                    { da: 'Hun har købt en ny bil', en: 'She has bought a new car' },
                    { da: 'Vi er rejst til Italien', en: 'We have traveled to Italy' },
                    { da: 'Han har skrevet en bog', en: 'He has written a book' },
                    { da: 'De er kommet hjem', en: 'They have come home' },
                    { da: 'Har du nogensinde været i Japan?', en: 'Have you ever been to Japan?' },
                ]
            }
        ],
        practiceQuestions: [
            {
                sentence: 'Vi har ______ dansk i seks måneder.',
                sentenceEn: 'We have studied Danish for six months.',
                answer: 'studeret',
                hint: 'at studere → studeret (Group 1: -et)'
            },
            {
                sentence: 'Han er ______ til en ny lejlighed.',
                sentenceEn: 'He has moved to a new apartment.',
                answer: 'flyttet',
                hint: 'at flytte → flyttet (movement verb: er + -et)'
            },
        ]
    },
    {
        id: 'word-order-v2',
        title: 'V2 Ordstilling — Verbum på andenplads',
        titleEn: 'V2 Word Order — Verb in second position',
        category: 'Sætningsstruktur',
        categoryEn: 'Sentence Structure',
        difficulty: 'PD2-PD3',
        sections: [
            {
                heading: 'V2-reglen',
                headingEn: 'The V2 rule',
                content: `I danske hovedsætninger skal det finitte verbum ALTID stå på **andenpladsen**:

**Normal**: Jeg spiser æbler. (position 1: Jeg, position 2: spiser)

**Med tidsudtryk først** — INVERSION:
I morgen **spiser** jeg æbler. (position 1: I morgen, position 2: spiser)
IKKE: I morgen jeg spiser æbler ❌

Subjektet rykker BAG verbet når noget andet end subjektet er på førstepladsen.`,
                contentEn: `In Danish main clauses, the finite verb must ALWAYS be in the **second position**:

**Normal**: Jeg spiser æbler. (position 1: Jeg, position 2: spiser)

**With time expression first** — INVERSION:
I morgen **spiser** jeg æbler. (position 1: I morgen, position 2: spiser)
NOT: I morgen jeg spiser æbler ❌

The subject moves BEHIND the verb when something other than the subject is in first position.`
            },
            {
                heading: 'Eksempler',
                headingEn: 'Examples',
                examples: [
                    { da: 'Hver dag cykler hun til arbejde', en: 'Every day she cycles to work' },
                    { da: 'I weekenden spiller vi fodbold', en: 'At the weekend we play football' },
                    { da: 'Desværre kan jeg ikke komme', en: 'Unfortunately I cannot come' },
                    { da: 'I Danmark snakker man dansk', en: 'In Denmark one speaks Danish' },
                    { da: 'Bagefter gik vi hjem', en: 'Afterwards we went home' },
                ]
            }
        ],
        practiceQuestions: [
            {
                sentence: 'Normalt ______ vi klokken 7.',
                sentenceEn: 'Normally we get up at 7.',
                answer: 'står',
                hint: 'V2: Normalt → verb → vi (at stå op)'
            },
            {
                sentence: 'I dag ______ det koldt udenfor.',
                sentenceEn: 'Today it is cold outside.',
                answer: 'er',
                hint: 'V2: I dag → verb → det (at være)'
            },
        ]
    },
    {
        id: 'adjective-agreement',
        title: 'Adjektiver — tillægsordets bøjning',
        titleEn: 'Adjectives — Agreement & Forms',
        category: 'Grammatik',
        categoryEn: 'Grammar',
        difficulty: 'PD2',
        sections: [
            {
                heading: 'Tillægsordets former',
                headingEn: 'Adjective forms',
                content: `Danske adjektiver bøjes efter substantivets køn og tal:

**Fælleskøn (en-ord)**: en stor bil (a big car)
**Intetkøn (et-ord)**: et stort hus (a big house)
**Flertal (plural)**: store biler / store huse (big cars / big houses)

Reglen:
• Fælleskøn: adjektiv i grundform — *en stor bil*
• Intetkøn: tilføj **-t** — *et stort hus*
• Flertal: tilføj **-e** — *store biler*
• Bestemt form: tilføj **-e** — *den store bil*`,
                contentEn: `Danish adjectives change form based on the noun's gender and number:

**Common gender (en-word)**: en stor bil (a big car)
**Neuter (et-word)**: et stort hus (a big house)
**Plural**: store biler / store huse (big cars / big houses)

The rule:
• Common gender: base adjective form — *en stor bil*
• Neuter: add **-t** — *et stort hus*
• Plural: add **-e** — *store biler*
• Definite form: add **-e** — *den store bil*`
            },
            {
                heading: 'Eksempler',
                headingEn: 'Examples',
                examples: [
                    { da: 'en ny lejlighed / et nyt hus / nye lejligheder', en: 'a new apartment / a new house / new apartments' },
                    { da: 'en god bog / et godt tilbud / gode bøger', en: 'a good book / a good offer / good books' },
                    { da: 'en lille dreng / et lille barn / små børn', en: 'a small boy / a small child / small children' },
                    { da: 'den røde bil er min', en: 'the red car is mine' },
                    { da: 'det nye supermarked er stort', en: 'the new supermarket is big' },
                ]
            },
            {
                heading: 'Undtagelser',
                headingEn: 'Exceptions',
                content: `Nogle adjektiver er uregelmæssige:
• **lille → små** (small — plural)
• **god → godt / gode** (good)
• **gammel → gammelt / gamle** (old)
• Adjektiver på **-sk** får IKKE -t: et dansk hus (not: et danskt hus)
• Adjektiver på **-ig** får IKKE -t: et vigtigt møde ✓  men: et roligt sted ✓`,
                contentEn: `Some adjectives are irregular:
• **lille → små** (small — plural)
• **god → godt / gode** (good)
• **gammel → gammelt / gamle** (old)
• Adjectives ending in **-sk** don't get -t: et dansk hus (not: et danskt hus)
• Adjectives ending in **-ig** DO get -t: et vigtigt møde ✓`
            }
        ],
        practiceQuestions: [
            {
                sentence: 'Det er et ______ hus.',
                sentenceEn: 'It is a big house.',
                answer: 'stort',
                hint: 'stor + -t for et-ord (neuter)'
            },
            {
                sentence: 'Vi har to ______ børn.',
                sentenceEn: 'We have two small children.',
                answer: 'små',
                hint: 'lille → små in plural (irregular)'
            },
            {
                sentence: 'Den ______ kvinde hedder Maria.',
                sentenceEn: 'The young woman is called Maria.',
                answer: 'unge',
                hint: 'ung + -e in definite form (den + adjektiv(-e) + substantiv)'
            },
        ]
    },
    {
        id: 'prepositions',
        title: 'Forholdsord — tid og sted',
        titleEn: 'Prepositions — Time and Place',
        category: 'Grammatik',
        categoryEn: 'Grammar',
        difficulty: 'PD2',
        sections: [
            {
                heading: 'Forholdsord om tid',
                headingEn: 'Prepositions of time',
                content: `**i** — bruges med: måneder, årstider, årstal
*i januar, i sommeren, i 2023*

**om** — bruges med: dagsdele, ugedage (gentagelser)
*om morgenen, om fredagen*

**på** — bruges med: specifikke dage, tidspunkter
*på fredag, på lørdag*

**til** — bruges med: fester, begivenheder
*til jul, til fødselsdagen*

**for ... siden** — ago
*for to år siden (two years ago)*`,
                contentEn: `**i** — used with: months, seasons, years
*i januar, i sommeren, i 2023*

**om** — used with: parts of the day, weekdays (repeated)
*om morgenen (in the morning), om fredagen (on Fridays)*

**på** — used with: specific days, specific times
*på fredag (this Friday), på lørdag (this Saturday)*

**til** — used with: celebrations, events
*til jul (for Christmas), til fødselsdagen (for the birthday)*

**for ... siden** — ago
*for to år siden (two years ago)*`
            },
            {
                heading: 'Forholdsord om sted',
                headingEn: 'Prepositions of place',
                content: `**i** — inside: *I huset, i bussen, i Danmark, i byen*
**på** — on/at: *på bordet, på arbejde, på skolen, på hospitalet*
**til** — to (direction): *til skole, til Danmark, til fest*
**fra** — from: *fra skolen, fra Danmark*
**hos** — at someone's place: *hos lægen, hos venner*`,
                contentEn: `**i** — inside: *In the house, on the bus, in Denmark, in the city*
**på** — on/at: *on the table, at work, at school, at the hospital*
**til** — to (direction): *to school, to Denmark, to a party*
**fra** — from: *from school, from Denmark*
**hos** — at someone's place: *at the doctor's, at friends'*`
            },
            {
                heading: 'Eksempler',
                headingEn: 'Examples',
                examples: [
                    { da: 'Jeg kom til Danmark i 2020', en: 'I came to Denmark in 2020' },
                    { da: 'Om morgenen drikker jeg kaffe', en: 'In the morning I drink coffee' },
                    { da: 'Hun arbejder på et hospital', en: 'She works at a hospital' },
                    { da: 'Børnene er i skole', en: 'The children are in school' },
                    { da: 'Vi skal til lægen på mandag', en: 'We have to go to the doctor on Monday' },
                    { da: 'Jeg boede hos mine venner for tre måneder siden', en: 'I lived at my friends\' three months ago' },
                ]
            }
        ],
        practiceQuestions: [
            {
                sentence: '______ morgenen spiser vi morgenmad.',
                sentenceEn: 'In the morning we eat breakfast.',
                answer: 'Om',
                hint: 'om + dagsdel (part of day)'
            },
            {
                sentence: 'Jeg bor ______ København.',
                sentenceEn: 'I live in Copenhagen.',
                answer: 'i',
                hint: 'i + city/country for location'
            },
            {
                sentence: 'Han kom til Danmark ______ to år siden.',
                sentenceEn: 'He came to Denmark two years ago.',
                answer: 'for',
                hint: 'for ... siden = ago'
            },
        ]
    },
    {
        id: 'question-words',
        title: 'Spørgeord og spørgsmål',
        titleEn: 'Question Words & Forming Questions',
        category: 'Sætningsstruktur',
        categoryEn: 'Sentence Structure',
        difficulty: 'PD2',
        sections: [
            {
                heading: 'Danske spørgeord',
                headingEn: 'Danish question words',
                content: `**Hvad** — What: *Hvad hedder du?*
**Hvem** — Who: *Hvem er din lærer?*
**Hvor** — Where: *Hvor bor du?*
**Hvornår** — When: *Hvornår starter filmen?*
**Hvorfor** — Why: *Hvorfor lærer du dansk?*
**Hvordan** — How: *Hvordan har du det?*
**Hvilken/Hvilket/Hvilke** — Which: *Hvilken farve kan du lide?*
**Hvor mange** — How many: *Hvor mange børn har du?*
**Hvor gammel** — How old: *Hvor gammel er du?*`,
                contentEn: `**Hvad** — What: *What is your name?*
**Hvem** — Who: *Who is your teacher?*
**Hvor** — Where: *Where do you live?*
**Hvornår** — When: *When does the movie start?*
**Hvorfor** — Why: *Why do you learn Danish?*
**Hvordan** — How: *How are you?*
**Hvilken/Hvilket/Hvilke** — Which: *Which color do you like?*
**Hvor mange** — How many: *How many children do you have?*
**Hvor gammel** — How old: *How old are you?*`
            },
            {
                heading: 'Spørgsmålstyper',
                headingEn: 'Types of questions',
                content: `**HV-spørgsmål** (med spørgeord):
Spørgeord + verbum + subjekt + ...
*Hvor bor du?* / *Hvad laver du?*

**Ja/Nej-spørgsmål** (uden spørgeord):
Verbum + subjekt + ...
*Bor du i København?* / *Kan du tale dansk?*`,
                contentEn: `**WH-questions** (with question word):
Question word + verb + subject + ...
*Hvor bor du?* / *Hvad laver du?*

**Yes/No questions** (without question word):
Verb + subject + ...
*Bor du i København?* / *Kan du tale dansk?*`
            },
            {
                heading: 'Eksempler',
                headingEn: 'Examples',
                examples: [
                    { da: 'Hvad hedder du?', en: 'What is your name?' },
                    { da: 'Hvor kommer du fra?', en: 'Where do you come from?' },
                    { da: 'Hvornår begyndte du at lære dansk?', en: 'When did you start learning Danish?' },
                    { da: 'Har du børn?', en: 'Do you have children?' },
                    { da: 'Kan du lide at bo i Danmark?', en: 'Do you like living in Denmark?' },
                    { da: 'Hvorfor valgte du Danmark?', en: 'Why did you choose Denmark?' },
                ]
            }
        ],
        practiceQuestions: [
            {
                sentence: '______ gammel er du?',
                sentenceEn: 'How old are you?',
                answer: 'Hvor',
                hint: 'Hvor gammel = How old'
            },
            {
                sentence: '______ hedder din lærer?',
                sentenceEn: 'What is your teacher called?',
                answer: 'Hvad',
                hint: 'Hvad = What'
            },
            {
                sentence: '______ bor du — i en lejlighed eller et hus?',
                sentenceEn: 'Where do you live — in an apartment or a house?',
                answer: 'Hvor',
                hint: 'Hvor = Where'
            },
        ]
    },
    {
        id: 'subordinate-clauses',
        title: 'Ledsætninger — bisætningens ordstilling',
        titleEn: 'Subordinate Clauses — Word Order',
        category: 'Sætningsstruktur',
        categoryEn: 'Sentence Structure',
        difficulty: 'PD3',
        sections: [
            {
                heading: 'Hvad er en ledsætning?',
                headingEn: 'What is a subordinate clause?',
                content: `En ledsætning (bisætning) er en sætning, der begynder med et bindeord (konjunktion):

**at** — that: *Jeg tror, at han er syg.*
**fordi** — because: *Jeg lærer dansk, fordi jeg bor i Danmark.*
**hvis** — if: *Hvis det regner, tager jeg bussen.*
**selvom** — although: *Selvom det er svært, elsker jeg dansk.*
**da** — when (past): *Da jeg kom til Danmark, talte jeg ikke dansk.*
**når** — when (present/future): *Når jeg er færdig, tager jeg hjem.*`,
                contentEn: `A subordinate clause is a sentence that starts with a conjunction:

**at** — that: *I think that he is sick.*
**fordi** — because: *I learn Danish because I live in Denmark.*
**hvis** — if: *If it rains, I take the bus.*
**selvom** — although: *Although it is hard, I love Danish.*
**da** — when (past): *When I came to Denmark, I didn't speak Danish.*
**når** — when (present/future): *When I am finished, I go home.*`
            },
            {
                heading: 'Ordstilling i bisætninger',
                headingEn: 'Word order in subordinate clauses',
                content: `I bisætninger (subordinate clauses) kommer **ikke** og andre adverbier FØR verbet:

**Hovedsætning:** Han taler **ikke** dansk.
**Bisætning:** Jeg ved, at han **ikke taler** dansk.

**Hovedsætning:** Hun kan **aldrig** sove.
**Bisætning:** Fordi hun **aldrig kan** sove.

Reglen: I bisætninger: subjekt → adverbium → verbum
I hovedsætninger: subjekt → verbum → adverbium`,
                contentEn: `In subordinate clauses, **ikke** and other adverbs come BEFORE the verb:

**Main clause:** Han taler **ikke** dansk. (He doesn't speak Danish)
**Subordinate:** Jeg ved, at han **ikke taler** dansk. (I know that he doesn't speak Danish)

**Main clause:** Hun kan **aldrig** sove.
**Subordinate:** Fordi hun **aldrig kan** sove.

The rule: In subclauses: subject → adverb → verb
In main clauses: subject → verb → adverb`
            },
            {
                heading: 'Eksempler',
                headingEn: 'Examples',
                examples: [
                    { da: 'Jeg ved, at han ikke kan komme', en: 'I know that he cannot come' },
                    { da: 'Fordi vi også bor her, kender vi naboerne', en: 'Because we also live here, we know the neighbors' },
                    { da: 'Selvom hun aldrig har prøvet det, vil hun gerne', en: 'Although she has never tried it, she would like to' },
                    { da: 'Hvis du ikke forstår, kan du spørge', en: 'If you don\'t understand, you can ask' },
                    { da: 'Da jeg først kom til Danmark, forstod jeg ingenting', en: 'When I first came to Denmark, I understood nothing' },
                ]
            }
        ],
        practiceQuestions: [
            {
                sentence: 'Jeg lærer dansk, fordi jeg ______ i Danmark.',
                sentenceEn: 'I learn Danish because I live in Denmark.',
                answer: 'bor',
                hint: 'fordi + subject + verb (at bo → bor)'
            },
            {
                sentence: 'Han sagde, at han ______ komme.',
                sentenceEn: 'He said that he could not come.',
                answer: 'ikke kunne',
                hint: 'In subclauses: ikke comes BEFORE the verb'
            },
            {
                sentence: 'Selvom det ______ svært, giver jeg ikke op.',
                sentenceEn: 'Although it is difficult, I don\'t give up.',
                answer: 'er',
                hint: 'selvom + subject + verb (at være → er)'
            },
        ]
    }
];

// Get lesson by rule ID
export function getLessonByRuleId(ruleId) {
    return lessons.find(l => l.id === ruleId);
}

// Get all lesson categories
export function getLessonCategories() {
    const categories = {};
    lessons.forEach(l => {
        if (!categories[l.category]) {
            categories[l.category] = { name: l.category, nameEn: l.categoryEn, lessons: [] };
        }
        categories[l.category].lessons.push(l);
    });
    return Object.values(categories);
}

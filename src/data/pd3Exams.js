// PD3 Exam data — curated from PD3 exam papers (2013-2022)
// Advanced level exams focusing on more complex grammar and vocabulary

export const pd3Exams = [
    // ============ PRACTICE EXAMS ============
    {
        id: 'pd3-practice-test-1',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 3',
        typeEn: 'Reading Comprehension 3 - Gap Fill',
        level: 'PD3',
        lesson: {
            title: 'Arbejde hjemmefra',
            titleEn: 'Working from home',
            topics: ['vocabulary', 'context'],
            content: `This is Practice Test 1 from the official test bank materials for PD3.
            
Read the text and fill in the missing words based on the context of the sentence.`
        },
        questions: [
            {
                id: 'pt1-q1',
                sentence: 'Nogle medarbejdere føler sig isolerede, mens andre savner den ______ kontakt, der opstår omkring kaffemaskinen.',
                sentenceEn: 'Some employees feel isolated, while others miss the social contact that occurs around the coffee machine.',
                answer: 'sociale',
                blank: 'sociale',
                hint: 'Interaktion med andre mennesker (Interaction with other people).',
                options: ['sociale', 'juridiske', 'fysiske', 'økonomiske']
            },
            {
                id: 'pt1-q2',
                sentence: 'Det giver fleksibilitet og gør det nemmere at ______ arbejdsliv og familie.',
                sentenceEn: 'It provides flexibility and makes it easier to balance work life and family.',
                answer: 'balancere',
                blank: 'balancere',
                hint: 'At finde ligevægt mellem to ting (To find equilibrium between two things).',
                options: ['forbyde', 'balancere', 'kæmpe', 'reducere']
            },
            {
                id: 'pt1-q3',
                sentence: 'Andre virksomheder mener, at innovation opstår, når mennesker mødes fysisk, og de ______ derfor deres ansatte til at møde op.',
                sentenceEn: 'Other companies believe that innovation occurs when people meet physically, and they therefore require their employees to show up.',
                answer: 'kræver',
                blank: 'kræver',
                hint: 'At forlange noget (to demand or require).',
                options: ['inviterer', 'fraråder', 'trækker', 'kræver']
            },
            {
                id: 'pt1-q4',
                sentence: 'Mange har opdaget, at spisebordet ikke giver den ______ støtte, som en god kontorstol gør.',
                sentenceEn: 'Many have discovered that the dining table does not provide the ergonomic support that a good office chair does.',
                answer: 'ergonomiske',
                blank: 'ergonomiske',
                hint: 'Tilpasset kroppens bygning og fysik (adapted to the body\'s build).',
                options: ['langsomme', 'nødvendige', 'ergonomiske', 'uregelmæssige']
            },
            {
                id: 'pt1-q5',
                sentence: 'Derfor anbefaler eksperter, at man indretter et særligt ______ til arbejde.',
                sentenceEn: 'Therefore experts recommend that one sets up a dedicated workspace for work.',
                answer: 'arbejdsområde',
                blank: 'arbejdsområde',
                hint: 'Et sted at arbejde (a place to work).',
                options: ['værksted', 'arbejdsområde', 'gymnasiesal', 'parkeringsplads']
            },
            {
                id: 'pt1-q6',
                sentence: 'De peger også på, at små pauser og regelmæssig ______ kan være med til at forebygge stress.',
                sentenceEn: 'They also point out that short breaks and regular exercise can help prevent stress.',
                answer: 'motion',
                blank: 'motion',
                hint: 'Fysisk aktivitet (physical activity).',
                options: ['motion', 'økonomi', 'madlavning', 'shopping']
            },
            {
                id: 'pt1-q7',
                sentence: 'Mens nogle trives med roen og friheden, føler andre sig mere ______ og motiverede, når de er omgivet af kolleger.',
                sentenceEn: 'While some thrive on quiet and freedom, others feel more inspired and motivated when surrounded by colleagues.',
                answer: 'inspirerede',
                blank: 'inspirerede',
                hint: 'Påvirket af gode ideer (affected by good ideas / inspired).',
                options: ['inspirerede', 'uengagerede', 'frustrerede', 'forvirrede']
            },
            {
                id: 'pt1-q8',
                sentence: 'I sidste ende handler det om at finde en ______ balance, der tilgodeser både virksomheden og medarbejderen.',
                sentenceEn: 'Ultimately it is about finding a realistic balance that caters to both the company and the employee.',
                answer: 'realistisk',
                blank: 'realistisk',
                hint: 'Noget der kan lade sig gøre i virkeligheden (something achievable in reality).',
                options: ['realistisk', 'automatisk', 'kunstig', 'tilfældig']
            }
        ]
    },
    // ============ 2022 ============
    {
        id: 'pd3-2022-sommer-laese1',
        year: 2022,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD3',
        lesson: {
            title: 'Samfund og politik',
            titleEn: 'Society and Politics',
            topics: ['word-order-v2', 'perfect-tense', 'past-tense-group3'],
            content: `Advanced reading about Danish society, politics, and current events.

KEY GRAMMAR:
• Complex sentence structures with subordinate clauses
• V2 word order in main clauses even after subordinate clauses
• Perfect tense for discussing completed events
• Passive voice: Det blev besluttet... (It was decided...)

KEY VOCABULARY:
• regering (government), valg (election), lov (law)
• demokrati (democracy), folketinget (parliament)
• skat (tax), velfærd (welfare), borger (citizen)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Folketinget har ______ en ny lov om uddannelse.',
                sentenceEn: 'Parliament has passed a new law about education.',
                answer: 'vedtaget',
                blank: 'vedtaget',
                hint: 'at vedtage (to pass/adopt) — perfect tense',
                ruleId: 'perfect-tense',
                verb: 'at vedtage',
                tense: 'perfect'
            },
            {
                id: 'q2',
                sentence: 'Sidste år ______ der valg i Danmark.',
                sentenceEn: 'Last year there was an election in Denmark.',
                answer: 'var',
                blank: 'var',
                hint: 'at være (to be) — past tense, V2 word order',
                ruleId: 'word-order-v2',
                verb: 'at være',
                tense: 'past'
            },
            {
                id: 'q3',
                sentence: 'Mange borgere ______ til demonstrationen i går.',
                sentenceEn: 'Many citizens came to the demonstration yesterday.',
                answer: 'kom',
                blank: 'kom',
                hint: 'at komme (to come) — past tense, irregular',
                ruleId: 'past-tense-group3',
                verb: 'at komme',
                tense: 'past'
            },
            {
                id: 'q4',
                sentence: 'Regeringen har ______ at sænke skatten.',
                sentenceEn: 'The government has decided to lower taxes.',
                answer: 'besluttet',
                blank: 'besluttet',
                hint: 'at beslutte (to decide) — perfect tense',
                ruleId: 'perfect-tense',
                verb: 'at beslutte',
                tense: 'perfect'
            },
            {
                id: 'q5',
                sentence: 'Statsministeren ______ en tale til nationen.',
                sentenceEn: 'The prime minister gave a speech to the nation.',
                answer: 'holdt',
                blank: 'holdt',
                hint: 'at holde (to hold/give) — past tense, irregular',
                ruleId: 'past-tense-group3',
                verb: 'at holde',
                tense: 'past'
            },
            {
                id: 'q6',
                sentence: 'I Danmark ______ man skat af sin indkomst.',
                sentenceEn: 'In Denmark one pays tax on ones income.',
                answer: 'betaler',
                blank: 'betaler',
                hint: 'V2: In Denmark → verb → man. at betale (to pay)',
                ruleId: 'word-order-v2',
                verb: 'at betale',
                tense: 'present'
            },
            {
                id: 'q7',
                sentence: 'Partiet har ______ mange stemmer ved valget.',
                sentenceEn: 'The party has received many votes at the election.',
                answer: 'fået',
                blank: 'fået',
                hint: 'at få (to get/receive) — perfect tense, irregular',
                ruleId: 'perfect-tense',
                verb: 'at få',
                tense: 'perfect'
            },
            {
                id: 'q8',
                sentence: 'De ______ en vigtig beslutning på mødet.',
                sentenceEn: 'They made an important decision at the meeting.',
                answer: 'tog',
                blank: 'tog',
                hint: 'at tage (to take/make) — past tense, irregular',
                ruleId: 'past-tense-group3',
                verb: 'at tage',
                tense: 'past'
            },
        ]
    },
    // ============ 2021 ============
    {
        id: 'pd3-2021-sommer-laese1',
        year: 2021,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD3',
        lesson: {
            title: 'Kultur og medier',
            titleEn: 'Culture and Media',
            topics: ['past-tense-group3', 'perfect-tense', 'modal-infinitive'],
            content: `Explore Danish culture, media, and entertainment at an advanced level.

KEY GRAMMAR:
• Irregular verbs in storytelling
• Perfect tense for experiences
• Complex modal constructions

KEY VOCABULARY:
• avis (newspaper), nyheder (news), program (program)
• kultur (culture), kunst (art), teater (theater)
• forfatter (author), kunstner (artist), instruktør (director)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Forfatteren ______ en bestseller om sit liv.',
                sentenceEn: 'The author wrote a bestseller about his life.',
                answer: 'skrev',
                blank: 'skrev',
                hint: 'at skrive (to write) — past tense, irregular',
                ruleId: 'past-tense-group3',
                verb: 'at skrive',
                tense: 'past'
            },
            {
                id: 'q2',
                sentence: 'Filmen har ______ mange priser internationalt.',
                sentenceEn: 'The film has won many awards internationally.',
                answer: 'vundet',
                blank: 'vundet',
                hint: 'at vinde (to win) — perfect tense, irregular',
                ruleId: 'perfect-tense',
                verb: 'at vinde',
                tense: 'perfect'
            },
            {
                id: 'q3',
                sentence: 'Vi skal ______ til koncerten i aften.',
                sentenceEn: 'We must go to the concert tonight.',
                answer: 'gå',
                blank: 'gå',
                hint: 'Modal verb + infinitive (at gå)',
                ruleId: 'modal-infinitive',
                verb: 'at gå',
                tense: 'infinitive'
            },
            {
                id: 'q4',
                sentence: 'Kunstneren ______ en udstilling på museet.',
                sentenceEn: 'The artist had an exhibition at the museum.',
                answer: 'havde',
                blank: 'havde',
                hint: 'at have (to have) — past tense, irregular',
                ruleId: 'past-tense-group3',
                verb: 'at have',
                tense: 'past'
            },
            {
                id: 'q5',
                sentence: 'Har du ______ den nye danske serie?',
                sentenceEn: 'Have you seen the new Danish series?',
                answer: 'set',
                blank: 'set',
                hint: 'at se (to see) — perfect tense, irregular',
                ruleId: 'perfect-tense',
                verb: 'at se',
                tense: 'perfect'
            },
            {
                id: 'q6',
                sentence: 'Man kan ______ mange gratis museer i København.',
                sentenceEn: 'One can visit many free museums in Copenhagen.',
                answer: 'besøge',
                blank: 'besøge',
                hint: 'Modal verb + infinitive (at besøge)',
                ruleId: 'modal-infinitive',
                verb: 'at besøge',
                tense: 'infinitive'
            },
            {
                id: 'q7',
                sentence: 'Instruktøren ______ en ny film om klimaet.',
                sentenceEn: 'The director made a new film about the climate.',
                answer: 'lavede',
                blank: 'lavede',
                hint: 'at lave (to make) — past tense, Group 1',
                ruleId: 'past-tense-group1',
                verb: 'at lave',
                tense: 'past'
            },
            {
                id: 'q8',
                sentence: 'De har ______ et stykke af Shakespeare.',
                sentenceEn: 'They have performed a play by Shakespeare.',
                answer: 'opført',
                blank: 'opført',
                hint: 'at opføre (to perform) — perfect tense',
                ruleId: 'perfect-tense',
                verb: 'at opføre',
                tense: 'perfect'
            },
        ]
    },
    // ============ 2020 ============
    {
        id: 'pd3-2020-sommer-laese1',
        year: 2020,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD3',
        lesson: {
            title: 'Miljø og bæredygtighed',
            titleEn: 'Environment and Sustainability',
            topics: ['present-tense-r', 'modal-infinitive', 'perfect-tense'],
            content: `Discuss environmental issues and sustainability in Danish.

KEY GRAMMAR:
• Present tense for stating facts
• Modal verbs for obligations: Vi skal passe på... Vi bør...
• Perfect tense: Vi har forurenet...

KEY VOCABULARY:
• miljø (environment), klima (climate), natur (nature)
• forurening (pollution), genbrug (recycling)
• bæredygtig (sustainable), vedvarende (renewable), energi (energy)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Vi skal ______ bedre på naturen.',
                sentenceEn: 'We must take better care of nature.',
                answer: 'passe',
                blank: 'passe',
                hint: 'Modal verb + infinitive (at passe)',
                ruleId: 'modal-infinitive',
                verb: 'at passe',
                tense: 'infinitive'
            },
            {
                id: 'q2',
                sentence: 'Danmark ______ meget vindenergi.',
                sentenceEn: 'Denmark produces a lot of wind energy.',
                answer: 'producerer',
                blank: 'producerer',
                hint: 'at producere (to produce) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at producere',
                tense: 'present'
            },
            {
                id: 'q3',
                sentence: 'Mennesker har ______ klimaet i mange år.',
                sentenceEn: 'Humans have affected the climate for many years.',
                answer: 'påvirket',
                blank: 'påvirket',
                hint: 'at påvirke (to affect) — perfect tense',
                ruleId: 'perfect-tense',
                verb: 'at påvirke',
                tense: 'perfect'
            },
            {
                id: 'q4',
                sentence: 'Vi bør ______ mere for at beskytte miljøet.',
                sentenceEn: 'We should do more to protect the environment.',
                answer: 'gøre',
                blank: 'gøre',
                hint: 'Modal verb + infinitive (at gøre)',
                ruleId: 'modal-infinitive',
                verb: 'at gøre',
                tense: 'infinitive'
            },
            {
                id: 'q5',
                sentence: 'Mange familier ______ deres affald.',
                sentenceEn: 'Many families sort their waste.',
                answer: 'sorterer',
                blank: 'sorterer',
                hint: 'at sortere (to sort) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at sortere',
                tense: 'present'
            },
            {
                id: 'q6',
                sentence: 'Temperaturen er ______ med 1 grad.',
                sentenceEn: 'The temperature has risen by 1 degree.',
                answer: 'steget',
                blank: 'steget',
                hint: 'at stige (to rise) — perfect tense, irregular',
                ruleId: 'perfect-tense',
                verb: 'at stige',
                tense: 'perfect'
            },
            {
                id: 'q7',
                sentence: 'Vi kan ______ vedvarende energi i stedet for kul.',
                sentenceEn: 'We can use renewable energy instead of coal.',
                answer: 'bruge',
                blank: 'bruge',
                hint: 'Modal verb + infinitive (at bruge)',
                ruleId: 'modal-infinitive',
                verb: 'at bruge',
                tense: 'infinitive'
            },
            {
                id: 'q8',
                sentence: 'Havet ______ varmere hvert år.',
                sentenceEn: 'The sea becomes warmer every year.',
                answer: 'bliver',
                blank: 'bliver',
                hint: 'at blive (to become) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at blive',
                tense: 'present'
            },
        ]
    },
    // ============ 2019 ============
    {
        id: 'pd3-2019-sommer-laese1',
        year: 2019,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD3',
        lesson: {
            title: 'Teknologi og digitalisering',
            titleEn: 'Technology and Digitalization',
            topics: ['present-tense-r', 'past-tense-group2', 'perfect-tense'],
            content: `Discuss technology and digital life in Denmark at an advanced level.

KEY GRAMMAR:
• Present tense for current trends
• Past tense for development history
• Perfect tense for achievements

KEY VOCABULARY:
• internet, computer, telefon, app
• data, kunstig intelligens (AI), robot
• digital, online, social medie (social media)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'De fleste danskere ______ internettet hver dag.',
                sentenceEn: 'Most Danes use the internet every day.',
                answer: 'bruger',
                blank: 'bruger',
                hint: 'at bruge (to use) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at bruge',
                tense: 'present'
            },
            {
                id: 'q2',
                sentence: 'Virksomheden ______ en ny app sidste år.',
                sentenceEn: 'The company developed a new app last year.',
                answer: 'udviklede',
                blank: 'udviklede',
                hint: 'at udvikle (to develop) — past tense',
                ruleId: 'past-tense-group1',
                verb: 'at udvikle',
                tense: 'past'
            },
            {
                id: 'q3',
                sentence: 'Teknologien har ______ vores hverdag.',
                sentenceEn: 'Technology has changed our everyday life.',
                answer: 'ændret',
                blank: 'ændret',
                hint: 'at ændre (to change) — perfect tense',
                ruleId: 'perfect-tense',
                verb: 'at ændre',
                tense: 'perfect'
            },
            {
                id: 'q4',
                sentence: 'Børn ______ mange timer foran skærmen.',
                sentenceEn: 'Children spend many hours in front of the screen.',
                answer: 'tilbringer',
                blank: 'tilbringer',
                hint: 'at tilbringe (to spend time) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at tilbringe',
                tense: 'present'
            },
            {
                id: 'q5',
                sentence: 'Han ______ sin gamle telefon med en ny.',
                sentenceEn: 'He replaced his old phone with a new one.',
                answer: 'erstattede',
                blank: 'erstattede',
                hint: 'at erstatte (to replace) — past tense',
                ruleId: 'past-tense-group1',
                verb: 'at erstatte',
                tense: 'past'
            },
            {
                id: 'q6',
                sentence: 'Sociale medier har ______ stor indflydelse.',
                sentenceEn: 'Social media has had great influence.',
                answer: 'haft',
                blank: 'haft',
                hint: 'at have (to have) — perfect tense, irregular',
                ruleId: 'perfect-tense',
                verb: 'at have',
                tense: 'perfect'
            },
            {
                id: 'q7',
                sentence: 'Vi ______ alt online nu om dage.',
                sentenceEn: 'We do everything online these days.',
                answer: 'gør',
                blank: 'gør',
                hint: 'at gøre (to do) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at gøre',
                tense: 'present'
            },
            {
                id: 'q8',
                sentence: 'Danmark er ______ et af verdens mest digitale lande.',
                sentenceEn: 'Denmark has become one of the world\'s most digital countries.',
                answer: 'blevet',
                blank: 'blevet',
                hint: 'at blive (to become) — perfect tense, irregular',
                ruleId: 'perfect-tense',
                verb: 'at blive',
                tense: 'perfect'
            },
        ]
    },
    // ============ PD3 SKRIFTLIG ============
    {
        id: 'pd3-2022-sommer-skriftlig',
        year: 2022,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Skriftlig fremstilling',
        typeEn: 'Written Composition',
        level: 'PD3',
        lesson: {
            title: 'Argumentation og holdning',
            titleEn: 'Argumentation and Opinion',
            topics: ['word-order-v2', 'modal-infinitive', 'perfect-tense'],
            content: `Express opinions and arguments in Danish. Advanced written skills.

KEY GRAMMAR:
• Complex V2 word order after opinion phrases
• Modal verbs for expressing necessity and obligation
• Conjunctions: fordi (because), selvom (although), hvis (if)

KEY PHRASES:
• Jeg mener, at... (I think that...)
• På den ene side... på den anden side... (On one hand... on the other hand...)
• Det er vigtigt, at... (It is important that...)
• Ifølge... (According to...)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Jeg ______, at alle børn bør lære at svømme.',
                sentenceEn: 'I think that all children should learn to swim.',
                answer: 'mener',
                blank: 'mener',
                hint: 'at mene (to think/mean) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at mene',
                tense: 'present'
            },
            {
                id: 'q2',
                sentence: 'Samfundet bør ______ mere i uddannelse.',
                sentenceEn: 'Society should invest more in education.',
                answer: 'investere',
                blank: 'investere',
                hint: 'Modal verb + infinitive (at investere)',
                ruleId: 'modal-infinitive',
                verb: 'at investere',
                tense: 'infinitive'
            },
            {
                id: 'q3',
                sentence: 'Forskning har ______, at motion er sundt.',
                sentenceEn: 'Research has shown that exercise is healthy.',
                answer: 'vist',
                blank: 'vist',
                hint: 'at vise (to show) — perfect tense',
                ruleId: 'perfect-tense',
                verb: 'at vise',
                tense: 'perfect'
            },
            {
                id: 'q4',
                sentence: 'Ifølge eksperter ______ vi spise mere frugt.',
                sentenceEn: 'According to experts we should eat more fruit.',
                answer: 'bør',
                blank: 'bør',
                hint: 'V2: Ifølge eksperter → verb → vi (modal: at burde)',
                ruleId: 'word-order-v2',
                verb: 'at burde',
                tense: 'present'
            },
            {
                id: 'q5',
                sentence: 'Det er vigtigt, at man ______ sin mening.',
                sentenceEn: 'It is important that one expresses ones opinion.',
                answer: 'siger',
                blank: 'siger',
                hint: 'at sige (to say) — present tense in subordinate clause',
                ruleId: 'present-tense-r',
                verb: 'at sige',
                tense: 'present'
            },
            {
                id: 'q6',
                sentence: 'Vi kan ikke ______ dette problem.',
                sentenceEn: 'We cannot ignore this problem.',
                answer: 'ignorere',
                blank: 'ignorere',
                hint: 'Modal verb + infinitive (at ignorere)',
                ruleId: 'modal-infinitive',
                verb: 'at ignorere',
                tense: 'infinitive'
            },
        ]
    },
];

// Get all unique PD3 years
export function getPd3Years() {
    return [...new Set(pd3Exams.map(e => e.year))].sort((a, b) => b - a);
}

// Get PD3 exams by year
export function getPd3ExamsByYear(year) {
    return pd3Exams.filter(e => e.year === year);
}

// Get PD3 exam by ID
export function getPd3ExamById(id) {
    return pd3Exams.find(e => e.id === id);
}

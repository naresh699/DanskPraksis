// PD2 Exam data — curated from Danish PD2 exam papers (2013-2023)
// Each exam has: id, year, season, type, lesson, questions

export const pd2Exams = [
    // ============ PRACTICE EXAMS ============
    {
        id: 'pd2-practice-test-1',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 2 - Opgave 3',
        typeEn: 'Reading Comprehension 2 - Gap Fill',
        level: 'PD2',
        lesson: {
            title: 'Maria fra udlandet',
            titleEn: 'Maria from abroad',
            topics: ['vocabulary', 'context'],
            content: `This is Practice Test 1 from the official test bank materials for PD2.
            
Read the text and fill in the missing words based on the context of the sentence.`
        },
        questions: [
            {
                id: 'pt1-q1',
                sentence: 'Hun meldte sig hurtigt til en sprogskole, hvor hun mødte andre ______ udlændinge.',
                sentenceEn: 'She quickly signed up for a language school, where she met other young foreigners.',
                answer: 'unge',
                blank: 'unge',
                hint: 'Flertal (plural) of ung.',
                options: ['kolde', 'ringe', 'unge', 'svært']
            },
            {
                id: 'pt1-q2',
                sentence: 'I begyndelsen syntes hun, at det danske vejr var ______.',
                sentenceEn: 'In the beginning she thought the Danish weather was cold.',
                answer: 'kolde',
                blank: 'kolde',
                hint: 'Adjective matching "vejr".',
                options: ['kolde', 'ringe', 'unge', 'svært']
            },
            {
                id: 'pt1-q3',
                sentence: 'Hun brugte derfor mange aftener på at ______ med dem over video.',
                sentenceEn: 'She therefore spent many evenings calling them over video.',
                answer: 'ringe',
                blank: 'ringe',
                hint: 'At tale i telefon (to call using video/phone).',
                options: ['tale', 'ringe', 'kommunikation', 'tage sig']
            },
            {
                id: 'pt1-q4',
                sentence: 'Efter et par måneder begyndte hun at tage del i forskellige aktiviteter i ______.',
                sentenceEn: 'After a couple of months she started taking part in various activities in the village.',
                answer: 'landsbyen',
                blank: 'landsbyen',
                hint: 'Et lille samfund (a small town/village).',
                options: ['landsbyen', 'netværk', 'kammeratskab', 'plan']
            },
            {
                id: 'pt1-q5',
                sentence: 'Hendes ______ for dansk mad voksede langsomt.',
                sentenceEn: 'Her taste for Danish food grew slowly.',
                answer: 'smag',
                blank: 'smag',
                hint: 'Noget med mad at gøre (something to do with food/taste).',
                options: ['smag', 'plan', 'humor', 'kost']
            },
            {
                id: 'pt1-q6',
                sentence: 'På sprogskolen fik hun en god ______ med sin lærer.',
                sentenceEn: 'At the language school she established good communication with her teacher.',
                answer: 'kommunikation',
                blank: 'kommunikation',
                hint: 'At tale og forstå hinanden (talking and understanding each other).',
                options: ['tale', 'kammeratskab', 'kommunikation', 'humor']
            },
            {
                id: 'pt1-q7',
                sentence: 'Snart turde hun spørge om hjælp, når noget var ______.',
                sentenceEn: 'Soon she dared to ask for help when something was difficult.',
                answer: 'svært',
                blank: 'svært',
                hint: 'Ikke nemt (not easy).',
                options: ['svært', 'ringe', 'kolde', 'unge']
            },
            {
                id: 'pt1-q8',
                sentence: 'Hun synes, det er meningsfuldt at ______ for andre mennesker.',
                sentenceEn: 'She thinks it is meaningful to care for other people.',
                answer: 'tage sig',
                blank: 'tage sig',
                hint: 'At drage omsorg for (to take care of).',
                options: ['tale', 'bo', 'tage sig', 'plan']
            },
            {
                id: 'pt1-q9',
                sentence: 'Hun er stolt af at have skabt et nyt ______ i Danmark.',
                sentenceEn: 'She is proud to have created a new network in Denmark.',
                answer: 'netværk',
                blank: 'netværk',
                hint: 'En gruppe af venner og bekendte (a group of friends).',
                options: ['netværk', 'kammeratskab', 'landsbyen', 'kommunikation']
            }
        ]
    },
    {
        id: 'pd2-practice-test-2',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 2 - Opgave 3',
        typeEn: 'Reading Comprehension 2 - Gap Fill (Test 2)',
        level: 'PD2',
        lesson: {
            title: 'Ahmed flytter til en dansk by',
            titleEn: 'Ahmed moves to a Danish town',
            topics: ['vocabulary', 'context'],
            content: `Practice Test 2 from the official test bank. Fill in the missing words from the word bank.`
        },
        questions: [
            {
                id: 'pt2-q1',
                sentence: 'Ahmed ﬂyttede til en mindre dansk by sidste år for at arbejde som ______ chauffør.',
                sentenceEn: 'Ahmed moved to a smaller Danish town last year to work as a bus driver.',
                answer: 'bus',
                blank: 'bus',
                hint: 'Et transportmiddel (a means of transport).',
                options: ['bus', 'skole', 'telefon', 'kontor']
            },
            {
                id: 'pt2-q2',
                sentence: 'I begyndelsen følte han sig ______, når han skulle tale med kunderne.',
                sentenceEn: 'In the beginning he felt insecure when he had to talk to the customers.',
                answer: 'usikker',
                blank: 'usikker',
                hint: 'Ikke at have selvtillid nok (lacking confidence).',
                options: ['usikker', 'svært', 'chatte', 'skole']
            },
            {
                id: 'pt2-q3',
                sentence: 'Fællesskabet gav ham et ______, som han havde savnet siden flytningen.',
                sentenceEn: 'The community gave him a fellowship that he had missed since the move.',
                answer: 'fællesskab',
                blank: 'fællesskab',
                hint: 'Det at være sammen med andre (fellowship / community).',
                options: ['fællesskab', 'netværk', 'madklub', 'lejlighed']
            },
            {
                id: 'pt2-q4',
                sentence: 'For at forbedre sit sprog meldte Ahmed sig også til et aftenkursus på ______.',
                sentenceEn: 'To improve his language Ahmed signed up for an evening course at the language school.',
                answer: 'sprogskolen',
                blank: 'sprogskolen',
                hint: 'Et sted man lærer sprog (a place to learn languages).',
                options: ['sprogskolen', 'skole', 'kontor', 'fremtid']
            },
            {
                id: 'pt2-q5',
                sentence: 'Han brugte sin mobil til at ______ med kollegerne.',
                sentenceEn: 'He used his mobile to chat with colleagues.',
                answer: 'chatte',
                blank: 'chatte',
                hint: 'At skrive beskeder online (to send messages online).',
                options: ['chatte', 'usikker', 'skole', 'telefon']
            },
            {
                id: 'pt2-q6',
                sentence: 'I starten var det ______ at følge trænerens instruktioner.',
                sentenceEn: 'At first it was difficult to follow the coach\'s instructions.',
                answer: 'svært',
                blank: 'svært',
                hint: 'Ikke nemt (not easy).',
                options: ['svært', 'usikker', 'hobby', 'netværk']
            },
            {
                id: 'pt2-q7',
                sentence: 'På en af turene købte han endelig nye møbler til sin ______.',
                sentenceEn: 'On one of the trips he finally bought new furniture for his apartment.',
                answer: 'lejlighed',
                blank: 'lejlighed',
                hint: 'En bolig (an apartment / flat).',
                options: ['lejlighed', 'fremtid', 'kontor', 'telefon']
            },
            {
                id: 'pt2-q8',
                sentence: 'Med tiden udviklede Ahmed et stærkt ______ i lokalsamfundet.',
                sentenceEn: 'Over time Ahmed developed a strong network in the local community.',
                answer: 'netværk',
                blank: 'netværk',
                hint: 'Mange kontakter og relationer (a network of contacts).',
                options: ['netværk', 'fællesskab', 'madklub', 'hobby']
            },
            {
                id: 'pt2-q9',
                sentence: 'Ahmed er glad for sin beslutning og ser frem til sin ______ i Danmark.',
                sentenceEn: 'Ahmed is happy with his decision and looks forward to his future in Denmark.',
                answer: 'fremtid',
                blank: 'fremtid',
                hint: 'Tiden der kommer efter nu (the time to come).',
                options: ['fremtid', 'lejlighed', 'sprogskolen', 'madklub']
            }
        ]
    },
    {
        id: 'pd2-practice-test-3',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 2 - Opgave 3',
        typeEn: 'Reading Comprehension 2 - Gap Fill (Test 3)',
        level: 'PD2',
        lesson: {
            title: 'Thomas starter på universitetet',
            titleEn: 'Thomas starts at university',
            topics: ['vocabulary', 'context'],
            content: `Practice Test 3 from the official test bank. Fill in the missing words from the word bank.`
        },
        questions: [
            {
                id: 'pt3-q1',
                sentence: 'I starten kendte han ikke nogen i byen og følte sig ______.',
                sentenceEn: 'In the beginning he didn\'t know anyone in the city and felt lonely.',
                answer: 'ensom',
                blank: 'ensom',
                hint: 'Når man savner selskab (lonely).',
                options: ['ensom', 'tale', 'hjemme', 'opbygget']
            },
            {
                id: 'pt3-q2',
                sentence: 'Han fandt hurtigt et værelse i et ______ nær campus.',
                sentenceEn: 'He quickly found a room in a dormitory near campus.',
                answer: 'kollegium',
                blank: 'kollegium',
                hint: 'Bolig for studerende (dormitory).',
                options: ['kollegium', 'biblioteket', 'hjemme', 'sport']
            },
            {
                id: 'pt3-q3',
                sentence: 'Han meldte sig til en løbeklub for at holde sig i form og møde nye ______.',
                sentenceEn: 'He joined a running club to stay in shape and meet new friends.',
                answer: 'venner',
                blank: 'venner',
                hint: 'Personer man har et godt forhold til (friends).',
                options: ['venner', 'dyr', 'bøger', 'smag']
            },
            {
                id: 'pt3-q4',
                sentence: 'Han skulle læse mange sider hver uge og skrive ______ opgaver.',
                sentenceEn: 'He had to read many pages every week and write academic assignments.',
                answer: 'akademiske',
                blank: 'akademiske',
                hint: 'Opgaver på universitetet (academic).',
                options: ['akademiske', 'bøger', 'ensom', 'tjener']
            },
            {
                id: 'pt3-q5',
                sentence: 'Han ringede derfor ofte hjem for at ______ med sine forældre og få gode råd.',
                sentenceEn: 'Therefore he often called home to talk with his parents and get good advice.',
                answer: 'tale',
                blank: 'tale',
                hint: 'At snakke (to talk).',
                options: ['tale', 'opbygget', 'smag', 'humor']
            },
            {
                id: 'pt3-q6',
                sentence: 'Hans mad ______ blev bedre, og han opdagede, hvor hyggeligt det er at lave mad sammen.',
                sentenceEn: 'His food taste improved, and he discovered how cozy it is to cook together.',
                answer: 'smag',
                blank: 'smag',
                hint: 'Substantiv: Evnen til at vurdere mad (taste).',
                options: ['smag', 'humor', 'sport', 'tjener']
            },
            {
                id: 'pt3-q7',
                sentence: 'Efter eksamen fandt han et studiejob som ______ på en café.',
                sentenceEn: 'After the exam he found a student job as a waiter at a café.',
                answer: 'tjener',
                blank: 'tjener',
                hint: 'En person der serverer mad (a waiter).',
                options: ['tjener', 'kollegium', 'venner', 'dyr']
            },
            {
                id: 'pt3-q8',
                sentence: 'Han ﬁk ﬂere nye venner og følte sig efterhånden ______ i København.',
                sentenceEn: 'He made more new friends and eventually felt at home in Copenhagen.',
                answer: 'hjemme',
                blank: 'hjemme',
                hint: 'At føle sig tilpas, som var man i sit eget hus (at home).',
                options: ['hjemme', 'ensom', 'tale', 'opbygget']
            },
            {
                id: 'pt3-q9',
                sentence: 'Han har ______ et lille netværk af mennesker, som han kan dele glæder og udfordringer med.',
                sentenceEn: 'He has built up a small network of people with whom he can share joys and challenges.',
                answer: 'opbygget',
                blank: 'opbygget',
                hint: 'At skabe eller etablere noget (built up).',
                options: ['opbygget', 'venner', 'biblioteket', 'akademiske']
            }
        ]
    },
    {
        id: 'pd2-practice-test-4',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 2 - Opgave 3',
        typeEn: 'Reading Comprehension 2 - Gap Fill (Test 4)',
        level: 'PD2',
        lesson: {
            title: 'Jamal i Danmark',
            titleEn: 'Jamal in Denmark',
            topics: ['vocabulary', 'context'],
            content: `Practice Test 4 from the official test bank. Fill in the missing words from the word bank.`
        },
        questions: [
            {
                id: 'pt4-q1',
                sentence: 'Han meldte sig hurtigt til en sprogskole, hvor han mødte ______ udlændinge.',
                sentenceEn: 'He quickly signed up for a language school where he met other foreigners.',
                answer: 'andre',
                blank: 'andre',
                hint: 'Nogle flere (other).',
                options: ['andre', 'være', 'besøge', 'landsby']
            },
            {
                id: 'pt4-q2',
                sentence: 'I begyndelsen syntes han, at det danske vejr var ______ og mørkt.',
                sentenceEn: 'In the beginning he thought the Danish weather was cold and dark.',
                answer: 'kolde',
                blank: 'kolde',
                hint: 'Når temperaturen er lav (cold).',
                options: ['kolde', 'kede', 'ringe', 'svært']
            },
            {
                id: 'pt4-q3',
                sentence: 'Han brugte derfor mange aftener på at ______ med dem på videoopkald.',
                sentenceEn: 'He therefore spent many evenings calling them on video calls.',
                answer: 'ringe',
                blank: 'ringe',
                hint: 'At slå på tråden / ringe op (to call/ring).',
                options: ['ringe', 'hjælpe', 'besøge', 'humor']
            },
            {
                id: 'pt4-q4',
                sentence: 'Han tilmeldte sig en fodboldklub, hvor han fandt et godt ______.',
                sentenceEn: 'He joined a football club where he found a good community.',
                answer: 'fællesskab',
                blank: 'fællesskab',
                hint: 'Det at være en del af en gruppe (community / fellowship).',
                options: ['fællesskab', 'liv', 'relation', 'landsby']
            },
            {
                id: 'pt4-q5',
                sentence: 'Hans ______ for dansk mad voksede langsomt.',
                sentenceEn: 'His taste for Danish food grew slowly.',
                answer: 'smag',
                blank: 'smag',
                hint: 'Noget man synes godt om / madoplevelse (taste).',
                options: ['smag', 'hjælpe', 'andre', 'humor']
            },
            {
                id: 'pt4-q6',
                sentence: 'På sprogskolen ﬁk han en god ______ med sin lærer.',
                sentenceEn: 'At the language school he got a good relationship with his teacher.',
                answer: 'relation',
                blank: 'relation',
                hint: 'En forbindelse eller et forhold (relationship).',
                options: ['relation', 'fællesskab', 'andre', 'besøge']
            },
            {
                id: 'pt4-q7',
                sentence: 'Snart turde han spørge om hjælp, når noget var ______.',
                sentenceEn: 'Soon he dared to ask for help when something was difficult.',
                answer: 'svært',
                blank: 'svært',
                hint: 'Ikke let (difficult).',
                options: ['svært', 'kede', 'kolde', 'ringe']
            },
            {
                id: 'pt4-q8',
                sentence: 'Han synes, det er meningsfuldt at ______ for andre mennesker.',
                sentenceEn: 'He thinks it is meaningful to help other people.',
                answer: 'hjælpe',
                blank: 'hjælpe',
                hint: 'At gøre ting lettere for folk i nød (to help).',
                options: ['hjælpe', 'være', 'besøge', 'ringe']
            },
            {
                id: 'pt4-q9',
                sentence: 'Han er stolt af at have skabt et nyt ______ i Danmark.',
                sentenceEn: 'He is proud to have created a new life in Denmark.',
                answer: 'liv',
                blank: 'liv',
                hint: 'Tilværelse (life).',
                options: ['liv', 'fællesskab', 'relation', 'landsby']
            }
        ]
    },
    {
        id: 'pd2-practice-test-5',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 2 - Opgave 3',
        typeEn: 'Reading Comprehension 2 - Gap Fill (Test 5)',
        level: 'PD2',
        lesson: {
            title: 'Ahmed flytter til Danmark (Version 2)',
            titleEn: 'Ahmed moves to Denmark (Version 2)',
            topics: ['vocabulary', 'context'],
            content: `Practice Test 5 from the official test bank. Fill in the missing words from the word bank.`
        },
        questions: [
            {
                id: 'pt5-q1',
                sentence: 'Han begyndte på en danskuddannelse og mødte andre ______ udlændinge.',
                sentenceEn: 'He started a Danish education and met other newly arrived foreigners.',
                answer: 'nytilﬂyttede',
                blank: 'nytilﬂyttede',
                hint: 'Nogen, der lige er ankommet (newly arrived).',
                options: ['nytilﬂyttede', 'venner', 'kammeratskab', 'aktiv']
            },
            {
                id: 'pt5-q2',
                sentence: 'Vejret virkede meget ______ om vinteren, og han savnede solen.',
                sentenceEn: 'The weather seemed very cold in the winter, and he missed the sun.',
                answer: 'kolde',
                blank: 'kolde',
                hint: 'Modsat af varmt (cold).',
                options: ['kolde', 'samfund', 'ringe', 'svært']
            },
            {
                id: 'pt5-q3',
                sentence: 'Han ringede ofte til sin familie for at ______ med dem.',
                sentenceEn: 'He often called his family to talk to them.',
                answer: 'ringe',
                blank: 'ringe',
                hint: 'At tage telefonisk kontakt (to call).',
                options: ['ringe', 'træne', 'venner', 'relation']
            },
            {
                id: 'pt5-q4',
                sentence: 'Snart fandt han et frivilligt arbejde i ______, hvor han hjalp børn.',
                sentenceEn: 'Soon he found voluntary work in the sports club, where he helped children.',
                answer: 'sportsklubben',
                blank: 'sportsklubben',
                hint: 'Et sted hvor man spiller fodbold (the sports club).',
                options: ['sportsklubben', 'samfund', 'værdier', 'plan']
            },
            {
                id: 'pt5-q5',
                sentence: 'Der lærte han nye ______ og forbedrede sin danske udtale.',
                sentenceEn: 'There he learned new friends and improved his Danish pronunciation.',
                answer: 'venner',
                blank: 'venner',
                hint: 'Folk man kender godt (friends).',
                options: ['venner', 'nytilﬂyttede', 'kammeratskab', 'smag']
            },
            {
                id: 'pt5-q6',
                sentence: 'Hans ______ for dansk mad voksede også, især efter at have smagt smørrebrød.',
                sentenceEn: 'His taste for Danish food also grew, especially after tasting smørrebrød.',
                answer: 'smag',
                blank: 'smag',
                hint: 'At kunne lide noget at spise (taste).',
                options: ['smag', 'træne', 'kolde', 'relation']
            },
            {
                id: 'pt5-q7',
                sentence: 'Han udviklede en god ______ til sin lærer, som motiverede ham til at fortsætte.',
                sentenceEn: 'He developed a good relationship with his teacher, who motivated him to continue.',
                answer: 'relation',
                blank: 'relation',
                hint: 'Et bånd eller forhold til andre (relationship).',
                options: ['relation', 'aktiv', 'værdier', 'plan']
            },
            {
                id: 'pt5-q8',
                sentence: 'Læreren motiverede ham til at fortsætte, selv når det var ______.',
                sentenceEn: 'The teacher motivated him to continue, even when it was difficult.',
                answer: 'svært',
                blank: 'svært',
                hint: 'Ikke nemt (difficult).',
                options: ['svært', 'nytilﬂyttede', 'ringe', 'kolde']
            },
            {
                id: 'pt5-q9',
                sentence: 'I dag føler han sig ______ i lokalsamfundet og har lyst til at hjælpe andre.',
                sentenceEn: 'Today he feels active in the local community and wants to help others.',
                answer: 'aktiv',
                blank: 'aktiv',
                hint: 'Handlende; engageret (active).',
                options: ['aktiv', 'træne', 'samfund', 'venner']
            }
        ]
    },
    {
        id: 'pd2-practice-test-6',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 2 - Opgave 3',
        typeEn: 'Reading Comprehension 2 - Gap Fill (Test 6)',
        level: 'PD2',
        lesson: {
            title: 'Jonas i København',
            titleEn: 'Jonas in Copenhagen',
            topics: ['vocabulary', 'context'],
            content: `Practice Test 6 from the official test bank. Fill in the missing words from the word bank.`
        },
        questions: [
            {
                id: 'pt6-q1',
                sentence: 'Han mødte mange ______ mennesker, der ligesom ham gerne ville lære sproget.',
                sentenceEn: 'He met many friendly people who, like him, wanted to learn the language.',
                answer: 'venlige',
                blank: 'venlige',
                hint: 'Adjektiv: rare og imødekommende (kind and welcoming).',
                options: ['venlige', 'koldt', 'humor', 'læse']
            },
            {
                id: 'pt6-q2',
                sentence: 'I begyndelsen syntes han, at vejret var meget ______.',
                sentenceEn: 'In the beginning he thought the weather was very cold.',
                answer: 'koldt',
                blank: 'koldt',
                hint: 'Adjektiv der beskriver vejret om vinteren (adjective describing winter weather).',
                options: ['koldt', 'svært', 'venlige', 'motion']
            },
            {
                id: 'pt6-q3',
                sentence: 'Han brugte derfor mange aftener på at ______ med dem over video.',
                sentenceEn: 'He therefore spent many evenings calling them over video.',
                answer: 'ringe',
                blank: 'ringe',
                hint: 'At tale i telefon (to call).',
                options: ['ringe', 'læse', 'tage sig', 'kage']
            },
            {
                id: 'pt6-q4',
                sentence: 'Efter et par måneder begyndte han at engagere sig i ______.',
                sentenceEn: 'After a couple of months he started to get involved in the local community.',
                answer: 'lokalsamfundet',
                blank: 'lokalsamfundet',
                hint: 'Det område, hvor man bor (the area where you live).',
                options: ['lokalsamfundet', 'netværk', 'sygepleje', 'humor']
            },
            {
                id: 'pt6-q5',
                sentence: 'Hans ______ for dansk kultur voksede.',
                sentenceEn: 'His understanding of Danish culture grew.',
                answer: 'forståelse',
                blank: 'forståelse',
                hint: 'At kunne forstå noget (comprehension/understanding).',
                options: ['forståelse', 'motion', 'venskab', 'kage']
            },
            {
                id: 'pt6-q6',
                sentence: 'På kurset fik han et varmt ______ med sin lærer.',
                sentenceEn: 'At the course he developed a warm friendship with his teacher.',
                answer: 'venskab',
                blank: 'venskab',
                hint: 'En tæt relation mellem to personer (a close bond between people).',
                options: ['venskab', 'netværk', 'humor', 'forståelse']
            },
            {
                id: 'pt6-q7',
                sentence: 'Snart turde han spørge om hjælp, når noget var ______.',
                sentenceEn: 'Soon he dared to ask for help when something was difficult.',
                answer: 'svært',
                blank: 'svært',
                hint: 'Ikke nemt (not easy).',
                options: ['svært', 'koldt', 'venlige', 'læse']
            },
            {
                id: 'pt6-q8',
                sentence: 'Han elsker at ______ af børnene.',
                sentenceEn: 'He loves to take care of the children.',
                answer: 'tage sig',
                blank: 'tage sig',
                hint: 'At drage omsorg for (to take care of).',
                options: ['tage sig', 'ringe', 'læse', 'motion']
            },
            {
                id: 'pt6-q9',
                sentence: 'Han er stolt af at have skabt et stærkt ______ i Danmark.',
                sentenceEn: 'He is proud of having created a strong network in Denmark.',
                answer: 'netværk',
                blank: 'netværk',
                hint: 'En gruppe af kontakter og venner (a group of contacts and friends).',
                options: ['netværk', 'lokalsamfundet', 'venskab', 'sygepleje']
            }
        ]
    },
    {
        id: 'pd2-practice-test-7',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 2 - Opgave 3',
        typeEn: 'Reading Comprehension 2 - Gap Fill (Test 7)',
        level: 'PD2',
        lesson: {
            title: 'Hasan som buschauffør',
            titleEn: 'Hasan as a bus driver',
            topics: ['vocabulary', 'context'],
            content: `Practice Test 7 from the official test bank. Fill in the missing words from the word bank.`
        },
        questions: [
            {
                id: 'pt7-q1',
                sentence: 'Han var nervøs, fordi han ikke kendte ______ passagerer.',
                sentenceEn: 'He was nervous because he did not know the new passengers.',
                answer: 'nye',
                blank: 'nye',
                hint: 'Modsætningen af gamle (the opposite of old).',
                options: ['nye', 'tidligt', 'roligt', 'erfaringer']
            },
            {
                id: 'pt7-q2',
                sentence: 'I den første uge stod han op ______ for at forberede sig.',
                sentenceEn: 'In the first week he got up early to prepare.',
                answer: 'tidligt',
                blank: 'tidligt',
                hint: 'Før de andre (before the others / early).',
                options: ['tidligt', 'roligt', 'nye', 'støtte']
            },
            {
                id: 'pt7-q3',
                sentence: 'Han øvede sig på at ______ bussen gennem trafikken.',
                sentenceEn: 'He practised driving the bus through traffic.',
                answer: 'træne',
                blank: 'træne',
                hint: 'At øve sig (to practise/train).',
                options: ['træne', 'støtte', 'rutine', 'fællesskab']
            },
            {
                id: 'pt7-q4',
                sentence: 'Kollegernes ______ var afgørende.',
                sentenceEn: 'The colleagues\' support was crucial.',
                answer: 'støtte',
                blank: 'støtte',
                hint: 'Hjælp og opbakning (help and backing).',
                options: ['støtte', 'udfordring', 'fællesskab', 'rutine']
            },
            {
                id: 'pt7-q5',
                sentence: 'Arbejdet blev en daglig ______.',
                sentenceEn: 'The work became a daily routine.',
                answer: 'rutine',
                blank: 'rutine',
                hint: 'Noget man gør hver dag (something done every day).',
                options: ['rutine', 'udfordring', 'erfaringer', 'støtte']
            },
            {
                id: 'pt7-q6',
                sentence: 'Han lærte at tage tingene ______, selv når der var mange mennesker.',
                sentenceEn: 'He learned to take things calmly, even when there were many people.',
                answer: 'roligt',
                blank: 'roligt',
                hint: 'At være i fred, ikke stresset (calm, not stressed).',
                options: ['roligt', 'tidligt', 'nye', 'træne']
            },
            {
                id: 'pt7-q7',
                sentence: 'Han udviklede et stærkt ______ blandt chaufførerne.',
                sentenceEn: 'He developed a strong community among the drivers.',
                answer: 'fællesskab',
                blank: 'fællesskab',
                hint: 'En gruppe mennesker, der hører sammen (a sense of community).',
                options: ['fællesskab', 'rutine', 'støtte', 'erfaringer']
            },
            {
                id: 'pt7-q8',
                sentence: 'Han ser hver dag som en ny ______.',
                sentenceEn: 'He sees every day as a new challenge.',
                answer: 'udfordring',
                blank: 'udfordring',
                hint: 'Noget der kræver indsats (something requiring effort).',
                options: ['udfordring', 'rutine', 'fællesskab', 'nye']
            },
            {
                id: 'pt7-q9',
                sentence: 'Han bruger sine ______ til at hjælpe nye kolleger.',
                sentenceEn: 'He uses his experiences to help new colleagues.',
                answer: 'erfaringer',
                blank: 'erfaringer',
                hint: 'Viden opnået gennem praksis (knowledge gained through practice).',
                options: ['erfaringer', 'støtte', 'udfordring', 'træne']
            }
        ]
    },
    {
        id: 'pd2-practice-test-8',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 2 - Opgave 3',
        typeEn: 'Reading Comprehension 2 - Gap Fill (Test 8)',
        level: 'PD2',
        lesson: {
            title: 'Ahmed i Danmark',
            titleEn: 'Ahmed in Denmark',
            topics: ['vocabulary', 'context'],
            content: `Practice Test 8 from the official test bank. Fill in the missing words from the word bank.`
        },
        questions: [
            {
                id: 'pt8-q1',
                sentence: 'Da han kom, kendte han ingen ______ i byen.',
                sentenceEn: 'When he arrived, he knew no friends in the city.',
                answer: 'venner',
                blank: 'venner',
                hint: 'Folk man holder af (people you care about).',
                options: ['venner', 'kolde', 'naboer', 'unge']
            },
            {
                id: 'pt8-q2',
                sentence: 'Vejret var ______ om vinteren.',
                sentenceEn: 'The weather was cold in winter.',
                answer: 'kolde',
                blank: 'kolde',
                hint: 'Et adjektiv der beskriver vintertemperaturer (an adjective for winter temperatures).',
                options: ['kolde', 'modig', 'triste', 'unge']
            },
            {
                id: 'pt8-q3',
                sentence: 'Han begyndte at ______ med sine forældre hver aften.',
                sentenceEn: 'He started to communicate with his parents every evening.',
                answer: 'kommunikere',
                blank: 'kommunikere',
                hint: 'At tale eller skrive med nogen (to talk or write with someone).',
                options: ['kommunikere', 'ringe', 'bo', 'kiosk']
            },
            {
                id: 'pt8-q4',
                sentence: 'Snart lærte han at cykle rundt i ______.',
                sentenceEn: 'Soon he learned to cycle around the city.',
                answer: 'byen',
                blank: 'byen',
                hint: 'Et stort sted med mange mennesker (a large place with many people).',
                options: ['byen', 'kiosk', 'relation', 'venner']
            },
            {
                id: 'pt8-q5',
                sentence: 'Han fandt også en lille ______, der solgte hans yndlingsretter.',
                sentenceEn: 'He also found a small kiosk that sold his favourite dishes.',
                answer: 'kiosk',
                blank: 'kiosk',
                hint: 'En lille butik (a small shop/kiosk).',
                options: ['kiosk', 'byen', 'relation', 'interesse']
            },
            {
                id: 'pt8-q6',
                sentence: 'På studiet fik han en god ______ med sin danske studiekammerat.',
                sentenceEn: 'At university, he developed a good relationship with his Danish classmate.',
                answer: 'relation',
                blank: 'relation',
                hint: 'Et forhold mellem to mennesker (a relationship between two people).',
                options: ['relation', 'kiosk', 'interesse', 'venner']
            },
            {
                id: 'pt8-q7',
                sentence: 'Efter et par måneder blev han mere ______.',
                sentenceEn: 'After a couple of months he became more courageous.',
                answer: 'modig',
                blank: 'modig',
                hint: 'Ikke bange (not afraid / brave).',
                options: ['modig', 'kolde', 'triste', 'unge']
            },
            {
                id: 'pt8-q8',
                sentence: 'Der fik han nye venner og ______ for lokal kultur.',
                sentenceEn: 'There he gained new friends and an interest in local culture.',
                answer: 'interesse',
                blank: 'interesse',
                hint: 'Nysgerrighed (curiosity / interest).',
                options: ['interesse', 'relation', 'kiosk', 'bo']
            },
            {
                id: 'pt8-q9',
                sentence: 'Nu planlægger han at ______ i Danmark efter sin uddannelse.',
                sentenceEn: 'Now he plans to live in Denmark after his education.',
                answer: 'bo',
                blank: 'bo',
                hint: 'At have sit hjem et sted (to reside/live).',
                options: ['bo', 'kommunikere', 'ringe', 'interesse']
            }
        ]
    },
    {
        id: 'pd2-practice-test-9',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 2 - Opgave 3',
        typeEn: 'Reading Comprehension 2 - Gap Fill (Test 9)',
        level: 'PD2',
        lesson: {
            title: 'Mahmouds nye liv i Danmark',
            titleEn: 'Mahmoud\'s New Life in Denmark',
            topics: ['vocabulary', 'context'],
            content: `Practice Test 9 from the official test bank. Fill in the missing words from the word bank.`
        },
        questions: [
            {
                id: 'pt9-q1',
                sentence: 'I begyndelsen boede han hos sin ______ familie i Aarhus.',
                sentenceEn: 'In the beginning, he lived with his supportive family in Aarhus.',
                answer: 'støtte',
                blank: 'støtte',
                hint: 'Nogen der hjælper / giver hjælp (support/supportive).',
                options: ['støtte', 'savede', 'varmt', 'delt']
            },
            {
                id: 'pt9-q2',
                sentence: 'På universitetet mødte han mange ______ studerende fra hele verden.',
                sentenceEn: 'At the university, he met many friendly students from all over the world.',
                answer: 'venlige',
                blank: 'venlige',
                hint: 'Folk der er søde og imødekommende (friendly).',
                options: ['venlige', 'holde', 'udtale', 'satte']
            },
            {
                id: 'pt9-q3',
                sentence: 'Det første halve år syntes han, at sproget var ______ at udtale.',
                sentenceEn: 'The first half year he thought the language was difficult to pronounce.',
                answer: 'svært',
                blank: 'svært',
                hint: 'Ikke nemt (difficult).',
                options: ['svært', 'savede', 'varmt', 'delt']
            },
            {
                id: 'pt9-q4',
                sentence: 'For at forbedre sine færdigheder begyndte han at ______ med lokale.',
                sentenceEn: 'To improve his skills, he started to spar (practice) with locals.',
                answer: 'sparre',
                blank: 'sparre',
                hint: 'At tale med / øve sig med andre (to spar/practice).',
                options: ['sparre', 'holde', 'udtale', 'satte']
            },
            {
                id: 'pt9-q5',
                sentence: 'Han deltog i en løbeklub, hvor han fandt et godt ______.',
                sentenceEn: 'He joined a running club, where he found a good network.',
                answer: 'netværk',
                blank: 'netværk',
                hint: 'En gruppe mennesker man kender (network).',
                options: ['netværk', 'savede', 'varmt', 'delt']
            },
            {
                id: 'pt9-q6',
                sentence: 'Hans forkærlighed for dansk mad ______ langsomt.',
                sentenceEn: 'His fondness for Danish food matured slowly.',
                answer: 'modne',
                blank: 'modne',
                hint: 'At udvikle sig / blive voksen / modnes (mature).',
                options: ['modne', 'holde', 'udtale', 'satte']
            },
            {
                id: 'pt9-q7',
                sentence: 'Han fik et deltidsjob og begyndte at ______ for sin egen lejlighed.',
                sentenceEn: 'He got a part-time job and began to save for his own apartment.',
                answer: 'satte',
                blank: 'satte',
                hint: 'At sætte penge til side (to put aside/save).',
                options: ['satte', 'savede', 'varmt', 'delt']
            },
            {
                id: 'pt9-q8',
                sentence: 'Han valgte at blive i Danmark, fordi han ______ den åbne kultur.',
                sentenceEn: 'He chose to stay in Denmark because he loves the open culture.',
                answer: 'elsker',
                blank: 'elsker',
                hint: 'At holde meget af (to love).',
                options: ['elsker', 'holde', 'udtale', 'sparre']
            },
            {
                id: 'pt9-q9',
                sentence: 'Han meldte sig som frivillig, så han kunne ______ sine erfaringer.',
                sentenceEn: 'He volunteered so he could share his experiences.',
                answer: 'dele',
                blank: 'dele',
                hint: 'At give noget til de andre (to share).',
                options: ['dele', 'savede', 'varmt', 'delt']
            }
        ]
    },
    {
        id: 'pd2-practice-test-10',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Læseforståelse 2 - Opgave 3',
        typeEn: 'Reading Comprehension 2 - Gap Fill (Test 10)',
        level: 'PD2',
        lesson: {
            title: 'Mikkel flytter til København',
            titleEn: 'Mikkel moves to Copenhagen',
            topics: ['vocabulary', 'context'],
            content: `Practice Test 10 from the official test bank. Fill in the missing words from the word bank.`
        },
        questions: [
            {
                id: 'pt10-q1',
                sentence: 'Det var ______ for ham at finde rundt i det nye miljø.',
                sentenceEn: 'It was difficult for him to find his way around the new environment.',
                answer: 'svært',
                blank: 'svært',
                hint: 'Ikke nemt (difficult).',
                options: ['svært', 'by', 'lange', 'madlavning']
            },
            {
                id: 'pt10-q2',
                sentence: 'Han savnede sine gamle ______ og familien hjemme i Jylland.',
                sentenceEn: 'He missed his old friends and the family back in Jutland.',
                answer: 'venner',
                blank: 'venner',
                hint: 'Mennesker man godt kan lide (friends).',
                options: ['venner', 'undskyldning', 'musik', 'lange']
            },
            {
                id: 'pt10-q3',
                sentence: 'Han ______ hurtigt mange fælles interesser med de andre medlemmer.',
                sentenceEn: 'He quickly shared many common interests with the other members.',
                answer: 'delte',
                blank: 'delte',
                hint: 'Noget man har til fælles (shared).',
                options: ['delte', 'by', 'lange', 'madlavning']
            },
            {
                id: 'pt10-q4',
                sentence: 'Det gav ham stor ______ at se børnene blive gladere og dygtigere.',
                sentenceEn: 'It gave him great joy to see the children become happier and more skilled.',
                answer: 'glæde',
                blank: 'glæde',
                hint: 'En følelse af at være glad (joy/happiness).',
                options: ['glæde', 'undskyldning', 'musik', 'by']
            },
            {
                id: 'pt10-q5',
                sentence: 'Man lærer mest ved at ______ andre.',
                sentenceEn: 'You learn the most by teaching others.',
                answer: 'undervise',
                blank: 'undervise',
                hint: 'At lære andre noget (to teach).',
                options: ['undervise', 'lange', 'madlavning', 'undskyldning']
            },
            {
                id: 'pt10-q6',
                sentence: 'Efter det første semester følte han sig mere ______.',
                sentenceEn: 'After the first semester he felt more confident.',
                answer: 'selvsikker',
                blank: 'selvsikker',
                hint: 'Når man tror på sig selv (confident).',
                options: ['selvsikker', 'musik', 'by', 'lange']
            },
            {
                id: 'pt10-q7',
                sentence: 'Han fandt en god ______ med en studiekammerat.',
                sentenceEn: 'He found a good friendship with a fellow student.',
                answer: 'venskab',
                blank: 'venskab',
                hint: 'Et forhold til en ven (friendship).',
                options: ['venskab', 'madlavning', 'undskyldning', 'musik']
            },
            {
                id: 'pt10-q8',
                sentence: 'Nu træner han to gange om ugen og har fået et endnu større ______.',
                sentenceEn: 'Now he trains twice a week and has gained an even larger network.',
                answer: 'netværk',
                blank: 'netværk',
                hint: 'Flere mennesker man kender (network).',
                options: ['netværk', 'by', 'lange', 'madlavning']
            },
            {
                id: 'pt10-q9',
                sentence: 'Han ser frem til at blive færdiguddannet og ______ i Danmark.',
                sentenceEn: 'He looks forward to graduating and living in Denmark.',
                answer: 'bo',
                blank: 'bo',
                hint: 'At have sit hjem/adresse (to live).',
                options: ['bo', 'undskyldning', 'musik', 'by']
            }
        ]
    },
    // ============ 2023 ============
    {
        id: 'pd2-2023-sommer-laese1',
        year: 2023,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Hverdagen i Danmark',
            titleEn: 'Everyday Life in Denmark',
            topics: ['present-tense-r', 'modal-infinitive'],
            content: `This exam tests your understanding of daily routines and everyday life in Denmark. 

KEY GRAMMAR:
• Present tense verbs (nutid) always end in -r: spise → spiser
• Modal verbs (kan, skal, vil) are followed by infinitive WITHOUT "at"
• Time expressions: om morgenen, om aftenen, hver dag

KEY VOCABULARY:
• morgenmad (breakfast), frokost (lunch), aftensmad (dinner)
• arbejde (work), skole (school), hjem (home)
• transport: bus, tog (train), cykel (bicycle)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Jeg ______ dansk hver dag.',
                sentenceEn: 'I speak Danish every day.',
                answer: 'taler',
                blank: 'taler',
                hint: 'at tale (to speak) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at tale',
                tense: 'present'
            },
            {
                id: 'q2',
                sentence: 'Hun kan ______ engelsk og dansk.',
                sentenceEn: 'She can speak English and Danish.',
                answer: 'tale',
                blank: 'tale',
                hint: 'Modal verb + infinitive',
                ruleId: 'modal-infinitive',
                verb: 'at tale',
                tense: 'infinitive'
            },
            {
                id: 'q3',
                sentence: 'Vi ______ morgenmad kl. 7 hver morgen.',
                sentenceEn: 'We eat breakfast at 7 every morning.',
                answer: 'spiser',
                blank: 'spiser',
                hint: 'at spise (to eat) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at spise',
                tense: 'present'
            },
            {
                id: 'q4',
                sentence: 'Min bror skal ______ til lægen i morgen.',
                sentenceEn: 'My brother must go to the doctor tomorrow.',
                answer: 'gå',
                blank: 'gå',
                hint: 'Modal verb + infinitive (at gå)',
                ruleId: 'modal-infinitive',
                verb: 'at gå',
                tense: 'infinitive'
            },
            {
                id: 'q5',
                sentence: 'Børnene ______ i skole fra mandag til fredag.',
                sentenceEn: 'The children go to school from Monday to Friday.',
                answer: 'går',
                blank: 'går',
                hint: 'at gå (to go) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at gå',
                tense: 'present'
            },
            {
                id: 'q6',
                sentence: 'Jeg vil gerne ______ en kop kaffe.',
                sentenceEn: 'I would like to drink a cup of coffee.',
                answer: 'drikke',
                blank: 'drikke',
                hint: 'Modal verb + infinitive (at drikke)',
                ruleId: 'modal-infinitive',
                verb: 'at drikke',
                tense: 'infinitive'
            },
            {
                id: 'q7',
                sentence: 'Han ______ på et hospital som læge.',
                sentenceEn: 'He works at a hospital as a doctor.',
                answer: 'arbejder',
                blank: 'arbejder',
                hint: 'at arbejde (to work) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at arbejde',
                tense: 'present'
            },
            {
                id: 'q8',
                sentence: 'De ______ i en lejlighed i København.',
                sentenceEn: 'They live in an apartment in Copenhagen.',
                answer: 'bor',
                blank: 'bor',
                hint: 'at bo (to live) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at bo',
                tense: 'present'
            },
            {
                id: 'q9',
                sentence: 'Maria skal ______ sine børn fra skolen.',
                sentenceEn: 'Maria must pick up her children from school.',
                answer: 'hente',
                blank: 'hente',
                hint: 'Modal verb + infinitive (at hente)',
                ruleId: 'modal-infinitive',
                verb: 'at hente',
                tense: 'infinitive'
            },
            {
                id: 'q10',
                sentence: 'Vi ______ avisen om morgenen.',
                sentenceEn: 'We read the newspaper in the morning.',
                answer: 'læser',
                blank: 'læser',
                hint: 'at læse (to read) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at læse',
                tense: 'present'
            },
        ]
    },
    {
        id: 'pd2-2023-sommer-laese2',
        year: 2023,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 2',
        typeEn: 'Reading Comprehension 2',
        level: 'PD2',
        lesson: {
            title: 'Fritidsaktiviteter og hobbyer',
            titleEn: 'Leisure Activities and Hobbies',
            topics: ['past-tense-group1', 'past-tense-group2'],
            content: `This section focuses on leisure time and hobbies. You will practice past tense forms.

KEY GRAMMAR:
• Group 1 past tense: -ede (spillede, cyklede)
• Group 2 past tense: -te (læste, købte, spiste)
• Time markers for past: i går (yesterday), sidste uge (last week), i weekenden

KEY VOCABULARY:
• sport: fodbold (football), svømning (swimming), løb (running)
• musik: klaver (piano), guitar, sang (song)
• kunst: male (paint), tegne (draw), skrive (write)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'I går ______ vi fodbold i parken.',
                sentenceEn: 'Yesterday we played football in the park.',
                answer: 'spillede',
                blank: 'spillede',
                hint: 'at spille (to play) — past tense, Group 1',
                ruleId: 'past-tense-group1',
                verb: 'at spille',
                tense: 'past'
            },
            {
                id: 'q2',
                sentence: 'Min søster ______ en god bog i weekenden.',
                sentenceEn: 'My sister read a good book at the weekend.',
                answer: 'læste',
                blank: 'læste',
                hint: 'at læse (to read) — past tense, Group 2',
                ruleId: 'past-tense-group2',
                verb: 'at læse',
                tense: 'past'
            },
            {
                id: 'q3',
                sentence: 'Børnene ______ til musik i går aftes.',
                sentenceEn: 'The children listened to music yesterday evening.',
                answer: 'hørte',
                blank: 'hørte',
                hint: 'at høre (to hear/listen) — past tense',
                ruleId: 'past-tense-group1',
                verb: 'at høre',
                tense: 'past'
            },
            {
                id: 'q4',
                sentence: 'Vi ______ middag kl. 18 i går.',
                sentenceEn: 'We ate dinner at 18 yesterday.',
                answer: 'spiste',
                blank: 'spiste',
                hint: 'at spise (to eat) — past tense, Group 2',
                ruleId: 'past-tense-group2',
                verb: 'at spise',
                tense: 'past'
            },
            {
                id: 'q5',
                sentence: 'Peter ______ til Frankrig sidste sommer.',
                sentenceEn: 'Peter traveled to France last summer.',
                answer: 'rejste',
                blank: 'rejste',
                hint: 'at rejse (to travel) — past tense',
                ruleId: 'past-tense-group1',
                verb: 'at rejse',
                tense: 'past'
            },
            {
                id: 'q6',
                sentence: 'Jeg ______ en ny computer i sidste uge.',
                sentenceEn: 'I bought a new computer last week.',
                answer: 'købte',
                blank: 'købte',
                hint: 'at købe (to buy) — past tense, Group 2',
                ruleId: 'past-tense-group2',
                verb: 'at købe',
                tense: 'past'
            },
            {
                id: 'q7',
                sentence: 'Vi ______ en film i biografen i fredags.',
                sentenceEn: 'We watched a movie at the cinema on Friday.',
                answer: 'så',
                blank: 'så',
                hint: 'at se (to see) — past tense, Irregular',
                ruleId: 'past-tense-group3',
                verb: 'at se',
                tense: 'past'
            },
            {
                id: 'q8',
                sentence: 'Hun ______ klaver i tre timer.',
                sentenceEn: 'She played piano for three hours.',
                answer: 'spillede',
                blank: 'spillede',
                hint: 'at spille (to play) — past tense, Group 1',
                ruleId: 'past-tense-group1',
                verb: 'at spille',
                tense: 'past'
            },
        ]
    },
    // ============ 2022 ============
    {
        id: 'pd2-2022-sommer-laese1',
        year: 2022,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Sundhed og krop',
            titleEn: 'Health and Body',
            topics: ['present-tense-r', 'modal-infinitive'],
            content: `Learn vocabulary related to health, the body, and visiting the doctor.

KEY GRAMMAR:
• Present tense: verb + -r (spiser, drikker, motionerer)
• Modal verbs: skal, bør, kan + infinitive WITHOUT "at"

KEY VOCABULARY:
• krop (body), hoved (head), mave (stomach), ryg (back)
• læge (doctor), apotek (pharmacy), medicin (medicine)
• sund (healthy), syg (sick), træt (tired)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Lægen ______ at du skal hvile dig.',
                sentenceEn: 'The doctor says that you should rest.',
                answer: 'siger',
                blank: 'siger',
                hint: 'at sige (to say) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at sige',
                tense: 'present'
            },
            {
                id: 'q2',
                sentence: 'Du bør ______ mere vand hver dag.',
                sentenceEn: 'You should drink more water every day.',
                answer: 'drikke',
                blank: 'drikke',
                hint: 'Modal verb + infinitive (at drikke)',
                ruleId: 'modal-infinitive',
                verb: 'at drikke',
                tense: 'infinitive'
            },
            {
                id: 'q3',
                sentence: 'Vi ______ til svømning hver tirsdag.',
                sentenceEn: 'We go swimming every Tuesday.',
                answer: 'går',
                blank: 'går',
                hint: 'at gå (to go) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at gå',
                tense: 'present'
            },
            {
                id: 'q4',
                sentence: 'Man kan ______ medicin på apoteket.',
                sentenceEn: 'One can buy medicine at the pharmacy.',
                answer: 'købe',
                blank: 'købe',
                hint: 'Modal verb + infinitive (at købe)',
                ruleId: 'modal-infinitive',
                verb: 'at købe',
                tense: 'infinitive'
            },
            {
                id: 'q5',
                sentence: 'Mange danskere ______ cykel til arbejde.',
                sentenceEn: 'Many Danes ride bicycle to work.',
                answer: 'cykler',
                blank: 'cykler',
                hint: 'at cykle (to cycle) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at cykle',
                tense: 'present'
            },
            {
                id: 'q6',
                sentence: 'Børn skal ______ mindst 8 timer hver nat.',
                sentenceEn: 'Children must sleep at least 8 hours every night.',
                answer: 'sove',
                blank: 'sove',
                hint: 'Modal verb + infinitive (at sove)',
                ruleId: 'modal-infinitive',
                verb: 'at sove',
                tense: 'infinitive'
            },
            {
                id: 'q7',
                sentence: 'Min mormor ______ 80 år gammel.',
                sentenceEn: 'My grandmother is 80 years old.',
                answer: 'er',
                blank: 'er',
                hint: 'at være (to be) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at være',
                tense: 'present'
            },
            {
                id: 'q8',
                sentence: 'Han ______ ikke godt i dag. Han har feber.',
                sentenceEn: 'He does not feel well today. He has a fever.',
                answer: 'har',
                blank: 'har',
                hint: 'at have (to have) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at have',
                tense: 'present'
            },
        ]
    },
    {
        id: 'pd2-2022-vinter-laese1',
        year: 2022,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Bolig og hjem',
            titleEn: 'Housing and Home',
            topics: ['present-tense-r', 'perfect-tense'],
            content: `This section covers vocabulary about housing, living arrangements, and moving.

KEY GRAMMAR:
• Present tense with -r
• Perfect tense: har/er + participle (har boet, er flyttet)

KEY VOCABULARY:
• lejlighed (apartment), hus (house), værelse (room)
• leje (rent), købe (buy), flytte (move)
• møbler: sofa, bord (table), stol (chair), seng (bed)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Vi har ______ i denne lejlighed i fem år.',
                sentenceEn: 'We have lived in this apartment for five years.',
                answer: 'boet',
                blank: 'boet',
                hint: 'at bo (to live) — perfect tense (har + -et)',
                ruleId: 'perfect-tense',
                verb: 'at bo',
                tense: 'perfect'
            },
            {
                id: 'q2',
                sentence: 'De er ______ til en ny by.',
                sentenceEn: 'They have moved to a new city.',
                answer: 'flyttet',
                blank: 'flyttet',
                hint: 'at flytte (to move) — perfect tense (er + -et)',
                ruleId: 'perfect-tense',
                verb: 'at flytte',
                tense: 'perfect'
            },
            {
                id: 'q3',
                sentence: 'Lejligheden ______ 8.000 kr. om måneden.',
                sentenceEn: 'The apartment costs 8,000 kr. per month.',
                answer: 'koster',
                blank: 'koster',
                hint: 'at koste (to cost) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at koste',
                tense: 'present'
            },
            {
                id: 'q4',
                sentence: 'Han har ______ nye møbler til stuen.',
                sentenceEn: 'He has bought new furniture for the living room.',
                answer: 'købt',
                blank: 'købt',
                hint: 'at købe (to buy) — perfect tense (har + -t)',
                ruleId: 'perfect-tense',
                verb: 'at købe',
                tense: 'perfect'
            },
            {
                id: 'q5',
                sentence: 'Vi ______ i en lille by uden for København.',
                sentenceEn: 'We live in a small town outside Copenhagen.',
                answer: 'bor',
                blank: 'bor',
                hint: 'at bo (to live) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at bo',
                tense: 'present'
            },
            {
                id: 'q6',
                sentence: 'Hun har ______ en lækker aftensmad.',
                sentenceEn: 'She has made a delicious dinner.',
                answer: 'lavet',
                blank: 'lavet',
                hint: 'at lave (to make) — perfect tense (har + -et)',
                ruleId: 'perfect-tense',
                verb: 'at lave',
                tense: 'perfect'
            },
            {
                id: 'q7',
                sentence: 'Hvor mange værelser ______ der i jeres hus?',
                sentenceEn: 'How many rooms are there in your house?',
                answer: 'er',
                blank: 'er',
                hint: 'at være (to be) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at være',
                tense: 'present'
            },
            {
                id: 'q8',
                sentence: 'Vi har ______ et nyt køkken.',
                sentenceEn: 'We have gotten a new kitchen.',
                answer: 'fået',
                blank: 'fået',
                hint: 'at få (to get) — perfect tense, irregular',
                ruleId: 'perfect-tense',
                verb: 'at få',
                tense: 'perfect'
            },
        ]
    },
    // ============ 2021 ============
    {
        id: 'pd2-2021-sommer-laese1',
        year: 2021,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Arbejde og uddannelse',
            titleEn: 'Work and Education',
            topics: ['present-tense-r', 'modal-infinitive', 'word-order-v2'],
            content: `Learn about employment and education in Danish society. Focus on V2 word order.

KEY GRAMMAR:
• V2 word order: the verb must be second element
• Inversion: I morgen arbejder jeg (not: I morgen jeg arbejder)
• Modal verbs for work context: skal, kan, vil + infinitive

KEY VOCABULARY:
• job (job), arbejde (work), kontor (office), fabrik (factory)
• uddannelse (education), skole (school), universitet (university)
• lønning (salary), ferie (holiday), kollega (colleague)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Hver dag ______ hun på kontoret kl. 8.',
                sentenceEn: 'Every day she arrives at the office at 8.',
                answer: 'kommer',
                blank: 'kommer',
                hint: 'at komme (to come/arrive) — V2 word order!',
                ruleId: 'word-order-v2',
                verb: 'at komme',
                tense: 'present'
            },
            {
                id: 'q2',
                sentence: 'Jeg ______ som lærer på en folkeskole.',
                sentenceEn: 'I work as a teacher at a public school.',
                answer: 'arbejder',
                blank: 'arbejder',
                hint: 'at arbejde (to work) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at arbejde',
                tense: 'present'
            },
            {
                id: 'q3',
                sentence: 'Han vil gerne ______ ingeniør.',
                sentenceEn: 'He would like to become an engineer.',
                answer: 'blive',
                blank: 'blive',
                hint: 'Modal verb + infinitive (at blive)',
                ruleId: 'modal-infinitive',
                verb: 'at blive',
                tense: 'infinitive'
            },
            {
                id: 'q4',
                sentence: 'Næste år ______ vi til en ny afdeling.',
                sentenceEn: 'Next year we move to a new department.',
                answer: 'flytter',
                blank: 'flytter',
                hint: 'V2: Time expression first → verb second',
                ruleId: 'word-order-v2',
                verb: 'at flytte',
                tense: 'present'
            },
            {
                id: 'q5',
                sentence: 'Mine kolleger ______ meget venlige.',
                sentenceEn: 'My colleagues are very friendly.',
                answer: 'er',
                blank: 'er',
                hint: 'at være (to be) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at være',
                tense: 'present'
            },
            {
                id: 'q6',
                sentence: 'Du skal ______ din ansøgning inden fredag.',
                sentenceEn: 'You must send your application before Friday.',
                answer: 'sende',
                blank: 'sende',
                hint: 'Modal verb + infinitive (at sende)',
                ruleId: 'modal-infinitive',
                verb: 'at sende',
                tense: 'infinitive'
            },
            {
                id: 'q7',
                sentence: 'Desværre ______ jeg ikke i morgen.',
                sentenceEn: 'Unfortunately I cannot (come) tomorrow.',
                answer: 'kan',
                blank: 'kan',
                hint: 'V2: Adverb first → modal verb second',
                ruleId: 'word-order-v2',
                verb: 'at kunne',
                tense: 'present'
            },
            {
                id: 'q8',
                sentence: 'Hun ______ dansk på et sprogcenter.',
                sentenceEn: 'She studies Danish at a language center.',
                answer: 'studerer',
                blank: 'studerer',
                hint: 'at studere (to study) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at studere',
                tense: 'present'
            },
        ]
    },
    // ============ 2020 ============
    {
        id: 'pd2-2020-sommer-laese1',
        year: 2020,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Familie og relationer',
            titleEn: 'Family and Relationships',
            topics: ['present-tense-r', 'past-tense-group1'],
            content: `Learn family vocabulary and practice talking about your family.

KEY GRAMMAR:
• Present tense for descriptions: Min far hedder... (My father is called...)
• Past tense (Group 1): for telling family stories

KEY VOCABULARY:
• far (father), mor (mother), bror (brother), søster (sister)
• bedsteforældre (grandparents), onkel (uncle), tante (aunt)
• gift (married), skilt (divorced), single (single)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Min far ______ Anders og min mor hedder Lone.',
                sentenceEn: 'My father is called Anders and my mother is called Lone.',
                answer: 'hedder',
                blank: 'hedder',
                hint: 'at hedde (to be called) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at hedde',
                tense: 'present'
            },
            {
                id: 'q2',
                sentence: 'Vi ______ til storfamiliens fest i weekenden.',
                sentenceEn: 'We traveled to the extended family party at the weekend.',
                answer: 'rejste',
                blank: 'rejste',
                hint: 'at rejse (to travel) — past tense',
                ruleId: 'past-tense-group1',
                verb: 'at rejse',
                tense: 'past'
            },
            {
                id: 'q3',
                sentence: 'Mine forældre ______ gift i 1990.',
                sentenceEn: 'My parents got married in 1990.',
                answer: 'blev',
                blank: 'blev',
                hint: 'at blive (to become) — past tense, irregular',
                ruleId: 'past-tense-group3',
                verb: 'at blive',
                tense: 'past'
            },
            {
                id: 'q4',
                sentence: 'Min søster ______ to børn, en dreng og en pige.',
                sentenceEn: 'My sister has two children, a boy and a girl.',
                answer: 'har',
                blank: 'har',
                hint: 'at have (to have) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at have',
                tense: 'present'
            },
            {
                id: 'q5',
                sentence: 'Bedsteforældrene ______ os hver weekend.',
                sentenceEn: 'The grandparents visited us every weekend.',
                answer: 'besøgte',
                blank: 'besøgte',
                hint: 'at besøge (to visit) — past tense, Group 2',
                ruleId: 'past-tense-group2',
                verb: 'at besøge',
                tense: 'past'
            },
            {
                id: 'q6',
                sentence: 'Vi ______ en stor familie med mange fætre og kusiner.',
                sentenceEn: 'We are a big family with many cousins.',
                answer: 'er',
                blank: 'er',
                hint: 'at være (to be) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at være',
                tense: 'present'
            },
            {
                id: 'q7',
                sentence: 'Min bror ______ i London nu.',
                sentenceEn: 'My brother lives in London now.',
                answer: 'bor',
                blank: 'bor',
                hint: 'at bo (to live) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at bo',
                tense: 'present'
            },
            {
                id: 'q8',
                sentence: 'Hele familien ______ middag sammen i søndags.',
                sentenceEn: 'The whole family ate dinner together last Sunday.',
                answer: 'spiste',
                blank: 'spiste',
                hint: 'at spise (to eat) — past tense, Group 2',
                ruleId: 'past-tense-group2',
                verb: 'at spise',
                tense: 'past'
            },
        ]
    },
    // ============ 2019 ============
    {
        id: 'pd2-2019-sommer-laese1',
        year: 2019,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Transport og rejser',
            titleEn: 'Transport and Travel',
            topics: ['past-tense-group2', 'past-tense-group3', 'perfect-tense'],
            content: `This exam covers transport and travel in Denmark. Practice past and perfect tenses.

KEY GRAMMAR:
• Past tense for telling about trips
• Perfect tense for experiences: "Har du været i..."
• Irregular verbs: gik, tog, kørte

KEY VOCABULARY:
• bus, tog (train), fly (airplane), færge (ferry)
• billet (ticket), station, lufthavn (airport)
• at rejse (travel), at flyve (fly), at køre (drive)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Vi ______ toget kl. 7.30 fra København.',
                sentenceEn: 'We took the train at 7:30 from Copenhagen.',
                answer: 'tog',
                blank: 'tog',
                hint: 'at tage (to take) — past tense, irregular',
                ruleId: 'past-tense-group3',
                verb: 'at tage',
                tense: 'past'
            },
            {
                id: 'q2',
                sentence: 'Har du nogensinde ______ til Japan?',
                sentenceEn: 'Have you ever been to Japan?',
                answer: 'været',
                blank: 'været',
                hint: 'at være (to be) — perfect tense, irregular',
                ruleId: 'perfect-tense',
                verb: 'at være',
                tense: 'perfect'
            },
            {
                id: 'q3',
                sentence: 'Sidste sommer ______ vi til Spanien.',
                sentenceEn: 'Last summer we flew to Spain.',
                answer: 'fløj',
                blank: 'fløj',
                hint: 'at flyve (to fly) — past tense, irregular',
                ruleId: 'past-tense-group3',
                verb: 'at flyve',
                tense: 'past'
            },
            {
                id: 'q4',
                sentence: 'Hun har ______ rundt i hele Europa.',
                sentenceEn: 'She has traveled around all of Europe.',
                answer: 'rejst',
                blank: 'rejst',
                hint: 'at rejse (to travel) — perfect tense',
                ruleId: 'perfect-tense',
                verb: 'at rejse',
                tense: 'perfect'
            },
            {
                id: 'q5',
                sentence: 'De ______ en billet på internettet.',
                sentenceEn: 'They bought a ticket on the internet.',
                answer: 'købte',
                blank: 'købte',
                hint: 'at købe (to buy) — past tense, Group 2',
                ruleId: 'past-tense-group2',
                verb: 'at købe',
                tense: 'past'
            },
            {
                id: 'q6',
                sentence: 'Vi ______ hjem kl. 22 i går.',
                sentenceEn: 'We came home at 22 yesterday.',
                answer: 'kom',
                blank: 'kom',
                hint: 'at komme (to come) — past tense, irregular',
                ruleId: 'past-tense-group3',
                verb: 'at komme',
                tense: 'past'
            },
            {
                id: 'q7',
                sentence: 'Han har ______ en fantastisk ferie.',
                sentenceEn: 'He has had a fantastic holiday.',
                answer: 'haft',
                blank: 'haft',
                hint: 'at have (to have) — perfect tense, irregular',
                ruleId: 'perfect-tense',
                verb: 'at have',
                tense: 'perfect'
            },
            {
                id: 'q8',
                sentence: 'Toget ______ fra spor 3.',
                sentenceEn: 'The train departed from track 3.',
                answer: 'kørte',
                blank: 'kørte',
                hint: 'at køre (to drive/depart) — past tense',
                ruleId: 'past-tense-group2',
                verb: 'at køre',
                tense: 'past'
            },
        ]
    },
    // ============ 2018 ============
    {
        id: 'pd2-2018-sommer-laese1',
        year: 2018,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Mad og indkøb',
            titleEn: 'Food and Shopping',
            topics: ['present-tense-r', 'modal-infinitive'],
            content: `Shop and cook in Danish! This section covers food vocabulary and shopping expressions.

KEY GRAMMAR:
• Present tense for habits: Jeg spiser... Jeg handler...
• Modal verbs in shopping: Jeg vil gerne have... Kan jeg få...

KEY VOCABULARY:
• supermarked (supermarket), bageri (bakery), slagter (butcher)
• brød (bread), mælk (milk), ost (cheese), frugt (fruit), grøntsager (vegetables)
• billig (cheap), dyr (expensive), tilbud (offer/sale)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Vi ______ ind i supermarkedet hver lørdag.',
                sentenceEn: 'We shop at the supermarket every Saturday.',
                answer: 'handler',
                blank: 'handler',
                hint: 'at handle (to shop) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at handle',
                tense: 'present'
            },
            {
                id: 'q2',
                sentence: 'Kan jeg ______ et kilo æbler?',
                sentenceEn: 'Can I get a kilo of apples?',
                answer: 'få',
                blank: 'få',
                hint: 'Modal verb + infinitive (at få)',
                ruleId: 'modal-infinitive',
                verb: 'at få',
                tense: 'infinitive'
            },
            {
                id: 'q3',
                sentence: 'Hun ______ altid økologisk mælk.',
                sentenceEn: 'She always buys organic milk.',
                answer: 'køber',
                blank: 'køber',
                hint: 'at købe (to buy) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at købe',
                tense: 'present'
            },
            {
                id: 'q4',
                sentence: 'Jeg vil gerne ______ en kage til dessert.',
                sentenceEn: 'I would like to make a cake for dessert.',
                answer: 'lave',
                blank: 'lave',
                hint: 'Modal verb + infinitive (at lave)',
                ruleId: 'modal-infinitive',
                verb: 'at lave',
                tense: 'infinitive'
            },
            {
                id: 'q5',
                sentence: 'Brødet ______ 25 kroner.',
                sentenceEn: 'The bread costs 25 kroner.',
                answer: 'koster',
                blank: 'koster',
                hint: 'at koste (to cost) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at koste',
                tense: 'present'
            },
            {
                id: 'q6',
                sentence: 'De ______ frikadeller og kartofler til aftensmad.',
                sentenceEn: 'They eat meatballs and potatoes for dinner.',
                answer: 'spiser',
                blank: 'spiser',
                hint: 'at spise (to eat) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at spise',
                tense: 'present'
            },
            {
                id: 'q7',
                sentence: 'Må jeg ______ en pose?',
                sentenceEn: 'May I get a bag?',
                answer: 'få',
                blank: 'få',
                hint: 'Modal verb + infinitive (at få)',
                ruleId: 'modal-infinitive',
                verb: 'at få',
                tense: 'infinitive'
            },
            {
                id: 'q8',
                sentence: 'Vi ______ til bageren for at købe rundstykker.',
                sentenceEn: 'We go to the bakery to buy bread rolls.',
                answer: 'går',
                blank: 'går',
                hint: 'at gå (to go) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at gå',
                tense: 'present'
            },
        ]
    },
    // ============ SKRIFTLIG EXAMS ============
    {
        id: 'pd2-2023-sommer-skriftlig',
        year: 2023,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Skriftlig fremstilling',
        typeEn: 'Written Composition',
        level: 'PD2',
        lesson: {
            title: 'Skriftlig fremstilling — at skrive en email',
            titleEn: 'Written Composition — Writing an Email',
            topics: ['word-order-v2', 'present-tense-r'],
            content: `Practice writing formal and informal emails in Danish.

STRUCTURE OF A DANISH EMAIL:
• Kære [Name] (Dear) — formal, or Hej [Name] — informal
• Introduction: state why you are writing
• Body: give details
• Closing: Med venlig hilsen (Kind regards) — formal

KEY PHRASES:
• Jeg skriver til dig, fordi... (I am writing to you because...)
• Jeg vil gerne spørge om... (I would like to ask about...)
• Tak for din besked (Thanks for your message)
• Jeg ser frem til at høre fra dig (I look forward to hearing from you)`
        },
        questions: [
            {
                id: 'q1',
                sentence: 'Kære Anna, jeg ______ til dig, fordi jeg har et spørgsmål.',
                sentenceEn: 'Dear Anna, I write to you because I have a question.',
                answer: 'skriver',
                blank: 'skriver',
                hint: 'at skrive (to write) — present tense',
                ruleId: 'present-tense-r',
                verb: 'at skrive',
                tense: 'present'
            },
            {
                id: 'q2',
                sentence: 'Jeg vil gerne ______ om jeres åbningstider.',
                sentenceEn: 'I would like to ask about your opening hours.',
                answer: 'spørge',
                blank: 'spørge',
                hint: 'Modal verb + infinitive (at spørge)',
                ruleId: 'modal-infinitive',
                verb: 'at spørge',
                tense: 'infinitive'
            },
            {
                id: 'q3',
                sentence: 'I sidste uge ______ jeg en ansøgning til jer.',
                sentenceEn: 'Last week I sent an application to you.',
                answer: 'sendte',
                blank: 'sendte',
                hint: 'V2: Time first → verb second (at sende)',
                ruleId: 'word-order-v2',
                verb: 'at sende',
                tense: 'past'
            },
            {
                id: 'q4',
                sentence: 'Kan du ______ mig, hvornår kurset begynder?',
                sentenceEn: 'Can you tell me when the course starts?',
                answer: 'fortælle',
                blank: 'fortælle',
                hint: 'Modal verb + infinitive (at fortælle)',
                ruleId: 'modal-infinitive',
                verb: 'at fortælle',
                tense: 'infinitive'
            },
            {
                id: 'q5',
                sentence: 'Jeg ______ frem til at høre fra dig.',
                sentenceEn: 'I look forward to hearing from you.',
                answer: 'ser',
                blank: 'ser',
                hint: 'at se (to see) — present tense (idiom: ser frem til)',
                ruleId: 'present-tense-r',
                verb: 'at se',
                tense: 'present'
            },
            {
                id: 'q6',
                sentence: 'Tak, fordi du har ______ mig.',
                sentenceEn: 'Thanks for helping me.',
                answer: 'hjulpet',
                blank: 'hjulpet',
                hint: 'at hjælpe (to help) — perfect tense, irregular',
                ruleId: 'perfect-tense',
                verb: 'at hjælpe',
                tense: 'perfect'
            },
        ]
    },
    // ============ 2017 ============
    {
        id: 'pd2-2017-sommer-laese1',
        year: 2017,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Vejret og årstiderne',
            titleEn: 'Weather and Seasons',
            topics: ['present-tense-r', 'past-tense-group1'],
            content: `Learn about weather and seasons in Denmark.

KEY GRAMMAR:
• Present tense for current weather: Det regner. Solen skinner.
• Past tense for telling about past weather

KEY VOCABULARY:
• vejr (weather), sol (sun), regn (rain), sne (snow), vind (wind)
• forår (spring), sommer (summer), efterår (autumn), vinter (winter)
• varmt (warm), koldt (cold), overskyet (overcast)`
        },
        questions: [
            { id: 'q1', sentence: 'I dag ______ solen, og det er 20 grader.', sentenceEn: 'Today the sun shines and it is 20 degrees.', answer: 'skinner', blank: 'skinner', hint: 'at skinne (to shine) — present tense', ruleId: 'present-tense-r', verb: 'at skinne', tense: 'present' },
            { id: 'q2', sentence: 'I går ______ det hele dagen.', sentenceEn: 'Yesterday it rained all day.', answer: 'regnede', blank: 'regnede', hint: 'at regne (to rain) — past tense, Group 1', ruleId: 'past-tense-group1', verb: 'at regne', tense: 'past' },
            { id: 'q3', sentence: 'Om vinteren ______ det tit i Danmark.', sentenceEn: 'In winter it snows often in Denmark.', answer: 'sner', blank: 'sner', hint: 'at sne (to snow) — present tense', ruleId: 'present-tense-r', verb: 'at sne', tense: 'present' },
            { id: 'q4', sentence: 'Det ______ meget i storm i forgårs.', sentenceEn: 'It blew a lot during the storm the day before yesterday.', answer: 'blæste', blank: 'blæste', hint: 'at blæse (to blow) — past tense', ruleId: 'past-tense-group1', verb: 'at blæse', tense: 'past' },
            { id: 'q5', sentence: 'Temperaturen ______ 15 grader i dag.', sentenceEn: 'The temperature is 15 degrees today.', answer: 'er', blank: 'er', hint: 'at være (to be) — present', ruleId: 'present-tense-r', verb: 'at være', tense: 'present' },
            { id: 'q6', sentence: 'Vi ______ paraply med, fordi det regner.', sentenceEn: 'We bring an umbrella because it rains.', answer: 'tager', blank: 'tager', hint: 'at tage (to take) — present tense', ruleId: 'present-tense-r', verb: 'at tage', tense: 'present' },
            { id: 'q7', sentence: 'Foråret ______ i marts.', sentenceEn: 'Spring begins in March.', answer: 'begynder', blank: 'begynder', hint: 'at begynde (to begin) — present tense', ruleId: 'present-tense-r', verb: 'at begynde', tense: 'present' },
            { id: 'q8', sentence: 'Det ______ tåget i morges.', sentenceEn: 'It was foggy this morning.', answer: 'var', blank: 'var', hint: 'at være (to be) — past tense', ruleId: 'past-tense-group3', verb: 'at være', tense: 'past' },
        ]
    },
    {
        id: 'pd2-2017-vinter-laese1',
        year: 2017,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Tøj og farver',
            titleEn: 'Clothing and Colors',
            topics: ['present-tense-r', 'modal-infinitive'],
            content: `Learn about clothing, colors, and shopping for clothes.

KEY GRAMMAR:
• Present tense for wearing: Jeg har en jakke på.
• Modal verbs for shopping: Kan jeg prøve...? Må jeg se...?

KEY VOCABULARY:
• trøje (sweater), bukser (trousers), jakke (jacket), sko (shoes)
• rød (red), blå (blue), grøn (green), sort (black), hvid (white)
• størrelse (size), passe (fit), prøverum (fitting room)`
        },
        questions: [
            { id: 'q1', sentence: 'I dag ______ jeg en blå trøje på.', sentenceEn: 'Today I am wearing a blue sweater.', answer: 'har', blank: 'har', hint: 'at have (to have) — "har ... på" = wearing', ruleId: 'present-tense-r', verb: 'at have', tense: 'present' },
            { id: 'q2', sentence: 'Kan jeg ______ denne kjole?', sentenceEn: 'Can I try on this dress?', answer: 'prøve', blank: 'prøve', hint: 'Modal verb + infinitive (at prøve)', ruleId: 'modal-infinitive', verb: 'at prøve', tense: 'infinitive' },
            { id: 'q3', sentence: 'Jakken ______ 599 kroner.', sentenceEn: 'The jacket costs 599 kroner.', answer: 'koster', blank: 'koster', hint: 'at koste (to cost) — present tense', ruleId: 'present-tense-r', verb: 'at koste', tense: 'present' },
            { id: 'q4', sentence: 'Bukserne ______ ikke. De er for store.', sentenceEn: 'The trousers don\'t fit. They are too big.', answer: 'passer', blank: 'passer', hint: 'at passe (to fit) — present tense', ruleId: 'present-tense-r', verb: 'at passe', tense: 'present' },
            { id: 'q5', sentence: 'Du skal ______ varmt tøj på om vinteren.', sentenceEn: 'You must wear warm clothes in winter.', answer: 'have', blank: 'have', hint: 'Modal verb + infinitive (at have)', ruleId: 'modal-infinitive', verb: 'at have', tense: 'infinitive' },
            { id: 'q6', sentence: 'Skoene ______ mine yndlingssko.', sentenceEn: 'The shoes are my favorite shoes.', answer: 'er', blank: 'er', hint: 'at være (to be) — present', ruleId: 'present-tense-r', verb: 'at være', tense: 'present' },
        ]
    },
    // ============ 2016 ============
    {
        id: 'pd2-2016-sommer-laese1',
        year: 2016,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Danmark og geografi',
            titleEn: 'Denmark and Geography',
            topics: ['present-tense-r', 'word-order-v2'],
            content: `Learn about Danish geography, cities, and landmarks.

KEY GRAMMAR:
• Present tense for facts: København er hovedstaden.
• V2 word order in descriptions

KEY VOCABULARY:
• hovedstad (capital), by (city), ø (island), halvø (peninsula)
• Sjælland (Zealand), Jylland (Jutland), Fyn (Funen)
• Øresundsbroen (the bridge), grænse (border), indbygger (inhabitant)`
        },
        questions: [
            { id: 'q1', sentence: 'København ______ Danmarks hovedstad.', sentenceEn: 'Copenhagen is Denmark\'s capital.', answer: 'er', blank: 'er', hint: 'at være (to be) — present', ruleId: 'present-tense-r', verb: 'at være', tense: 'present' },
            { id: 'q2', sentence: 'I Danmark ______ man dansk.', sentenceEn: 'In Denmark one speaks Danish.', answer: 'taler', blank: 'taler', hint: 'V2: prepositional phrase first → verb second', ruleId: 'word-order-v2', verb: 'at tale', tense: 'present' },
            { id: 'q3', sentence: 'Øresundsbroen ______ København og Malmø.', sentenceEn: 'The Øresund Bridge connects Copenhagen and Malmö.', answer: 'forbinder', blank: 'forbinder', hint: 'at forbinde (to connect) — present', ruleId: 'present-tense-r', verb: 'at forbinde', tense: 'present' },
            { id: 'q4', sentence: 'Danmark ______ cirka 5,8 millioner indbyggere.', sentenceEn: 'Denmark has about 5.8 million inhabitants.', answer: 'har', blank: 'har', hint: 'at have (to have) — present', ruleId: 'present-tense-r', verb: 'at have', tense: 'present' },
            { id: 'q5', sentence: 'Mange turister ______ Tivoli i København.', sentenceEn: 'Many tourists visit Tivoli in Copenhagen.', answer: 'besøger', blank: 'besøger', hint: 'at besøge (to visit) — present', ruleId: 'present-tense-r', verb: 'at besøge', tense: 'present' },
            { id: 'q6', sentence: 'H.C. Andersen ______ født i Odense.', sentenceEn: 'H.C. Andersen was born in Odense.', answer: 'blev', blank: 'blev', hint: 'at blive (to become) — past tense, passive', ruleId: 'past-tense-group3', verb: 'at blive', tense: 'past' },
            { id: 'q7', sentence: 'Landet ______ af halvøen Jylland og mange øer.', sentenceEn: 'The country consists of the peninsula Jutland and many islands.', answer: 'består', blank: 'består', hint: 'at bestå (to consist) — present', ruleId: 'present-tense-r', verb: 'at bestå', tense: 'present' },
        ]
    },
    // ============ 2015 ============
    {
        id: 'pd2-2015-sommer-laese1',
        year: 2015,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Det danske samfund',
            titleEn: 'Danish Society',
            topics: ['present-tense-r', 'modal-infinitive', 'perfect-tense'],
            content: `Learn about Danish society, welfare, and cultural norms.

KEY GRAMMAR:
• Present tense for describing society
• Modal verbs for obligations: Man skal betale... Man bør...
• Perfect tense for changes: Danmark har fået...

KEY VOCABULARY:
• velfærd (welfare), skat (tax), kommune (municipality)
• demokrati (democracy), lov (law), rettighed (right)
• CPR-nummer, NemID, borgerservice`
        },
        questions: [
            { id: 'q1', sentence: 'Alle i Danmark ______ skat.', sentenceEn: 'Everyone in Denmark pays taxes.', answer: 'betaler', blank: 'betaler', hint: 'at betale (to pay) — present', ruleId: 'present-tense-r', verb: 'at betale', tense: 'present' },
            { id: 'q2', sentence: 'Man skal ______ sig hos kommunen, når man flytter.', sentenceEn: 'One must register at the municipality when one moves.', answer: 'melde', blank: 'melde', hint: 'Modal + infinitive (at melde)', ruleId: 'modal-infinitive', verb: 'at melde', tense: 'infinitive' },
            { id: 'q3', sentence: 'Danmark har ______ et af verdens bedste uddannelsessystemer.', sentenceEn: 'Denmark has gotten one of the world\'s best education systems.', answer: 'fået', blank: 'fået', hint: 'at få (to get) — perfect, irregular', ruleId: 'perfect-tense', verb: 'at få', tense: 'perfect' },
            { id: 'q4', sentence: 'Danskerne ______ meget lid på staten.', sentenceEn: 'The Danes trust the state a lot.', answer: 'har', blank: 'har', hint: 'at have (to have) — present', ruleId: 'present-tense-r', verb: 'at have', tense: 'present' },
            { id: 'q5', sentence: 'Alle børn kan ______ gratis i folkeskolen.', sentenceEn: 'All children can study for free in public school.', answer: 'gå', blank: 'gå', hint: 'Modal + infinitive (at gå)', ruleId: 'modal-infinitive', verb: 'at gå', tense: 'infinitive' },
            { id: 'q6', sentence: 'Sundhedsvæsenet ______ betalt af skatten.', sentenceEn: 'The health system is paid by taxes.', answer: 'er', blank: 'er', hint: 'at være — passive voice (er + participle)', ruleId: 'present-tense-r', verb: 'at være', tense: 'present' },
        ]
    },
    // ============ 2014 ============
    {
        id: 'pd2-2014-sommer-laese1',
        year: 2014,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Kroppen og sundhed',
            titleEn: 'The Body and Health',
            topics: ['present-tense-r', 'modal-infinitive'],
            content: `Vocabulary for body parts, health, and visiting the doctor.

KEY GRAMMAR:
• Present tense: Jeg har ondt i... Mit hoved gør ondt.
• Modal verbs for advice: Du bør drikke vand. Du skal hvile dig.

KEY VOCABULARY:
• hoved (head), mave (stomach), ryg (back), arm, ben (leg)
• læge (doctor), sygesikring (health insurance), apotek (pharmacy)
• ondt (pain), feber (fever), medicin (medicine)`
        },
        questions: [
            { id: 'q1', sentence: 'Jeg har ondt i ______.', sentenceEn: 'I have a headache.', answer: 'hovedet', blank: 'hovedet', hint: 'hovedet = the head (definite form)', ruleId: 'present-tense-r', verb: 'substantiv', tense: 'definite' },
            { id: 'q2', sentence: 'Du bør ______ til lægen.', sentenceEn: 'You should go to the doctor.', answer: 'gå', blank: 'gå', hint: 'Modal + infinitive (at gå)', ruleId: 'modal-infinitive', verb: 'at gå', tense: 'infinitive' },
            { id: 'q3', sentence: 'Hun ______ feber og ondt i halsen.', sentenceEn: 'She has a fever and sore throat.', answer: 'har', blank: 'har', hint: 'at have (to have) — present', ruleId: 'present-tense-r', verb: 'at have', tense: 'present' },
            { id: 'q4', sentence: 'Man kan ______ medicin på apoteket.', sentenceEn: 'One can buy medicine at the pharmacy.', answer: 'købe', blank: 'købe', hint: 'Modal + infinitive (at købe)', ruleId: 'modal-infinitive', verb: 'at købe', tense: 'infinitive' },
            { id: 'q5', sentence: 'Lægen ______ at jeg skal tage det roligt.', sentenceEn: 'The doctor says I should take it easy.', answer: 'siger', blank: 'siger', hint: 'at sige (to say) — present, irregular', ruleId: 'present-tense-r', verb: 'at sige', tense: 'present' },
            { id: 'q6', sentence: 'Mine ben ______ efter løbeturen.', sentenceEn: 'My legs hurt after the run.', answer: 'gør ondt', blank: 'gør ondt', hint: 'at gøre ondt (to hurt) — present', ruleId: 'present-tense-r', verb: 'at gøre', tense: 'present' },
        ]
    },
    // ============ 2013 ============
    {
        id: 'pd2-2013-sommer-laese1',
        year: 2013,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Læseforståelse 1',
        typeEn: 'Reading Comprehension 1',
        level: 'PD2',
        lesson: {
            title: 'Pronominer og ejefald',
            titleEn: 'Pronouns and Possessives',
            topics: ['present-tense-r', 'modal-infinitive'],
            content: `Learn Danish personal pronouns and possessive forms.

KEY GRAMMAR:
• Subject pronouns: jeg, du, han, hun, vi, I, de
• Object pronouns: mig, dig, ham, hende, os, jer, dem
• Possessives: min/mit/mine, din/dit/dine, hans, hendes, vores

KEY VOCABULARY:
• Pronoun usage in daily conversation
• Possessive agreement with gender (en-words vs et-words)`
        },
        questions: [
            { id: 'q1', sentence: '______ hedder Lars, og jeg er fra Danmark.', sentenceEn: 'My name is Lars, and I am from Denmark.', answer: 'Jeg', blank: 'Jeg', hint: 'Subject pronoun: I = jeg', ruleId: 'present-tense-r', verb: 'pronomen', tense: 'subject' },
            { id: 'q2', sentence: 'Kan du hjælpe ______ med denne opgave?', sentenceEn: 'Can you help me with this task?', answer: 'mig', blank: 'mig', hint: 'Object pronoun: me = mig', ruleId: 'modal-infinitive', verb: 'pronomen', tense: 'object' },
            { id: 'q3', sentence: '______ bil er rød. (min/mit)', sentenceEn: 'My car is red.', answer: 'Min', blank: 'Min', hint: 'en bil → min bil (common gender)', ruleId: 'present-tense-r', verb: 'possessiv', tense: 'common' },
            { id: 'q4', sentence: '______ hus er stort. (min/mit)', sentenceEn: 'My house is big.', answer: 'Mit', blank: 'Mit', hint: 'et hus → mit hus (neuter gender)', ruleId: 'present-tense-r', verb: 'possessiv', tense: 'neuter' },
            { id: 'q5', sentence: 'Han gav ______ en gave til jul.', sentenceEn: 'He gave her a present for Christmas.', answer: 'hende', blank: 'hende', hint: 'Object pronoun: her = hende', ruleId: 'present-tense-r', verb: 'pronomen', tense: 'object' },
            { id: 'q6', sentence: '______ børn går i skole. (vores/deres)', sentenceEn: 'Our children go to school.', answer: 'Vores', blank: 'Vores', hint: 'Possessive: our = vores', ruleId: 'present-tense-r', verb: 'possessiv', tense: 'plural' },
        ]
    },
{
        "id": "pd2-2021-vinter-ls2-o3",
        "year": 2021,
        "season": "Vinter",
        "type": "Læseforståelse 2 - Opgave 3",
        "level": "PD2",
        "lesson": {
            "title": "Kasper lever billigt",
            "titleEn": "Kasper lives cheaply"
        },
        "questions": [
            {
                "sentence": "Selvom det ikke er ret mange penge, er det faktisk nok til at leve ______.",
                "answer": "for",
                "hint": "Preposition: 'leve for' (to live on).",
                "options": [
                    "for",
                    "ikke",
                    "men",
                    "svært"
                ]
            },
            {
                "sentence": "Kasper synes faktisk ikke, det er så ______ at leve billigt.",
                "answer": "svært",
                "hint": "Adjective: 'svært' (difficult).",
                "options": [
                    "svært",
                    "sjovt",
                    "altid",
                    "heldigvis"
                ]
            },
            {
                "sentence": "Han bor til leje på et værelse, hvor huslejen ______ ikke er ret høj.",
                "answer": "heldigvis",
                "hint": "Adverb: 'heldigvis' (fortunately).",
                "options": [
                    "heldigvis",
                    "desværre",
                    "altid",
                    "sjældent"
                ]
            },
            {
                "sentence": "Og når han skal rundt i Aalborg, cykler han næsten ______.",
                "answer": "altid",
                "hint": "Adverb: 'altid' (always).",
                "options": [
                    "altid",
                    "aldrig",
                    "sjældent",
                    "højest"
                ]
            },
            {
                "sentence": "Han køber madvarer i det supermarked, hvor prisen er ______.",
                "answer": "bedst",
                "hint": "Superlative: 'bedst' (best/lowest price).",
                "options": [
                    "bedst",
                    "højest",
                    "ikke",
                    "men"
                ]
            },
            {
                "sentence": "Kasper kan godt lide kød, ______ han synes, det er for dyrt.",
                "answer": "men",
                "hint": "Conjunction: 'men' (but).",
                "options": [
                    "men",
                    "og",
                    "for",
                    "svært"
                ]
            },
            {
                "sentence": "Han synes faktisk også, det er ret ______ at lave vegetarmad.",
                "answer": "sjovt",
                "hint": "Adjective: 'sjovt' (fun).",
                "options": [
                    "sjovt",
                    "svært",
                    "besøg",
                    "aldrig"
                ]
            },
            {
                "sentence": "Derfor inviterer hans mor ham tit på ______.",
                "answer": "besøg",
                "hint": "Noun: 'besøg' (visit).",
                "options": [
                    "besøg",
                    "restaurant",
                    "altid",
                    "for"
                ]
            }
        ]
    },
    {
        "id": "pd2-2021-sommer-ls2-o3",
        "year": 2021,
        "season": "Sommer",
        "type": "Læseforståelse 2 - Opgave 3",
        "level": "PD2",
        "lesson": {
            "title": "En mærkelig pakke",
            "titleEn": "A strange package"
        },
        "questions": [
            {
                "sentence": "Anders besøger sine forældre i påskeferien, ______ han synes, det er hyggeligt.",
                "answer": "for",
                "hint": "Conjunction: 'for' (because/as).",
                "options": [
                    "for",
                    "men",
                    "ikke",
                    "snart"
                ]
            },
            {
                "sentence": "Men han rydder ______ op efter sig.",
                "answer": "ikke",
                "hint": "Negation: 'ikke' (not).",
                "options": [
                    "ikke",
                    "altid",
                    "snart",
                    "lækkert"
                ]
            },
            {
                "sentence": "Han gør det ikke, ______ hans mor beder ham om det.",
                "answer": "selvom",
                "hint": "Conjunction: 'selvom' (even though).",
                "options": [
                    "selvom",
                    "fordi",
                    "men",
                    "ikke"
                ]
            },
            {
                "sentence": "Hans mor fortæller, at der ______ kommer en pakke til ham.",
                "answer": "snart",
                "hint": "Adverb: 'snart' (soon).",
                "options": [
                    "snart",
                    "altid",
                    "desværre",
                    "overrasket"
                ]
            },
            {
                "sentence": "Et par dage efter ______ han pakken på posthuset.",
                "answer": "henter",
                "hint": "Verb: 'henter' (to pick up/collect).",
                "options": [
                    "henter",
                    "afleverer",
                    "åbner",
                    "finder"
                ]
            },
            {
                "sentence": "Da han kommer hjem og lukker den op, bliver han meget ______.",
                "answer": "overrasket",
                "hint": "Adjective: 'overrasket' (surprised).",
                "options": [
                    "overrasket",
                    "glad",
                    "ulækkert",
                    "snart"
                ]
            },
            {
                "sentence": "Anders synes, det er rigtig ______.",
                "answer": "ulækkert",
                "hint": "Adjective: 'ulækkert' (disgusting/gross).",
                "options": [
                    "ulækkert",
                    "lækkert",
                    "sjovt",
                    "ikke"
                ]
            },
            {
                "sentence": "Næste dag går han på posthuset igen og ______ en pakke til sin mor.",
                "answer": "afleverer",
                "hint": "Verb: 'afleverer' (to deliver/drop off).",
                "options": [
                    "afleverer",
                    "henter",
                    "åbner",
                    "køber"
                ]
            }
        ]
    },
    {
        "id": "pd2-2020-vinter-ls2-o3",
        "year": 2020,
        "season": "Vinter",
        "type": "Læseforståelse 2 - Opgave 3",
        "level": "PD2",
        "lesson": {
            "title": "En dejlig overraskelse",
            "titleEn": "A lovely surprise"
        },
        "questions": [
            {
                "sentence": "Denne dag er helt ______, for Allan og Lena har bryllupsdag.",
                "answer": "speciel",
                "hint": "Adjective: 'speciel' (special).",
                "options": [
                    "speciel",
                    "almindelig",
                    "lange",
                    "nemlig"
                ]
            },
            {
                "sentence": "Lena er der allerede, for hun har fået ______ fri end ham.",
                "answer": "tidligere",
                "hint": "Comparative: 'tidligere' (earlier).",
                "options": [
                    "tidligere",
                    "senere",
                    "godt",
                    "kun"
                ]
            },
            {
                "sentence": "De bliver overraskede, for de har ______ inviteret gæster.",
                "answer": "ikke",
                "hint": "Negation: 'ikke' (not).",
                "options": [
                    "ikke",
                    "altid",
                    "nemlig",
                    "fordi"
                ]
            },
            {
                "sentence": "Allan lukker op, ______ han og Lena har lidt travlt.",
                "answer": "selvom",
                "hint": "Conjunction: 'selvom' (even though).",
                "options": [
                    "selvom",
                    "fordi",
                    "men",
                    "nemlig"
                ]
            },
            {
                "sentence": "Men han fortæller, at de desværre ______ har tid til en hurtig kop kaffe.",
                "answer": "kun",
                "hint": "Adverb: 'kun' (only).",
                "options": [
                    "kun",
                    "ikke",
                    "altid",
                    "senere"
                ]
            },
            {
                "sentence": "Allan bliver ______.",
                "answer": "irriteret",
                "hint": "Adjective: 'irriteret' (annoyed).",
                "options": [
                    "irriteret",
                    "glad",
                    "overrasket",
                    "godt"
                ]
            },
            {
                "sentence": "Hun forstår nemlig ______, at de glæder sig til en aften alene.",
                "answer": "godt",
                "hint": "Adverb: 'godt' (well/fully).",
                "options": [
                    "godt",
                    "ikke",
                    "nemlig",
                    "speciel"
                ]
            },
            {
                "sentence": "Allan og Lena bliver meget glade, ______ de nu skal til Italien.",
                "answer": "fordi",
                "hint": "Conjunction: 'fordi' (because).",
                "options": [
                    "fordi",
                    "selvom",
                    "men",
                    "nemlig"
                ]
            }
        ]
    },
    {
        "id": "pd2-2020-sommer-ls2-o3",
        "year": 2020,
        "season": "Sommer",
        "type": "Læseforståelse 2 - Opgave 3",
        "level": "PD2",
        "lesson": {
            "title": "Ida bor på kollegium",
            "titleEn": "Ida lives in a dormitory"
        },
        "questions": [
            {
                "sentence": "Værelset er lidt ______ end det, hun havde hjemme.",
                "answer": "mindre",
                "hint": "Comparative: 'mindre' (smaller).",
                "options": [
                    "mindre",
                    "større",
                    "stille",
                    "for"
                ]
            },
            {
                "sentence": "For det meste synes Ida, at det er ______ at bo på kollegiet.",
                "answer": "hyggeligt",
                "hint": "Adjective: 'hyggeligt' (cozy/pleasant).",
                "options": [
                    "hyggeligt",
                    "kedeligt",
                    "utilfreds",
                    "altid"
                ]
            },
            {
                "sentence": "Det deltager Ida næsten ______ i.",
                "answer": "altid",
                "hint": "Adverb: 'altid' (always).",
                "options": [
                    "altid",
                    "aldrig",
                    "derfor",
                    "for"
                ]
            },
            {
                "sentence": "Der er en fyr, der ______ rydder op efter sig.",
                "answer": "aldrig",
                "hint": "Adverb: 'aldrig' (never).",
                "options": [
                    "aldrig",
                    "altid",
                    "stille",
                    "derfor"
                ]
            },
            {
                "sentence": "Det er Ida ret sur over, ______ det betyder, hun skal gøre rent efter ham.",
                "answer": "for",
                "hint": "Conjunction: 'for' (because).",
                "options": [
                    "for",
                    "selvom",
                    "derfor",
                    "tilfreds"
                ]
            },
            {
                "sentence": "Ida er også træt af, at der tit er ______ på kollegiet.",
                "answer": "larm",
                "hint": "Noun: 'larm' (noise).",
                "options": [
                    "larm",
                    "stille",
                    "hyggeligt",
                    "derfor"
                ]
            },
            {
                "sentence": "Det gør hun hver dag, ______ Ida har bedt hende om at skrue ned.",
                "answer": "selvom",
                "hint": "Conjunction: 'selvom' (even though).",
                "options": [
                    "selvom",
                    "fordi",
                    "derfor",
                    "altid"
                ]
            },
            {
                "sentence": "Men alt i alt er Ida ______ med at bo på kollegiet.",
                "answer": "tilfreds",
                "hint": "Adjective: 'tilfreds' (satisfied).",
                "options": [
                    "tilfreds",
                    "utilfreds",
                    "glad",
                    "derfor"
                ]
            }
        ]
    },
    {
        "id": "pd2-2019-vinter-ls2-o3",
        "year": 2019,
        "season": "Vinter",
        "type": "Læseforståelse 2 - Opgave 3",
        "level": "PD2",
        "lesson": {
            "title": "Et heldigt møde",
            "titleEn": "A lucky meeting"
        },
        "questions": [
            {
                "sentence": "Magnus har planlagt at tage bilen, ______ da han sætter sig ud i den, vil den ikke starte.",
                "answer": "men",
                "hint": "Conjunction: 'men' (but).",
                "options": [
                    "men",
                    "og",
                    "selvom",
                    "for"
                ]
            },
            {
                "sentence": "Men da han skal betale, har han hverken ______ at få sin pung eller telefon med.",
                "answer": "husket",
                "hint": "Past participle: 'husket' (remembered).",
                "options": [
                    "husket",
                    "glemt",
                    "med",
                    "for"
                ]
            },
            {
                "sentence": "Magnus vil ikke tage toget ______ billet.",
                "answer": "uden",
                "hint": "Preposition: 'uden' (without).",
                "options": [
                    "uden",
                    "med",
                    "for",
                    "ikke"
                ]
            },
            {
                "sentence": "Selvom de ______ kender hinanden, tilbyder hun at købe en billet.",
                "answer": "ikke",
                "hint": "Negation: 'ikke' (not).",
                "options": [
                    "ikke",
                    "alle",
                    "godt",
                    "kun"
                ]
            },
            {
                "sentence": "Han er lettet, men også lidt nervøs, ______ han tænker på samtalen.",
                "answer": "for",
                "hint": "Conjunction: 'for' (because).",
                "options": [
                    "for",
                    "men",
                    "selvom",
                    "og"
                ]
            },
            {
                "sentence": "Samtalen går heldigvis godt, så Magnus er ret ______.",
                "answer": "tilfreds",
                "hint": "Adjective: 'tilfreds' (satisfied).",
                "options": [
                    "tilfreds",
                    "skuffet",
                    "godt",
                    "glemt"
                ]
            },
            {
                "sentence": "Han sender hende ikke ______ pengene, men også en sms.",
                "answer": "kun",
                "hint": "Adverb: 'kun' (only - used with 'men også').",
                "options": [
                    "kun",
                    "alle",
                    "ikke",
                    "med"
                ]
            },
            {
                "sentence": "Magnus har ikke ______ sin pung denne gang.",
                "answer": "glemt",
                "hint": "Past participle: 'glemt' (forgotten).",
                "options": [
                    "glemt",
                    "husket",
                    "uden",
                    "for"
                ]
            }
        ]
    }
];

// Get all unique years
export function getPd2Years() {
    return [...new Set(pd2Exams.map(e => e.year))].sort((a, b) => b - a);
}

// Get exams by year
export function getPd2ExamsByYear(year) {
    return pd2Exams.filter(e => e.year === year);
}

// Get exam by ID
export function getPd2ExamById(id) {
    return pd2Exams.find(e => e.id === id);
}

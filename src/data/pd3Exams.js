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
    {
        id: 'pd3-practice-test-2',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Delprøve 3',
        typeEn: 'Gap Fill MCQ (Test 2)',
        level: 'PD3',
        lesson: {
            title: 'Indenlandsk turisme',
            titleEn: 'Domestic Tourism',
            topics: ['vocabulary', 'context', 'word-order-v2'],
            content: `Practice Test 2 from the official test bank. Reading about domestic tourism in Denmark.`
        },
        questions: [
            {
                id: 'pt2-q1',
                sentence: 'I stedet for at rejse til eksotiske destinationer vælger ﬂere nu at udforske landets ______ kyster, slotte og naturparker.',
                sentenceEn: 'Instead of traveling to exotic destinations, more people are now choosing to explore the country\'s exciting coasts, castles, and nature parks.',
                answer: 'spændende',
                blank: 'spændende',
                hint: 'Noget der fanger ens interesse (exciting).',
                options: ['spændende', 'juridiske', 'matematiske', 'upraktiske']
            },
            {
                id: 'pt2-q2',
                sentence: 'Mange mindre hoteller har oplevet en stigning i gæster, og nye ______ opstår hele tiden.',
                sentenceEn: 'Many small hotels have experienced an increase in guests, and new offers are emerging all the time.',
                answer: 'tilbud',
                blank: 'tilbud',
                hint: 'Noget man kan få eller købe (offers).',
                options: ['tilbud', 'konﬂikter', 'arbejdspladser', 'systemer']
            },
            {
                id: 'pt2-q3',
                sentence: 'En undersøgelse peger på, at indenlandsk turisme kan ______ bæredygtig udvikling.',
                sentenceEn: 'A study indicates that domestic tourism can promote sustainable development.',
                answer: 'fremme',
                blank: 'fremme',
                hint: 'At støtte eller skubbe på noget positivt (promote).',
                options: ['fremme', 'forbyde', 'forringe', 'fraråde']
            },
            {
                id: 'pt2-q4',
                sentence: 'Besøgende kan lære at bage surdejsbrød eller deltage i historiske ______.',
                sentenceEn: 'Visitors can learn to bake sourdough bread or participate in historical events.',
                answer: 'arrangementer',
                blank: 'arrangementer',
                hint: 'Events, forestillinger eller andre planlagte oplevelser (events).',
                options: ['arrangementer', 'udsmykninger', 'intentioner', 'apparater']
            },
            {
                id: 'pt2-q5',
                sentence: 'Når man kan bade om formiddagen og gå på museum om eftermiddagen, føler man ikke, at man ______ sig.',
                sentenceEn: 'When you can swim in the morning and go to a museum in the afternoon, you don\'t feel like you are cheating yourself.',
                answer: 'snyder',
                blank: 'snyder',
                hint: 'At bedrage (to cheat).',
                options: ['snyder', 'hviler', 'roser', 'lærer']
            },
            {
                id: 'pt2-q6',
                sentence: 'Mange danskere føler sig mere ______ i eget land og er rolige ved at kommunikere på deres eget sprog.',
                sentenceEn: 'Many Danes feel more safe/secure in their own country and are comfortable communicating in their own language.',
                answer: 'trygge',
                blank: 'trygge',
                hint: 'Sikre og veltilpasse (safe / secure).',
                options: ['trygge', 'bemærkelsesværdige', 'usikre', 'tilfældige']
            },
            {
                id: 'pt2-q7',
                sentence: 'Lokale bør samarbejde om at skabe en ______ turisme, der tager hensyn til natur og lokalbefolkning.',
                sentenceEn: 'Locals should collaborate to create sustainable tourism that considers nature and the local population.',
                answer: 'bæredygtig',
                blank: 'bæredygtig',
                hint: 'En grøn og langsigtet løsning (sustainable).',
                options: ['bæredygtig', 'begrænset', 'tilfældig', 'overlappende']
            },
            {
                id: 'pt2-q8',
                sentence: 'Samlet set giver indenlandsk turisme en ______ mellem økonomiske, sociale og miljømæssige hensyn.',
                sentenceEn: 'Overall, domestic tourism provides a balance between economic, social, and environmental considerations.',
                answer: 'balance',
                blank: 'balance',
                hint: 'Ligevægt (balance).',
                options: ['balance', 'distance', 'usikkerhed', 'pause']
            }
        ]
    },
    {
        id: 'pd3-practice-test-3',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Delprøve 3',
        typeEn: 'Gap Fill MCQ (Test 3)',
        level: 'PD3',
        lesson: {
            title: 'Energibesparelser i hjemmet',
            titleEn: 'Energy Savings at Home',
            topics: ['vocabulary', 'context', 'word-order-v2'],
            content: `Practice Test 3 from the official test bank. Reading about energy consumption and savings.`
        },
        questions: [
            {
                id: 'pt3-q1',
                sentence: 'Energistyrelsen understreger, at en ______ bolig ikke kun gavner klimaet, men også budgettet.',
                sentenceEn: 'The Danish Energy Agency emphasizes that an energy-friendly home benefits not only the climate, but also the budget.',
                answer: 'energivenlig',
                blank: 'energivenlig',
                hint: 'God for energi og miljø (energy-friendly).',
                options: ['energivenlig', 'historisk', 'modig', 'rodet']
            },
            {
                id: 'pt3-q2',
                sentence: 'Mange kommuner tilbyder rådgivning om tilskudsordninger, der kan gøre det lettere at ______ energiforbruget.',
                sentenceEn: 'Many municipalities offer advice on grant schemes that can make it easier to reduce energy consumption.',
                answer: 'reducere',
                blank: 'reducere',
                hint: 'At gøre mindre / sænke (reduce).',
                options: ['reducere', 'øge', 'diskutere', 'genopﬁnde']
            },
            {
                id: 'pt3-q3',
                sentence: 'Det kræver dog en vis ______ at vælge de rigtige materialer og håndværkere.',
                sentenceEn: 'However, it requires a certain knowledge to choose the right materials and craftsmen.',
                answer: 'viden',
                blank: 'viden',
                hint: 'Noget man ved (knowledge).',
                options: ['viden', 'humor', 'strøm', 'temperatur']
            },
            {
                id: 'pt3-q4',
                sentence: 'At følge sit eget forbrug skaber ______, der gør det lettere at ændre adfærd og sætte realistiske mål.',
                sentenceEn: 'Following your own consumption creates transparency, which makes it easier to change behavior and set realistic goals.',
                answer: 'gennemsigtighed',
                blank: 'gennemsigtighed',
                hint: 'Åbenhed og klarhed, så man kan se hvad der foregår (transparency).',
                options: ['gennemsigtighed', 'overproduktion', 'repræsentation', 'konstruktion']
            },
            {
                id: 'pt3-q5',
                sentence: 'På længere sigt kan en lavere energiregning også øge boligens værdi, hvis man en dag beslutter sig for at ______.',
                sentenceEn: 'In the long term, a lower energy bill can also increase the home\'s value if you one day decide to sell.',
                answer: 'sælge',
                blank: 'sælge',
                hint: 'At udveksle boligen for penge (sell).',
                options: ['sælge', 'investere', 'ødelægge', 'glemme']
            },
            {
                id: 'pt3-q6',
                sentence: 'Teknologien vil give os ﬂere muligheder for at gøre hjemmet mere ______.',
                sentenceEn: 'Technology will give us more opportunities to make the home more energy-efficient.',
                answer: 'energieffektiv',
                blank: 'energieffektiv',
                hint: 'Som bruger energien fornuftigt uden spild (energy-efficient).',
                options: ['energieffektiv', 'ﬂeksibel', 'fredelig', 'uoverskuelig']
            },
            {
                id: 'pt3-q7',
                sentence: 'Teknologien alene kan ikke gøre det; vi må også ændre vores vaner og tage et ______ ansvar.',
                sentenceEn: 'Technology alone cannot do it; we must also change our habits and take a personal responsibility.',
                answer: 'personligt',
                blank: 'personligt',
                hint: 'Noget der gælder en selv (personal).',
                options: ['personligt', 'juridisk', 'uretfærdigt', 'globalt']
            },
            {
                id: 'pt3-q8',
                sentence: 'Kun sådan kan vi nå en mere ______ udvikling.',
                sentenceEn: 'Only in this way can we achieve a more sustainable development.',
                answer: 'bæredygtig',
                blank: 'bæredygtig',
                hint: 'Godt for både miljø og klima på lang sigt (sustainable).',
                options: ['bæredygtig', 'desperat', 'ustyrlig', 'klassisk']
            }
        ]
    },
    {
        id: 'pd3-practice-test-4',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Delprøve 3',
        typeEn: 'Gap Fill MCQ (Test 4)',
        level: 'PD3',
        lesson: {
            title: 'Digitale medier og mental sundhed',
            titleEn: 'Digital Media and Mental Health',
            topics: ['vocabulary', 'context', 'word-order-v2'],
            content: `Practice Test 4 from the official test bank. Reading about screen time and well-being.`
        },
        questions: [
            {
                id: 'pt4-q1',
                sentence: 'Den ______ kontakt via apps kan dog ikke erstatte fysiske møder, siger eksperter.',
                sentenceEn: 'However, the digital contact via apps cannot replace physical meetings, experts say.',
                answer: 'digital',
                blank: 'digital',
                hint: 'Noget der foregår elektronisk (digital).',
                options: ['digital', 'økonomisk', 'juridisk', 'praktisk']
            },
            {
                id: 'pt4-q2',
                sentence: 'På den måde forsøger de at ______ tiden mellem arbejde, fritid og sociale medier.',
                sentenceEn: 'In this way they try to balance the time between work, leisure and social media.',
                answer: 'balancere',
                blank: 'balancere',
                hint: 'At finde en ligevægt / fordele jævnt (to balance).',
                options: ['balancere', 'opdele', 'forbyde', 'beklage']
            },
            {
                id: 'pt4-q3',
                sentence: 'Forskere ______, at vi bør være opmærksomme på, hvordan brugen af digitale medier påvirker vores søvn, fokus og relationer.',
                sentenceEn: 'Researchers warn that we should pay attention to how the use of digital media affects our sleep, focus and relationships.',
                answer: 'advarer',
                blank: 'advarer',
                hint: 'At sige, at noget kan være farligt (warnings/warn).',
                options: ['advarer', 'ignorerer', 'betvivler', 'accepterer']
            },
            {
                id: 'pt4-q4',
                sentence: 'De anbefaler, at vi skaber faste rutiner og ______ i hverdagen.',
                sentenceEn: 'They recommend that we create fixed routines and breaks in everyday life.',
                answer: 'pauser',
                blank: 'pauser',
                hint: 'Tidspunkter hvor man slapper af (breaks).',
                options: ['pauser', 'problemer', 'cookies', 'investeringer']
            },
            {
                id: 'pt4-q5',
                sentence: 'En international undersøgelse viste, at folk, der satte sig ______, brugte mindre tid online og følte sig mere til stede i nuet.',
                sentenceEn: 'An international study showed that people who set time limits spent less time online and felt more present in the moment.',
                answer: 'tidsgrænser',
                blank: 'tidsgrænser',
                hint: 'Et stramt maksimum for tidsforbrug (time limits).',
                options: ['tidsgrænser', 'undskyldninger', 'affaldsposer', 'banker']
            },
            {
                id: 'pt4-q6',
                sentence: 'Undersøgelsen viste også, at forældre spiller en vigtig rolle ved at være forbilleder og ______ gode vaner hos deres børn.',
                sentenceEn: 'The study also showed that parents play an important role by being role models and promoting good habits in their children.',
                answer: 'fremmer',
                blank: 'fremmer',
                hint: 'At støtte en positiv udvikling (promotes).',
                options: ['fremmer', 'forbyder', 'overser', 'forsinker']
            },
            {
                id: 'pt4-q7',
                sentence: 'På den måde kan vi alle lære at bruge teknologien på en sund måde og finde en ______ balance mellem skærm og virkelighed.',
                sentenceEn: 'In this way, we can all learn to use technology in a healthy way and find a healthy balance between screen and reality.',
                answer: 'sund',
                blank: 'sund',
                hint: 'Godt for helbredet (healthy).',
                options: ['sund', 'kunstig', 'negativ', 'tilfældig']
            },
            {
                id: 'pt4-q8',
                sentence: 'En ______ tilgang kan hjælpe med at sikre, at vi både udnytter teknologiens fordele og passer på vores mentale velbeﬁndende.',
                sentenceEn: 'A balanced approach can help ensure that we both utilize the benefits of technology and take care of our mental well-being.',
                answer: 'balanceret',
                blank: 'balanceret',
                hint: 'Noget der er i ligevægt (balanced).',
                options: ['balanceret', 'risikabel', 'bekymret', 'overﬂadisk']
            }
        ]
    },
    {
        id: 'pd3-practice-test-5',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Delprøve 3',
        typeEn: 'Gap Fill MCQ (Test 5)',
        level: 'PD3',
        lesson: {
            title: 'Sunde vaner og motion',
            titleEn: 'Healthy Habits and Exercise',
            topics: ['vocabulary', 'context', 'word-order-v2'],
            content: `Practice Test 5 from the official test bank. Reading about exercise and health.`
        },
        questions: [
            {
                id: 'pt5-q1',
                sentence: 'Forskning viser, at regelmæssig ______ aktivitet ikke kun styrker kroppen, men også kan forbedre koncentrationen og reducere stress.',
                sentenceEn: 'Research shows that regular physical activity not only strengthens the body, but can also improve concentration and reduce stress.',
                answer: 'fysisk',
                blank: 'fysisk',
                hint: 'Noget der har med kroppen at gøre (physical).',
                options: ['fysisk', 'juridisk', 'teknisk', 'økonomisk']
            },
            {
                id: 'pt5-q2',
                sentence: 'Mange vælger at cykle til arbejde eller stå af bussen nogle ______ før.',
                sentenceEn: 'Many choose to cycle to work or get off the bus a few stops early.',
                answer: 'stationer',
                blank: 'stationer',
                hint: 'Steder hvor bussen/toget stopper (stations/stops).',
                options: ['stationer', 'minutter', 'byer', 'dage']
            },
            {
                id: 'pt5-q3',
                sentence: 'Andre sætter en alarm som påmindelse om at lave ______ øvelser ved skrivebordet.',
                sentenceEn: 'Others set an alarm as a reminder to do light exercises at the desk.',
                answer: 'lette',
                blank: 'lette',
                hint: 'Ikke tunge/svære (light/easy).',
                options: ['dyre', 'lette', 'farlige', 'vanskelige']
            },
            {
                id: 'pt5-q4',
                sentence: 'Det er vigtigt, at man ﬁnder aktiviteter, der er ______ og passer til ens niveau, så man undgår skader og fastholder motivationen.',
                sentenceEn: 'It is important to find activities that are tailored and fit one\'s level, so injuries are avoided and motivation is maintained.',
                answer: 'tilpassede',
                blank: 'tilpassede',
                hint: 'Gjort passende til formålet (adapted/tailored).',
                options: ['tilfældige', 'tilpassede', 'forkerte', 'pludselige']
            },
            {
                id: 'pt5-q5',
                sentence: 'Det betyder blandt andet, at man spiser varieret og får ______ nok søvn.',
                sentenceEn: 'This means, among other things, eating a varied diet and getting sufficient sleep.',
                answer: 'tilstrækkelig',
                blank: 'tilstrækkelig',
                hint: 'Nok / det der er brug for (sufficient).',
                options: ['tilstrækkelig', 'økonomisk', 'festlig', 'ulovlig']
            },
            {
                id: 'pt5-q6',
                sentence: 'En ______ balance mellem arbejde, fritid og hvile kan være afgørende for at føle sig godt tilpas.',
                sentenceEn: 'A healthy balance between work, leisure and rest can be crucial to feeling well.',
                answer: 'sund',
                blank: 'sund',
                hint: 'Godt for helbredet (healthy).',
                options: ['sund', 'midlertidig', 'kritisk', 'hård']
            },
            {
                id: 'pt5-q7',
                sentence: 'Mens nogle foretrækker at ______ sig selv med højintensiv træning, trives andre bedre med yoga eller lange gåture i naturen.',
                sentenceEn: 'While some prefer to push themselves with high-intensity training, others thrive better with yoga or long walks in nature.',
                answer: 'presse',
                blank: 'presse',
                hint: 'At lægge pres på (to push).',
                options: ['presse', 'kede', 'gemme', 'miste']
            },
            {
                id: 'pt5-q8',
                sentence: 'Uanset hvad handler det om at ﬁnde en ______ rytme, der gør motion til en naturlig del af livet.',
                sentenceEn: 'Regardless, it is about finding a regular rhythm that makes exercise a natural part of life.',
                answer: 'regelmæssig',
                blank: 'regelmæssig',
                hint: 'Noget der gentager sig på et fast tidspunkt (regular).',
                options: ['regelmæssig', 'rodet', 'spontan', 'besværlig']
            }
        ]
    },
    {
        id: 'pd3-practice-test-6',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Delprøve 3',
        typeEn: 'Gap Fill MCQ (Test 6)',
        level: 'PD3',
        lesson: {
            title: 'Kunstig intelligens i sundhedsvæsenet',
            titleEn: 'Artificial Intelligence in Healthcare',
            topics: ['vocabulary', 'context', 'word-order-v2'],
            content: `Practice Test 6 from the official test bank. AI in the Danish healthcare system — ethical, technological, and practical aspects.`
        },
        questions: [
            {
                id: 'pt6-q1',
                sentence: 'AI-systemer kan hjælpe læger med at stille ______ diagnoser.',
                sentenceEn: 'AI systems can help doctors make precise diagnoses.',
                answer: 'præcise',
                blank: 'præcise',
                hint: 'Nøjagtige og korrekte (accurate and correct).',
                options: ['præcise', 'økonomiske', 'juridiske', 'sociale']
            },
            {
                id: 'pt6-q2',
                sentence: 'Algoritmerne skal være transparente og ______.',
                sentenceEn: 'The algorithms must be transparent and reliable.',
                answer: 'pålidelige',
                blank: 'pålidelige',
                hint: 'Man kan stole på dem (trustworthy).',
                options: ['pålidelige', 'tilfældige', 'hemmelige', 'kommercielle']
            },
            {
                id: 'pt6-q3',
                sentence: 'Patienter kan ______ i beslutninger om egen behandling.',
                sentenceEn: 'Patients can participate in decisions about their own treatment.',
                answer: 'deltage',
                blank: 'deltage',
                hint: 'At være en del af noget (to take part in).',
                options: ['ignorere', 'deltage', 'undgå', 'reducere']
            },
            {
                id: 'pt6-q4',
                sentence: 'Der udføres løbende ______ af AI-løsningerne.',
                sentenceEn: 'Ongoing control of AI solutions is carried out.',
                answer: 'kontrol',
                blank: 'kontrol',
                hint: 'At sikre at noget fungerer korrekt (monitoring/checking).',
                options: ['kontrol', 'frihed', 'reklame', 'nedskæring']
            },
            {
                id: 'pt6-q5',
                sentence: 'Hospitaler samarbejder for at udvikle nye AI-______.',
                sentenceEn: 'Hospitals collaborate to develop new AI tools.',
                answer: 'værktøjer',
                blank: 'værktøjer',
                hint: 'Redskaber man bruger til at arbejde (instruments/tools).',
                options: ['værktøjer', 'malebøger', 'parkeringspladser', 'billetter']
            },
            {
                id: 'pt6-q6',
                sentence: 'Beslutninger truffet af AI skal kunne ______ af mennesker.',
                sentenceEn: 'Decisions made by AI must be reversible by humans.',
                answer: 'omgøres',
                blank: 'omgøres',
                hint: 'At ændre eller vende en beslutning (to reverse/undo).',
                options: ['promoveres', 'overlades', 'omgøres', 'opbevares']
            },
            {
                id: 'pt6-q7',
                sentence: 'Det kræver nytænkning, investeringer og ______ til både personale og borgere.',
                sentenceEn: 'It requires innovation, investments, and education for both staff and citizens.',
                answer: 'uddannelse',
                blank: 'uddannelse',
                hint: 'Træning og læring (training and learning).',
                options: ['uddannelse', 'afslapning', 'underholdning', 'besparelse']
            },
            {
                id: 'pt6-q8',
                sentence: 'AI kan blive et værdifuldt ______ i behandlingen.',
                sentenceEn: 'AI can become a valuable tool in treatment.',
                answer: 'værktøj',
                blank: 'værktøj',
                hint: 'Et redskab (a tool/instrument, singular).',
                options: ['værktøj', 'problem', 'middel', 'hinder']
            }
        ]
    },
    {
        id: 'pd3-practice-test-7',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Delprøve 3',
        typeEn: 'Gap Fill MCQ (Test 7)',
        level: 'PD3',
        lesson: {
            title: 'Livslang læring og efteruddannelse',
            titleEn: 'Lifelong Learning and Continuing Education',
            topics: ['vocabulary', 'context', 'word-order-v2'],
            content: `Practice Test 7 from the official test bank. Lifelong learning, continuing education, and workplace development in Denmark.`
        },
        questions: [
            {
                id: 'pt7-q1',
                sentence: 'Medarbejdere føler sig mere ______, når de får mulighed for at udvikle sig.',
                sentenceEn: 'Employees feel more motivated when they get the chance to develop.',
                answer: 'motiverede',
                blank: 'motiverede',
                hint: 'Inspirerede og villige til at arbejde (inspired and willing to work).',
                options: ['motiverede', 'forvirrede', 'passive', 'overvældede']
            },
            {
                id: 'pt7-q2',
                sentence: 'Det vigtigste er at vælge et forløb, som man ______ for.',
                sentenceEn: 'The most important thing is to choose a course that one is passionate about.',
                answer: 'brænder',
                blank: 'brænder',
                hint: 'Fast udtryk: at brænde for noget (to be passionate about something).',
                options: ['glæder sig', 'mister håbet', 'lærer', 'brænder']
            },
            {
                id: 'pt7-q3',
                sentence: 'Det kan ______ både produktiviteten og medarbejdernes trivsel.',
                sentenceEn: 'It can improve both productivity and employee well-being.',
                answer: 'forbedre',
                blank: 'forbedre',
                hint: 'At gøre noget bedre (to make something better).',
                options: ['reducere', 'forværre', 'forbedre', 'ignorere']
            },
            {
                id: 'pt7-q4',
                sentence: 'Ældre medarbejdere kan føle sig ______ af nye digitale systemer.',
                sentenceEn: 'Older employees may feel left behind by new digital systems.',
                answer: 'hægtede',
                blank: 'hægtede',
                hint: 'Fast vending: at blive hægtet af (to be left behind/outpaced).',
                options: ['styrkede', 'overhalede', 'overladte', 'hægtede']
            },
            {
                id: 'pt7-q5',
                sentence: 'Det giver en ______ tilværelse og kan forebygge ensomhed.',
                sentenceEn: 'It provides a richer existence and can prevent loneliness.',
                answer: 'rigere',
                blank: 'rigere',
                hint: 'Mere indholdsrig (more enriched/richer).',
                options: ['mere ensformig', 'rigere', 'travlere', 'kortere']
            }
        ]
    },
    {
        id: 'pd3-practice-test-8',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Delprøve 3',
        typeEn: 'Gap Fill MCQ (Test 8)',
        level: 'PD3',
        lesson: {
            title: 'Livslang læring',
            titleEn: 'Lifelong Learning',
            topics: ['vocabulary', 'context', 'word-order-v2'],
            content: `Practice Test 8 from the official test bank. How lifelong learning impacts careers, workplaces, and personal growth.`
        },
        questions: [
            {
                id: 'pt8-q1',
                sentence: 'Flere oplever, at den ______ viden giver dem mod til at søge nye stillinger.',
                sentenceEn: 'Many experience that the updated knowledge gives them courage to seek new positions.',
                answer: 'opdateret',
                blank: 'opdateret',
                hint: 'Ny og aktuel (new and current / updated).',
                options: ['opdateret', 'udmattet', 'langvarig', 'svag']
            },
            {
                id: 'pt8-q2',
                sentence: 'Man kan selv bestemme tempo og dermed ______ arbejdstid, familieliv og studier.',
                sentenceEn: 'You can set your own pace and thus combine work hours, family life, and studies.',
                answer: 'forene',
                blank: 'forene',
                hint: 'At kombinere eller harmonere (to combine/unite).',
                options: ['forene', 'dekorere', 'tvinge', 'bekæmpe']
            },
            {
                id: 'pt8-q3',
                sentence: 'Der er ikke altid en lærer, der ______ en til at møde op.',
                sentenceEn: 'There is not always a teacher who encourages one to show up.',
                answer: 'opfordrer',
                blank: 'opfordrer',
                hint: 'At motivere nogen (to encourage/urge).',
                options: ['minder', 'opfordrer', 'stopper', 'forstyrrer']
            },
            {
                id: 'pt8-q4',
                sentence: 'Medarbejdere er mere ______ og loyale, hvis deres udvikling tages alvorligt.',
                sentenceEn: 'Employees are more engaged and loyal if their development is taken seriously.',
                answer: 'engagerede',
                blank: 'engagerede',
                hint: 'Dybt involverede og motiverede (deeply involved and motivated).',
                options: ['engagerede', 'forvirrede', 'generte', 'urolige']
            },
            {
                id: 'pt8-q5',
                sentence: 'Læring skal være en integreret del af arbejdspladsens ______.',
                sentenceEn: 'Learning should be an integrated part of the workplace culture.',
                answer: 'kultur',
                blank: 'kultur',
                hint: 'Normer og værdier på en arbejdsplads (norms and values at a workplace).',
                options: ['kultur', 'butik', 'ferie', 'maskine']
            },
            {
                id: 'pt8-q6',
                sentence: 'Det er nemmere at stille spørgsmål i et lokale og få ______ feedback.',
                sentenceEn: 'It is easier to ask questions in a room and get personal feedback.',
                answer: 'personlig',
                blank: 'personlig',
                hint: 'Direkte og individuel (direct and individual / personal).',
                options: ['personlig', 'forsinket', 'minimal', 'anonym']
            },
            {
                id: 'pt8-q7',
                sentence: 'Udfordringen er at finde en ______ mellem digitale og analoge læringsformer.',
                sentenceEn: 'The challenge is to find a balance between digital and analogue learning methods.',
                answer: 'balance',
                blank: 'balance',
                hint: 'Ligevægt mellem to ting (equilibrium between two things).',
                options: ['balance', 'modstand', 'risiko', 'logik']
            },
            {
                id: 'pt8-q8',
                sentence: 'Livslang læring kræver også en ______ indsats.',
                sentenceEn: 'Lifelong learning also requires a persistent effort.',
                answer: 'vedholdende',
                blank: 'vedholdende',
                hint: 'Udholdende og vedvarende (persistent and sustained).',
                options: ['vedholdende', 'tilfældig', 'skadelig', 'midlertidig']
            }
        ]
    },
    {
        id: 'pd3-practice-test-9',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Delprøve 3',
        typeEn: 'Gap Fill MCQ (Test 9)',
        level: 'PD3',
        lesson: {
            title: 'Frivilligt arbejde',
            titleEn: 'Volunteering',
            topics: ['vocabulary', 'context', 'word-order-v2'],
            content: `Practice Test 9 from the official test bank. Reading about voluntary work and engagement.`
        },
        questions: [
            {
                id: 'pt9-q1',
                sentence: 'Uanset område kan frivilligt arbejde styrke det ______ bånd mellem mennesker og skabe nye venskaber.',
                sentenceEn: 'Regardless of the area, voluntary work can strengthen the social bond between people and create new friendships.',
                answer: 'sociale',
                blank: 'sociale',
                hint: 'Noget der har med samfundet og relationer at gøre (social).',
                options: ['sociale', 'juridiske', 'matematiske', 'finansielle']
            },
            {
                id: 'pt9-q2',
                sentence: 'Frivilligt arbejde kan forbedre den mentale ______.',
                sentenceEn: 'Voluntary work can improve mental health.',
                answer: 'sundhed',
                blank: 'sundhed',
                hint: 'At have det godt i krop og sind (health).',
                options: ['sundhed', 'skønhed', 'ferie', 'opmærksomhed']
            },
            {
                id: 'pt9-q3',
                sentence: 'Det kan være svært at ______ projekter, når bemandingen skifter hver uge.',
                sentenceEn: 'It can be difficult to plan projects when the staffing changes every week.',
                answer: 'planlægge',
                blank: 'planlægge',
                hint: 'At lægge en plan (to plan).',
                options: ['planlægge', 'ignorere', 'skjule', 'forbyde']
            },
            {
                id: 'pt9-q4',
                sentence: 'For at undgå udbrændthed opfordrer eksperter til, at de frivillige får ______ støtte og klare forventninger.',
                sentenceEn: 'To avoid burnout, experts encourage volunteers to receive sufficient support and clear expectations.',
                answer: 'tilstrækkelig',
                blank: 'tilstrækkelig',
                hint: 'Nok / det der er brug for (sufficient).',
                options: ['tilstrækkelig', 'spredt', 'unødvendig', 'improviseret']
            },
            {
                id: 'pt9-q5',
                sentence: 'På længere sigt er det vigtigt, at frivilligt arbejde bliver anerkendt som en del af den sociale ______.',
                sentenceEn: 'In the long term, it is important that voluntary work is recognised as part of the social infrastructure.',
                answer: 'infrastruktur',
                blank: 'infrastruktur',
                hint: 'Det der får samfundet til at hænge sammen (infrastructure).',
                options: ['infrastruktur', 'diskussion', 'udsigt', 'skolegård']
            },
            {
                id: 'pt9-q6',
                sentence: 'Kurser og ______ kan løfte niveauet og give de frivillige et fagligt fundament.',
                sentenceEn: 'Courses and education can raise the level and give volunteers a professional foundation.',
                answer: 'uddannelse',
                blank: 'uddannelse',
                hint: 'At lære noget / at gå i skole (education).',
                options: ['uddannelse', 'konkurrence', 'sladder', 'leg']
            },
            {
                id: 'pt9-q7',
                sentence: 'Det kan skyldes travlhed på job eller manglende ______ til at involvere sig.',
                sentenceEn: 'It may be due to busyness at work or a lack of surplus energy to get involved.',
                answer: 'overskud',
                blank: 'overskud',
                hint: 'At have mere end nok energi (surplus / extra energy).',
                options: ['overskud', 'katastrofe', 'madpakke', 'kalender']
            },
            {
                id: 'pt9-q8',
                sentence: 'Men det bør aldrig erstatte professionel ______ på områder, hvor der er brug for særlige kompetencer.',
                sentenceEn: 'But it should never replace professional help in areas where special skills are needed.',
                answer: 'hjælp',
                blank: 'hjælp',
                hint: 'Assistance / støtte (help).',
                options: ['hjælp', 'humor', 'vinter', 'energi']
            }
        ]
    },
    {
        id: 'pd3-practice-test-10',
        year: 2024,
        season: 'Practice',
        seasonEn: 'Practice',
        type: 'Delprøve 3',
        typeEn: 'Gap Fill MCQ (Test 10)',
        level: 'PD3',
        lesson: {
            title: 'Fjernundervisning for voksne',
            titleEn: 'Distance Learning for Adults',
            topics: ['vocabulary', 'context', 'word-order-v2'],
            content: `Practice Test 10 from the official test bank. Reading about distance learning and online courses.`
        },
        questions: [
            {
                id: 'pt10-q1',
                sentence: 'Deltagerne savner ofte den ______ kontakt, man får i et klasseværelse.',
                sentenceEn: 'The participants often miss the social contact you get in a classroom.',
                answer: 'sociale',
                blank: 'sociale',
                hint: 'Noget der har med samvær at gøre (social).',
                options: ['sociale', 'økonomiske', 'juridiske', 'tekniske']
            },
            {
                id: 'pt10-q2',
                sentence: 'Det gør det lettere at ______ arbejde, familie og uddannelse.',
                sentenceEn: 'It makes it easier to balance work, family, and education.',
                answer: 'balancere',
                blank: 'balancere',
                hint: 'At finde en ligevægt / fordele jævnt (balance).',
                options: ['balancere', 'afbryde', 'forbyde', 'ignorere']
            },
            {
                id: 'pt10-q3',
                sentence: 'Underviseren skal støtte deltagerne digitalt og sørge for, at de ______ opgaverne.',
                sentenceEn: 'The teacher must support the participants digitally and ensure that they complete the tasks.',
                answer: 'fuldfører',
                blank: 'fuldfører',
                hint: 'At gøre noget færdigt (complete/finish).',
                options: ['fuldfører', 'forkorter', 'forlænger', 'forhandler']
            },
            {
                id: 'pt10-q4',
                sentence: 'Et godt ______ med ergonomisk stol og skærm kan forhindre smerter i ryg og nakke.',
                sentenceEn: 'A good workspace with an ergonomic chair and monitor can prevent back and neck pain.',
                answer: 'arbejdsområde',
                blank: 'arbejdsområde',
                hint: 'Stedet hvor man arbejder (workspace).',
                options: ['arbejdsområde', 'køkken', 'kantine', 'trappeopgang']
            },
            {
                id: 'pt10-q5',
                sentence: 'Eksperter anbefaler små pauser og regelmæssig ______ for at holde koncentrationen.',
                sentenceEn: 'Experts recommend short breaks and regular exercise to maintain concentration.',
                answer: 'motion',
                blank: 'motion',
                hint: 'Fysisk aktivitet (exercise).',
                options: ['motion', 'overspringshandling', 'økonomi', 'shopping']
            },
            {
                id: 'pt10-q6',
                sentence: 'Nogle føler sig ______ foran skærmen og savner følelsen af fællesskab.',
                sentenceEn: 'Some feel lonely in front of the screen and miss the feeling of community.',
                answer: 'ensomme',
                blank: 'ensomme',
                hint: 'Når man savner selskab (lonely).',
                options: ['ensomme', 'engagerede', 'begejstrede', 'entusiastiske']
            },
            {
                id: 'pt10-q7',
                sentence: 'Andre bliver mere ______, når de kan styre tempoet selv.',
                sentenceEn: 'Others become more inspired when they can control the pace themselves.',
                answer: 'inspirerede',
                blank: 'inspirerede',
                hint: 'At få lyst og idéer til at gøre noget (inspired).',
                options: ['inspirerede', 'frustrerede', 'passive', 'forvirrede']
            },
            {
                id: 'pt10-q8',
                sentence: 'I sidste ende handler det om at finde en ______ balance mellem selvstændighed og støtte.',
                sentenceEn: 'Ultimately, it is about finding a flexible balance between independence and support.',
                answer: 'fleksibel',
                blank: 'fleksibel',
                hint: 'Kan ændres og tilpasses (flexible).',
                options: ['fleksibel', 'simpel', 'tilfældig', 'hurtig']
            }
        ]
    },

    // ============ 2020 ============
    // ============ 2020 SOMMER ============
    {
        id: 'pd3-2020-sommer-ls1',
        year: 2020,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 1',
        typeEn: 'Sub-exam 1 - Information Search',
        level: 'PD3',
        lesson: {
            title: 'Nationalmuseet',
            titleEn: 'The National Museum',
            topics: ['information-search', 'history', 'education'],
            content: 'Søg informationer i tekstsamlingen om Nationalmuseets undervisning, historie og afdelinger.'
        },
        questions: [
            { id: 'pd3-2020s-ls1-q1', sentence: 'Hvad er der i forløbet "Demokrati og stemmeret" fokus på ud over samfundsmæssigt indhold?', answer: 'sprog', hint: 'Søg under undervisning' },
            { id: 'pd3-2020s-ls1-q2', sentence: 'Får elever mulighed for at prøve kopier af redskaber i forløbet "Da jægeren blev bonde"?', answer: 'Ja', hint: 'Søg under undervisning' },
            { id: 'pd3-2020s-ls1-q3', sentence: 'Hvilken evne skal undervisningen styrke ud over at argumentere og diskutere?', answer: 'Samarbejdsevnen', hint: 'Søg under pædagogisk profil' },
            { id: 'pd3-2020s-ls1-q4', sentence: 'Hvordan foregår undervisningen i Stenstruphuset på Frilandsmuseet?', answer: 'værkstedsaktiviteter', hint: 'Søg under Frilandsmuseet' },
            { id: 'pd3-2020s-ls1-q5', sentence: 'Fra hvornår var der igen gratis adgang til Nationalmuseet efter 2003?', answer: '2006', hint: 'Søg under Nationalmuseet før og nu' },
            { id: 'pd3-2020s-ls1-q6', sentence: 'Hvornår kan man tidligst få serveret middag ved leje af Nationalmuseets forhal?', answer: '18.30', hint: 'Søg under Nationalmuseet før og nu' },
            { id: 'pd3-2020s-ls1-q7', sentence: 'Hvorfor har udstillingen "Danmarkshistorier 1660-2000" en titel i flertal?', answer: 'mange fortællinger', hint: 'Søg under Nationalmuseet i København' },
            { id: 'pd3-2020s-ls1-q8', sentence: 'Hvorfor er Egtvedpigen et unikt fund?', answer: 'klædedragten', hint: 'Søg under Egtvedpigen' },
            { id: 'pd3-2020s-ls1-q9', sentence: 'Hvor mange personer kan der højst være i en gruppe ved rundvisning i Kongernes Jelling?', answer: '15', hint: 'Søg under Kongernes Jelling' },
            { id: 'pd3-2020s-ls1-q10', sentence: 'Hvorfor er runestenene i Kongernes Jelling sat i montrer?', answer: 'beskytte dem', hint: 'Søg under Kongernes Jelling' },
            { id: 'pd3-2020s-ls1-q11', question: 'Hvor kan man læse bøger fra Musikmuseets bibliotek ud over på selve museet?', answer: 'bibliotek', hint: 'Søg under Musikmuseet' },
            { id: 'pd3-2020s-ls1-q12', sentence: 'Af hensyn til hvilke gæster bliver instrumenterne i Klangrummet jævnligt udskiftet?', answer: 'Gæster, der kommer igen', hint: 'Søg under Musikmuseet' },
            { id: 'pd3-2020s-ls1-q13', sentence: 'Hvilken aktivitet, som hele familien deltog i, roser Ib F. Nationalmuseet for?', answer: 'skattejagt', hint: 'Søg under Fire besøgende fortæller' },
            { id: 'pd3-2020s-ls1-q14', sentence: 'Hvorfor var en del af udstillingen om Danmarks oldtid lukket under Dortes besøg?', answer: 'ombygning', hint: 'Søg under Fire besøgende fortæller' },
            { id: 'pd3-2020s-ls1-q15', sentence: 'Hvorfor syntes James Milner, det var spændende at se fundene i virkeligheden?', answer: 'set i bøger', hint: 'Søg under Fire besøgende fortæller' }
        ]
    },
    {
        id: 'pd3-2020-sommer-ls2a',
        year: 2020,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 2A',
        typeEn: 'Sub-exam 2A - Reading Comprehension',
        level: 'PD3',
        lesson: {
            title: 'Flere danske studerende rejser ud',
            titleEn: 'More Danish Students Are Going Abroad',
            topics: ['comprehension', 'details', 'society', 'study-abroad'],
            content: `Læs teksterne 'Eva og Per tog et halvt år til udlandet' og 'Flere danske unge tager en del af deres uddannelse i udlandet'. Besvar spørgsmålene.`
        },
        questions: [
            {
                id: 'pd3-2020s-ls2a-q1',
                question: 'Hvilken af følgende grunde var ifølge teksten mest afgørende for, at Eva besluttede sig for at tage på studieophold på Cardiff University? (1) ______',
                sentenceEn: 'Why did Eva decide to study at Cardiff University? (1) ______',
                options: ['A. Hun kunne blive bedre til at tale engelsk.', 'B. Hun kunne studere fagligt relevante fag.', 'C. Hun kunne ikke komme ind på University of London.'],
                answer: 'B',
                blank: 'B',
                hint: 'B: Hun kunne studere fagligt relevante fag.'
            },
            {
                id: 'pd3-2020s-ls2a-q2',
                question: 'Hvilken af følgende grunde var der til, at Per tog til Cardiff Metropolitan University for at studere et halvt år? (2) ______',
                sentenceEn: 'Why did Per study for half a year in Cardiff? (2) ______',
                options: ['A. Han havde gode minder fra Wales, fordi han havde været der tidligere.', 'B. Han havde mulighed for at studere nogle fag, han ikke kunne studere i København.', 'C. Han havde allerede kontakt med andre studerende der, som kunne hjælpe ham.'],
                answer: 'A',
                blank: 'A',
                hint: 'A: Han havde gode minder fra Wales, fordi han havde været der tidligere.'
            },
            {
                id: 'pd3-2020s-ls2a-q3',
                question: 'Hvilket af følgende udsagn er i overensstemmelse med det, der står i teksten? (3) ______',
                sentenceEn: 'Which statement is in accordance with the text? (3) ______',
                options: ['A. Eva og Per har taget studielån for at kunne betale de store omkostninger.', 'B. Eva og Per anbefaler kun unge at tage på studieophold i lande, hvor der ikke er store omkostninger.', 'C. Eva og Per er glade for, at de valgte at tage til Cardiff, selvom der var store omkostninger.'],
                answer: 'C',
                blank: 'C',
                hint: 'C: Eva og Per er glade for, at de valgte at tage til Cardiff, selvom der var store omkostninger.'
            },
            {
                id: 'pd3-2020s-ls2a-q4',
                question: 'Hvad ser erhvervslivet ifølge teksten som en væsentlig fordel ved, at de unge tager en del af deres uddannelse i udlandet? (4) ______',
                sentenceEn: 'What does the business world see as a significant advantage? (4) ______',
                options: ['A. De opnår særlige faglige kompetencer, de ikke kan opnå på danske uddannelser.', 'B. De opnår særlige samarbejdskompetencer, som many danske firmaer har brug for.', 'C. De opnår særlige sproglige kompetencer, de kan bruge i virksomheder i udlandet.'],
                answer: 'B',
                blank: 'B',
                hint: 'B: De opnår særlige samarbejdskompetencer, som many danske firmaer har brug for.'
            },
            {
                id: 'pd3-2020s-ls2a-q5',
                question: 'Hvilken af følgende betingelser skal ifølge teksten være opfyldt, hvis erhvervslivet skal se udlandsstudie som en kvalifikation? (5) ______',
                sentenceEn: 'What condition must be met for business to see it as a qualification? (5) ______',
                options: ['A. De studerende skal vælge at studere i et land, der kulturelt er meget forskelligt fra Danmark.', 'B. De studerende skal vælge at studere i mindre eksotiske lande, så de kan fokusere på deres studier.', 'C. De studerende skal vælge et udenlandsk universitet, hvor de kan supplere deres uddannelse med relevante fag.'],
                answer: 'C',
                blank: 'C',
                hint: 'C: De studerende skal vælge et udenlandsk universitet, hvor de kan supplere deres uddannelse med relevante fag.'
            },
            {
                id: 'pd3-2020s-ls2a-q6',
                question: 'Hvilken af følgende grunde nævnes der i teksten til, at nogle danske studerende ikke vælger at tage en del af deres uddannelse i udlandet? (6) ______',
                sentenceEn: 'What reason is mentioned for why some students do not go abroad? (6) ______',
                options: ['A. De er ikke gode nok til at søge hjælp af universiteterne, når de skal planlægge et ophold.', 'B. De kan muligvis ikke få godkendt hele deres udenlandske studie på deres studie i Danmark.', 'C. Universiteterne vil ikke støtte de studerende personligt, økonomisk eller studiemæssigt.'],
                answer: 'B',
                blank: 'B',
                hint: 'B: De kan muligvis ikke få godkendt hele deres udenlandske studie på deres studie i Danmark.'
            },
            {
                id: 'pd3-2020s-ls2a-q7',
                question: 'Hvilket udsagn er i overensstemmelse med det, der står i teksten, om den nuværende fordeling af udenlandske studerende? (7) ______',
                sentenceEn: 'Which statement is in accordance with the text about the distribution of foreign students? (7) ______',
                options: ['A. Den nuværende fordeling skal ændres, hvis det fortsat skal være en økonomisk gevinst.', 'B. Færre udenlandske studerende med den nuværende fordeling vil være en økonomisk gevinst.', 'C. Den nuværende fordeling er en økonomisk gevinst, selvom de studerende på nogle uddannelser hurtigt rejser hjem.'],
                answer: 'C',
                blank: 'C',
                hint: 'C: Den nuværende fordeling er en økonomisk gevinst, selvom de studerende på nogle uddannelser hurtigt rejser hjem.'
            }
        ]
    },
    {
        id: 'pd3-2020-sommer-ls2b',
        year: 2020,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 2B',
        typeEn: 'Sub-exam 2B - Gap Fill MCQ',
        level: 'PD3',
        lesson: {
            title: 'Er stråling fra mobiltelefoner skadelig for helbredet?',
            titleEn: 'Is Mobile Radiation Harmful?',
            topics: ['vocabulary', 'cloze', 'health', 'technology'],
            content: `Læs teksten 'Er stråling fra mobiltelefoner skadelig for helbredet?' og vælg de ord eller udtryk, der passer bedst i hullerne.`
        },
        questions: [
            { id: 'pd3-2020s-ls2b-q1', sentence: 'Mange er (1) ______ stråling.', sentenceEn: 'Many are (1) ______ radiation.', answer: 'C', blank: 'eksponeret for', options: ['A. behandlet for', 'B. afhængige af', 'C. eksponeret for', 'D. beskyttet mod'] },
            { id: 'pd3-2020s-ls2b-q2', sentence: 'Det er (2) ______ vigtigt.', sentenceEn: 'It is (2) ______ important.', answer: 'D', blank: 'blandt andet', options: ['A. desuden', 'B. i stedet for', 'C. imidlertid', 'D. blandt andet'] },
            { id: 'pd3-2020s-ls2b-q3', sentence: 'Forskellige (3) ______ viser det.', sentenceEn: 'Various (3) ______ show it.', answer: 'C', blank: 'opfordringer', options: ['A. krav', 'B. forbud', 'C. opfordringer', 'D. resultater'] },
            { id: 'pd3-2020s-ls2b-q4', sentence: '... og (4) ______ fra myndigheder.', sentenceEn: '... and (4) ______ from authorities.', answer: 'D', blank: 'anbefalinger', options: ['A. spørgsmål', 'B. forklaringer', 'C. undersøgelser', 'D. anbefalinger'] },
            { id: 'pd3-2020s-ls2b-q5', sentence: '(5) ______ forskningen er klar.', sentenceEn: '(5) ______ the research is clear.', answer: 'D', blank: 'Konklusionen i', options: ['A. Formålet med', 'B. Årsagen til', 'C. Interessen for', 'D. Konklusionen i'] },
            { id: 'pd3-2020s-ls2b-q6', sentence: '(6) ______ mener nogle ...', sentenceEn: '(6) ______ some believe ...', answer: 'A', blank: 'Samtidig', options: ['A. Samtidig', 'B. Modsat', 'C. Som nævnt', 'D. Alligevel'] },
            { id: 'pd3-2020s-ls2b-q7', sentence: 'Det er (7) ______ ufarligt.', sentenceEn: 'It is (7) ______ harmless.', answer: 'B', blank: 'typisk', options: ['A. derimod', 'B. typisk', 'C. sjældent', 'D. modsat'] },
            { id: 'pd3-2020s-ls2b-q8', sentence: 'Forskellige (8) ______ det.', sentenceEn: 'Various (8) ______ it.', answer: 'C', blank: 'konsekvenserne ved', options: ['A. løsningerne på', 'B. grundene til', 'C. konsekvenserne ved', 'D. holdningerne til'] }
        ]
    },
    // ============ 2020 VINTER ============
    {
        id: 'pd3-2020-vinter-ls1',
        year: 2020,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 1',
        typeEn: 'Sub-exam 1 - Information Search',
        level: 'PD3',
        lesson: {
            title: 'Folkeoplysning',
            titleEn: 'Public Information / Popular Education',
            topics: ['information-search', 'education', 'society'],
            content: 'Søg informationer i tekstsamlingen om oplysningsforbund, aftenskoler og Grundtvig.'
        },
        questions: [
            { id: 'pd3-2020v-ls1-q1', sentence: 'Hvem samarbejder LOF med om aktiviteter for at fremme folkesundheden?', answer: 'Kommuner og patientforeninger', hint: 'Søg under LOF' },
            { id: 'pd3-2020v-ls1-q2', sentence: 'Hvad tilbyder LOF ud over aftenskoleundervisning?', answer: 'Debatter og foredrag', hint: 'Søg under LOF' },
            { id: 'pd3-2020v-ls1-q3', sentence: 'Hvilken region har flest lokale afdelinger i FOF?', answer: 'Syddanmark', hint: 'Søg under FOF' },
            { id: 'pd3-2020v-ls1-q4', sentence: 'Hvad er et krav for, at børn kan deltage i familie-kurser?', answer: 'sammen med en voksen', hint: 'Søg under Folkeoplysning' },
            { id: 'pd3-2020v-ls1-q5', sentence: 'Afsluttes et folkeoplysende kursus med en eksamen?', answer: 'Nej', hint: 'Søg under Folkeoplysning' },
            { id: 'pd3-2020v-ls1-q6', sentence: 'Hvorfor mente Grundtvig, det var vigtigt at vide noget om dansk historie?', answer: 'demokrati', hint: 'Søg under Grundtvig' },
            { id: 'pd3-2020v-ls1-q7', sentence: 'Hvor stort var faldet i kursusdeltagere ved udgangen af 2003?', answer: '10 %', hint: 'Søg under Folkeoplysning' },
            { id: 'pd3-2020v-ls1-q8', sentence: 'Hvordan er det muligt at målrette klaverkurset til den enkelte?', answer: 'individuelt', hint: 'Søg under LOF Midtjylland' },
            { id: 'pd3-2020v-ls1-q9', sentence: 'Hvad indeholder mappen på FVU dansk ud over manualer?', answer: 'handleplan', hint: 'Søg under AOF' },
            { id: 'pd3-2020v-ls1-q10', sentence: 'Hvilke undervisere er DOF Underviser først og fremmest beregnet for?', answer: 'DOF', hint: 'Søg under DOF' },
            { id: 'pd3-2020v-ls1-q11', sentence: 'Hvilke andre typer skoler er medlemmer af DOF ud over aftenskoler?', answer: 'Daghøjskoler og sprogskoler', hint: 'Søg under DOF' },
            { id: 'pd3-2020v-ls1-q12', sentence: 'Kan man være sprogunderviser i aftenskolen uden at tale dansk?', answer: 'Nej', hint: 'Søg under DOF' },
            { id: 'pd3-2020v-ls1-q13', sentence: 'Hvad var det bedste ved underviseren på fotokurset ifølge Kasper?', answer: 'Oplæg', hint: 'Søg under Anmeldelser' },
            { id: 'pd3-2020v-ls1-q14', sentence: 'Hvad fik deltagerne på madlavningskurset til at repetere derhjemme?', answer: 'link', hint: 'Søg under Anmeldelser' },
            { id: 'pd3-2020v-ls1-q15', sentence: 'Hvad gør Mona Sørensen for at bevare roen i hverdagen?', answer: 'telefonen til side', hint: 'Søg under Anmeldelser' }
        ]
    },
    {
        id: 'pd3-2020-vinter-ls2a',
        year: 2020,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 2A',
        typeEn: 'Sub-exam 2A - Reading Comprehension',
        level: 'PD3',
        lesson: {
            title: 'Jobskifte',
            titleEn: 'Job Change',
            topics: ['comprehension', 'details', 'work-market', 'society'],
            content: `Læs teksterne 'Internt jobskifte opfyldte karrieredrøm' og 'Folk skifter job som aldrig før'. Besvar spørgsmålene.`
        },
        questions: [
            {
                id: 'pd3-2020v-ls2a-q1',
                question: 'Hvilken af følgende årsager er der ifølge teksten til, at Trine Sundsvald besluttede sig for at skifte til sit nuværende job som projektleder? (1) ______',
                sentenceEn: 'Why did Trine Sundsvald decide to change to her current job? (1) ______',
                options: ['A. Hendes firma fandt ud af, at hun var god til at koordinere og tilbød hende jobbet.', 'B. Hun havde tidligere fundet ud af, at hun var god til at organisere arbejdsprocesser.', 'C. Hun ville gerne fortsætte med at arbejde i den afdeling, hvor hun allerede arbejdede.'],
                answer: 'B',
                blank: 'B',
                hint: 'B: Hun havde tidligere fundet ud af, at hun var god til at organisere arbejdsprocesser.'
            },
            {
                id: 'pd3-2020v-ls2a-q2',
                question: 'Hvad var ifølge teksten den afgørende grund til, at Trine Sundsvald blev tilbudt et job som projektleder i sit firma? (2) ______',
                sentenceEn: 'What was the decisive reason Trine was offered the job? (2) ______',
                options: ['A. Hun war den medarbejder i firmaet, der havde de bedste kvalifikationer til jobbet.', 'B. Firmaet ville gerne have, at hun skulle skifte job til en anden afdeling.', 'C. Firmaet ville gerne være sikker på at kunne beholde hende.'],
                answer: 'C',
                blank: 'C',
                hint: 'C: Firmaet ville gerne være sikker på at kunne beholde hende.'
            },
            {
                id: 'pd3-2020v-ls2a-q3',
                question: 'Hvilket af følgende udsagn er i overensstemmelse med det, Trine Sundsvald giver udtryk for om jobbet som projektleder? (3) ______',
                sentenceEn: 'Which statement is in accordance with Trine\'s view? (3) ______',
                options: ['A. Det er det helt rigtige for hende, fordi hun har mulighed for at udvikle nye faglige kompetencer.', 'B. Det er det helt rigtige for hende, fordi hun har mulighed for at arbejde sammen med nye kolleger.', 'C. Det er det helt rigtige for hende, fordi hun har mulighed for at arbejde med projekter i udlandet.'],
                answer: 'A',
                blank: 'A',
                hint: 'A: Det er det helt rigtige for hende, fordi hun har mulighed for at udvikle nye faglige kompetencer.'
            },
            {
                id: 'pd3-2020v-ls2a-q4',
                question: 'Hvad gives der i teksten udtryk for som en positiv konsekvens af den danske arbejdsmarkedsmodel? (4) ______',
                sentenceEn: 'What is mentioned as a positive consequence of the Danish model? (4) ______',
                options: ['A. Folk bliver ikke økonomisk dårligere stillet, hvis de bliver fyret.', 'B. Det er generelt mere socialt accepteret at blive fyret i Danmark.', 'C. Arbejdsgivere skal ikke følge nogen regler i forbindelse med fyringer.'],
                answer: 'B',
                blank: 'B',
                hint: 'B: Det er generelt mere socialt accepteret at blive fyret i Danmark.'
            },
            {
                id: 'pd3-2020v-ls2a-q5',
                question: 'Hvilket af følgende udsagn om den høje jobomsætning er i overensstemmelse med det, der gives udtryk for i teksten? (5) ______',
                sentenceEn: 'Which statement about high job turnover is in accordance with the text? (5) ______',
                options: ['A. Selvom det kan koste penge og tab af viden at udskifte medarbejdere, er den høje jobomsætning en fordel for hovedparten af de danske virksomheder.', 'B. Jobomsætningen er højere i Danmark end i mange andre lande, fordi der er many højt specialiserede medarbejdere i Danmark.', 'C. Den høje jobomsætning er en fordel for it-branchen og bygge- og anlægsbranchen, fordi det gør det nemmere for dem at skaffe højt specialiserede medarbejdere.'],
                answer: 'A',
                blank: 'A',
                hint: 'A: Selvom det kan koste penge og tab af viden at udskifte medarbejdere, er den høje jobomsætning en fordel for hovedparten af de danske virksomheder.'
            },
            {
                id: 'pd3-2020v-ls2a-q6',
                question: 'Hvilket af følgende udsagn om jobskift er i overensstemmelse med det, der gives udtryk for i teksten? (6) ______',
                sentenceEn: 'Which statement about job changes fits the text? (6) ______',
                options: ['A. Arbejdsgiverer tilbyder flere korte midlertidige ansættelser end tidligere for at tiltrække de unge, der i dag skifter job oftere.', 'B. Størstedelen af de unge foretrækker en løsere tilknytning til arbejdsmarkedet, fordi de endnu ikke har forpligtelser i forhold til familie og bolig.', 'C. I brancher med mangel på arbejdskraft er der flere medarbejdere, der selv vælger at skifte job.'],
                answer: 'C',
                blank: 'C',
                hint: 'C: I brancher med mangel på arbejdskraft er der flere medarbejdere, der selv vælger at skifte job.'
            },
            {
                id: 'pd3-2020v-ls2a-q7',
                question: 'Hvilket af følgende udsagn om ansatte i korte midlertidige ansættelser og ansatte i længerevarende fastansættelser gives der udtryk for i teksten? (7) ______',
                sentenceEn: 'Which statement about temporary vs. permanent employment is expressed? (7) ______',
                options: ['A. Et flertal af de ansatte i korte midlertidige ansættelser ønsker en længerevarende fastansættelse.', 'B. Det is ikke muligt for ansatte i korte midlertidige ansættelser at optjene dagpenge.', 'C. Ansatte i korte midlertidige ansættelser og ansatte i længerevarende fastansættelser får ikke samme løn for samme arbejde.'],
                answer: 'A',
                blank: 'A',
                hint: 'A: Et flertal af de ansatte i korte midlertidige ansættelser ønsker en længerevarende fastansættelse.'
            }
        ]
    },
    {
        id: 'pd3-2020-vinter-ls2b',
        year: 2020,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 2B',
        typeEn: 'Sub-exam 2B - Gap Fill MCQ',
        level: 'PD3',
        lesson: {
            title: 'Danske firmaer tager samfundsmæssigt ansvar',
            titleEn: 'Danish Companies Take Social Responsibility',
            topics: ['vocabulary', 'cloze', 'work-market', 'society'],
            content: `Læs teksten 'Danske firmaer tager samfundsmæssigt ansvar' og vælg de ord eller udtryk, der passer bedst i hullerne.`
        },
        questions: [
            { id: 'pd3-2020v-ls2b-q1', sentence: 'Det er (1) ______ vigtigt.', sentenceEn: 'It is (1) ______ important.', answer: 'B', blank: 'eksempelvis', options: ['A. derimod', 'B. eksempelvis', 'C. derefter', 'D. omvendt'] },
            { id: 'pd3-2020v-ls2b-q2', sentence: 'Mange vil (2) ______ ressourcer.', sentenceEn: 'Many want (2) ______ resources.', answer: 'A', blank: 'spare på', options: ['A. spare på', 'B. miljømærke', 'C. advare mod', 'D. afskaffe'] },
            { id: 'pd3-2020v-ls2b-q3', sentence: 'Det er en (3) ______.', sentenceEn: 'It is a (3) ______.', answer: 'D', blank: 'gevinst', options: ['A. udfordring', 'B. pligt', 'C. omkostning', 'D. gevinst'] },
            { id: 'pd3-2020v-ls2b-q4', sentence: 'Det er (4) ______ på det.', sentenceEn: 'It is (4) ______ on it.', answer: 'A', blank: 'en forklaring på', options: ['A. en forklaring på', 'B. et problem for', 'C. et resultat af', 'D. et eksempel på'] },
            { id: 'pd3-2020v-ls2b-q5', sentence: 'Det giver (5) ______ mening.', sentenceEn: 'It makes (5) ______ sense.', answer: 'C', blank: 'dermed', options: ['A. modsat', 'B. alligevel', 'C. dermed', 'D. dog'] },
            { id: 'pd3-2020v-ls2b-q6', sentence: 'Det er (6) ______ vigtigt.', sentenceEn: 'It is (6) ______ important.', answer: 'C', blank: 'nemlig', options: ['A. imidlertid', 'B. i stedet', 'C. nemlig', 'D. tværtimod'] },
            { id: 'pd3-2020v-ls2b-q7', sentence: 'Der er (7) ______ på det.', sentenceEn: 'There is (7) ______ on it.', answer: 'B', blank: 'mangel på', options: ['A. overskud af', 'B. mangel på', 'C. tilstrømning af', 'D. masser af'] },
            { id: 'pd3-2020v-ls2b-q8', sentence: 'De har (8) ______ det.', sentenceEn: 'They have (8) ______ it.', answer: 'D', blank: 'uenighed om', options: ['A. forventninger til', 'B. fordele ved', 'C. tillid til', 'D. uenighed om'] }
        ]
    },
    // ============ 2019 ============
    // ============ 2019 SOMMER ============
    {
        id: 'pd3-2019-sommer-ls1',
        year: 2019,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 1',
        typeEn: 'Sub-exam 1 - Information Search',
        level: 'PD3',
        lesson: {
            title: 'Danske musikfestivaler',
            titleEn: 'Danish Music Festivals',
            topics: ['information-search', 'music', 'culture'],
            content: 'Søg informationer i tekstsamlingen om forskellige danske musikfestivaler, deres historie og indtryk.'
        },
        questions: [
            { id: 'pd3-2019s-ls1-q1', question: 'Hvilke dage har Langelandsfestivals Børneland åbent for alle sine aktiviteter?', answer: 'sidste fire dage', hint: 'Søg under Langelandsfestival' },
            { id: 'pd3-2019s-ls1-q2', question: 'På Langelandsfestival kan man købe en speciel billet, hvis man har et handicap. Hvad skal man fremvise?', answer: 'ledsagerkort', hint: 'Søg under Langelandsfestival' },
            { id: 'pd3-2019s-ls1-q3', question: 'Hvor kan man også tjekke ind, hvis man skal bo i HandicapCamp?', answer: 'ved området', hint: 'Søg under Langelandsfestival' },
            { id: 'pd3-2019s-ls1-q4', question: 'Hvad hedder det område på Smukfest, man kan søge om en soveplads til?', answer: 'Menneskeligheden', hint: 'Søg under Smukfest' },
            { id: 'pd3-2019s-ls1-q5', question: 'Modtager man ved billetkøb til Smukfest sin billet via e-mail?', answer: 'Nej', hint: 'Søg under Smukfest' },
            { id: 'pd3-2019s-ls1-q6', question: 'Hvor kan man i festivaldagene købe ledige pladser på campingpladsen i Skagen?', answer: 'Kappelborg', hint: 'Søg under Skagen Festival' },
            { id: 'pd3-2019s-ls1-q7', question: 'Hvorfor afholdes Skagen Festival nu i den første weekend i juli?', answer: 'sommerferien', hint: 'Søg under Skagen Festival' },
            { id: 'pd3-2019s-ls1-q8', question: 'Hvad var årsagen til, at TV2/Nord i 2014 stoppede med samarbejdet om musikprisen?', answer: 'Sparegrunde', hint: 'Søg under Skagen Festival' },
            { id: 'pd3-2019s-ls1-q9', question: 'Hvad tilbyder NorthSide sine cyklende gæster på området BikeSide? Nævn to ting.', answer: 'parkering og cykeltjek', hint: 'Søg under Musikfestivaler før og nu' },
            { id: 'pd3-2019s-ls1-q10', question: 'Hvem ønsker Heartland Festival at tiltrække ved at kombinere musik, madkunst og live-samtaler?', answer: 'Nye typer festivaldeltagere', hint: 'Søg under Heartland Festival' },
            { id: 'pd3-2019s-ls1-q11', question: 'Hvornår er der ansøgningsfrist hos Smukfonden, hvis man vil have sin ansøgning behandlet før august?', answer: '15. maj', hint: 'Søg under Donationer' },
            { id: 'pd3-2019s-ls1-q12', question: 'Hvordan donerer Roskilde Festival-gruppen udover penge også viden og erfaringer?', answer: 'projekter', hint: 'Søg under Donationer' },
            { id: 'pd3-2019s-ls1-q13', question: 'Hvorfor har Erika ikke haft tid til at tage på NorthSide tidligere?', answer: 'eksamen', hint: 'Søg under Fire indtryk' },
            { id: 'pd3-2019s-ls1-q14', question: 'Hvad var en ny og god oplevelse for Peter på Roskilde Festival i år?', answer: 'nye bands', hint: 'Søg under Fire indtryk' },
            { id: 'pd3-2019s-ls1-q15', question: 'Hvorfor var dele af festivalpladsen på Smukfest lukket, da Sofie besøgte den?', answer: 'sidste dag', hint: 'Søg under Fire indtryk' }
        ]
    },
    {
        id: 'pd3-2019-sommer-ls2a',
        year: 2019,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 2A',
        typeEn: 'Sub-exam 2A - Reading Comprehension',
        level: 'PD3',
        lesson: {
            title: 'Velgørenhed',
            titleEn: 'Charity',
            topics: ['comprehension', 'details', 'society', 'charity'],
            content: `Læs teksterne 'Karen og Niels giver tid og penge til velgørenhed' og 'Danske velgørende organisationer går nye veje'. Besvar spørgsmålene.`
        },
        questions: [
            {
                id: 'pd3-2019s-ls2a-q1',
                question: 'Hvad nævnen Karen Pedersen som en væsentlig årsag til, at hun har valgt at støtte børn gennem Red Barnet frem for en anden organisation? (1) ______',
                sentenceEn: 'What does Karen mention as a significant reason for supporting Red Barnet? (1) ______',
                options: ['A. Red Barnet støtter både børn i udlandet og i Danmark.', 'B. Red Barnet giver både social og økonomisk hjælp til børn.', 'C. Red Barnet arbejder mere professionelt end andre organisationer.'],
                answer: 'A',
                blank: 'A',
                hint: 'A: Red Barnet støtter både børn i udlandet og i Danmark.'
            },
            {
                id: 'pd3-2019s-ls2a-q2',
                question: 'Hvad er ifølge teksten en af grundene til, at Niels Pedersen nu arbejder som frivillig? (2) ______',
                sentenceEn: 'According to the text, what is one reason why Niels is now volunteering? (2) ______',
                options: ['A. Han har fået bedre tid, end han havde tidligere.', 'B. Han vil gerne lære nye mennesker at kende.', 'C. Hans kone synes, at han skal gøre det.'],
                answer: 'A',
                blank: 'A',
                hint: 'A: Han har fået bedre tid, end han havde tidligere.'
            },
            {
                id: 'pd3-2019s-ls2a-q3',
                question: 'Hvad nævner Karen og Niels Pedersen som en særlig fordel ved et stort tv-show som Danmarks Indsamling? (3) ______',
                sentenceEn: 'What do Karen and Niels mention as a special advantage of Danmarks Indsamling? (3) ______',
                options: ['A. Det kan få faste støtter af velgørenhed til at donere større beløb.', 'B. Det kan skabe opmærksomhed om, at der er brug for humanitær hjælp.', 'C. Det kan sikre, at mennesker der lever i nød, får tilstrækkelig humanitær støtte.'],
                answer: 'B',
                blank: 'B',
                hint: 'B: Det kan skabe opmærksomhed om, at der er brug for humanitær hjælp.'
            },
            {
                id: 'pd3-2019s-ls2a-q4',
                question: 'Hvilken grund nævnes der i teksten til, at nogle danskere ikke giver penge til velgørenhed? (4) ______',
                sentenceEn: 'What reason is mentioned for why some Danes do not give money to charity? (4) ______',
                options: ['A. De mener ikke, at det er enkeltpersoners ansvar at give penge til nødhjælp.', 'B. De mener ikke, at pengene bliver givet til de mennesker, der har mest brug for dem.', 'C. De mener ikke, at deres støtte kan bidrage væsentligt til at hjælpe mennesker i nød.'],
                answer: 'A',
                blank: 'A',
                hint: 'A: De mener ikke, at det er enkeltpersoners ansvar at give penge til nødhjælp.'
            },
            {
                id: 'pd3-2019s-ls2a-q5',
                question: 'Hvilket af følgende initiativer for at få flere mennesker til at donere penge nævnes i teksten? (5) ______',
                sentenceEn: 'Which initiative to get more people to donate is mentioned? (5) ______',
                options: ['A. De velgørende organisationer har lavet kampagner for betaling via telefon.', 'B. Hver velgørende organisation har holdt mere end én national husindsamling om året.', 'C. De velgørende organisationer har taget personlig kontakt til og talt med flere mennesker.'],
                answer: 'C',
                blank: 'C',
                hint: 'C: De velgørende organisationer har taget personlig kontakt til og talt med flere mennesker.'
            },
            {
                id: 'pd3-2019s-ls2a-q6',
                question: 'Hvilken af følgende grunde nævnes der i teksten til, at many danskere får fradrag for donationer til velgørenhed? (6) ______',
                sentenceEn: 'What reason is mentioned for why many Danes get tax deductions for donations? (6) ______',
                options: ['A. Organisationerne har været gode til at oplyse borgerne om, hvor meget de kan trække fra i skat.', 'B. Flere og flere danskere kontakter Skat og oplyser om deres donation til velgørenhed.', 'C. Man skal som bidragyder ikke selv have besvær med at trække fradraget til velgørenhed fra i skat'],
                answer: 'C',
                blank: 'C',
                hint: 'C: Man skal som bidragyder ikke selv have besvær med at trække fradraget til velgørenhed fra i skat.'
            },
            {
                id: 'pd3-2019s-ls2a-q7',
                question: 'Hvad vil de velgørende organisationer ifølge teksten satse på i deres markedsføring i fremtiden? (7) ______',
                sentenceEn: 'What will the charities focus on in their marketing in the future? (7) ______',
                options: ['A. De vil satse på, at temaerne i de enkelte kampagner retter sig lige meget mod kvinder og mænd.', 'B. De vil i deres kampagner satse på nye temaer, som de forventer mænd er særligt optagede af.', 'C. De vil satse på de samme temaer, men øge antallet af kampagner for at få flere mænd til at donere penge.'],
                answer: 'B',
                blank: 'B',
                hint: 'B: De vil i deres kampagner satse på nye temaer, som de forventer mænd er særligt optagede af.'
            }
        ]
    },
    {
        id: 'pd3-2019-sommer-ls2b',
        year: 2019,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 2B',
        typeEn: 'Sub-exam 2B - Gap Fill MCQ',
        level: 'PD3',
        lesson: {
            title: 'Mange unge gennemfører ikke studiet',
            titleEn: 'Many Youth Do Not Complete Studies',
            topics: ['vocabulary', 'cloze', 'education', 'society'],
            content: `Læs teksten 'Mange unge gennemfører ikke studiet' og vælg de ord eller udtryk, der passer bedst i hullerne.`
        },
        questions: [
            { id: 'pd3-2019s-ls2b-q1', sentence: 'Det er (1) ______ ikke alle unge.', sentenceEn: 'It is (1) ______ not all youth.', answer: 'C', blank: 'nemlig', options: ['A. heldigvis', 'B. imidlertid', 'C. nemlig', 'D. ligeledes'] },
            { id: 'pd3-2019s-ls2b-q2', sentence: '(2) ______ er der fokus på det.', sentenceEn: '(2) ______ there is focus on it.', answer: 'A', blank: 'Samtidig', options: ['A. Samtidig', 'B. Alligevel', 'C. Omvendt', 'D. Derimod'] },
            { id: 'pd3-2019s-ls2b-q3', sentence: '... (3) ______ frafald.', sentenceEn: '... (3) ______ dropout.', answer: 'C', blank: 'konsekvenser af', options: ['A. grunde til', 'B. former for', 'C. konsekvenser af', 'D. eksempler på'] },
            { id: 'pd3-2019s-ls2b-q4', sentence: 'En væsentlig (4) ______ er ...', sentenceEn: 'A significant (4) ______ is ...', answer: 'D', blank: 'årsag til', options: ['A. ulempe ved', 'B. holdning til', 'C. reaktion på', 'D. årsag til'] },
            { id: 'pd3-2019s-ls2b-q5', sentence: '... savner de (5) ______.', sentenceEn: '... they miss (5) ______.', answer: 'D', blank: 'fællesskabet', options: ['A. resultaterne', 'B. undervisningen', 'C. studiejobbet', 'D. fællesskabet'] },
            { id: 'pd3-2019s-ls2b-q6', sentence: 'Man skal (6) ______ problemet.', sentenceEn: 'One must (6) ______ the problem.', answer: 'A', blank: 'forebygge', options: ['A. forebygge', 'B. vurdere', 'C. dokumentere', 'D. registrerer'] },
            { id: 'pd3-2019s-ls2b-q7', sentence: 'Det bør (7) ______ ske ...', sentenceEn: 'It should (7) ______ happen ...', answer: 'B', blank: 'som nævnt', options: ['A. til gengæld', 'B. som nævnt', 'C. tværtimod', 'D. desuden'] },
            { id: 'pd3-2019s-ls2b-q8', sentence: 'Både (8) ______ og sociale faktorer.', sentenceEn: 'Both (8) ______ and social factors.', answer: 'A', blank: 'faglige', options: ['A. faglige', 'B. sociale', 'C. fysiske', 'D. økonomiske'] }
        ]
    },
    // ============ 2019 VINTER ============
    {
        id: 'pd3-2019-vinter-ls1',
        year: 2019,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 1',
        typeEn: 'Sub-exam 1 - Information Search',
        level: 'PD3',
        lesson: {
            title: 'Danske biografer og dansk film',
            titleEn: 'Danish Cinemas and Danish Film',
            topics: ['information-search', 'film', 'history'],
            content: 'Søg informationer i tekstsamlingen om Det Danske Filminstitut, filmhistorie og biografer i Danmark.'
        },
        questions: [
            { id: 'pd3-2019v-ls1-q1', question: 'Hvilket af de FILM-X-tilbud er målrettet firmaer?', answer: 'Teambuilding', hint: 'Søg under DFI' },
            { id: 'pd3-2019v-ls1-q2', question: 'Hvilke nutidige film kan blive udvalgt til visning i Cinemateket?', answer: 'ikke bliver vist', hint: 'Søg under DFI' },
            { id: 'pd3-2019v-ls1-q3', question: 'Hvad kan man som noget nyt købe i Cinematekets butik?', answer: 'Lp-plader', hint: 'Søg under DFI' },
            { id: 'pd3-2019v-ls1-q4', question: 'Hvad roser Kim BB de frivillige i Aars Teater Bio for ud over at være flinke?', answer: 'vide meget om film', hint: 'Søg under Anmeldelser' },
            { id: 'pd3-2019v-ls1-q5', question: 'Hvilken anden film troede Helle H Babybio var for, da hun hørte det første gang?', answer: 'små børn', hint: 'Søg under Anmeldelser' },
            { id: 'pd3-2019v-ls1-q6', question: 'Hvad er det eneste i Scala Svendborg, som Kamilla R ikke er helt tilfreds med?', answer: 'Kiosken', hint: 'Søg under Anmeldelser' },
            { id: 'pd3-2019v-ls1-q7', question: 'Hvilken anden film ud over Pelle Erobreren modtog Bille August Den Gyldne Palme for?', answer: 'Den Gode Vilje', hint: 'Søg under Filmhistorie' },
            { id: 'pd3-2019v-ls1-q8', question: 'Hvordan var salget af biografbilletter i kriseperioden 2009-2010?', answer: 'stigende', hint: 'Søg under Filmhistorie' },
            { id: 'pd3-2019v-ls1-q9', question: 'Hvorfor ville producenter ikke arbejde med Carl Th. Dreyer efter Jeanne D’Arcs Lidelse og Død?', answer: 'økonomisk katastrofe', hint: 'Søg under Filmhistorie' },
            { id: 'pd3-2019v-ls1-q10', question: 'Hvilket år fik Løvejagten international premiere?', answer: '1907', hint: 'Søg under Filmhistorie' },
            { id: 'pd3-2019v-ls1-q11', question: 'Hvorfor undgik Danmark det tyske importforbud under 1. Verdenskrig?', answer: 'neutralt', hint: 'Søg under Filmhistorie' },
            { id: 'pd3-2019v-ls1-q12', question: 'Hvad er inkluderet i Seniorbiografens formiddagsbillet?', answer: 'Morgenbuffet', hint: 'Søg under Udvalgte biografer' },
            { id: 'pd3-2019v-ls1-q13', question: 'Hvordan lærer nye frivillige i Kinorevyen deres opgaver?', answer: 'oplært af kolleger', hint: 'Søg under Udvalgte biografer' },
            { id: 'pd3-2019v-ls1-q14', question: 'I forbindelse med hvilke film tilbyder Palads en kortere reklameblok?', answer: 'Børnefilm', hint: 'Søg under Udvalgte biografer' },
            { id: 'pd3-2019v-ls1-q15', question: 'Hvad er formålet med at samle penge ind til Biffen Nordkrafts drift?', answer: 'uafhængig biograf', hint: 'Søg under Udvalgte biografer' }
        ]
    },
    {
        id: 'pd3-2019-vinter-ls2a',
        year: 2019,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 2A',
        typeEn: 'Sub-exam 2A - Reading Comprehension',
        level: 'PD3',
        lesson: {
            title: 'Udenlandsk arbejdskraft i Danmark',
            titleEn: 'Foreign Labor in Denmark',
            topics: ['comprehension', 'details', 'labor-market', 'society'],
            content: `Læs teksterne 'Fra Rumænien til Roskilde' og 'Danmark har brug for højtuddannet udenlandsk arbejdskraft'. Besvar spørgsmålene.`
        },
        questions: [
            {
                id: 'pd3-2019v-ls2a-q1',
                question: 'Hvilken af følgende grunde var ifølge teksten afgørende for, at Helene Bagger tilbød Andrei et job i sit firma i Roskilde? (1) ______',
                sentenceEn: 'Why did Helene Bagger offer Andrei a job? (1) ______',
                options: ['A. Han havde kendskab til udvikling af software til robotteknologi.', 'B. Han havde en faglig profil, det danske firma havde brug for.', 'C. Han havde erfaring med at arbejde i et internationalt miljø.'],
                answer: 'B',
                blank: 'B',
                hint: 'B: Han havde en faglig profil, det danske firma havde brug for.'
            },
            {
                id: 'pd3-2019v-ls2a-q2',
                question: 'Hvilken af følgende grunde var ifølge teksten mest afgørende for, at Andrei tog imod jobtilbuddet i Roskilde? (2) ______',
                sentenceEn: 'Why did Andrei accept the job offer? (2) ______',
                options: ['A. Han ville få en god indkomst, selvom der ikke er særlige skattefordele i Danmark.', 'B. Han havde besluttet, at han alligevel ikke ville søge et job i Storbritannien.', 'C. Han kunne lære noget nyt, der kunne være med til at udvikle ham fagligt.'],
                answer: 'C',
                blank: 'C',
                hint: 'C: Han kunne lære noget nyt, der kunne være med til at udvikle ham fagligt.'
            },
            {
                id: 'pd3-2019v-ls2a-q3',
                question: 'Hvilket af følgende udsagn om Andrei passer med det, der står i teksten? (3) ______',
                sentenceEn: 'Which statement about Andrei fits the text? (3) ______',
                options: ['A. Han vil gerne lære dansk af sociale årsager.', 'B. Han vil gerne lære dansk, så han kan tale dansk med sine kolleger.', 'C. Han vil gerne lære dansk, fordi der ligger en sprogskole tæt på hans arbejdsplads.'],
                answer: 'A',
                blank: 'A',
                hint: 'A: Han vil gerne lære dansk af sociale årsager.'
            },
            {
                id: 'pd3-2019v-ls2a-q4',
                question: 'Hvad nævnes i teksten som en årsag til, at COWI har brug for at rekruttere udenlandske specialister til firmaets internationale projekter? (4) ______',
                sentenceEn: 'Why does COWI need foreign specialists? (4) ______',
                options: ['A. Danske specialister søger normalt ikke arbejde i internationale projekter.', 'B. Danske specialister mangler kendskab til andre landes love og regler.', 'C. Danske specialister har ikke den nødvendige tekniske ekspertise.'],
                answer: 'B',
                blank: 'B',
                hint: 'B: Danske specialister mangler kendskab til andre landes love og regler.'
            },
            {
                id: 'pd3-2019v-ls2a-q5',
                question: 'Hvad skal der ifølge teksten arbejdes for, hvis der i fremtiden skal være nok specialiseret arbejdskraft i Danmark? (5) ______',
                sentenceEn: 'What should be worked for to ensure enough specialized labor in the future? (5) ______',
                options: ['A. En udbredelse af kendskabet til Danmark i udlandet.', 'B. En endnu bedre balance mellem arbejde og fritid i Danmark.', 'C. En bedre uddannelse af kandidater på især de tekniske uddannelser.'],
                answer: 'A',
                blank: 'A',
                hint: 'A: En udbredelse af kendskabet til Danmark i udlandet.'
            },
            {
                id: 'pd3-2019v-ls2a-q6',
                question: 'Hvilken grund er der ifølge teksten blandt andet til, at højtuddannede udlændinge er en gevinst for Danmark? (6) ______',
                sentenceEn: 'Why are highly educated foreigners an asset to Denmark? (6) ______',
                options: ['A. De lever sundere end danskere og koster derfor det offentlige færre penge.', 'B. De betaler en større del af deres løn i skat end deres danske kolleger.', 'C. De udbreder kendskabet til Danmark som en attraktiv karrieredestination.'],
                answer: 'C',
                blank: 'C',
                hint: 'C: De udbreder kendskabet til Danmark som en attraktiv karrieredestination.'
            },
            {
                id: 'pd3-2019v-ls2a-q7',
                question: 'Hvad har ifølge teksten været en konsekvens af, at der i de senere år har været en stor indvandring af lavtuddannet arbejdskraft til Danmark? (7) ______',
                sentenceEn: 'What has been a consequence of the migration of low-skilled labor? (7) ______',
                options: ['A. Den har øget den politiske interesse for at begrænse indvandring af højtuddannet arbejdskraft.', 'B. Den har mindsket lavtuddannede danskeres muligheder for at få sig et arbejde.', 'C. Den har påvirket lønstigningerne på det danske arbejdsmarked.'],
                answer: 'B',
                blank: 'B',
                hint: 'B: Den har mindsket lavtuddannede danskeres muligheder for at få sig et arbejde.'
            }
        ]
    },
    {
        id: 'pd3-2019-vinter-ls2b',
        year: 2019,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 2B',
        typeEn: 'Sub-exam 2B - Gap Fill MCQ',
        level: 'PD3',
        lesson: {
            title: 'Flere danskere arbejder som freelancere',
            titleEn: 'More Danes Work as Freelancers',
            topics: ['vocabulary', 'cloze', 'work-market', 'society'],
            content: `Læs teksten 'Flere danskere arbejder som freelancere' og vælg de ord eller udtryk, der passer bedst i hullerne.`
        },
        questions: [
            { id: 'pd3-2019v-ls2b-q1', sentence: 'Det er (1) ______ at arbejde.', sentenceEn: 'It is (1) ______ to work.', answer: 'C', blank: 'attraktivt', options: ['A. vanskeligt', 'B. frivilligt', 'C. attraktivt', 'D. trygt'] },
            { id: 'pd3-2019v-ls2b-q2', sentence: 'Mange vil have (2) ______.', sentenceEn: 'Many want (2) ______.', answer: 'B', blank: 'fleksibilitet', options: ['A. stabilitet', 'B. fleksibilitet', 'C. mobilitet', 'D. loyalitet'] },
            { id: 'pd3-2019v-ls2b-q3', sentence: '(3) ______ er der krav.', sentenceEn: '(3) ______ there are demands.', answer: 'C', blank: 'Samtidig', options: ['A. Derimod', 'B. Derfor', 'C. Samtidig', 'D. Alligevel'] },
            { id: 'pd3-2019v-ls2b-q4', sentence: 'En vis (4) ______ er der.', sentenceEn: 'A certain (4) ______ is there.', answer: 'D', blank: 'tilfældighed', options: ['A. nødvendighed', 'B. rettighed', 'C. sandsynlighed', 'D. tilfældighed'] },
            { id: 'pd3-2019v-ls2b-q5', sentence: 'Man skal (5) ______ huske det.', sentenceEn: 'One must (5) ______ remember it.', answer: 'A', blank: 'desuden', options: ['A. desuden', 'B. imidlertid', 'C. omvendt', 'D. allerførst'] },
            { id: 'pd3-2019v-ls2b-q6', sentence: 'Vi er (6) ______ problemet.', sentenceEn: 'We are (6) ______ the problem.', answer: 'B', blank: 'opmærksom på', options: ['A. vant til', 'B. opmærksom på', 'C. skeptisk overfor', 'D. imod'] },
            { id: 'pd3-2019v-ls2b-q7', sentence: 'Det sker (7) ______ man vil.', sentenceEn: 'It happens (7) ______ one wants.', answer: 'B', blank: 'indtil', options: ['A. hvis', 'B. indtil', 'C. når', 'D. fordi'] },
            { id: 'pd3-2019v-ls2b-q8', sentence: 'Vi vil (8) ______ det.', sentenceEn: 'We will (8) ______ it.', answer: 'D', blank: 'have mulighed for', options: ['A. være nødt til', 'B. have råd til', 'C. have tid til', 'D. have mulighed for'] }
        ]
    },

    // ============ 2021 SOMMER ============
    {
        id: 'pd3-2021-sommer-p1',
        year: 2021,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 1',
        typeEn: 'Information Search (Dansk Teater)',
        level: 'PD3',
        lesson: {
            title: 'Dansk teater',
            titleEn: 'Danish Theater',
            topics: ['information-search', 'vocabulary'],
            content: `Søg informationer i tekstsamlingen "Dansk teater" for at svare kort på spørgsmålene.
            
Tekstsamlingen indeholder:
• Anmeldelser (Cykelmyggen Egon, Erasmus Montanus, Midt om natten, Besat)
• Tre danske teatre (Det Kongelige, Aarhus, Bornholms)
• Rundvisninger
• Teaterpriser (Kjeld Abell, Teaterpokalen, Reumert)`
        },
        questions: [
            { id: 's21-p1-q1', sentence: 'Hvorfor anbefaler Signe Larsen en minimumsalder på fem år for Cykelmyggen Egon (i stedet for tre år)?', answer: 'høje lyde', hint: 'Søg under anmeldelsen af Cykelmyggen Egon.' },
            { id: 's21-p1-q2', sentence: 'Hvilket tema gør nyfortolkningen af Erasmus Montanus til en aktuel historie i Aarhus Teater?', answer: 'danskhed', hint: 'Se under anmeldelsen af Erasmus Montanus.' },
            { id: 's21-p1-q3', sentence: 'Hvorfor mener Stina Hansen, at skuespillerne i Midt om natten er gode til deres roller?', answer: 'synger godt', hint: 'Se under anmeldelsen af Midt om natten.' },
            { id: 's21-p1-q4', sentence: 'Hvem fremhæver Bornholms Teater som en vigtig målgruppe for stykket "Besat"?', answer: 'yngre generationer', hint: 'Se under anmeldelsen af Besat.' },
            { id: 's21-p1-q5', sentence: 'Hvad hedder det sted på Gamle Scene, hvor kostumerne til forestillingerne bliver lavet?', answer: 'skræddersalen', hint: 'Se under rundvisning på Gamle scene.' },
            { id: 's21-p1-q6', sentence: 'I hvilke situationer går turen på Aarhus Teater ikke forbi alle scener?', answer: 'prøver', hint: 'Se under rundvisning på Aarhus Teater.' },
            { id: 's21-p1-q7', sentence: 'Hvad har betydning for, hvor lang tid grupperundvisningerne på Rønne Theater varer?', answer: 'spørgelyst', hint: 'Se under rundvisning i Rønne Theater.' },
            { id: 's21-p1-q8', sentence: 'Hvilket år blev Kjeld Abell-prisen uddelt første gang?', answer: '1976', hint: 'Se under Kjeld Abell-prisen.' },
            { id: 's21-p1-q9', sentence: 'Hvilket materiale er Teaterpokalen (sølvskålen) lavet af?', answer: 'sølv', hint: 'Se under Teaterpokalen.' },
            { id: 's21-p1-q10', sentence: 'Hvilken af de 16 kategorier i Årets Reumert har en særlig betydning?', answer: 'hæderspris', hint: 'Se under Årets Reumert.' },
            { id: 's21-p1-q11', sentence: 'Hvornår kan man senest bestille plads til en kørestol på Det Kongelige Teaters Gamle Scene?', answer: 'en uge før', hint: 'Se under Det Kongelige Teater - Særlige behov.' },
            { id: 's21-p1-q12', sentence: 'Hvad skal man gå forbi for at få adgang til foyeren og de mindre scener på Aarhus Teater?', answer: 'billetservice', hint: 'Se under Aarhus Teater - I teatret.' },
            { id: 's21-p1-q13', sentence: 'Hvem samarbejder Bornholms Teater med om turneforestillinger til andre dele af landet?', answer: 'teatre', hint: 'Se under Bornholms Teater - Samarbejdspartnere.' },
            { id: 's21-p1-q14', sentence: 'Hvad blev revyen på Bornholm erstattet af i årene 2015-2017?', answer: 'Holberg', hint: 'Se under Bornholms Teater - Revy og teater.' },
            { id: 's21-p1-q15', sentence: 'Hvor mange personer kan der sidde på Gamle Scene i Rønne Theater, hvis der spilles med udvidet scenegulv?', answer: '260', hint: 'Se under Rønne Theater - Scener og pladser.' }
        ]
    },
    {
        id: 'pd3-2021-sommer-p2a',
        year: 2021,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 2A',
        typeEn: 'Reading Comprehension (Klima)',
        level: 'PD3',
        lesson: {
            title: 'Hvem har ansvaret for klimaet?',
            titleEn: 'Responsibility for the Climate',
            topics: ['reading-comprehension', 'vocabulary'],
            content: `Læs teksterne "Klimavenlig hverdag" og "Klima og ansvar" for at svare på spørgsmålene. 
            
Tekst 1 beskriver familien Andresen/Bruun, der har omlagt deres livsstil radicalt. 
Tekst 2 diskuterer statens vs. forbrugerens rolle og psykologien bag "fremtidsblindhed".`
        },
        questions: [
            { id: 's21-p2a-q1', text: 'Hvilket udsagn er i overensstemmelse med Marianne og Torben?', options: ['Folk er ikke klar over de udleder for meget', 'Politikerne skal tage større ansvar', 'Børn skal lære at tage et ansvar i klimakampen'], answer: 'Børn skal lære at tage et ansvar i klimakampen' },
            { id: 's21-p2a-q2', text: 'Hvad giver Torben udtryk for om livsstilsændringerne?', options: ['Det var nemmere at skifte bilen ud end at ændre kost', 'Han savner at tage på ferie i udlandet', 'Det overraskede ham hvor svært det var'], answer: 'Det var nemmere at skifte bilen ud end at ændre kost' },
            { id: 's21-p2a-q3', text: 'Hvilket råd giver de andre familier?', options: ['Ændr vaner på alle mulige områder', 'Sikr at familien er engageret før ændring', 'Ændr ikke vaner hvis det rammer traditioner'], answer: 'Sikr at familien er engageret før ændring' },
            { id: 's21-p2a-q4', text: 'Hvilket udsagn passer med teksten om drivhusgasser?', options: ['Der har altid været drivhusgasser i atmosfæren', 'Der kan ikke være liv uden dem', 'De begyndte først med industrien'], answer: 'Der har altid været drivhusgasser i atmosfæren' },
            { id: 's21-p2a-q5', text: 'Hvad mener Morten Ebbe Juul Nielsen?', options: ['Folk bør ikke ændre madvaner pga. sociale relationer', 'Politikere skal kun blande sig hvis det er nødvendigt', 'Alene markedet kan regulere madvaner'], answer: 'Politikere skal kun blande sig hvis det er nødvendigt' },
            { id: 's21-p2a-q6', text: 'Hvad siger Jesper Ryberg om forbrugerne?', options: ['Mange ved ikke de udleder for meget', 'Mange har ikke mulighed for at gøre noget', 'Mange er i tvivl om hvordan de nedbringer udledning'], answer: 'Mange er i tvivl om hvordan de nedbringer udledning' },
            { id: 's21-p2a-q7', text: 'Hvad betyder "fremtidsblindhed"?', options: ['Man reagerer ikke på problemer i fremtiden', 'Man har ikke et problem med konsekvenser', 'Man tror ikke handlinger har betydning'], answer: 'Man reagerer ikke på problemer i fremtiden' }
        ]
    },
    {
        id: 'pd3-2021-sommer-p2b',
        year: 2021,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 2B',
        typeEn: 'Gap Fill MCQ (Arbejdsløshed)',
        level: 'PD3',
        lesson: {
            title: 'Arbejdsløshed blandt nyuddannede akademikere',
            titleEn: 'Unemployment among new graduates',
            topics: ['gap-fill', 'vocabulary', 'context'],
            content: `Vælg det rigtige ord til hullerne i teksten om Thea Holm og udfordringerne for nyuddannede akademikere.`
        },
        questions: [
            { id: 's21-p2b-q1', sentence: 'Det går godt for samfundsøkonomien, og der er færre arbejdsløse. Alligevel er der blandt nyuddannede akademikere nogle, der går arbejdsløse længe. Her har det ______ ikke været muligt at finde et job til Thea.', options: ['derfor', 'imidlertid', 'ligeledes', 'heldigvis'], answer: 'imidlertid' },
            { id: 's21-p2b-q2', sentence: 'Der er nogle, der mener, at dagpengeperiodens længde kan være en ______ , at der går lang tid, inden de får job.', options: ['gevinst ved', 'konsekvens af', 'forhindring for', 'årsag til'], answer: 'årsag til' },
            { id: 's21-p2b-q3', sentence: 'Thea ______ da heller ikke, at dagpengeperioden har haft betydning.', options: ['indrømmer', 'erkender', 'afviser', 'vurderer'], answer: 'afviser' },
            { id: 's21-p2b-q4', sentence: 'Hvor bredt man søger afhænger af reglerne. Det er måske ______ at ændre dem.', options: ['nødvendigt', 'forkert', 'urimeligt', 'vanskeligt'], answer: 'nødvendigt' },
            { id: 's21-p2b-q5', sentence: 'Da Theas dagpengeperiode ______ er tæt på at udløbe, søger hun bredere.', options: ['tværtimod', 'som nævnt', 'langt fra', 'muligvis'], answer: 'som nævnt' },
            { id: 's21-p2b-q6', sentence: 'Der er forskellige ______ , at akademikere går ledige længe.', options: ['grunde til', 'planer for', 'holdninger til', 'forklaringer på'], answer: 'holdninger til' },
            { id: 's21-p2b-q7', sentence: 'Formanden for DM mener ______ , at de skal søge job inden for faget.', options: ['dernæst', 'derimod', 'dermed', 'desuden'], answer: 'derimod' },
            { id: 's21-p2b-q8', sentence: 'Det virker ikke som om der er ______ at ansætte overkvalificerede i Netto.', options: ['råd til', 'problemer med', 'tid til', 'ønske om'], answer: 'ønske om' }
        ]
    },
    // ============ 2021 VINTER ============
    {
        id: 'pd3-2021-vinter-p1',
        year: 2021,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 1',
        typeEn: 'Information Search (Turist i Odense)',
        level: 'PD3',
        lesson: {
            title: 'Turist i Odense',
            titleEn: 'Tourist in Odense',
            topics: ['information-search', 'vocabulary'],
            content: `Søg informationer i tekstsamlingen "Turist i Odense" for at svare kort på spørgsmålene.
            
Tekstsamlingen indeholder:
• Velkommen til H.C. Andersens hjemby
• Festivaler i Odense (OFF, Blomsterfestival, Tinderbox, SPIS!)
• Gå-ud-steder (Grand, Storms Pakhus, Café Cuckoo's Nest)
• Top 5 attraktioner (Zoo, Brandts, Den Fynske Landsby)
• Odense bys historie`
        },
        questions: [
            { id: 'v21-p1-q1', sentence: 'Hvad koster en rundvisning på H.C. Andersen Museum med fokus på et særligt emne?', answer: '2000', hint: 'Se under H.C. Andersen Museum.' },
            { id: 'v21-p1-q2', sentence: 'Hvorfor er det bedst, at børn ser udstillingen i Histotoriet sammen med voksne?', answer: 'sammen', hint: 'Søg under Møntergården/Histotoriet.' },
            { id: 'v21-p1-q3', sentence: 'Hvad var en kinesisk turist særligt glad for at se inde på H.C. Andersen Museum?', answer: 'genstande', hint: 'Se under citater fra turister.' },
            { id: 'v21-p1-q4', sentence: 'Hvad hedder det projektet, hvor OFF året rundt støtter dansk filmkultur?', answer: 'Film for alle', hint: 'Se under Odense Internationale Film Festival.' },
            { id: 'v21-p1-q5', sentence: 'Hvad brander Odense Blomsterfestival ud over Odense og byens liv?', answer: 'Gartnerier', hint: 'Se under Odense Blomsterfestival.' },
            { id: 'v21-p1-q6', sentence: 'Hvad kan man købe for ambassadørpoint på Tinderbox ud over merchandise?', answer: 'billetter', hint: 'Se under Tinderbox.' },
            { id: 'v21-p1-q7', sentence: 'Hvad diskuterer SPIS! Odense Food Festival sammen med gæsterne?', answer: 'madkultur', hint: 'Se under SPIS! Odense Food Festival.' },
            { id: 'v21-p1-q8', sentence: 'Hvorfor kan man som gæst på Restaurant Grand være sikker på professionel betjening af mad og vin?', answer: 'tjenere', hint: 'Søg under Restaurant Grand.' },
            { id: 'v21-p1-q9', sentence: 'Kan man betale med kontanter i alle madboder og barer i Storms Pakhus?', answer: 'nej', hint: 'Se under Storms Pakhus.' },
            { id: 'v21-p1-q10', sentence: 'Hvor på Café Cuckoo’s Nest kan man sidde og lytte til udendørs live-musik?', answer: 'gårdhaven', hint: 'Se under Café Cuckoo’s Nest.' },
            { id: 'v21-p1-q11', sentence: 'Hvor i Odense Zoo kan man spise medbragt mad, hvis man vil sidde indenfor?', answer: 'madpakkehuset', hint: 'Se under Odense Zoo.' },
            { id: 'v21-p1-q12', sentence: 'Hvad består Brandts skiftende udstillinger oftest af udover billedkunst?', answer: 'fotokunst', hint: 'Se under Brandts.' },
            { id: 'v21-p1-q13', sentence: 'Hvorfor følger aktiviteterne i Den Fynske Landsby årets gang?', answer: 'landbruget', hint: 'Se under Den Fynske Landsby.' },
            { id: 'v21-p1-q14', sentence: 'Hvor lå Kong Harald Blåtands ringborg ved Nonnebakken i forhold til Odense Å?', answer: 'syd', hint: 'Se under Odense bys historie.' },
            { id: 'v21-p1-q15', sentence: 'Hvilket år åbnede den første jernbane på Fyn via Odense?', answer: '1865', hint: 'Se under Odense bys historie.' }
        ]
    },
    {
        id: 'pd3-2021-vinter-p2a',
        year: 2021,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 2A',
        typeEn: 'Reading Comprehension (Stress)',
        level: 'PD3',
        lesson: {
            title: 'Unge og stress',
            titleEn: 'Youth and Stress',
            topics: ['reading-comprehension', 'vocabulary'],
            content: `Læs teksterne "Ida fik stress i gymnasiet" og "Mange unge føler sig stressede" for at svare på spørgsmålene.
            
Teksterne undersøger hvorfor hver fjerde unge i dag føler sig stresset, og hvordan de forskellige køn håndterer presset.`
        },
        questions: [
            { id: 'v21-p2a-q1', text: 'Hvilket udsagn om lærerne i gymnasiet passer med teksten?', options: ['Lærerne giver for svære opgaver', 'Lærerne koordinerer ikke godt nok om afleveringer', 'Lærerne accepterer ikke personlige problemer'], answer: 'Lærerne koordinerer ikke godt nok om afleveringer' },
            { id: 'v21-p2a-q2', text: 'Hvad er ifølge Ida den afgørende årsag til hendes stress?', options: ['Presset for høje karakterer til psykologi', 'Mangel på selvværd ift. top-elever', 'For mange opgaver i 3.g'], answer: 'Mangel på selvværd ift. top-elever' },
            { id: 'v21-p2a-q3', text: 'Hvilket udsagn passer med Idas forældre?', options: ['Unge i dag har mindre grund til stress', 'Forældre stiller for store krav i dag', 'De mange muligheder i dag skaber et forventningspres'], answer: 'De mange muligheder i dag skaber et forventningspres' },
            { id: 'v21-p2a-q4', text: 'Hvilket udsagn passer med Nanna Ellers syn på lærerne?', options: ['Lærerne skal give mere respons på faglig udvikling', 'Lærerne hjælper ikke med personlige valg', 'Lærerne fokuserer kun på 12-tals elever'], answer: 'Lærerne skal give mere respons på faglig udvikling' },
            { id: 'v21-p2a-q5', text: 'Hvad siger teksten om trivsel og sociale medier?', options: ['Trivsel har betydning for hvordan man har det med SoMe', 'Trivsel kræver at man adskiller SoMe fra hverdag', 'Trivsel afhænger af om man ser SoMe som vigtigt'], answer: 'Trivsel har betydning for hvordan man har det med SoMe' },
            { id: 'v21-p2a-q6', text: 'Hvad gør de pressede unge, der ikke får stress?', options: ['De nedprioriterer uddannelse', 'De laver andre aktiviteter end skolearbejde', 'De lader helt være med at lave opgaver'], answer: 'De laver andre aktiviteter end skolearbejde' },
            { id: 'v21-p2a-q7', text: 'Hvad siger teksten om stress og køn?', options: ['Drenge klarer et forløb hurtigere', 'Færre drenge får stress pga. mindre pres', 'Der er mindre opmærksomhed på stress blandt drenge'], answer: 'Der er mindre opmærksomhed på stress blandt drenge' }
        ]
    },
    {
        id: 'pd3-2021-vinter-p2b',
        year: 2021,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 2B',
        typeEn: 'Gap Fill MCQ (Arbejdstid)',
        level: 'PD3',
        lesson: {
            title: 'Større indflydelse på arbejdstiden for offentligt ansatte',
            titleEn: 'Greater influence on working hours for public employees',
            topics: ['gap-fill', 'vocabulary', 'context'],
            content: `Vælg det rigtige ord til hullerne i teksten om fleksibilitet i den offentlige sektor.`
        },
        questions: [
            { id: 'v21-p2b-q1', sentence: 'Mange offentligt ansatte har ikke samme (1) ______ , hvor og hvornår de arbejder.', options: ['indflydelse på', 'problemer med', 'interesse for', 'planer for'], answer: 'indflydelse på' },
            { id: 'v21-p2b-q2', sentence: 'Denne forskel på privat og offentlig (2) ______ i høj grad, at mange arbejder med pleje.', options: ['medfører', 'udelukker', 'forklarer', 'skyldes'], answer: 'skyldes' },
            { id: 'v21-p2b-q3', sentence: 'Flere kommuner har (3) ______ planer om bedre muligheder for fleksibilitet.', options: ['herefter', 'alligevel', 'derfor', 'omvendt'], answer: 'derfor' },
            { id: 'v21-p2b-q4', sentence: 'Selv om (4) ______ en øget fleksibilitet endnu ikke er veldokumenteret, ved man at det har betydning.', options: ['effekten af', 'baggrunden for', 'formålet med', 'årsagen til'], answer: 'effekten af' },
            { id: 'v21-p2b-q5', sentence: '(5) ______ har en del ansatte arbejde med faste tidsrum.', options: ['Desuden', 'Som nævnt', 'Imens', 'Til gengæld'], answer: 'Som nævnt' },
            { id: 'v21-p2b-q6', sentence: 'Hvis man ønsker færre timer, (6) ______ dette at andre ønsker at gå op i tid.', options: ['viser', 'sikrer', 'kræver', 'beviser'], answer: 'kræver' },
            { id: 'v21-p2b-q7', sentence: 'Det tyder på at det er (7) ______ at undgå flere vikarer.', options: ['risikabelt', 'problematisk', 'nødvendigt', 'muligt'], answer: 'muligt' },
            { id: 'v21-p2b-q8', sentence: '(8) ______ ser det ud til at de offentligt ansatte kan få et mere fleksibelt liv.', options: ['Herudover', 'imidlertid', 'Derimod', 'Således'], answer: 'Således' }
        ]
    },
    // ============ PD3 2022 Sommer ============
    {
        id: 'pd3-2022-sommer-p1',
        year: 2022,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 1',
        typeEn: 'Sub-exam 1 - Information Search',
        level: 'PD3',
        lesson: {
            title: 'Danske småøer',
            titleEn: 'Danish Small Islands',
            topics: ['information-search', 'vocabulary', 'society'],
            content: 'Søg informationer i tekstsamlingen om turisme, erhverv og projekter på danske småøer.'
        },
        questions: [
            { id: 's22-p1-q1', question: 'Hvornår sejler Anholtfærgen fra Anholt om søndagen i højsæsonen?', answer: 'middagstid', hint: 'Søg under Anholtfærgen' },
            { id: 's22-p1-q2', question: 'Hvorfor er Anholts østspids fredet?', answer: 'sælreservat', hint: 'Søg under Naturen på Anholt' },
            { id: 's22-p1-q3', question: 'Hvor lang tid tager en køretur rundt på Mandø?', answer: '35 minutter', hint: 'Søg under Mandøbussen' },
            { id: 's22-p1-q4', question: 'Hvad er der risiko for, at østers indeholder, hvis man samler dem i Vadehavet ud for Mandø uden for sæsonen?', answer: 'giftige alger', hint: 'Søg under Østerstur i Vadehavet' },
            { id: 's22-p1-q5', question: 'Hvad fik et større fokus på Femø Kvindelejr i 1980’ erne?', answer: 'personlig udvikling', hint: 'Søg under Femø Kvindelejr' },
            { id: 's22-p1-q6', question: 'Hvorfor er der i dag flere selvstændige erhvervsaktive øboere end tidligere?', answer: 'hurtigt internet', hint: 'Søg under Erhvervsaktivitet på småøerne' },
            { id: 's22-p1-q7', question: 'Kan man få tilsendt et Ø-pas gratis?', answer: 'Nej', hint: 'Søg under Ø-pas' },
            { id: 's22-p1-q8', question: 'Hvad er formålet med produkterne fra Ø-specialiteter udover at skabe lokal identitet på småøerne?', answer: 'jobmuligheder', hint: 'Søg under Ø-specialiteter' },
            { id: 's22-p1-q9', question: 'Hvad gør regeringens grønne boligaftale fra 2020 det muligt at få tilskud til ud over huslejenedsættelse?', answer: 'nye boliger', hint: 'Søg under Grøn boligaftale' },
            { id: 's22-p1-q10', question: 'Hvor mange beboere må der højst være på en ø, for at den kan være medlem af Sammenslutningen af Danske Småøer?', answer: '1.200', hint: 'Søg under Øerne i sammenslutningen' },
            { id: 's22-p1-q11', question: 'Hvilken aldersgruppe er generelt svagt repræsenteret på alle småøer?', answer: '18-34-årige', hint: 'Søg under Befolkningssammensætningen' },
            { id: 's22-p1-q12', question: 'Hvad kendetegner det tema, som konkurrencen om Årets Ø skal have fokus på?', answer: 'aktuelt', hint: 'Søg under Konkurrencen om Årets Ø' },
            { id: 's22-p1-q13', question: 'Hvorfor mener Danielle Aubert, at læreren på Fejø Skole kunne have særligt fokus på at lære hendes søn dansk?', answer: 'klasserne er små', hint: 'Søg under Danielle Aubert' },
            { id: 's22-p1-q14', question: 'Hvilken udfordring havde Lisbeth Hansen og hendes mand, da de ville flytte til Strynø?', answer: 'boliglån', hint: 'Søg under Lisbeth Hansen' },
            { id: 's22-p1-q15', question: 'Hvor gammel var Dorte Sørensen, da hun første gang flyttede til Omø?', answer: 'to år', hint: 'Søg under Dorte Sørensen' }
        ]
    },
    {
        id: 'pd3-2022-sommer-p2a',
        year: 2022,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 2A',
        typeEn: 'Sub-exam 2A - Reading Comprehension',
        level: 'PD3',
        lesson: {
            title: 'Jobsøgning og rekruttering',
            titleEn: 'Job Search and Recruitment',
            topics: ['comprehension', 'details', 'work-life'],
            content: 'Læs teksterne "Veje til det første job" og "Personlighedstest" og svar på spørgsmålene.'
        },
        questions: [
            {
                id: 's22-p2a-q1',
                question: 'Hvilken af følgende grunde var ifølge teksten mest afgørende for, at Kamilla til sidst fik held med sin jobsøgning?',
                options: [
                    'A. Hun fik høje karakterer til de fleste af sine eksaminer på sit studie.',
                    'B. Hun brugte meget tid på at skrive en god jobansøgning og et godt CV.',
                    'C. Hun gjorde venner og bekendte opmærksom på, at hun var jobsøgende.'
                ],
                answer: 'C',
                hint: 'Se teksten om Kamilla og LinkedIn.'
            },
            {
                id: 's22-p2a-q2',
                question: 'Hvad var ifølge teksten mest afgørende for, at René fik sit job i reklamefirmaet?',
                options: [
                    'A. Hans personlige kvalifikationer.',
                    'B. Hans erfaringer fra et studiejob.',
                    'C. Hans gode jobansøgning.'
                ],
                answer: 'A',
                hint: 'Se teksten om René og personlighedstesten.'
            },
            {
                id: 's22-p2a-q3',
                question: 'Hvilket råd giver både Kamilla og René til jobsøgende?',
                options: [
                    'A. Prioritér at skrive et ordentligt CV.',
                    'B. Lav en jobplan sammen med din A-kasse.',
                    'C. Gør opmærksom på dig selv på sociale medier.'
                ],
                answer: 'A',
                hint: 'Se deres fælles råd til sidst i tekst 1.'
            },
            {
                id: 's22-p2a-q4',
                question: 'Hvilken af følgende grunde nævner Anne Lund til, at personlighedstest bliver mere og mere almindelige?',
                options: [
                    'A. Medarbejdernes personlighed er i dag vigtigere end tidligere.',
                    'B. Personlighedstest kan kvalificere firmaers ansættelsesproces.',
                    'C. Det er billigere at lave personlighedstest end at holde jobsamtaler.'
                ],
                answer: 'B',
                hint: 'Se Anne Lunds udtalelser om ressourcer og rekruttering.'
            },
            {
                id: 's22-p2a-q5',
                question: 'Hvilken af følgende grunde nævner Martin Holm til, at personlighedstest ikke er et særligt godt redskab til at rekruttere nye medarbejdere?',
                options: [
                    'A. Man kan ikke have tillid til, at folk svarer helt ærligt.',
                    'B. Kandidaterne har ofte svært ved at forstå spørgsmålene.',
                    'C. Folks adfærd afhænger af konteksten.'
                ],
                answer: 'C',
                hint: 'Se Martin Holms kritik af tests og sammenhæng.'
            },
            {
                id: 's22-p2a-q6',
                question: 'Hvilken af følgende grunde nævner Martin Holm til, at det tit lykkes rekrutteringsvirksomhederne at finde en medarbejder, der passer til jobbet?',
                options: [
                    'A. De fleste nye medarbejdere, der er velkvalificerede, kan let tilpasse sig en ny arbejdsplads.',
                    'B. De fleste nye medarbejdere, der har mange kvalifikationer, har erfaring med at løse nye opgaver på en ny arbejdsplads.',
                    'C. De fleste kandidater til et nyt job, der tager personlighedstest, har erfaring med at skifte job.'
                ],
                answer: 'A',
                hint: 'Se Martin Holms forklaring på, hvorfor rekruttering ofte lykkes.'
            },
            {
                id: 's22-p2a-q7',
                question: 'Hvilket af de følgende udsagn er i overensstemmelse med det, Martin Holm giver udtryk for?',
                options: [
                    'A. Virksomheder bør vælge nye medarbejdere ud fra, hvordan de har løst konkrete arbejdsopgaver i tidligere job.',
                    'B. Virksomheder bør kombinere personlighedstest med gode jobsamtaler, når de skal rekruttere en ny medarbejder.',
                    'C. Virksomheder bør præsentere jobkandidater for en arbejdssituation for at få et realistisk indtryk af deres kvalifikationer.'
                ],
                answer: 'C',
                hint: 'Se afsnittet om alternative test.'
            }
        ]
    },
    {
        id: 'pd3-2022-sommer-p2b',
        year: 2022,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Delprøve 2B',
        typeEn: 'Sub-exam 2B - Gap Fill MCQ',
        level: 'PD3',
        lesson: {
            title: 'Flere arbejder hjemme',
            titleEn: 'More People Work From Home',
            topics: ['vocabulary', 'cloze', 'work-environment'],
            content: 'Læs teksten og vælg de ord, der passer ind i hullerne.'
        },
        questions: [
            { id: 's22-p2b-q1', sentence: 'Hjemmearbejde er i dag en naturlig del af arbejdslivet i de job, hvor det kan lade sig gøre, og det kan der være flere (1) … .', options: ['A. betingelser for', 'B. fordele ved', 'C. holdninger til', 'D. udfordringer ved'], answer: 'B' },
            { id: 's22-p2b-q2', sentence: '(2) … kan der spares både tid og penge på turen til og fra arbejde.', options: ['A. Herudover', 'B. Altså', 'C. Hermed', 'D. Omvendt'], answer: 'A' },
            { id: 's22-p2b-q3', sentence: 'Et godt arbejdsmiljø er nemlig en (3) …, man har som ansat, uanset hvor man har sin arbejdsplads.', options: ['A. omkostning', 'B. forpligtelse', 'C. fleksibilitet', 'D. rettighed'], answer: 'D' },
            { id: 's22-p2b-q4', sentence: 'Morten Skov Christiansen mener, at det er (4) …, at many arbejder mere hjemme uden det rigtige udstyr.', options: ['A. nødvendigt', 'B. acceptabelt', 'C. bekymrende', 'D. uproblematisk'], answer: 'C' },
            { id: 's22-p2b-q5', sentence: 'Det er ofte ikke så meget, der skal til, for at en arbejdsgiver (5) … loven om arbejdsmiljø.', options: ['A. misforstår', 'B. overholder', 'C. ignorerer', 'D. glemmer'], answer: 'B' },
            { id: 's22-p2b-q6', sentence: '(6) … kan man komme til at mangle struktur i sin hverdag.', options: ['A. Som nævnt', 'B. Til gengæld', 'C. Dermed', 'D. Alligevel'], answer: 'C' },
            { id: 's22-p2b-q7', sentence: 'Det sociale samvær på arbejdspladsen betyder ofte meget, og ensomhed og stress kan derfor være (7) … meget hjemmearbejde.', options: ['A. en konsekvens af', 'B. en grund til', 'C. et argument for', 'D. en forudsætning for'], answer: 'A' },
            { id: 's22-p2b-q8', sentence: 'Han mener derfor, at hjemmearbejde kræver en ledelse, der er ekstra opmærksom. Hvis dette er tilfældet, vil han ikke (8) …, at hjemmearbejde netop kan være godt for medarbejderne.', options: ['A. indrømme', 'B. afvise', 'C. påstå', 'D. fastholde'], answer: 'B' }
        ]
    },
    // ============ PD3 2022 Vinter ============
    {
        id: 'pd3-2022-vinter-p1',
        year: 2022,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 1',
        typeEn: 'Sub-exam 1 - Information Search',
        level: 'PD3',
        lesson: {
            title: 'Vikinger før og nu',
            titleEn: 'Vikings Past and Present',
            topics: ['information-search', 'history', 'culture'],
            content: 'Søg informationer i tekstsamlingen om vikingeattraktioner, varemærker og arven fra vikingerne.'
        },
        questions: [
            { id: 'v22-p1-q1', question: 'Hvorfra har Ribe VikingeCenter viden om, hvilke råvarer der indgik i vikingernes mad?', answer: 'udgravninger', hint: 'Søg under Tre vikingeattraktioner' },
            { id: 'v22-p1-q2', question: 'Hvad hedder det sted på Vikingeskibsmuseet, hvor man kan opleve originale vikingeskibe?', answer: 'Vikingeskibshallen', hint: 'Søg under Tre vikingeattraktioner' },
            { id: 'v22-p1-q3', question: 'Hvad fremhæves ved vikingeborgen Trelleborg, udover at den har en forborg?', answer: 'bedst bevarede', hint: 'Søg under Tre vikingeattraktioner' },
            { id: 'v22-p1-q4', question: 'Hvad ønsker VIKING at signalere om deres produkter ved at bruge vikinger i deres varemærke?', answer: 'holdbare produkter', hint: 'Søg under Vikinger som varemærke' },
            { id: 'v22-p1-q5', question: 'Hvad er historisk ukorrekt ved hjelmene i logoerne for Stryhn\'s og GØL?', answer: 'horn', hint: 'Søg under Vikinger som varemærke' },
            { id: 'v22-p1-q6', question: 'Hvilken egenskab ønsker de at vise med disse tatoveringer?', answer: 'Styrke', hint: 'Søg under Arven fra vikingerne' },
            { id: 'v22-p1-q7', question: 'Hvad er konkurrencerne ved Moesgaard Museum i vikingeaktiviteter som våbenbrug og ridning kendt som?', answer: 'VM i vikingekamp', hint: 'Søg under Arven fra vikingerne' },
            { id: 'v22-p1-q8', question: 'Hvad er navnet på det officielt godkendte asatrossamfund, der dyrker vikingernes guder?', answer: 'Forn Sidr', hint: 'Søg under Arven fra vikingerne' },
            { id: 'v22-p1-q9', question: 'Hvorfor er vikingernes guder i filmen Valhalla gjort menneskelige?', answer: 'identificere sig', hint: 'Søg under Film og tv med vikingetema' },
            { id: 'v22-p1-q10', question: 'Hvornår blev Jul i Valhal genudsendt på dansk TV 2?', answer: '2012', hint: 'Søg under Film og tv med vikingetema' },
            { id: 'v22-p1-q11', question: 'Hvad hedder den rekonstruerede vikingeborg, hvor Far til fire og vikingerne er indspillet?', answer: 'Ravnsborg', hint: 'Søg under Film og tv med vikingetema' },
            { id: 'v22-p1-q12', question: 'Hvordan forsøger skuespillerne at tale engelsk for at få tv-serien Vikings til at virke mere autentisk?', answer: 'nordisk accent', hint: 'Søg under Film og tv med vikingetema' },
            { id: 'v22-p1-q13', question: 'Hvad er Marcela Morena især glad for at lære mere om ved at læse gamle sagaer?', answer: 'kvindens rolle', hint: 'Søg under Tre danskere fortæller' },
            { id: 'v22-p1-q14', question: 'Hvad har Julia Puggaard lært om vikingernes betydning for det engelske sprog?', answer: 'låneord', hint: 'Søg under Tre danskere fortæller' },
            { id: 'v22-p1-q15', question: 'Hvor sælger Asbjørn Asgaard sine varer?', answer: 'vikingemarkeder', hint: 'Søg under Tre danskere fortæller' }
        ]
    },
    {
        id: 'pd3-2022-vinter-p2a',
        year: 2022,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 2A',
        typeEn: 'Sub-exam 2A - Reading Comprehension',
        level: 'PD3',
        lesson: {
            title: 'Livet som selvstændig',
            titleEn: 'Life as Self-Employed',
            topics: ['comprehension', 'details', 'work-life'],
            content: 'Læs teksten om "Livet som selvstændig" og svar på spørgsmålene.'
        },
        questions: [
            {
                id: 'v22-p2a-q1',
                question: 'Hvilken af følgende grunde var ifølge teksten mest afgørende for, at Anders Bang blev iværksætter?',
                options: [
                    'A. Han ville gerne have mulighed for at tjene nogle flere penge.',
                    'B. Han ville gerne arbejde med noget, han var uddannet til.',
                    'C. Han ville gerne selv bestemme over sin arbejdsdag.'
                ],
                answer: 'B',
                hint: 'Se Anders\' udtalelser om håndværk og møbler.'
            },
            {
                id: 'v22-p2a-q2',
                question: 'Hvad har især været overraskende for Susan Nielsen i forbindelse med at blive selvstændig?',
                options: [
                    'A. At det var så relativt nemt at oprette sit eget firma.',
                    'B. At hendes gamle kolleger bakkede hende så stærkt op.',
                    'C. At hun egentlig ikke har så mange konkurrenter.'
                ],
                answer: 'B',
                hint: 'Se afsnittet om støtte fra den gamle arbejdsplads.'
            },
            {
                id: 'v22-p2a-q3',
                question: 'Hvad ville både Anders og Susan gøre anderledes i dag, hvis de skulle starte forfra som selvstændige?',
                options: [
                    'A. De ville tage et kursus i, hvad man skal være opmærksom på som iværksætter.',
                    'B. De ville involvere deres familier mere i starten.',
                    'C. De ville beholde deres tidligere arbejde i en overgangsperiode.'
                ],
                answer: 'C',
                hint: 'Se deres afsluttende overvejelser om økonomi og netværk.'
            }
        ]
    },
    {
        id: 'pd3-2022-vinter-p2b',
        year: 2022,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 2B',
        typeEn: 'Sub-exam 2B - Matching Fragments',
        level: 'PD3',
        lesson: {
            title: 'Iværksætteri',
            titleEn: 'Entrepreneurship',
            topics: ['comprehension', 'matching', 'society'],
            content: 'Genindsæt de manglende tekstdele i artiklen om iværksætteri.'
        },
        questions: [
            { id: 'v22-p2b-q1', sentence: 'Indtil virksomheden kører så godt, at man kan ansætte nogle medarbejdere, må man selv stå for det hele. (1) ...', answer: 'D', blank: 'Enkelte har nok urealistiske drømme om hurtig succes og hurtige penge...', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
            { id: 'v22-p2b-q2', sentence: 'Hvor en almindelig lønmodtager har ret til mindst fem ugers ferie om året, der må en iværksætter selv spare op og sætte tid af. (2) ...', answer: 'B', blank: 'Men det, der kunne lyde som en masse ulemper, er der imidlertid andre, der ser positivt på.', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
            { id: 'v22-p2b-q3', sentence: 'Nogle mennesker tror, at det er firmaer som fx Mærsk og Novo Nordisk, der er de absolut vigtigste i dansk erhvervsliv. (3) ...', answer: 'G', blank: 'Man må dog ikke overse de små og mellemstore virksomheder.', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
            { id: 'v22-p2b-q4', sentence: 'Dansk Erhverv er en magtfuld interesseorganisation, der på forskellige måder arbejder for at gøre det lettere at drive virksomhed i Danmark. (4) ...', answer: 'F', blank: 'Det betyder blandt andet, at de forsøger at påvirke politikerne.', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
            { id: 'v22-p2b-q5', sentence: 'Dansk Erhverv foreslår, at den offentlige sektor skal handle mere hos de små og mellemstore virksomheder. (5) ...', answer: 'C', blank: 'Faktisk mener de, at både staten... skal lægge 60 % af deres indkøb.', options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] }
        ]
    },
    {
        id: 'pd3-2022-vinter-p3',
        year: 2022,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Delprøve 3',
        typeEn: 'Sub-exam 3 - Gap Fill MCQ',
        level: 'PD3',
        lesson: {
            title: 'Danskerne er aktive i fritiden',
            titleEn: 'Danes Are Active in Their Free Time',
            topics: ['vocabulary', 'cloze', 'lifestyle'],
            content: 'Læs teksten og vælg de ord, der passer ind i hullerne.'
        },
        questions: [
            { id: 'v22-p3-q1', sentence: 'Det kan (1) … være aktiviteter som at hygge med familien, se fjernsyn eller læse.', answer: 'A', blank: 'eksempelvis', options: ['A. eksempelvis', 'B. desuden', 'C. heldigvis', 'D. alligevel'] },
            { id: 'v22-p3-q2', sentence: '...selvom man kunne tro, at de på grund af deres meget lange arbejdsdag i højere grad end andre (2) … at slappe af.', answer: 'C', blank: 'har behov for', options: ['A. har tid til', 'B. har mulighed for', 'C. har behov for', 'D. har evner til'] },
            { id: 'v22-p3-q3', sentence: 'For uanset job (3) … de fleste, at de ved at være fysisk aktive faktisk får mere energi og overskud i hverdagen.', answer: 'B', blank: 'oplever', options: ['A. beklager', 'B. oplever', 'C. afviser', 'D. fortryder'] },
            { id: 'v22-p3-q4', sentence: '...indgå i fællesskaber med andre for at have det godt (4) … .', answer: 'C', blank: 'mentalt set', options: ['A. kulturelt set', 'B. fysisk set', 'C. mentalt set', 'D. arbejdsmæssigt set'] },
            { id: 'v22-p3-q5', sentence: 'Når mange prioriterer at dyrke den aktive fritid ret intensivt, kan det være (5) …, at vores hobbyer i dag spiller en vigtigere rolle for os end tidligere.', answer: 'D', blank: 'en konsekvens af', options: ['A. en kontrast til', 'B. en modstand mod', 'C. en advarsel om', 'D. en konsekvens af'] },
            { id: 'v22-p3-q6', sentence: 'At hobbyer i dag i høj grad er med til at definere, hvem vi er, er (6) … tidligere tiders opfattelse af fritidsaktiviteter.', answer: 'C', blank: 'forskelligt fra', options: ['A. i overensstemmelse med', 'B. typisk for', 'C. forskelligt fra', 'D. karakteristisk for'] },
            { id: 'v22-p3-q7', sentence: 'Måske er professionaliseringen af fritiden også grunden til, at vi oftere (7) … vores fritidsinteresser i dag.', answer: 'B', blank: 'udskifter', options: ['A. omtaler', 'B. udskifter', 'C. idylliserer', 'D. klager over'] },
            { id: 'v22-p3-q8', sentence: '(8) … er vi generelt mere åbne overfor at prøve noget nyt, end vi var tidligere.', answer: 'D', blank: 'Med andre ord', options: ['A. På den anden side', 'B. Omvendt', 'C. Derudover', 'D. Med andre ord'] }
        ]
    },
    // ============ PD3 SKRIFTLIG REFERENCER ============
    {
        id: 'pd3-2021-vinter-skriftlig',
        year: 2021,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Skriftlig fremstilling',
        typeEn: 'Written Composition',
        level: 'PD3',
        lesson: {
            title: 'Skriftlig fremstilling Vinter 2021',
            titleEn: 'Written Composition Winter 2021',
            topics: ['writing', 'email', 'argumentation', 'climate'],
            content: `Officielle opgaver fra Vinter 2021 (Nov-Dec).
            
Delprøve 1: E-mail (Svar til din ven Erik om nyt job og lederrolle).
Delprøve 2A: Sygefravær (Diagrambeskrivelse og ansvar for nedbringelse).
Delprøve 2B: Klimaforandringer og ansvar (Indsats for CO2-reduktion).`
        },
        questions: [
            {
                id: 'v21-skriftlig-p1',
                sentence: 'Opgave 1: En e-mail til Erik. Han har fået lederjob i en anden by. Tag stilling til: 1) Svært ved at være leder for nuværende kolleger? 2) Betydning for familieliv med længere dage? 3) Transport (bil vs tog)? Foreslå at mødes.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Høflig e-mail og rådgivning.'
            },
            {
                id: 'v21-skriftlig-p2a',
                sentence: 'Opgave 2A (Diagram): Beskriv sygefravær blandt ledere, sygeplejersker og forskere. Vurder om det er ledelsens eller medarbejdernes ansvar at nedbringe fraværet (ca. 50% af vægten). Min. 200 ord.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Statistisk beskrivelse og ansvarsfordeling.'
            },
            {
                id: 'v21-skriftlig-p2b',
                sentence: 'Opgave 2B (Argumentation): Klimaforandringer. Kommenter forslag (fly, genbrug, plantemad). Vurder om det er den enkeltes eller samfundets ansvar at nedbringe CO2 (ca. 50% af vægten). Min. 200 ord.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Holdningsbaseret argumentation og samfundsansvar.'
            }
        ]
    },
    {
        id: 'pd3-2021-sommer-skriftlig',
        year: 2021,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Skriftlig fremstilling',
        typeEn: 'Written Composition',
        level: 'PD3',
        lesson: {
            title: 'Skriftlig fremstilling Sommer 2021',
            titleEn: 'Written Composition Summer 2021',
            topics: ['writing', 'email', 'diagram-description', 'health'],
            content: `Officielle opgaver fra Sommer 2021 (Maj-Juni).
            
Delprøve 1: E-mail (Svar til veninden Lise om hendes søsters skilsmisse).
Delprøve 2A: Jobomsætning (Diagram om jobskifte og alder).
Delprøve 2B: Unge og sundhed (Livsstil og kulturel indflydelse).`
        },
        questions: [
            {
                id: 's21-skriftlig-p1',
                sentence: 'Opgave 1: En e-mail til Lise. Hun skriver om sin søster Nina, der skal skilles og flytte ind. Tag stilling til: 1) Køb af elcykel? 2) Er det godt at søsteren bor hos dem midlertidigt? 3) Fremtidig kontakt med eksmanden? Foreslå at mødes.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Empatisk svar og personlige råd.'
            },
            {
                id: 's21-skriftlig-p2a',
                sentence: 'Opgave 2A (Diagram): Beskriv jobomsætning for forskellige aldersgrupper. Vurder fordele og ulemper for en virksomhed ved medarbejderudskiftning (ca. 50% af vægten). Min. 200 ord.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Erhvervsliv og HR-perspektiv.'
            },
            {
                id: 's21-skriftlig-p2b',
                sentence: 'Opgave 2B (Argumentation): Unge og sundhed. Kommenter forslag (alkoholgrænse, idræt i skolen). Vurder om venner/kultur har større indflydelse på livsstil end forældre (ca. 50% af vægten). Min. 200 ord.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Samfundsanalyse og unges livsvilkår.'
            }
        ]
    },
    {
        id: 'pd3-2020-sommer-skriftlig',
        year: 2020,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Skriftlig fremstilling',
        typeEn: 'Written Composition',
        level: 'PD3',
        lesson: {
            title: 'Skriftlig fremstilling Sommer 2020',
            titleEn: 'Written Composition Summer 2020',
            topics: ['writing', 'email', 'stress', 'first-job'],
            content: `Officielle opgaver fra Sommer 2020.
            
Delprøve 1: E-mail (Svar til Christina om hendes kæreste Laszlo, der skal lære dansk).
Delprøve 2A: Stress (Diagrambeskrivelse af andel der føler sig stressede).
Delprøve 2B: Det første job (Vurdering af hvad der har indflydelse på jobmuligheder).`
        },
        questions: [
            {
                id: 's20-skriftlig-p1',
                sentence: 'Opgave 1: En e-mail til Christina. Hendes kæreste Laszlo har svært ved dansk. Tag stilling til: 1) Kommer du til at savne sprogskolen? 2) Idéer til hvordan Laszlo lærer dansk hurtigere? 3) Hvordan fik du selv danske venner? Foreslå en aktivitet.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Gode råd om sprogindlæring og netværk.'
            },
            {
                id: 's20-skriftlig-p2a',
                sentence: 'Opgave 2A (Diagram): Beskriv andel af danskere der føler sig stressede fordelt på alder og køn. Diskuter om sociale medier er en større stressfaktor end arbejdslivet (ca. 50% af vægten). Min. 200 ord.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Sammenligningsanalyse og samfundsdebat.'
            },
            {
                id: 's20-skriftlig-p2b',
                sentence: 'Opgave 2B (Argumentation): Det første job. Kommenter eksempler (frivilligt arbejde, alder, netværk, udlandsophold). Diskuter om personlighed er vigtigere end eksamensresultater (ca. 50% af vægten). Min. 200 ord.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Karrierestrategi og værdier på arbejdsmarkedet.'
            }
        ]
    },
    {
        id: 'pd3-2019-vinter-skriftlig',
        year: 2019,
        season: 'Vinter',
        seasonEn: 'Winter',
        type: 'Skriftlig fremstilling',
        typeEn: 'Written Composition',
        level: 'PD3',
        lesson: {
            title: 'Skriftlig fremstilling Vinter 2019',
            titleEn: 'Written Composition Winter 2019',
            topics: ['writing', 'email', 'air-travel', 'education-drop-out'],
            content: `Officielle opgaver fra Vinter 2019 (Nov-Dec).
            
Delprøve 1: E-mail (Svar til venner om datteren Maria, der vil flytte hjemmefra).
Delprøve 2A: Flyrejser (Diagrambeskrivelse af rejseaktivitet gennem 10 år).
Delprøve 2B: Gennemførelse af uddannelse (Vurdering af tiltag for at undgå frafald).`
        },
        questions: [
            {
                id: 'v19-skriftlig-p1',
                sentence: 'Opgave 1: En e-mail til dine venner. Datteren Maria (i gymnasiet) vil flytte sammen med en veninde. Tag stilling til: 1) Dine rejseplaner? 2) Er hun for ung til at flytte hjemmefra? 3) Er det muligt at arbejde 10 t/uge ved siden af gymnasiet? 4) Hvordan vil det påvirke jeres forhold? Foreslå at mødes.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Gode råd til venner om børneopdragelse og økonomi.'
            },
            {
                id: 'v19-skriftlig-p2a',
                sentence: 'Opgave 2A (Diagram): Beskriv udvikling i flyrejser (udenrigs vs indenrigs) fra 2009-2017. Vurder fordele og ulemper ved at folk rejser mere end tidligere (ca. 50% af vægten). Min. 200 ord.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Trends i transport og turisme.'
            },
            {
                id: 'v19-skriftlig-p2b',
                sentence: 'Opgave 2B (Argumentation): Gennemførelse af uddannelse. Kommenter forslag (vejledning, flere timer, brugerbetaling, feedback). Vurder hvorfor børn af veluddannede oftere gennemfører en uddannelse (ca. 50% af vægten). Min. 200 ord.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Social arv og uddannelsespolitik.'
            }
        ]
    },
    {
        id: 'pd3-2019-sommer-skriftlig',
        year: 2019,
        season: 'Sommer',
        seasonEn: 'Summer',
        type: 'Skriftlig fremstilling',
        typeEn: 'Written Composition',
        level: 'PD3',
        lesson: {
            title: 'Skriftlig fremstilling Sommer 2019',
            titleEn: 'Written Composition Summer 2019',
            topics: ['writing', 'email', 'loans', 'school-noise'],
            content: `Officielle opgaver fra Sommer 2019 (Maj-Juni).
            
Delprøve 1: E-mail (Svar til Sofie om hendes overarbejde og maratontræning).
Delprøve 2A: Kviklån (Diagrambeskrivelse af låneprofiler).
Delprøve 2B: Uro i timerne (Vurdering af ansvar for orden i folkeskolen).`
        },
        questions: [
            {
                id: 's19-skriftlig-p1',
                sentence: 'Opgave 1: En e-mail til Sofie. Hun arbejder meget og har fået tilbudt projektlederrolle. Tag stilling til: 1) Maratontræningen? 2) Skal hun sige ja til mere ansvar/overarbejde? 3) Tog vs bil til arbejde? 4) Sommerhus på Bornholm? Foreslå at mødes.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Work-life balance og dagligdags rådgivning.'
            },
            {
                id: 's19-skriftlig-p2a',
                sentence: 'Opgave 2A (Diagram): Beskriv optag af kviklån fordelt på arbejdsløse, folk i arbejde og pensionister. Vurder om det er statens ansvar at begrænse private lånefirmaer (ca. 50% af vægten). Min. 200 ord.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Økonomisk ansvarlighed og lovgivning.'
            },
            {
                id: 's19-skriftlig-p2b',
                sentence: 'Opgave 2B (Argumentation): Uro i folkeskolen. Kommenter forslag (undervisning ude, udenadslære, straf, respekt). Vurder om det er forældrenes, lærernes eller skolens ansvar at skabe ro (ca. 50% af vægten). Min. 200 ord.',
                answer: 'reference',
                blank: 'skriveopgave',
                hint: 'Fokus: Pædagogik og opdragelse.'
            }
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

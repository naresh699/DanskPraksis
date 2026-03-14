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

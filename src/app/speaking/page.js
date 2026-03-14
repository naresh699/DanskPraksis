'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SpeechButton from '@/components/SpeechButton';

const speeches = [
    {
        id: 'about-me',
        title: 'Om mig selv',
        titleEn: 'About Myself',
        level: 'PD2',
        icon: '👤',
        speech: [
            { da: 'Goddag! Jeg hedder Naresh, og jeg kommer fra Indien.', en: 'Hello! My name is Naresh and I come from India.' },
            { da: 'Jeg har boet i Danmark i næsten to år nu.', en: 'I have lived in Denmark for almost two years now.' },
            { da: 'Jeg bor i en lejlighed i København sammen med min familie.', en: 'I live in an apartment in Copenhagen with my family.' },
            { da: 'Vores lejlighed har tre værelser: et soveværelse, et børneværelse og en stue.', en: 'Our apartment has three rooms: a bedroom, a children\'s room and a living room.' },
            { da: 'Jeg lærer dansk på et sprogcenter. Jeg går til undervisning tre gange om ugen.', en: 'I learn Danish at a language center. I go to class three times a week.' },
            { da: 'Det er ikke nemt at lære dansk, men jeg prøver at øve mig hver dag.', en: 'It is not easy to learn Danish, but I try to practice every day.' },
            { da: 'I min fritid kan jeg godt lide at lave mad. Jeg laver ofte indisk mad, men jeg har også lært at lave frikadeller og kartofler.', en: 'In my free time I like to cook. I often make Indian food, but I have also learned to make meatballs and potatoes.' },
            { da: 'Om morgenen står jeg op klokken seks og tager et bad.', en: 'In the morning I get up at six and take a shower.' },
            { da: 'Så spiser jeg morgenmad med min familie. Vi spiser som regel rugbrød med ost eller æg.', en: 'Then I eat breakfast with my family. We usually eat rye bread with cheese or eggs.' },
            { da: 'Klokken otte tager jeg bussen til sprogcenteret.', en: 'At eight I take the bus to the language center.' },
            { da: 'Undervisningen varer til klokken tolv. Bagefter handler jeg ind i Netto eller Rema 1000.', en: 'The class lasts until twelve. Afterwards I shop at Netto or Rema 1000.' },
            { da: 'Om eftermiddagen henter jeg mine børn fra skolen, og vi laver lektier sammen.', en: 'In the afternoon I pick up my children from school, and we do homework together.' },
            { da: 'Om aftenen spiser vi aftensmad sammen som en familie. Det synes jeg er vigtigt.', en: 'In the evening we eat dinner together as a family. I think that is important.' },
            { da: 'I weekenden kan vi godt lide at gå ture i parker eller besøge museer.', en: 'On weekends we like to go for walks in parks or visit museums.' },
            { da: 'Danmark er et smukt land. Jeg er glad for at bo her, selvom vejret er koldt om vinteren.', en: 'Denmark is a beautiful country. I am happy to live here, even though the weather is cold in winter.' },
            { da: 'Mit mål er at bestå Prøve i Dansk 2, så jeg kan søge et godt arbejde.', en: 'My goal is to pass Prøve i Dansk 2, so I can apply for a good job.' },
            { da: 'Tak fordi I lyttede!', en: 'Thank you for listening!' },
        ],
        crossQuestions: [
            { q: 'Hvor længe har du boet i Danmark?', qEn: 'How long have you lived in Denmark?', a: 'Jeg har boet i Danmark i næsten to år.', aEn: 'I have lived in Denmark for almost two years.' },
            { q: 'Hvad laver du i din fritid?', qEn: 'What do you do in your free time?', a: 'I min fritid kan jeg godt lide at lave mad og gå ture i parker.', aEn: 'In my free time I like to cook and go for walks in parks.' },
            { q: 'Kan du fortælle om din familie?', qEn: 'Can you tell about your family?', a: 'Jeg bor sammen med min familie i en lejlighed i København. Jeg har børn, der går i skole.', aEn: 'I live with my family in an apartment in Copenhagen. I have children who go to school.' },
            { q: 'Hvad er det sværeste ved at lære dansk?', qEn: 'What is the hardest about learning Danish?', a: 'Udtalen er svær, og dansk har mange uregelmæssige verber. Men jeg øver mig hver dag.', aEn: 'The pronunciation is hard, and Danish has many irregular verbs. But I practice every day.' },
            { q: 'Hvad kan du godt lide ved Danmark?', qEn: 'What do you like about Denmark?', a: 'Jeg kan godt lide, at Danmark er et sikkert land med god velfærd. Naturen er også meget smuk.', aEn: 'I like that Denmark is a safe country with good welfare. The nature is also very beautiful.' },
        ]
    },
    {
        id: 'health-body',
        title: 'Sundhed og kroppen',
        titleEn: 'Health & Body',
        level: 'PD2',
        icon: '🏥',
        speech: [
            { da: 'I dag vil jeg tale om sundhed og kroppen.', en: 'Today I will talk about health and the body.' },
            { da: 'Det er meget vigtigt at passe på sin krop og sin sundhed.', en: 'It is very important to take care of your body and health.' },
            { da: 'For det første skal man spise sundt. Man bør spise mange grøntsager og frugt hver dag.', en: 'First of all, one should eat healthily. One should eat many vegetables and fruit every day.' },
            { da: 'I Danmark anbefaler Sundhedsstyrelsen, at man spiser seks stykker frugt og grønt om dagen.', en: 'In Denmark, the Health Authority recommends eating six pieces of fruit and vegetables per day.' },
            { da: 'Man skal også drikke nok vand, mindst otte glas om dagen.', en: 'One should also drink enough water, at least eight glasses per day.' },
            { da: 'For det andet er motion vigtigt. Man bør motionere mindst 30 minutter hver dag.', en: 'Secondly, exercise is important. One should exercise at least 30 minutes every day.' },
            { da: 'I Danmark cykler mange mennesker til arbejde. Det er godt for helbredet.', en: 'In Denmark many people cycle to work. That is good for health.' },
            { da: 'Hvis man har ondt i hovedet, kan man tage en hovedpinepille.', en: 'If one has a headache, one can take a headache pill.' },
            { da: 'Hvis man har ondt i maven, bør man hvile sig og drikke te.', en: 'If one has a stomachache, one should rest and drink tea.' },
            { da: 'Når man er syg i Danmark, ringer man til sin egen læge og bestiller en tid.', en: 'When one is sick in Denmark, one calls one\'s own doctor and books an appointment.' },
            { da: 'Man skal tage sit gule sygesikringskort med til lægen.', en: 'One should bring one\'s yellow health insurance card to the doctor.' },
            { da: 'Kroppens dele er vigtige at kende: hoved, skuldre, arme, hænder, ben og fødder.', en: 'The body parts are important to know: head, shoulders, arms, hands, legs and feet.' },
            { da: 'Sammenfattende kan jeg sige, at sundhed er en vigtig del af livet i Danmark.', en: 'In summary, I can say that health is an important part of life in Denmark.' },
        ],
        crossQuestions: [
            { q: 'Hvad gør du, hvis du har ondt i hovedet?', qEn: 'What do you do if you have a headache?', a: 'Jeg tager en hovedpinepille og hviler mig. Hvis det bliver værre, ringer jeg til min læge.', aEn: 'I take a headache pill and rest. If it gets worse, I call my doctor.' },
            { q: 'Hvordan bestiller du en tid hos lægen?', qEn: 'How do you book an appointment?', a: 'Jeg ringer til min læge og fortæller, hvad jeg fejler. Så får jeg en tid.', aEn: 'I call my doctor and explain what is wrong. Then I get an appointment.' },
            { q: 'Hvad spiser du for at holde dig sund?', qEn: 'What do you eat to stay healthy?', a: 'Jeg spiser mange grøntsager, frugt, fisk og fuldkornsprodukter.', aEn: 'I eat lots of vegetables, fruit, fish and whole grain products.' },
        ]
    },
    {
        id: 'weather',
        title: 'Vejret og årstiderne',
        titleEn: 'Weather & Seasons',
        level: 'PD2',
        icon: '🌤️',
        speech: [
            { da: 'I dag vil jeg fortælle om vejret og årstiderne i Danmark.', en: 'Today I will tell about the weather and seasons in Denmark.' },
            { da: 'Danmark har fire årstider: forår, sommer, efterår og vinter.', en: 'Denmark has four seasons: spring, summer, autumn and winter.' },
            { da: 'Om foråret begynder blomsterne at komme, og dagene bliver længere.', en: 'In spring the flowers start to come, and the days get longer.' },
            { da: 'Sommeren i Danmark er dejlig. Solen skinner, og det er varmt — omkring 20-25 grader.', en: 'Summer in Denmark is lovely. The sun shines, and it is warm — around 20-25 degrees.' },
            { da: 'Mange danskere holder ferie i juli. De tager til stranden eller rejser til udlandet.', en: 'Many Danes take holiday in July. They go to the beach or travel abroad.' },
            { da: 'Om efteråret falder bladene fra træerne, og det begynder at blive koldt.', en: 'In autumn the leaves fall from the trees, and it starts to get cold.' },
            { da: 'Det regner tit om efteråret, og det blæser meget.', en: 'It rains often in autumn, and it is very windy.' },
            { da: 'Vinteren i Danmark er kold og mørk. Temperaturen kan falde ned til minus 5-10 grader.', en: 'Winter in Denmark is cold and dark. The temperature can drop to minus 5-10 degrees.' },
            { da: 'Om vinteren er dagene meget korte. Solen står op klokken 8 og går ned klokken 15.', en: 'In winter the days are very short. The sun rises at 8 and sets at 3.' },
            { da: 'Man kan sige: Det er solskin. Det er overskyet. Det regner. Det sner. Det blæser.', en: 'One can say: It is sunny. It is overcast. It is raining. It is snowing. It is windy.' },
            { da: 'Men jeg har lært at klæde mig varmt med jakke, tørklæde, handsker og hue om vinteren.', en: 'But I have learned to dress warmly with jacket, scarf, gloves and hat in winter.' },
            { da: 'Danskerne siger: "Der findes ikke dårligt vejr, kun dårligt tøj!"', en: 'The Danes say: "There is no bad weather, only bad clothes!"' },
        ],
        crossQuestions: [
            { q: 'Hvad er din yndlingsårstid? Hvorfor?', qEn: 'What is your favorite season? Why?', a: 'Min yndlingsårstid er sommeren, fordi det er varmt, og solen skinner.', aEn: 'My favorite season is summer, because it is warm and the sun shines.' },
            { q: 'Hvordan er vejret i dag?', qEn: 'How is the weather today?', a: 'I dag er det overskyet og lidt koldt. Temperaturen er omkring 5 grader.', aEn: 'Today it is overcast and a bit cold. The temperature is around 5 degrees.' },
            { q: 'Hvad er forskellen på vejret i dit hjemland og i Danmark?', qEn: 'Difference between weather in your country and Denmark?', a: 'I mit hjemland er det meget varmere. I Danmark er vejret koldere og mere uforudsigeligt.', aEn: 'In my home country it is much warmer. In Denmark the weather is colder and more unpredictable.' },
        ]
    },
    {
        id: 'clothing',
        title: 'Tøj og mode',
        titleEn: 'Clothing & Fashion',
        level: 'PD2',
        icon: '👕',
        speech: [
            { da: 'I dag vil jeg tale om tøj og hvad man har på i Danmark.', en: 'Today I will talk about clothing and what one wears in Denmark.' },
            { da: 'Overkroppen dækker man med en trøje, en bluse eller en skjorte.', en: 'One covers the upper body with a sweater, a blouse or a shirt.' },
            { da: 'Om benene har man bukser, jeans, en nederdel eller shorts om sommeren.', en: 'On the legs one wears trousers, jeans, a skirt or shorts in summer.' },
            { da: 'På fødderne har man sko, støvler om vinteren, eller sandaler om sommeren.', en: 'On the feet one wears shoes, boots in winter, or sandals in summer.' },
            { da: 'Om vinteren er det vigtigt at have en varm vinterjakke, en hue, et tørklæde og handsker.', en: 'In winter it is important to have a warm winter jacket, a hat, a scarf and gloves.' },
            { da: 'Når man handler tøj, går man til en tøjbutik eller køber online.', en: 'When one shops for clothes, one goes to a clothing store or buys online.' },
            { da: 'Man siger: "Hvilken størrelse bruger du?" — "Jeg bruger størrelse medium."', en: 'One says: "What size do you use?" — "I use size medium."' },
            { da: '"Kan jeg prøve den her?" — "Ja, prøverummet er derover."', en: '"Can I try this on?" — "Yes, the fitting room is over there."' },
            { da: '"Den passer godt." eller "Den er for stor/lille."', en: '"It fits well." or "It is too big/small."' },
            { da: 'Farver: rød, blå, grøn, gul, hvid, sort, grå, brun, rosa, lilla.', en: 'Colors: red, blue, green, yellow, white, black, grey, brown, pink, purple.' },
            { da: 'I Danmark klæder folk sig normalt afslappet med jeans og en trøje til hverdag.', en: 'In Denmark people normally dress casually with jeans and a sweater for everyday.' },
        ],
        crossQuestions: [
            { q: 'Hvad har du på i dag?', qEn: 'What are you wearing today?', a: 'I dag har jeg en blå trøje, sorte bukser og hvide sko på.', aEn: 'Today I am wearing a blue sweater, black trousers and white shoes.' },
            { q: 'Hvor køber du tøj?', qEn: 'Where do you buy clothes?', a: 'Jeg køber tit tøj i H&M eller Zara. Nogle gange også online.', aEn: 'I often buy clothes at H&M or Zara. Sometimes also online.' },
            { q: 'Hvad tager du på om vinteren?', qEn: 'What do you wear in winter?', a: 'Om vinteren tager jeg en varm jakke, en hue, et tørklæde, handsker og støvler på.', aEn: 'In winter I wear a warm jacket, a hat, a scarf, gloves and boots.' },
        ]
    },
    {
        id: 'geography',
        title: 'Danmark — geografi',
        titleEn: 'Denmark Geography',
        level: 'PD2-PD3',
        icon: '🇩🇰',
        speech: [
            { da: 'Jeg vil fortælle om Danmark og landets geografi.', en: 'I will tell about Denmark and the country\'s geography.' },
            { da: 'Danmark er et lille land i Nordeuropa. Det har cirka 5,8 millioner indbyggere.', en: 'Denmark is a small country in Northern Europe. It has about 5.8 million inhabitants.' },
            { da: 'Landet består af halvøen Jylland og mange øer. De største øer er Sjælland, Fyn og Bornholm.', en: 'The country consists of the peninsula Jutland and many islands.' },
            { da: 'Hovedstaden er København, som ligger på Sjælland.', en: 'The capital is Copenhagen, which is located on Zealand.' },
            { da: 'Andre store byer er Aarhus, Odense, Aalborg og Esbjerg.', en: 'Other large cities are Aarhus, Odense, Aalborg and Esbjerg.' },
            { da: 'Danmark er et meget fladt land. Det højeste punkt er kun 170 meter.', en: 'Denmark is a very flat country. The highest point is only 170 meters.' },
            { da: 'Danmark har grænse til Tyskland i syd.', en: 'Denmark has a border with Germany to the south.' },
            { da: 'Øresundsbroen forbinder København med Malmø i Sverige.', en: 'The Øresund Bridge connects Copenhagen with Malmö in Sweden.' },
            { da: 'Det danske flag hedder Dannebrog og er rødt med et hvidt kors.', en: 'The Danish flag is called Dannebrog and is red with a white cross.' },
            { da: 'Jeg er glad for at bo i Danmark, og jeg lærer mere om landet hver dag.', en: 'I am happy to live in Denmark, and I learn more about the country every day.' },
        ],
        crossQuestions: [
            { q: 'Hvad hedder den næststørste by?', qEn: 'What is the second largest city?', a: 'Den næststørste by i Danmark er Aarhus. Den ligger i Jylland.', aEn: 'The second largest city is Aarhus. It is in Jutland.' },
            { q: 'Hvad hedder det danske flag?', qEn: 'What is the Danish flag called?', a: 'Det danske flag hedder Dannebrog. Det er rødt med et hvidt kors.', aEn: 'It is called Dannebrog. It is red with a white cross.' },
            { q: 'Kan du fortælle om den by, du bor i?', qEn: 'Tell about the city you live in?', a: 'Jeg bor i København. Det er en stor by med parker, museer og god transport.', aEn: 'I live in Copenhagen. It is a big city with parks, museums and good transport.' },
        ]
    },
    {
        id: 'education',
        title: 'Skole og uddannelse',
        titleEn: 'Education',
        level: 'PD3',
        icon: '🎓',
        speech: [
            { da: 'I dag vil jeg tale om det danske uddannelsessystem.', en: 'Today I will talk about the Danish education system.' },
            { da: 'I Danmark begynder børn i skole, når de er seks år gamle.', en: 'In Denmark children start school when they are six years old.' },
            { da: 'Folkeskolen varer fra 0. til 9. klasse, det vil sige ti år.', en: 'The public school lasts from 0th to 9th grade, ten years.' },
            { da: 'Undervisningen er gratis i Danmark. Staten betaler for skolerne.', en: 'Education is free. The state pays for the schools.' },
            { da: 'Efter folkeskolen kan man vælge gymnasiet eller en erhvervsuddannelse.', en: 'After public school one can choose upper secondary or vocational education.' },
            { da: 'Bagefter kan man tage en universitetsuddannelse.', en: 'Afterwards one can take a university education.' },
            { da: 'For udlændinge er det vigtigt at bestå PD2 eller PD3.', en: 'For foreigners it is important to pass PD2 or PD3.' },
            { da: 'PD2 svarer til B1, og PD3 svarer til B2.', en: 'PD2 corresponds to B1, and PD3 to B2.' },
            { da: 'SU, Statens Uddannelsesstøtte, hjælper studerende økonomisk.', en: 'SU helps students financially.' },
            { da: 'Det er en af de ting, der gør Danmark fantastisk at studere i.', en: 'That makes Denmark fantastic to study in.' },
        ],
        crossQuestions: [
            { q: 'Hvad er forskellen på PD2 og PD3?', qEn: 'Difference between PD2 and PD3?', a: 'PD2 er B1-niveau for hverdagen. PD3 er B2 og kræver diskussion af samfundsemner.', aEn: 'PD2 is B1 for everyday life. PD3 is B2 and requires discussing societal topics.' },
            { q: 'Hvad er SU?', qEn: 'What is SU?', a: 'SU er Statens Uddannelsesstøtte — penge staten giver studerende.', aEn: 'SU is State Education Support — money the state gives students.' },
        ]
    },
    {
        id: 'shopping',
        title: 'Indkøb og penge',
        titleEn: 'Shopping & Money',
        level: 'PD2',
        icon: '🛒',
        speech: [
            { da: 'I dag vil jeg tale om, hvordan man handler ind i Danmark.', en: 'Today I will talk about shopping in Denmark.' },
            { da: 'Der er mange supermarkeder: Netto, Rema 1000, Føtex, Bilka og Lidl.', en: 'There are many supermarkets: Netto, Rema 1000, Føtex, Bilka and Lidl.' },
            { da: 'Netto og Rema 1000 er billige. Føtex og Irma er lidt dyrere.', en: 'Netto and Rema 1000 are cheap. Føtex and Irma are a bit more expensive.' },
            { da: 'I Danmark bruger man danske kroner.', en: 'In Denmark one uses Danish kroner.' },
            { da: 'De fleste betaler med Dankort eller MobilePay. Man bruger sjældent kontanter.', en: 'Most pay with Dankort or MobilePay. One rarely uses cash.' },
            { da: 'Rugbrød er meget populært i Danmark. Det spiser man til frokost.', en: 'Rye bread is very popular. One eats it for lunch.' },
            { da: '"Undskyld, hvad koster den her?" — "Den koster 45 kroner."', en: '"Excuse me, how much?" — "It costs 45 kroner."' },
            { da: '"Kan jeg betale med kort?" — "Ja, vi tager alle kreditkort."', en: '"Can I pay by card?" — "Yes, we accept all credit cards."' },
            { da: 'Det er godt at tjekke tilbudsaviser for at spare penge.', en: 'It is good to check offer flyers to save money.' },
        ],
        crossQuestions: [
            { q: 'Hvor handler du normalt?', qEn: 'Where do you normally shop?', a: 'Jeg handler normalt i Netto eller Rema 1000, fordi de er billige.', aEn: 'I normally shop at Netto or Rema 1000 because they are cheap.' },
            { q: 'Betaler du med kort eller kontanter?', qEn: 'Card or cash?', a: 'Jeg betaler næsten altid med kort eller MobilePay.', aEn: 'I almost always pay by card or MobilePay.' },
            { q: 'Hvad er typisk dansk mad?', qEn: 'What is typical Danish food?', a: 'Rugbrød med pålæg, frikadeller med kartofler, og smørrebrød.', aEn: 'Rye bread with toppings, meatballs with potatoes, and open-faced sandwiches.' },
        ]
    },
];

export default function SpeakingPage() {
    const [activeTab, setActiveTab] = useState(speeches[0].id);
    const activeSpeech = speeches.find(s => s.id === activeTab);

    return (
        <Layout>
            <div className="print-header">
                <h1>Speaking Practice — 5-Minute Speeches</h1>
                <p>DanskPraksis — Mundtlig Kommunikation</p>
            </div>

            <div className="page-header">
                <div className="page-breadcrumb">
                    <Link href="/">Home</Link> <span>/</span> <span>Speaking Guide</span>
                </div>
                <h1 className="page-title">🗣️ Speaking Practice</h1>
                <p className="page-subtitle">
                    Select a topic below, listen to the full speech, then try the cross questions.
                </p>
            </div>

            {/* Tab navigation */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                {speeches.map(s => (
                    <button
                        key={s.id}
                        className={`filter-chip ${activeTab === s.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(s.id)}
                    >
                        {s.icon} {s.titleEn}
                    </button>
                ))}
            </div>

            {/* Active speech content */}
            {activeSpeech && (
                <div className="fade-in" key={activeSpeech.id}>
                    <div className="lesson-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                            <div>
                                <h2>{activeSpeech.icon} {activeSpeech.titleEn}</h2>
                                <p className="lesson-subtitle">{activeSpeech.title} • ~5 min</p>
                            </div>
                            <span className={`tag ${activeSpeech.level === 'PD2' ? 'tag-cyan' : activeSpeech.level === 'PD3' ? 'tag-purple' : 'tag-amber'}`}>
                                {activeSpeech.level}
                            </span>
                        </div>

                        <h3>🎤 Full Speech ({activeSpeech.speech.length} sentences)</h3>
                        <div style={{ marginBottom: 20 }}>
                            {activeSpeech.speech.map((line, i) => (
                                <div key={i} style={{
                                    padding: '10px 16px',
                                    background: i % 2 === 0 ? '#f9f7f4' : 'transparent',
                                    borderRadius: 'var(--radius-sm)',
                                    marginBottom: 2,
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 10,
                                }}>
                                    <SpeechButton text={line.da} size="small" />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 500, marginBottom: 2, color: 'var(--text-primary)' }}>{line.da}</div>
                                        <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontStyle: 'italic' }}>{line.en}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginBottom: 24 }} className="no-print">
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => {
                                    const fullText = activeSpeech.speech.map(l => l.da).join('. ');
                                    const u = new SpeechSynthesisUtterance(fullText);
                                    u.lang = 'da-DK'; u.rate = 0.6;
                                    const voices = window.speechSynthesis.getVoices();
                                    const daVoice = voices.find(v => v.lang.startsWith('da'));
                                    if (daVoice) u.voice = daVoice;
                                    window.speechSynthesis.cancel();
                                    window.speechSynthesis.speak(u);
                                }}
                            >🔊 Listen to Full Speech</button>
                            <button className="btn btn-secondary btn-sm" style={{ marginLeft: 8 }} onClick={() => window.speechSynthesis.cancel()}>⏹️ Stop</button>
                        </div>

                        <h3>❓ Cross Questions ({activeSpeech.crossQuestions.length})</h3>
                        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>
                            Try answering before revealing the suggested answer!
                        </p>
                        {activeSpeech.crossQuestions.map((cq, i) => (
                            <CrossQuestion key={i} question={cq} index={i} />
                        ))}
                    </div>
                </div>
            )}

            {/* Tips card */}
            <div className="lesson-card" style={{ borderColor: 'rgba(5, 150, 105, 0.2)', marginTop: 24 }}>
                <h2 style={{ color: 'var(--accent-green)' }}>🎯 Oral Exam Tips</h2>
                <ul style={{ paddingLeft: 20, marginTop: 12 }}>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>Speak slowly and clearly</strong> — better slow and correct than fast with errors</li>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>Use complete sentences</strong> — never answer with just one word</li>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>Mix tenses</strong>: nutid (bor), datid (boede), førnutid (har boet)</li>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>Use connectors</strong>: og, men, fordi, selvom, desuden, derfor</li>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>Compare with your home country</strong> — examiners love cultural comparisons</li>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>If confused</strong>: &quot;Kan du gentage det?&quot; or &quot;Hvad mener du med...?&quot;</li>
                </ul>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 32 }} className="no-print">
                <Link href="/lessons" className="btn btn-secondary">← Grammar Lessons</Link>
                <button className="btn btn-primary" onClick={() => window.print()}>🖨️ Print This Speech</button>
            </div>
        </Layout>
    );
}

function CrossQuestion({ question, index }) {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <div style={{
            padding: '14px 16px', background: '#f9f7f4', borderRadius: 'var(--radius-sm)',
            marginBottom: 8, borderLeft: '3px solid var(--accent-purple)',
        }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
                👩‍🏫 Question {index + 1}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <SpeechButton text={question.q} size="small" />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{question.q}</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: 8 }}>{question.qEn}</div>
            {!showAnswer ? (
                <button className="btn btn-ghost btn-sm no-print" onClick={() => setShowAnswer(true)}>💡 Show Answer</button>
            ) : (
                <div style={{ padding: '10px 14px', background: 'rgba(14, 116, 144, 0.04)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-cyan)', animation: 'slideDown 0.3s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <SpeechButton text={question.a} size="small" />
                        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: 1 }}>🙋 Answer</span>
                    </div>
                    <div style={{ fontWeight: 500, marginBottom: 2 }}>{question.a}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontStyle: 'italic' }}>{question.aEn}</div>
                </div>
            )}
        </div>
    );
}

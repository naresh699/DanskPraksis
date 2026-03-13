'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SpeechButton from '@/components/SpeechButton';

// Full 5-minute speeches with cross questions, curated from exam topics
const speeches = [
    {
        id: 'about-me',
        title: 'Om mig selv',
        titleEn: 'About Myself',
        level: 'PD2',
        duration: '~5 min',
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
            { da: 'Jeg tror, at det er vigtigt at lære sproget for at integrere sig i det danske samfund.', en: 'I believe that it is important to learn the language to integrate into Danish society.' },
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
        titleEn: 'Health and The Body',
        level: 'PD2',
        duration: '~5 min',
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
            { da: 'Hvis man har ondt i halsen, skal man drikke varmt vand med honning.', en: 'If one has a sore throat, one should drink warm water with honey.' },
            { da: 'Når man er syg i Danmark, ringer man til sin egen læge og bestiller en tid.', en: 'When one is sick in Denmark, one calls one\'s own doctor and books an appointment.' },
            { da: 'Man skal tage sit gule sygesikringskort med til lægen.', en: 'One should bring one\'s yellow health insurance card to the doctor.' },
            { da: 'Hvis man er meget syg, kan man ringe 1-1-2 for ambulance.', en: 'If one is very sick, one can call 1-1-2 for an ambulance.' },
            { da: 'Kroppens dele er vigtige at kende: hoved, skuldre, arme, hænder, ben og fødder.', en: 'The body parts are important to know: head, shoulders, arms, hands, legs and feet.' },
            { da: 'Man siger også: øjne, ører, næse, mund, ryg, mave, fingre og tæer.', en: 'One also says: eyes, ears, nose, mouth, back, stomach, fingers and toes.' },
            { da: 'Sammenfattende kan jeg sige, at sundhed er en vigtig del af livet i Danmark.', en: 'In summary, I can say that health is an important part of life in Denmark.' },
        ],
        crossQuestions: [
            { q: 'Hvad gør du, hvis du har ondt i hovedet?', qEn: 'What do you do if you have a headache?', a: 'Jeg tager en hovedpinepille og hviler mig. Hvis det bliver værre, ringer jeg til min læge.', aEn: 'I take a headache pill and rest. If it gets worse, I call my doctor.' },
            { q: 'Hvordan bestiller du en tid hos lægen?', qEn: 'How do you book an appointment with the doctor?', a: 'Jeg ringer til min læge og fortæller, hvad jeg fejler. Så får jeg en tid.', aEn: 'I call my doctor and explain what is wrong. Then I get an appointment.' },
            { q: 'Hvad spiser du for at holde dig sund?', qEn: 'What do you eat to stay healthy?', a: 'Jeg spiser mange grøntsager, frugt, fisk og fuldkornsprodukter. Jeg prøver at undgå for meget sukker.', aEn: 'I eat lots of vegetables, fruit, fish and whole grain products. I try to avoid too much sugar.' },
            { q: 'Hvad er dit sygesikringskort?', qEn: 'What is your health insurance card?', a: 'Det er et gult kort, som man får, når man bor i Danmark. Det viser ens CPR-nummer og lægens adresse.', aEn: 'It is a yellow card that you get when you live in Denmark. It shows your CPR number and doctor\'s address.' },
        ]
    },
    {
        id: 'weather-seasons',
        title: 'Vejret og årstiderne i Danmark',
        titleEn: 'Weather and Seasons in Denmark',
        level: 'PD2',
        duration: '~5 min',
        speech: [
            { da: 'I dag vil jeg fortælle om vejret og årstiderne i Danmark.', en: 'Today I will tell about the weather and seasons in Denmark.' },
            { da: 'Danmark har fire årstider: forår, sommer, efterår og vinter.', en: 'Denmark has four seasons: spring, summer, autumn and winter.' },
            { da: 'Om foråret begynder blomsterne at komme, og dagene bliver længere.', en: 'In spring the flowers start to come, and the days get longer.' },
            { da: 'Temperaturen er cirka 8-15 grader om foråret.', en: 'The temperature is about 8-15 degrees in spring.' },
            { da: 'Sommeren i Danmark er dejlig. Solen skinner, og det er varmt — omkring 20-25 grader.', en: 'Summer in Denmark is lovely. The sun shines, and it is warm — around 20-25 degrees.' },
            { da: 'Mange danskere holder ferie i juli. De tager til stranden eller rejser til udlandet.', en: 'Many Danes take holiday in July. They go to the beach or travel abroad.' },
            { da: 'Om efteråret falder bladene fra træerne, og det begynder at blive koldt.', en: 'In autumn the leaves fall from the trees, and it starts to get cold.' },
            { da: 'Det regner tit om efteråret, og det blæser meget.', en: 'It rains often in autumn, and it is very windy.' },
            { da: 'Vinteren i Danmark er kold og mørk. Temperaturen kan falde ned til minus 5-10 grader.', en: 'Winter in Denmark is cold and dark. The temperature can drop to minus 5-10 degrees.' },
            { da: 'Det sneer nogle gange om vinteren, men ikke altid.', en: 'It snows sometimes in winter, but not always.' },
            { da: 'Om vinteren er dagene meget korte. Solen står op klokken 8 og går ned klokken 15.', en: 'In winter the days are very short. The sun rises at 8 and sets at 3.' },
            { da: 'Det vigtige ord for vejret er: sol, regn, sne, blæst, tåge, skyer, let sky, overskyet.', en: 'The important words for weather are: sun, rain, snow, wind, fog, clouds, partly cloudy, overcast.' },
            { da: 'Man kan sige: Det er solskin. Det er overskyet. Det regner. Det sner. Det blæser.', en: 'One can say: It is sunny. It is overcast. It is raining. It is snowing. It is windy.' },
            { da: 'Sammenlignet med mit hjemland er vejret i Danmark meget koldt og uforudsigeligt.', en: 'Compared to my home country, the weather in Denmark is very cold and unpredictable.' },
            { da: 'Men jeg har lært at klæde mig varmt med jakke, tørklæde, handsker og hue om vinteren.', en: 'But I have learned to dress warmly with jacket, scarf, gloves and hat in winter.' },
            { da: 'Danskerne siger: "Der findes ikke dårligt vejr, kun dårligt tøj!" Det har de nok ret i.', en: 'The Danes say: "There is no bad weather, only bad clothes!" They are probably right about that.' },
        ],
        crossQuestions: [
            { q: 'Hvad er din yndlingsårstid? Hvorfor?', qEn: 'What is your favorite season? Why?', a: 'Min yndlingsårstid er sommeren, fordi det er varmt, og solen skinner. Man kan gå ture og nyde naturen.', aEn: 'My favorite season is summer, because it is warm and the sun shines. One can go for walks and enjoy nature.' },
            { q: 'Hvordan er vejret i dag?', qEn: 'How is the weather today?', a: 'I dag er det overskyet og lidt koldt. Temperaturen er omkring 5 grader. Det kan godt begynde at regne senere.', aEn: 'Today it is overcast and a bit cold. The temperature is around 5 degrees. It might start to rain later.' },
            { q: 'Hvad er forskellen på vejret i dit hjemland og i Danmark?', qEn: 'What is the difference between weather in your country and in Denmark?', a: 'I mit hjemland er det meget varmere, og vi har monsunregn om sommeren. I Danmark er vejret koldere og mere uforudsigeligt.', aEn: 'In my home country it is much warmer, and we have monsoon rain in summer. In Denmark the weather is colder and more unpredictable.' },
        ]
    },
    {
        id: 'clothing',
        title: 'Tøj og mode',
        titleEn: 'Clothing and Fashion',
        level: 'PD2',
        duration: '~5 min',
        speech: [
            { da: 'I dag vil jeg tale om tøj og hvad man har på i Danmark.', en: 'Today I will talk about clothing and what one wears in Denmark.' },
            { da: 'Det er vigtigt at vide, hvad de forskellige tøjstykker hedder på dansk.', en: 'It is important to know what the different clothing items are called in Danish.' },
            { da: 'Overkroppen dækker man med en trøje, en bluse eller en skjorte.', en: 'One covers the upper body with a sweater, a blouse or a shirt.' },
            { da: 'Om benene har man bukser, jeans, en nederdel eller shorts om sommeren.', en: 'On the legs one wears trousers, jeans, a skirt or shorts in summer.' },
            { da: 'På fødderne har man sko, støvler om vinteren, eller sandaler om sommeren.', en: 'On the feet one wears shoes, boots in winter, or sandals in summer.' },
            { da: 'Om vinteren er det vigtigt at have en varm vinterjakke, en hue, et tørklæde og handsker.', en: 'In winter it is important to have a warm winter jacket, a hat, a scarf and gloves.' },
            { da: 'Undertøj er også vigtigt: underbukser, undertrøje og sokker.', en: 'Underwear is also important: underpants, undershirt and socks.' },
            { da: 'Når man handler tøj, går man til en tøjbutik eller køber online.', en: 'When one shops for clothes, one goes to a clothing store or buys online.' },
            { da: 'Man siger: "Hvilken størrelse bruger du?" — "Jeg bruger størrelse medium eller 38."', en: 'One says: "What size do you use?" — "I use size medium or 38."' },
            { da: '"Kan jeg prøve den her?" — "Ja, prøverummet er derover."', en: '"Can I try this on?" — "Yes, the fitting room is over there."' },
            { da: '"Den passer godt." eller "Den er for stor/lille."', en: '"It fits well." or "It is too big/small."' },
            { da: 'Farver er også gode at kende: rød, blå, grøn, gul, hvid, sort, grå, brun, rosa, lilla.', en: 'Colors are also good to know: red, blue, green, yellow, white, black, grey, brown, pink, purple.' },
            { da: 'I Danmark klæder folk sig normalt afslappet. De fleste bærer jeans og en trøje til hverdag.', en: 'In Denmark people normally dress casually. Most wear jeans and a sweater for everyday.' },
            { da: 'Til en jobsamtale eller en fest klæder man sig pænere med skjorte og pæne bukser.', en: 'For a job interview or a party one dresses more nicely with a shirt and smart trousers.' },
        ],
        crossQuestions: [
            { q: 'Hvad har du på i dag?', qEn: 'What are you wearing today?', a: 'I dag har jeg en blå trøje, sorte bukser og hvide sko på. Jeg har også en jakke på, fordi det er koldt udenfor.', aEn: 'Today I am wearing a blue sweater, black trousers and white shoes. I also have a jacket on because it is cold outside.' },
            { q: 'Hvor køber du tøj?', qEn: 'Where do you buy clothes?', a: 'Jeg køber tit tøj i H&M eller Zara. Nogle gange køber jeg også tøj online eller i en genbrugsbutik.', aEn: 'I often buy clothes at H&M or Zara. Sometimes I also buy clothes online or at a second-hand shop.' },
            { q: 'Hvad tager du på om vinteren?', qEn: 'What do you wear in winter?', a: 'Om vinteren tager jeg en varm jakke, en hue, et tørklæde, handsker og støvler på. Det er vigtigt at holde sig varm.', aEn: 'In winter I wear a warm jacket, a hat, a scarf, gloves and boots. It is important to stay warm.' },
        ]
    },
    {
        id: 'geography-denmark',
        title: 'Danmark — geografi og byer',
        titleEn: 'Denmark — Geography and Cities',
        level: 'PD2-PD3',
        duration: '~5 min',
        speech: [
            { da: 'Jeg vil fortælle om Danmark og landets geografi.', en: 'I will tell about Denmark and the country\'s geography.' },
            { da: 'Danmark er et lille land i Nordeuropa. Det har cirka 5,8 millioner indbyggere.', en: 'Denmark is a small country in Northern Europe. It has about 5.8 million inhabitants.' },
            { da: 'Landet består af halvøen Jylland og mange øer. De største øer er Sjælland, Fyn og Bornholm.', en: 'The country consists of the peninsula Jutland and many islands. The largest islands are Zealand, Funen and Bornholm.' },
            { da: 'Hovedstaden er København, som ligger på Sjælland. Cirka 1,3 millioner bor i Storkøbenhavn.', en: 'The capital is Copenhagen, which is located on Zealand. About 1.3 million live in Greater Copenhagen.' },
            { da: 'Andre store byer er Aarhus, Odense, Aalborg og Esbjerg.', en: 'Other large cities are Aarhus, Odense, Aalborg and Esbjerg.' },
            { da: 'Aarhus er den næststørste by og ligger i Jylland. Den er kendt for sin universitetsby.', en: 'Aarhus is the second largest city and is located in Jutland. It is known for its university city.' },
            { da: 'Odense er den tredjestørste by og ligger på Fyn. H.C. Andersen blev født i Odense.', en: 'Odense is the third largest city and is located on Funen. H.C. Andersen was born in Odense.' },
            { da: 'Danmark er et meget fladt land. Det højeste punkt er kun 170 meter over havet.', en: 'Denmark is a very flat country. The highest point is only 170 meters above sea level.' },
            { da: 'Danmark har grænse til Tyskland i syd. Mod vest er Nordsøen, og mod øst er Østersøen.', en: 'Denmark has a border with Germany to the south. To the west is the North Sea, and to the east is the Baltic Sea.' },
            { da: 'Øresundsbroen forbinder København med Malmø i Sverige. Den åbnede i år 2000.', en: 'The Øresund Bridge connects Copenhagen with Malmö in Sweden. It opened in the year 2000.' },
            { da: 'Danmark er et demokrati og er medlem af EU. Dronningen er landets statsoverhoved.', en: 'Denmark is a democracy and is a member of the EU. The Queen is the head of state.' },
            { da: 'Det danske flag hedder Dannebrog og er rødt med et hvidt kors. Det er verdens ældste flag.', en: 'The Danish flag is called Dannebrog and is red with a white cross. It is the world\'s oldest flag.' },
            { da: 'Jeg er glad for at bo i Danmark, og jeg lærer mere om landet hver dag.', en: 'I am happy to live in Denmark, and I learn more about the country every day.' },
        ],
        crossQuestions: [
            { q: 'Hvor mange øer har Danmark?', qEn: 'How many islands does Denmark have?', a: 'Danmark har mange hundrede øer, men de største er Sjælland, Fyn og Bornholm. Ikke alle øer er beboede.', aEn: 'Denmark has many hundreds of islands, but the largest are Zealand, Funen and Bornholm. Not all islands are inhabited.' },
            { q: 'Hvad hedder den næststørste by i Danmark?', qEn: 'What is the second largest city in Denmark called?', a: 'Den næststørste by i Danmark er Aarhus. Den ligger i Jylland og har mange studerende.', aEn: 'The second largest city in Denmark is Aarhus. It is located in Jutland and has many students.' },
            { q: 'Hvad hedder det danske flag?', qEn: 'What is the Danish flag called?', a: 'Det danske flag hedder Dannebrog. Det er rødt med et hvidt kors og er verdens ældste nationalflag.', aEn: 'The Danish flag is called Dannebrog. It is red with a white cross and is the world\'s oldest national flag.' },
            { q: 'Kan du fortælle om den by, du bor i?', qEn: 'Can you tell about the city you live in?', a: 'Jeg bor i København. Det er en stor by med mange parker, museer og restauranter. Der er god offentlig transport med busser og tog.', aEn: 'I live in Copenhagen. It is a big city with many parks, museums and restaurants. There is good public transport with buses and trains.' },
        ]
    },
    {
        id: 'school-education',
        title: 'Skole og uddannelse i Danmark',
        titleEn: 'School and Education in Denmark',
        level: 'PD3',
        duration: '~5 min',
        speech: [
            { da: 'I dag vil jeg tale om det danske uddannelsessystem.', en: 'Today I will talk about the Danish education system.' },
            { da: 'I Danmark begynder børn i skole, når de er seks år gamle. De starter i børnehaveklassen.', en: 'In Denmark children start school when they are six years old. They start in kindergarten class.' },
            { da: 'Folkeskolen varer fra 0. til 9. klasse, det vil sige ti år.', en: 'The public school lasts from 0th to 9th grade, that is ten years.' },
            { da: 'Undervisningen er gratis i Danmark. Staten betaler for skolerne.', en: 'Education is free in Denmark. The state pays for the schools.' },
            { da: 'Efter folkeskolen kan man vælge gymnasiet eller en erhvervsuddannelse.', en: 'After public school one can choose upper secondary school or a vocational education.' },
            { da: 'Gymnasiet tager tre år, og man kan læse STX, HHX eller HTX.', en: 'Upper secondary school takes three years, and one can study STX, HHX or HTX.' },
            { da: 'Bagefter kan man tage en universitetsuddannelse. Der er otte universiteter i Danmark.', en: 'Afterwards one can take a university education. There are eight universities in Denmark.' },
            { da: 'Københavns Universitet er det ældste og blev grundlagt i 1479.', en: 'University of Copenhagen is the oldest and was founded in 1479.' },
            { da: 'For udlændinge er det vigtigt at bestå en danskprøve. Der er flere niveauer: PD1, PD2 og PD3.', en: 'For foreigners it is important to pass a Danish exam. There are several levels: PD1, PD2 and PD3.' },
            { da: 'PD2 svarer til B1-niveau, og PD3 svarer til B2-niveau.', en: 'PD2 corresponds to B1 level, and PD3 corresponds to B2 level.' },
            { da: 'For at få dansk statsborgerskab skal man bestå PD3 og bestå en indfødsretsprøve.', en: 'To get Danish citizenship one must pass PD3 and pass a citizenship test.' },
            { da: 'Jeg synes, at det danske uddannelsessystem er meget godt, fordi alle har mulighed for at lære.', en: 'I think that the Danish education system is very good because everyone has the opportunity to learn.' },
            { da: 'SU, Statens Uddannelsesstøtte, hjælper studerende økonomisk, mens de studerer.', en: 'SU, the State Education Support, helps students financially while they study.' },
            { da: 'Det er en af de ting, der gør Danmark til et fantastisk land at studere i.', en: 'That is one of the things that makes Denmark a fantastic country to study in.' },
        ],
        crossQuestions: [
            { q: 'Hvad er forskellen på PD2 og PD3?', qEn: 'What is the difference between PD2 and PD3?', a: 'PD2 er B1-niveau og handler om at klare hverdagen. PD3 er B2-niveau og kræver, at man kan diskutere samfundsemner og argumentere.', aEn: 'PD2 is B1 level and is about managing everyday life. PD3 is B2 level and requires being able to discuss societal topics and argue.' },
            { q: 'Hvad er SU?', qEn: 'What is SU?', a: 'SU er Statens Uddannelsesstøtte. Det er penge, som den danske stat giver til studerende, så de kan fokusere på at studere.', aEn: 'SU is the State Education Support. It is money that the Danish state gives to students so they can focus on studying.' },
            { q: 'Hvad studerer du?', qEn: 'What do you study?', a: 'Jeg studerer dansk på et sprogcenter. Jeg forbereder mig til Prøve i Dansk 2. Det er vigtigt for min fremtid i Danmark.', aEn: 'I study Danish at a language center. I am preparing for the Prøve i Dansk 2. It is important for my future in Denmark.' },
        ]
    },
    {
        id: 'shopping-money',
        title: 'Indkøb og penge',
        titleEn: 'Shopping and Money',
        level: 'PD2',
        duration: '~5 min',
        speech: [
            { da: 'I dag vil jeg tale om, hvordan man handler ind i Danmark.', en: 'Today I will talk about how one shops in Denmark.' },
            { da: 'Der er mange supermarkeder i Danmark: Netto, Rema 1000, Føtex, Bilka og Lidl.', en: 'There are many supermarkets in Denmark: Netto, Rema 1000, Føtex, Bilka and Lidl.' },
            { da: 'Netto og Rema 1000 er billige supermarkeder. Føtex og Irma er lidt dyrere.', en: 'Netto and Rema 1000 are cheap supermarkets. Føtex and Irma are a bit more expensive.' },
            { da: 'I Danmark bruger man danske kroner. En krone har hundrede øre.', en: 'In Denmark one uses Danish kroner. One krone has one hundred øre.' },
            { da: 'De fleste betaler med Dankort eller MobilePay. Man bruger sjældent kontanter.', en: 'Most people pay with Dankort or MobilePay. One rarely uses cash.' },
            { da: 'Når man handler dagligvarer, køber man mælk, brød, ost, smør, kød og grøntsager.', en: 'When one shops for groceries, one buys milk, bread, cheese, butter, meat and vegetables.' },
            { da: 'Rugbrød er meget populært i Danmark. Det spiser man til frokost med pålæg.', en: 'Rye bread is very popular in Denmark. One eats it for lunch with toppings.' },
            { da: 'Man kan også handle i specialbutikker: en bager, en slagter eller på et marked.', en: 'One can also shop at specialty shops: a bakery, a butcher or at a market.' },
            { da: 'Priserne i Danmark er generelt højere end i mange andre lande.', en: 'Prices in Denmark are generally higher than in many other countries.' },
            { da: '"Undskyld, hvad koster den her?" — "Den koster 45 kroner."', en: '"Excuse me, how much does this cost?" — "It costs 45 kroner."' },
            { da: '"Kan jeg betale med kort?" — "Ja, vi tager alle kreditkort."', en: '"Can I pay by card?" — "Yes, we accept all credit cards."' },
            { da: 'Det er godt at tjekke tilbudsaviser for at spare penge.', en: 'It is good to check offer flyers to save money.' },
            { da: 'Man kan også bruge appen "Too Good To Go" for at købe billig mad, der ellers ville blive smidt ud.', en: 'One can also use the app "Too Good To Go" to buy cheap food that would otherwise be thrown away.' },
        ],
        crossQuestions: [
            { q: 'Hvor handler du normalt?', qEn: 'Where do you normally shop?', a: 'Jeg handler normalt i Netto eller Rema 1000, fordi de er billige. Jeg tjekker også tilbudsaviserne.', aEn: 'I normally shop at Netto or Rema 1000 because they are cheap. I also check the offer flyers.' },
            { q: 'Betaler du med kort eller kontanter?', qEn: 'Do you pay by card or cash?', a: 'Jeg betaler næsten altid med kort eller MobilePay. Man bruger sjældent kontanter i Danmark.', aEn: 'I almost always pay by card or MobilePay. One rarely uses cash in Denmark.' },
            { q: 'Hvad er typisk dansk mad?', qEn: 'What is typical Danish food?', a: 'Typisk dansk mad er rugbrød med pålæg, frikadeller med kartofler og brun sovs, og smørrebrød.', aEn: 'Typical Danish food is rye bread with toppings, meatballs with potatoes and brown gravy, and open-faced sandwiches.' },
        ]
    },
];

export default function SpeakingPage() {
    const [expandedSpeech, setExpandedSpeech] = useState(null);

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
                    Complete 5-minute speeches on common oral exam topics. Each speech has a full Danish text you can listen to,
                    followed by cross questions the examiner might ask. Print these to practice on the go!
                </p>
            </div>

            <div style={{
                padding: '16px 20px',
                background: 'rgba(8, 145, 178, 0.06)',
                border: '1px solid rgba(8, 145, 178, 0.15)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 32,
                fontSize: 14,
                color: 'var(--text-secondary)',
                lineHeight: 1.7
            }}>
                💡 <strong>How to practice:</strong><br />
                1. Click 🔈 to listen to each line at slow speed<br />
                2. Read along and repeat out loud<br />
                3. Try the cross questions — answer before revealing the suggested answer<br />
                4. Print this page for bus/train practice
            </div>

            {/* Speech cards */}
            {speeches.map((speech, idx) => (
                <div key={speech.id} className="lesson-card fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                        <div>
                            <h2>{speech.titleEn}</h2>
                            <p className="lesson-subtitle">{speech.title} • {speech.duration}</p>
                        </div>
                        <span className={`tag ${speech.level === 'PD2' ? 'tag-cyan' : speech.level === 'PD3' ? 'tag-purple' : 'tag-amber'}`}>
                            {speech.level}
                        </span>
                    </div>

                    {/* Full Speech */}
                    <h3>🎤 5-Minute Speech ({speech.speech.length} sentences)</h3>
                    <div style={{ marginBottom: 20 }}>
                        {speech.speech.map((line, i) => (
                            <div key={i} style={{
                                padding: '10px 16px',
                                background: i % 2 === 0 ? '#f9fafb' : 'transparent',
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

                    {/* Listen to full speech button */}
                    <div style={{ marginBottom: 20 }} className="no-print">
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                const fullText = speech.speech.map(l => l.da).join('. ');
                                const utterance = new SpeechSynthesisUtterance(fullText);
                                utterance.lang = 'da-DK';
                                utterance.rate = 0.6;
                                const voices = window.speechSynthesis.getVoices();
                                const daVoice = voices.find(v => v.lang.startsWith('da'));
                                if (daVoice) utterance.voice = daVoice;
                                window.speechSynthesis.cancel();
                                window.speechSynthesis.speak(utterance);
                            }}
                        >
                            🔊 Listen to Full Speech
                        </button>
                        <button
                            className="btn btn-secondary btn-sm"
                            style={{ marginLeft: 8 }}
                            onClick={() => window.speechSynthesis.cancel()}
                        >
                            ⏹️ Stop
                        </button>
                    </div>

                    {/* Cross Questions */}
                    <h3>❓ Cross Questions (Krydsspørgsmål)</h3>
                    <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>
                        These are questions the examiner might ask after your speech. Try answering before looking at the suggested answer!
                    </p>
                    <div style={{ marginBottom: 8 }}>
                        {speech.crossQuestions.map((cq, i) => (
                            <CrossQuestion key={i} question={cq} index={i} />
                        ))}
                    </div>
                </div>
            ))}

            {/* General tips */}
            <div className="lesson-card" style={{ borderColor: 'rgba(5, 150, 105, 0.2)' }}>
                <h2 style={{ color: 'var(--accent-green)' }}>🎯 Oral Exam Tips</h2>
                <ul style={{ paddingLeft: 20, marginTop: 12 }}>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>Speak slowly and clearly</strong> — it is better to speak slowly and correctly than fast with errors</li>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>Use complete sentences</strong> — never answer with just one word</li>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>Mix tenses</strong>: nutid (bor), datid (boede), førnutid (har boet)</li>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>Use connectors</strong>: og, men, fordi, selvom, desuden, derfor, for eksempel</li>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>Compare with your home country</strong> — examiners love hearing cultural comparisons</li>
                    <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 2 }}><strong>If you don&apos;t understand</strong>: &quot;Kan du gentage det?&quot; or &quot;Hvad mener du med...?&quot;</li>
                </ul>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 32 }} className="no-print">
                <Link href="/lessons" className="btn btn-secondary">← Grammar Lessons</Link>
                <button className="btn btn-primary" onClick={() => window.print()}>🖨️ Print Speaking Guide</button>
            </div>
        </Layout>
    );
}

function CrossQuestion({ question, index }) {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div style={{
            padding: '14px 16px',
            background: '#f9fafb',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 8,
            borderLeft: '3px solid var(--accent-purple)',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: 1 }}>
                    👩‍🏫 Question {index + 1}
                </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <SpeechButton text={question.q} size="small" />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{question.q}</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: 8 }}>{question.qEn}</div>

            {!showAnswer ? (
                <button className="btn btn-ghost btn-sm no-print" onClick={() => setShowAnswer(true)}>
                    💡 Show Suggested Answer
                </button>
            ) : (
                <div style={{
                    padding: '10px 14px',
                    background: 'rgba(8, 145, 178, 0.06)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '3px solid var(--accent-cyan)',
                    animation: 'slideDown 0.3s ease',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <SpeechButton text={question.a} size="small" />
                        <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: 1 }}>
                            🙋 Suggested Answer
                        </span>
                    </div>
                    <div style={{ fontWeight: 500, marginBottom: 2, color: 'var(--text-primary)' }}>{question.a}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontStyle: 'italic' }}>{question.aEn}</div>
                </div>
            )}

            {/* Always show answer in print */}
            <div className="print-only" style={{ display: 'none' }}>
                <div style={{ marginTop: 8, paddingLeft: 12, borderLeft: '2px solid #ccc' }}>
                    <strong>Svar:</strong> {question.a}<br />
                    <em>{question.aEn}</em>
                </div>
            </div>
        </div>
    );
}

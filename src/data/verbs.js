// Danish verb database — organized by group (from verber.pdf)
// Each verb: infinitive, present, past, perfect, english, group

export const verbs = {
    group1: {
        name: 'Gruppe 1',
        nameEn: 'Group 1',
        rule: 'Datid: -ede, Førnutid: har -et',
        ruleEn: 'Past: -ede, Perfect: har -et',
        verbs: [
            { inf: 'at tale', pres: 'taler', past: 'talte', perf: 'har talt', en: 'to speak' },
            { inf: 'at arbejde', pres: 'arbejder', past: 'arbejdede', perf: 'har arbejdet', en: 'to work' },
            { inf: 'at bo', pres: 'bor', past: 'boede', perf: 'har boet', en: 'to live' },
            { inf: 'at lære', pres: 'lærer', past: 'lærte', perf: 'har lært', en: 'to learn/teach' },
            { inf: 'at spille', pres: 'spiller', past: 'spillede', perf: 'har spillet', en: 'to play' },
            { inf: 'at høre', pres: 'hører', past: 'hørte', perf: 'har hørt', en: 'to hear' },
            { inf: 'at åbne', pres: 'åbner', past: 'åbnede', perf: 'har åbnet', en: 'to open' },
            { inf: 'at lukke', pres: 'lukker', past: 'lukkede', perf: 'har lukket', en: 'to close' },
            { inf: 'at vise', pres: 'viser', past: 'viste', perf: 'har vist', en: 'to show' },
            { inf: 'at prøve', pres: 'prøver', past: 'prøvede', perf: 'har prøvet', en: 'to try' },
            { inf: 'at ønske', pres: 'ønsker', past: 'ønskede', perf: 'har ønsket', en: 'to wish' },
            { inf: 'at elske', pres: 'elsker', past: 'elskede', perf: 'har elsket', en: 'to love' },
            { inf: 'at handle', pres: 'handler', past: 'handlede', perf: 'har handlet', en: 'to shop/act' },
            { inf: 'at regne', pres: 'regner', past: 'regnede', perf: 'har regnet', en: 'to rain' },
            { inf: 'at snakke', pres: 'snakker', past: 'snakkede', perf: 'har snakket', en: 'to chat' },
            { inf: 'at rejse', pres: 'rejser', past: 'rejste', perf: 'har/er rejst', en: 'to travel' },
            { inf: 'at passe', pres: 'passer', past: 'passede', perf: 'har passet', en: 'to fit/take care' },
            { inf: 'at cykle', pres: 'cykler', past: 'cyklede', perf: 'har cyklet', en: 'to cycle' },
            { inf: 'at leje', pres: 'lejer', past: 'lejede', perf: 'har lejet', en: 'to rent' },
            { inf: 'at betale', pres: 'betaler', past: 'betalte', perf: 'har betalt', en: 'to pay' },
            { inf: 'at svare', pres: 'svarer', past: 'svarede', perf: 'har svaret', en: 'to answer' },
            { inf: 'at studere', pres: 'studerer', past: 'studerede', perf: 'har studeret', en: 'to study' },
            { inf: 'at ringe', pres: 'ringer', past: 'ringede', perf: 'har ringet', en: 'to call/ring' },
            { inf: 'at flytte', pres: 'flytter', past: 'flyttede', perf: 'har/er flyttet', en: 'to move' },
            { inf: 'at kende', pres: 'kender', past: 'kendte', perf: 'har kendt', en: 'to know (person)' },
        ]
    },
    group2: {
        name: 'Gruppe 2',
        nameEn: 'Group 2',
        rule: 'Datid: -te, Førnutid: har -t',
        ruleEn: 'Past: -te, Perfect: har -t',
        verbs: [
            { inf: 'at købe', pres: 'køber', past: 'købte', perf: 'har købt', en: 'to buy' },
            { inf: 'at læse', pres: 'læser', past: 'læste', perf: 'har læst', en: 'to read' },
            { inf: 'at bruge', pres: 'bruger', past: 'brugte', perf: 'har brugt', en: 'to use' },
            { inf: 'at spise', pres: 'spiser', past: 'spiste', perf: 'har spist', en: 'to eat' },
            { inf: 'at mene', pres: 'mener', past: 'mente', perf: 'har ment', en: 'to mean/think' },
            { inf: 'at besøge', pres: 'besøger', past: 'besøgte', perf: 'har besøgt', en: 'to visit' },
            { inf: 'at tænke', pres: 'tænker', past: 'tænkte', perf: 'har tænkt', en: 'to think' },
            { inf: 'at fortælle', pres: 'fortæller', past: 'fortalte', perf: 'har fortalt', en: 'to tell' },
            { inf: 'at hedde', pres: 'hedder', past: 'hed', perf: 'har heddet', en: 'to be called' },
            { inf: 'at møde', pres: 'møder', past: 'mødte', perf: 'har mødt', en: 'to meet' },
            { inf: 'at følge', pres: 'følger', past: 'fulgte', perf: 'har fulgt', en: 'to follow' },
            { inf: 'at sælge', pres: 'sælger', past: 'solgte', perf: 'har solgt', en: 'to sell' },
            { inf: 'at vælge', pres: 'vælger', past: 'valgte', perf: 'har valgt', en: 'to choose' },
            { inf: 'at kende', pres: 'kender', past: 'kendte', perf: 'har kendt', en: 'to know' },
            { inf: 'at tro', pres: 'tror', past: 'troede', perf: 'har troet', en: 'to believe' },
            { inf: 'at lægge', pres: 'lægger', past: 'lagde', perf: 'har lagt', en: 'to put/lay' },
            { inf: 'at synes', pres: 'synes', past: 'syntes', perf: 'har syntes', en: 'to think/find' },
            { inf: 'at begynde', pres: 'begynder', past: 'begyndte', perf: 'har begyndt', en: 'to begin' },
            { inf: 'at klare', pres: 'klarer', past: 'klarede', perf: 'har klaret', en: 'to manage' },
        ]
    },
    group3: {
        name: 'Gruppe 3 (Uregelmæssige)',
        nameEn: 'Group 3 (Irregular)',
        rule: 'Uregelmæssige — vokalskifte, skal læres udenad',
        ruleEn: 'Irregular — vowel change, must be memorized',
        verbs: [
            { inf: 'at skrive', pres: 'skriver', past: 'skrev', perf: 'har skrevet', en: 'to write' },
            { inf: 'at drikke', pres: 'drikker', past: 'drak', perf: 'har drukket', en: 'to drink' },
            { inf: 'at finde', pres: 'finder', past: 'fandt', perf: 'har fundet', en: 'to find' },
            { inf: 'at gå', pres: 'går', past: 'gik', perf: 'er gået', en: 'to go/walk' },
            { inf: 'at komme', pres: 'kommer', past: 'kom', perf: 'er kommet', en: 'to come' },
            { inf: 'at se', pres: 'ser', past: 'så', perf: 'har set', en: 'to see' },
            { inf: 'at tage', pres: 'tager', past: 'tog', perf: 'har taget', en: 'to take' },
            { inf: 'at give', pres: 'giver', past: 'gav', perf: 'har givet', en: 'to give' },
            { inf: 'at ligge', pres: 'ligger', past: 'lå', perf: 'har ligget', en: 'to lie (down)' },
            { inf: 'at sidde', pres: 'sidder', past: 'sad', perf: 'har siddet', en: 'to sit' },
            { inf: 'at stå', pres: 'står', past: 'stod', perf: 'har stået', en: 'to stand' },
            { inf: 'at sige', pres: 'siger', past: 'sagde', perf: 'har sagt', en: 'to say' },
            { inf: 'at vide', pres: 'ved', past: 'vidste', perf: 'har vidst', en: 'to know (fact)' },
            { inf: 'at have', pres: 'har', past: 'havde', perf: 'har haft', en: 'to have' },
            { inf: 'at være', pres: 'er', past: 'var', perf: 'har været', en: 'to be' },
            { inf: 'at gøre', pres: 'gør', past: 'gjorde', perf: 'har gjort', en: 'to do/make' },
            { inf: 'at få', pres: 'får', past: 'fik', perf: 'har fået', en: 'to get/receive' },
            { inf: 'at holde', pres: 'holder', past: 'holdt', perf: 'har holdt', en: 'to hold/keep' },
            { inf: 'at bære', pres: 'bærer', past: 'bar', perf: 'har båret', en: 'to carry/wear' },
            { inf: 'at løbe', pres: 'løber', past: 'løb', perf: 'har/er løbet', en: 'to run' },
            { inf: 'at sove', pres: 'sover', past: 'sov', perf: 'har sovet', en: 'to sleep' },
            { inf: 'at blive', pres: 'bliver', past: 'blev', perf: 'er blevet', en: 'to become/stay' },
            { inf: 'at falde', pres: 'falder', past: 'faldt', perf: 'er faldet', en: 'to fall' },
            { inf: 'at synge', pres: 'synger', past: 'sang', perf: 'har sunget', en: 'to sing' },
            { inf: 'at hjælpe', pres: 'hjælper', past: 'hjalp', perf: 'har hjulpet', en: 'to help' },
        ]
    },
    modal: {
        name: 'Modalverber',
        nameEn: 'Modal Verbs',
        rule: 'Bruges med infinitiv UDEN "at"',
        ruleEn: 'Used with infinitive WITHOUT "at"',
        verbs: [
            { inf: 'at kunne', pres: 'kan', past: 'kunne', perf: 'har kunnet', en: 'can/to be able to' },
            { inf: 'at skulle', pres: 'skal', past: 'skulle', perf: 'har skullet', en: 'shall/must' },
            { inf: 'at ville', pres: 'vil', past: 'ville', perf: 'har villet', en: 'will/want to' },
            { inf: 'at måtte', pres: 'må', past: 'måtte', perf: 'har måttet', en: 'may/must' },
            { inf: 'at burde', pres: 'bør', past: 'burde', perf: 'har burdet', en: 'should/ought to' },
            { inf: 'at turde', pres: 'tør', past: 'turde', perf: 'har turdet', en: 'to dare' },
        ]
    }
};

// Flatten all verbs into a single array for search
export function getAllVerbs() {
    const all = [];
    Object.values(verbs).forEach(group => {
        group.verbs.forEach(v => {
            all.push({ ...v, group: group.name, groupEn: group.nameEn });
        });
    });
    return all;
}

// Find a verb by any of its forms
export function findVerb(form) {
    const lower = form.toLowerCase().replace(/^at /, '');
    const all = getAllVerbs();
    return all.find(v =>
        v.inf.replace('at ', '') === lower ||
        v.pres === lower ||
        v.past === lower ||
        v.perf.replace(/^(har|er) /, '') === lower
    );
}

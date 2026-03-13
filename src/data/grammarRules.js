// Grammar rules extracted from verber.pdf
// Each rule has an id, title, explanation, examples, and detection logic

export const grammarRules = [
  {
    id: 'modal-infinitive',
    title: 'Modal Verbs + Infinitive (uden "at")',
    titleEn: 'Modal Verbs + Infinitive (without "at")',
    shortRule: 'After modal verbs (kan, skal, vil, må, bør, tør), use the infinitive WITHOUT "at".',
    fullExplanation: `Modal verbs in Danish are: kan (can), skal (shall/must), vil (will/want to), må (may/must), bør (should), tør (dare).

When a modal verb is followed by another verb, you use the INFINITIVE form — but WITHOUT "at" before it.

CORRECT: Jeg kan spise → I can eat
WRONG:   Jeg kan at spise ✗

This is different from English where we sometimes say "I want TO eat" — in Danish with modals, there is no "at".`,
    examples: [
      { da: 'Jeg kan tale dansk', en: 'I can speak Danish', highlight: 'kan tale' },
      { da: 'Hun skal arbejde i morgen', en: 'She must work tomorrow', highlight: 'skal arbejde' },
      { da: 'Vi vil rejse til København', en: 'We want to travel to Copenhagen', highlight: 'vil rejse' },
      { da: 'Du må ikke ryge her', en: 'You must not smoke here', highlight: 'må ikke ryge' },
      { da: 'I bør læse mere', en: 'You should read more', highlight: 'bør læse' },
      { da: 'Han tør ikke svømme', en: 'He dares not swim', highlight: 'tør ikke svømme' },
    ],
    detection: {
      pattern: 'at_after_modal',
      modalVerbs: ['kan', 'skal', 'vil', 'må', 'bør', 'tør'],
      description: 'User wrote "at" + verb after a modal verb'
    }
  },
  {
    id: 'present-tense-r',
    title: 'Nutid ender på -r',
    titleEn: 'Present tense ends in -r',
    shortRule: 'Nutid (present tense) ender som regel på -r. Add -r to the infinitive stem.',
    fullExplanation: `In Danish, the present tense is formed by adding -r to the infinitive:

Group 1: infinitive ends in -e → add -r → -er
  at tale → taler (speaks)
  at spise → spiser (eats)

Group 2: infinitive ends in -e → add -r → -er
  at købe → køber (buys)

Group 3/Irregular: some follow the pattern, some don't
  at se → ser (sees)
  at gå → går (goes)

The present tense is used for:
- Things happening now: Jeg spiser nu (I am eating now)
- Habitual actions: Jeg spiser morgenmad hver dag (I eat breakfast every day)
- Future plans: Jeg rejser i morgen (I travel tomorrow)`,
    examples: [
      { da: 'Jeg spiser morgenmad', en: 'I eat breakfast', highlight: 'spiser' },
      { da: 'Hun taler dansk', en: 'She speaks Danish', highlight: 'taler' },
      { da: 'Vi bor i Danmark', en: 'We live in Denmark', highlight: 'bor' },
      { da: 'Han arbejder på et hospital', en: 'He works at a hospital', highlight: 'arbejder' },
      { da: 'De læser avisen', en: 'They read the newspaper', highlight: 'læser' },
    ],
    detection: {
      pattern: 'missing_r_present',
      description: 'User wrote the infinitive stem without -r in present tense'
    }
  },
  {
    id: 'past-tense-group1',
    title: 'Datid — Gruppe 1 (-ede)',
    titleEn: 'Past tense — Group 1 (-ede)',
    shortRule: 'Group 1 verbs form the past tense by adding -ede to the stem.',
    fullExplanation: `Group 1 is the largest verb group in Danish. These verbs form their past tense by adding -ede:

Infinitive → Past tense
at tale → talede (spoke) — note: often shortened to "talte" in modern Danish
at arbejde → arbejdede (worked)
at spille → spillede (played)
at bo → boede (lived)
at lære → lærte (learned)

The past participle (used with har/er) ends in -et:
har talt, har arbejdet, har spillet, har boet, har lært`,
    examples: [
      { da: 'Jeg arbejdede i går', en: 'I worked yesterday', highlight: 'arbejdede' },
      { da: 'Hun spillede klaver', en: 'She played piano', highlight: 'spillede' },
      { da: 'Vi boede i Odense', en: 'We lived in Odense', highlight: 'boede' },
      { da: 'De studerede dansk', en: 'They studied Danish', highlight: 'studerede' },
    ],
    detection: {
      pattern: 'wrong_past_group1',
      description: 'User used wrong past tense ending for a Group 1 verb'
    }
  },
  {
    id: 'past-tense-group2',
    title: 'Datid — Gruppe 2 (-te)',
    titleEn: 'Past tense — Group 2 (-te)',
    shortRule: 'Group 2 verbs form the past tense by adding -te to the stem.',
    fullExplanation: `Group 2 verbs form their past tense by adding -te:

Infinitive → Past tense
at købe → købte (bought)
at læse → læste (read)
at bruge → brugte (used)
at mene → mente (meant)
at spise → spiste (ate)

The past participle ends in -t:
har købt, har læst, har brugt, har ment, har spist

TIP: Group 2 verbs often have a stressed syllable or a long vowel/diphthong in the stem.`,
    examples: [
      { da: 'Jeg købte en ny bil', en: 'I bought a new car', highlight: 'købte' },
      { da: 'Hun læste en bog', en: 'She read a book', highlight: 'læste' },
      { da: 'Vi brugte mange penge', en: 'We used a lot of money', highlight: 'brugte' },
      { da: 'Han spiste frokost kl. 12', en: 'He ate lunch at 12', highlight: 'spiste' },
    ],
    detection: {
      pattern: 'wrong_past_group2',
      description: 'User used wrong past tense ending for a Group 2 verb'
    }
  },
  {
    id: 'past-tense-group3',
    title: 'Datid — Gruppe 3 (Uregelmæssige)',
    titleEn: 'Past tense — Group 3 (Irregular)',
    shortRule: 'Group 3 verbs are irregular — they change the vowel in past tense and must be memorized.',
    fullExplanation: `Group 3 verbs are irregular and change their vowels in the past tense. These must be learned by heart:

Infinitive → Past tense → Perfect
at skrive → skrev → har skrevet (write)
at drikke → drak → har drukket (drink)
at finde → fandt → har fundet (find)
at gå → gik → har gået (go/walk)
at komme → kom → har kommet (come)
at se → så → har set (see)
at tage → tog → har taget (take)
at give → gav → har givet (give)
at ligge → lå → har ligget (lie)
at sige → sagde → har sagt (say)

There is no pattern — memorization is key!`,
    examples: [
      { da: 'Jeg skrev et brev', en: 'I wrote a letter', highlight: 'skrev' },
      { da: 'Han drak en kop kaffe', en: 'He drank a cup of coffee', highlight: 'drak' },
      { da: 'Vi gik i parken', en: 'We walked in the park', highlight: 'gik' },
      { da: 'De kom sent hjem', en: 'They came home late', highlight: 'kom' },
      { da: 'Hun så en film', en: 'She saw a movie', highlight: 'så' },
    ],
    detection: {
      pattern: 'wrong_irregular',
      description: 'User used wrong form for an irregular verb'
    }
  },
  {
    id: 'perfect-tense',
    title: 'Førnutid (har/er + participium)',
    titleEn: 'Perfect tense (has/have + participle)',
    shortRule: 'Perfect tense uses har/er + past participle. Group 1: -et, Group 2: -t, Group 3: varies.',
    fullExplanation: `The perfect tense is formed with har (or er for movement verbs) + the past participle:

Group 1: har + stem + et
  har talt (has spoken), har arbejdet (has worked), har spillet (has played)

Group 2: har + stem + t
  har købt (has bought), har læst (has read), har brugt (has used)

Group 3: irregular — must be memorized
  har skrevet (has written), har drukket (has drunk), har gået (has walked)

Movement verbs use "er" instead of "har":
  er gået (has gone), er kommet (has come), er rejst (has traveled)`,
    examples: [
      { da: 'Jeg har boet i Danmark i to år', en: 'I have lived in Denmark for two years', highlight: 'har boet' },
      { da: 'Hun har købt en ny taske', en: 'She has bought a new bag', highlight: 'har købt' },
      { da: 'Vi er gået hjem', en: 'We have gone home', highlight: 'er gået' },
      { da: 'De har skrevet en email', en: 'They have written an email', highlight: 'har skrevet' },
    ],
    detection: {
      pattern: 'wrong_participle',
      description: 'User used wrong past participle form'
    }
  },
  {
    id: 'word-order-v2',
    title: 'V2 Ordstilling (Verbum på andenplads)',
    titleEn: 'V2 Word Order (Verb in second position)',
    shortRule: 'In Danish main clauses, the verb MUST be in the second position (V2 rule).',
    fullExplanation: `Danish follows strict V2 (verb second) word order in main clauses. The finite verb must always be the SECOND element:

Normal: Jeg spiser æbler (I eat apples)
  Position 1: Jeg, Position 2: spiser

With time expression first:
  I morgen spiser jeg æbler (Tomorrow I eat apples)
  Position 1: I morgen, Position 2: spiser — subject moves AFTER the verb!

This is called INVERSION — when something other than the subject is in position 1, the subject and verb swap:
  Hver dag læser hun avisen (Every day she reads the newspaper)
  I København bor mange mennesker (In Copenhagen live many people)`,
    examples: [
      { da: 'I morgen rejser vi til Paris', en: 'Tomorrow we travel to Paris', highlight: 'rejser vi' },
      { da: 'Hver dag spiser hun frokost kl. 12', en: 'Every day she eats lunch at 12', highlight: 'spiser hun' },
      { da: 'I Danmark taler man dansk', en: 'In Denmark one speaks Danish', highlight: 'taler man' },
      { da: 'Desværre kan jeg ikke komme', en: 'Unfortunately I cannot come', highlight: 'kan jeg' },
    ],
    detection: {
      pattern: 'wrong_word_order',
      description: 'User placed the verb in wrong position'
    }
  },
];

// Helper to find a grammar rule by ID
export function getRuleById(id) {
  return grammarRules.find(r => r.id === id);
}

// Helper to get all rule IDs
export function getAllRuleIds() {
  return grammarRules.map(r => r.id);
}

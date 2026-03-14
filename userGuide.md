# 🇩🇰 DanishApp - Admin Content Guide

Welcome to the admin guide for **DanskPraksis (DanishApp)**! This document explains how you can manually update the different sections of the website. The website is entirely static and data-driven, which means all content is stored as simple JavaScript data structures inside the `src/data/` folder.

If you are using the AI Assistant, you can simply type **/add-classes** to trigger an automated workflow that will ask you for files and add the data for you!

---

## 1. Practice Exams (PD2 & PD3)
**Location:** `src/data/pd2Exams.js` and `src/data/pd3Exams.js`

To add a new practice exam:
1. Open the relevant file.
2. Scroll to the bottom of the main `const pd2Exams = [...]` array.
3. Add a new exam object using this structure:
```javascript
{
    id: "pd2-test-11", // Unique ID
    title: "Practice Test 11",
    year: "2024",
    season: "Forår",
    level: "PD2",
    concept: "Fill in the blanks reading comprehension",
    lessonContent: "Explanation of the exam context.",
    questions: [
        {
            id: "q1",
            text: "Sentence with a [BLANK] space.",
            textEn: "English translation of the sentence.",
            answer: "correct_word",
            options: "option1/option2/correct_word/option3",
            grammarCategory: "verbs",
            hint: "Explanation of why this is the answer."
        }
    ]
}
```

## 2. Grammar Lessons
**Location:** `src/data/lessons.js`

To add a new grammar lesson:
1. Open `src/data/lessons.js`.
2. Locate the `lessons` array.
3. Add a new object:
```javascript
{
    id: 'new-lesson-topic',
    title: 'Danish Title',
    titleEn: 'English Title',
    category: 'Grammatik',
    categoryEn: 'Grammar',
    difficulty: 'Beginner',
    sections: [
        {
            title: "Concept Explained",
            content: "Detailed markdown/text explanation.",
            examples: [
                { da: "Dansk eksempel.", en: "English example." }
            ]
        }
    ],
    practiceQuestions: [ /* Optional quiz questions */ ]
}
```

## 3. Verb Conjugations
**Location:** `src/data/verbs.js`

To add new verbs to the conjugation tables:
1. Open `src/data/verbs.js`.
2. Locate the appropriate group (`group1`, `group2`, `group3`, `modal`).
3. Add the new verb to the `verbs` array within that group:
```javascript
{ 
    infinitive: 'at spise', 
    present: 'spiser', 
    past: 'spiste', 
    perfect: 'har spist', 
    en: 'to eat' 
}
```

## 4. Vocabulary
**Location:** `src/data/vocabulary.js`

1. Open `src/data/vocabulary.js`.
2. Locate the category you wish to expand (e.g., `body`, `food`, `time`, `commonWords`).
3. Add a new object with Danish and English translations, and optionally an emoji or sentence:
```javascript
{ 
    da: 'en æble', 
    en: 'an apple', 
    emoji: '🍎', 
    sentence: 'Jeg spiser et æble.', 
    sentenceEn: 'I am eating an apple.' 
}
```

## 5. Daily Life Lessons
**Location:** `src/data/dailyLife.js`

1. Open `src/data/dailyLife.js`.
2. Add a new topic object with vocabulary and phrases.
3. If you generate a new line-art graphic, save it in `public/images/daily_life/your_image.png` and reference it in the `image:` property.

---

## Deploying Updates
Because the project runs on Next.js, once you update these files and push your changes to GitHub (`git commit` and `git push`), Vercel will automatically rebuild the site and deploy the fresh content within minutes!

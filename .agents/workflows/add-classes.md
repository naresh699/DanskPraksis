---
description: Add a new class, lesson, exam, or vocabulary to the DanishApp data
---
1. Greet the user and explicitly state that you are launching the "Add Classes" workflow.
2. Ask the user to choose which section they want to update. Present them with the following numbered list:
   - 1. Practice Exams (PD2 or PD3)
   - 2. Grammar Lessons
   - 3. Verb Conjugation
   - 4. Vocabulary
   - 5. Speaking Practice / Daily Life
   - 6. Other Documents / General Additions
3. Wait for the user to respond with their choice. Use `notify_user` with `BlockedOnUser: true`.
4. Once the user replies with their choice, clearly state the data structure requirements for that section (e.g. `src/data/pd2Exams.js`).
5. Ask the user to provide the content references. Ask them to either:
   - Provide an absolute path to a file or folder on their local machine.
   - Attach a document file directly into the chat prompt.
   - Provide a URL for you to read.
6. Wait for the user to provide the content source. Use `notify_user` with `BlockedOnUser: true`.
7. Extract the information using standard file/URL reading tools (e.g., `view_file` or `read_url_content` or by analyzing the attached document in `/tmp/`).
8. Convert and format the extracted content into the correct JSON-like JavaScript object structure for the requested file as documented in `userGuide.md`.
9. Use the `replace_file_content` or `multi_replace_file_content` tools to append the new data to the right data file in `src/data/`.
10. Confirm with the user that the site data has been successfully updated and offer to push the changes to GitHub.

## Language Switcher

One could easily notice that's there's two small and not very appealing buttons on top right corner of my website. They are the language switcher buttons. They allow you to switch between English and French. </br>
Since the creation of this portfolio, while I was still an OpenClassrooms student, I wanted to make it bilingual. I wanted to make it accessible to both English and French speakers. </br>
Not that I thought that my website would be visited by a lot of people, but I wanted to make it as accessible as possible. And I thought that making it bilingual would be a good way to do so. </br>
Plus, It would make me practice more skills. I mean, a lot of website got language switcher, so I thought it would be a good thing to learn how to make one. </br>
This one is only manual for now. I saw bigger website use automatic language switcher, based on the user's browser language. But for now, I stick with manual. Let's go step by step. </br>

*The funny thing is that I first write blog posts in English, but I'm French. So I have to translate my posts in French.* </br>

At first, the bilingual part was only available for the `project` page. But the buttons where visible on every page since I planned to make the whole website bilingual. </br>

**\- How ? </br>**

1. First, I installed the `react-i18next` library.
2. Then, I created a `i18n.ts` file to configure the library.
3. In the project.json file, who already contain the project data in French, I added the English translation. *Only `description` needed to be translated.*
4. Then, I added `fr` and `en` keys in the `project` object in the `project.json` file.
5. I created a `lngSwitcher` component to display the language switcher buttons, with `useTranslation` hook to get the translation functions and `i18n.changeLanguage` function to change the language.
6. When the user click on a button, the `changeLanguage` function is called with the language key as argument.
7. And **project data** under `fr` or `en` key is displayed based on the language key.
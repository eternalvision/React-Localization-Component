# **React ([Vite](https://vitejs.dev/)) Localization**

This project is a React-based application that facilitates language localization. It consists of several components that work together to allow users to switch the language of the application's interface and display content in the selected language. Here's a detailed description of its components and how they function together:

1. **HelloTitle Component:**

    - This component is responsible for displaying the title "Hello" in different languages based on the user's selection.
    - It uses the `Languages` object to retrieve the appropriate text using the `ExampleText` method, which returns an object containing localized strings.
    - The `selectedLang` prop determines which language's greeting to display.
    - `PropTypes` are used to ensure that `Languages` provides the necessary method and that `selectedLang` is a string.

2. **LanguageContext and LanguageProvider:**

    - `LanguageContext` is a React context that holds the current language state and a function to update it (`handleLangChange`).
    - `LanguageProvider` is a component that wraps the application, providing the language state and updater function to all components within its tree via the context.
    - It accepts an `initialLanguage` prop to set the default language, which is "cz" if not specified.
    - `PropTypes` are used to ensure that `children` is a React node and `initialLanguage` is a string.

3. **LocalizationComponent:**

    - This component renders buttons for each available language, allowing the user to switch between them.
    - It uses the `LocalizationButtons` method from the `Languages` object to get the button data.
    - It maintains its own `activeId` state to highlight the currently active language button.
    - When a button is clicked, it calls `handleLangChange` with the new language's `textId`, and updates the `activeId`.
    - `PropTypes` validate that `handleLangChange` is a function.

4. **Languages Object:**

    - It provides the data for localization through two methods: `LocalizationButtons` returns an array of objects for each language button, and `ExampleText` returns an object with localized strings for different languages.

5. **App Component:**

    - The main component of the application that uses the `LanguageContext` to access the current language and the function to update it.
    - It renders the `HelloTitle` component to display the greeting and the `LocalizationComponent` to allow language switching.
    - `PropTypes` are used to ensure the correct types for `LanguageContext`, `Languages`, `LocalizationComponent`, and `HelloTitle`.

6. **React Application Setup:**

    - The `ReactDOM.createRoot` method is used to initialize the app and render it into the DOM.
    - The entire application is wrapped in the `LanguageProvider` to make the language state and updater function available throughout the application.
    - The `App` component is passed the necessary props, including the `LanguageContext` and components like `Localization` and `Components`.

In essence, this project is structured to provide a multilingual experience, where users can select their preferred language, and the application will respond by displaying content in that language. The use of context allows for easy state management across the application, and the use of prop types ensures that components receive the correct data.

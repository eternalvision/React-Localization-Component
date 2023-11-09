# **HelloTitle.jsx**

1. **HelloTitle Component:**

    - The `HelloTitle` component takes two props: `Languages` and `selectedLang`.
    - `Languages` is expected to be an object that contains a method `ExampleText`, which returns localized text data.
    - `selectedLang` is a string that represents the currently selected language code (e.g., "en" for English, "cz" for Czech).

2. **Rendering Localized Text:**

    - Inside the component, `Languages.ExampleText()[selectedLang]` is called to retrieve an array of objects containing localized text for the `selectedLang`.
    - The `Values` variable stores this array, and the component maps over `Values` to render an `<h1>` element for each item.
    - Each `<h1>` element displays the `helloTitle` property from the corresponding object in the `Values` array. This property contains the localized greeting text.

3. **Key Prop:**

    - In the map function, each `<h1>` element is given a unique `key` prop to help React identify which items have changed, are added, or are removed. This key is a combination of the `helloTitle` string and the current index, ensuring it is unique for each element.

4. **PropTypes:**

    - `HelloTitle.propTypes` defines the prop types for the `HelloTitle` component, ensuring that it receives the correct props with the correct types.
    - `Languages` must be an object with a function `ExampleText` that is marked as required, ensuring that the component receives the necessary method to retrieve the localized text.
    - `selectedLang` must be a string and is also required, ensuring that the component knows which language to display.

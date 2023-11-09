# **LanguageContext.jsx**

1. **createContext:**

    - `export const LanguageContext = createContext();` creates a new Context object. When React renders a component that subscribes to this Context object, it will read the current context value from the closest matching `Provider` above it in the tree.

2. **LanguageProvider Component:**

    - `export const LanguageProvider = ({ children, initialLanguage }) => {...}` defines a `LanguageProvider` component that uses the `useState` hook to manage the state of the selected language (`selectedLang`).
    - The `useState` hook is initialized with `initialLanguage`, which can be passed as a prop to `LanguageProvider`. If no `initialLanguage` prop is provided, it defaults to `"cz"` as specified by `LanguageProvider.defaultProps`.
    - `handleLangChange` is a function that updates `selectedLang` when called. It takes a `lang` argument, which is expected to be the new language code, and calls `setSelectedLang` to update the `selectedLang` state.

3. **Context Provider:**

    - The `LanguageProvider` component returns a `LanguageContext.Provider` element. This component allows consuming components to subscribe to context changes.
    - The value prop of the `Provider` is an object containing the current language (`selectedLang`) and the `handleLangChange` function. This value is accessible to all child components of `LanguageProvider`.

4. **Children Prop:**

    - `{children}` is a special prop that includes any child elements passed into the component. In this case, any React elements wrapped inside `LanguageProvider` will have access to the `LanguageContext`.

5. **PropTypes:**

    - `LanguageProvider.propTypes` defines the prop types for the `LanguageProvider` component. It specifies that `children` is required and must be React nodes (i.e., anything that can be rendered by React, such as JSX or other components).
    - `initialLanguage` is also defined as a string, but it is not required due to the default value provided.

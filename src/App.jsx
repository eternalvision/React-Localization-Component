import { useContext } from "react";
import PropTypes from "prop-types";

export const App = ({
    LanguageContext,
    Languages,
    LocalizationComponent,
    HelloTitle,
}) => {
    const { selectedLang, handleLangChange } = useContext(LanguageContext);

    return (
        <>
            <HelloTitle Languages={Languages} selectedLang={selectedLang} />
            <LocalizationComponent handleLangChange={handleLangChange} />
        </>
    );
};

App.propTypes = {
    LanguageContext: PropTypes.object.isRequired,
    Languages: PropTypes.object.isRequired,
    LocalizationComponent: PropTypes.elementType.isRequired,
    HelloTitle: PropTypes.elementType.isRequired,
};

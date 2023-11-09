import { useState } from "react";
import PropTypes from "prop-types";

import { Languages } from "./Languages/Languages";

const Values = Languages.LocalizationButtons();

export const LocalizationComponent = ({ handleLangChange }) => {
    const [activeId, setActiveId] = useState(1);

    const handleClick = (id, textId) => {
        handleLangChange(textId);
        setActiveId(id);
    };

    return (
        <section className="Localization">
            {Values.map(({ id, text, textId }) => (
                <button
                    key={textId}
                    onClick={() => handleClick(id, textId)}
                    className={
                        activeId === id ? "activeLanguage" : "inactiveLanguage"
                    }>
                    {text}
                </button>
            ))}
        </section>
    );
};
LocalizationComponent.propTypes = {
    handleLangChange: PropTypes.func.isRequired,
};

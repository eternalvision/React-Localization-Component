import PropTypes from "prop-types";

export const HelloTitle = ({ Languages, selectedLang }) => {
    const Values = Languages.ExampleText()[selectedLang];

    return (
        <div>
            {Values.map(({ helloTitle }, index) => (
                <h1 key={`${helloTitle}${index}`}>{helloTitle}</h1>
            ))}
        </div>
    );
};

HelloTitle.propTypes = {
    Languages: PropTypes.shape({
        ExampleText: PropTypes.func.isRequired,
    }).isRequired,
    selectedLang: PropTypes.string.isRequired,
};

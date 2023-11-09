export const Languages = {
    LocalizationButtons: () => {
        return [
            { id: 1, text: "CZ", textId: "cz" },
            { id: 2, text: "EN", textId: "en" },
            { id: 3, text: "RU", textId: "ru" },
        ];
    },
    ExampleText: () => {
        return {
            cz: [
                {
                    helloTitle: "Ahoj světe!",
                },
            ],
            en: [
                {
                    helloTitle: "Hello world!",
                },
            ],
            ru: [
                {
                    helloTitle: "Привет, мир!",
                },
            ],
        };
    },
};

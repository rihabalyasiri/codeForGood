import faker from 'faker';



const Datas = [
    {
        id: Date.now(),
        gender: 'Herr',
        name: faker.name.lastName(),
        projektname: 'GPS Driver Tracking App',
        unternehmen: faker.company.companyName(),
        unternehmensArt: faker.company.companySuffix(),
        verwendung: 'I work for a delivery company and need a mobile app made for Android and IOS to provide the GPS location of drivers on a consistent basis.',
        technologie: 'Freie Hand',
        budget: 150,
        deadLine: '15.11.2020',
        img: './img/software.png',
        status: 'Done'

    },
    {
        id: Date.now(),
        gender: 'Frau',
        name: faker.name.lastName(),
        projektname: 'Taxi app project',
        unternehmen: faker.company.companyName(),
        unternehmensArt: faker.company.companySuffix(),
        verwendung: 'i want to add wallet and admin commission to my app where user and driver have to have credit in his wallet before order is placed by user and order is received by driver and then admin can define the percentage commission for each ride completed also user and driver see there wallet balance in there account page',
        technologie: 'Freie Hand',
        budget: 400,
        deadLine: '15.11.2020',
        img: './img/taxi-app.png',
        status: 'Done'
    },
    {
        id: Date.now(),
        gender: 'Frau',
        name: faker.name.lastName(),
        projektname: 'Build an app for hiring workers for temporary tasks',
        unternehmen: faker.company.companyName(),
        unternehmensArt: faker.company.companySuffix(),
        verwendung: 'I need an app that allows normal users to get a domestic worker for temporary work on demand. Anybody willing to render their services join. verification process involves uploading ID copy, picture, any certifications, letter of good conduct, and letters of recommendations.',
        technologie: 'Freie Hand',
        budget: 1500,
        deadLine: '15.11.2025',
        img: './img/social-mage.png',
        status: 'Done',
        projektZiel: '',
        projektErwartung: '',
        inhaltStruktur: '',
        inhalte: '',
        sonstigeInhalte: '',
        projektIdeen: '',
        mockup: '',
        mustHave: '',
        sprachen: '',
    },
    {
        id: Date.now(),
        gender: 'Frau',
        name: faker.name.lastName(),
        projektname: 'music App to be develop on android only',
        unternehmen: faker.company.companyName(),
        unternehmensArt: faker.company.companySuffix(),
        verwendung: faker.lorem.paragraph(3),
        technologie: 'Freie Hand',
        budget: 350,
        deadLine: '15.11.2025',
        img: './img/chinese-music-app.png',
        status: 'Done'
    },
];

console.log(Datas)

export default Datas;
// Dictionary. Contains the information about each session.
// Main key is 'id' plus the session ID (eg: '!A', '3B' etc)
// Structure is this:
// id1A : {
//     title
//     presenters
//     abstractURL
//     learnURL
// }

// We assume we only have three parallel streams.
// Note: the table that displays the program also assumes this, so 
// if we increase or decrease the number of streams here we'll need to 
// alter the width of the table cells
export const sessionStreams = ['A', 'B', 'C'];
// A default entry in sessionData which is displayed if we have no session info for a supplied key
export const emptyKey = 'emptyKey';

export const sessionData = {
    emptyKey : {
        title: 'Empty Title',
        presenters: '',
        abstractURL: '',
        learnURL: '',
    },
    id1A : {
        title: 'Integrating Emerging Technology and Property Law Doctrine in Undergraduate and Postgraduate Property and Trusts Law Teaching',
        presenters: 'Brendan Grigg, Flinders University',
        abstractURL: 'tbc',
        learnURL: 'TBC1'
    },
    id2A : {
        title: '2Integrating Emerging Technology and Property Law Doctrine in Undergraduate and Postgraduate Property and Trusts Law Teaching',
        presenters: 'Brendan Grigg, Flinders University',
        abstractURL: 'tbc',
        learnURL: 'TBC2'
    },
    id3A : {
        title: '3Integrating Emerging Technology and Property Law Doctrine in Undergraduate and Postgraduate Property and Trusts Law Teaching',
        presenters: 'Brendan Grigg, Flinders University',
        abstractURL: 'tbc',
        learnURL: 'TBC3'
    },
    id4A : {
        title: '3Integrating Emerging Technology and Property Law Doctrine in Undergraduate and Postgraduate Property and Trusts Law Teaching',
        presenters: 'Brendan Grigg, Flinders University',
        learnURL: 'TBC3'
    },
    id1B : {
        title: 'Integrating Emerging Technology and Property Law Doctrine in Undergraduate and Postgraduate Property and Trusts Law Teaching',
        presenters: 'Brendan Grigg, Flinders University',
        learnURL: 'TBC1'
    },
    id2B : {
        title: '2Integrating Emerging Technology and Property Law Doctrine in Undergraduate and Postgraduate Property and Trusts Law Teaching',
        presenters: 'Brendan Grigg, Flinders University',
        learnURL: 'TBC2'
    },
    id3B : {
        title: '3Integrating Emerging Technology and Property Law Doctrine in Undergraduate and Postgraduate Property and Trusts Law Teaching',
        presenters: 'Brendan Grigg, Flinders University',
        learnURL: 'TBC3'
    },
    id4B : {
        title: '3Integrating Emerging Technology and Property Law Doctrine in Undergraduate and Postgraduate Property and Trusts Law Teaching',
        presenters: 'Brendan Grigg, Flinders University',
        learnURL: 'TBC3'
    },
}
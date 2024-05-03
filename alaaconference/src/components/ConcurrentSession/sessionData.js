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
export const emptyKey = 'idNoSession';

export const sessionData = {
    idNoSession : {
        title: 'No session programmed',
        presenters: '',
        abstractURL: '',
        learnURL: '',
    },
    id1_1A : {
        title: 'Automating Empirical Legal Research: the Case of British and Australian Judgments',
        presenters: 'Ben Chen',
        abstractURL: '/docs/abstracts/1a',
        learnURL: 'TBC1'
    },
    id1_2A : {
        title: 'Enhancing Negotiation Skills in Legal Education: Harnessing Artificial Intelligence through a Chat Bot Approach',
        presenters: 'Dr Tammy Johnson',
        abstractURL: '/docs/abstracts/2a',
        learnURL: 'TBC2'
    },
    id1_3A : {
        title: 'Building GenAI into Law Assessments: How do students use genAI when given the chance?',
        presenters: 'Samantha Kontra, Senior Lecturer, Flinders University',
        abstractURL: 'tbc',
        learnURL: 'TBC3'
    },
    id1_4A : {
        title: 'Magic Defeat Magic? – An examination about AI plagiarism and the impact on legal education and research',
        presenters: 'Qinqing Xu, Lecturer (Assistant Professor), University of Manchester, UK',
        abstractURL: 'tbc',
        learnURL: 'TBC3'
    },
    id1_1B : {
        title: 'One Legal Future Post-Referendum: South Australia’s First Nations Voice',
        presenters: 'Dr Anna Olijnyk, Cornelia Koch, Madeleine Perrett',
        abstractURL: '/docs/abstracts/1b',
        learnURL: 'TBC2'
    },
    id1_2B : {
        title: 'Ngara: embedding truth-telling about the legal system in the Sydney Law School curriculum',
        presenters: 'Dr Fady Aoun, Associate Professor, Elisa Arcioni, Dr Louise Boon-Kuo, Louisa Di Bartolomeo, University of Sydney',
        learnURL: 'TBC2'
    },
    id1_3B : {
        title: "Embedding First Nations perspectives into the law curriculum, 'what do you do when it's all left up to you?'",
        presenters: "Dr Katie O'Bryan, Monash University",
        learnURL: 'TBC3'
    },
    id1_4B : {
        title: "'Zero tolerance to racism' - building law teachers' anti-racism capacities",
        presenters: "Jennifer Nielsen",
        learnURL: 'TBC3'
    },
    id1_1C : {
        title: "Developing Effective Law to Ban Planned Obsolescence in Goods?",
        presenters: "Dr Trish O'Sullivan, Senior Lecturer, Massey University, New Zealand",
        learnURL: 'TBC3'
    },
    id1_2C : {
        title: "Environmental Law and Earth's Futures: Discussing the role of legal scholarship and education in addressing environmental challenges by promoting precautionary risk management in environmental law pedagogy.",
        presenters: "Rhett Martin",
        learnURL: 'TBC3'
    },
    id1_3C : {
        title: "Sustainable Green Economy in the Era of Climate Change between Challenges and Hopes from Legal Perspective",
        presenters: "Ahmad Sabirin, Universitas Islam Internatsional, Indonesia",
        learnURL: 'TBC3'
    },
    id1_4C : {
        title: "NO ABSTRACT Greenwashing Downunder",
        presenters: "NO DETAILS M Adams",
        learnURL: 'TBC3'
    },
    id2_1A : {
        title: "AI + Legal Education: a new 'Diamond Age' or a threat to rights and values?",
        presenters: "Rob Chalmers, Senior Lecturer, Flinders University",
        learnURL: 'TBC3'
    },
    id2_2A : {
        title: "The use of AI in Legal Education: Superhero or Villain?",
        presenters: "Linda Telai, Victoria University",
        learnURL: 'TBC3'
    },
    id2_3A : {
        title: "\"I don't know why I'm doing this\": Teaching tech skills to law students",
        presenters: "Mark Ferraretto, Senior Lecturer, Professor Tania Leiman, Dean of Law, Dr James Scheibner, Lecturer, Flinders University",
        learnURL: 'TBC3'
    },
    id2_4A : {
        title: "Dissecting Factors Hindering the Establishment and Multiplicity of Digital Business Models of Law Practice in Kenya",
        presenters: "Consolata Maitha, Tutorial Fellow, Mount Kenya University",
        learnURL: 'TBC3'
    },
    id2_1B : {
        title: "The Honest Politician's Guide to Crime Control, updated",
        presenters: "Rick Sarre, University of South Australia",
        learnURL: 'TBC3'
    },
    id2_2B : {
        title: "An Interdisciplinary Approach to Understanding Assaults on Police: Enriching Criminal Laws and Sentencing Policy",
        presenters: "Kelley Burton, Kelly Hine, Catherine Creamer, Dimitra Lattas",
        learnURL: 'TBC3'
    },
    id2_3B : {
        title: "Bringing sexual offence law back into the classroom:  an argument for a trauma-informed curriculum to better equip law graduates for practice",
        presenters: "Emma Henderson, Kirsty Duncanson, La Trobe University",
        learnURL: 'TBC3'
    },
    id2_4B : {
        title: "Trauma-Informed Practice and the Criminal Trial: A Conceptual Framework for the 'Trauma-Informed Trial'",
        presenters: "Sarah Kendall",
        learnURL: 'TBC3'
    },
    id1_1C : {
        title: "NO ABSTRACT Indigenous Law in Climate Litigation",
        presenters: "NO DETAILS A Paul",
        learnURL: 'TBC3'
    },
    id1_2C : {
        title: "Developments, Opportunities, and Complexities in Global South Scholarship on Climate Litigation: Literature review of scholarship by authors based in or identifying from the Global South",
        presenters: "Jemima Roe",
        learnURL: 'TBC3'
    },
    id1_3C : {
        title: "Bridging the Gap: Integrating Engineering, Law, and Indigenous Self-Determination in Infrastructure Development",
        presenters: "Rachel Evans, Lecturer, University of Cantebury",
        learnURL: 'TBC3'
    },
    id1_4C : {
        title: "Interdisciplinary Relations of Law and Ethnology on the Issue of Indigenous Ethnic Group Recognition: A Case Study of the Taiwan Constitutional Court’s Judgment No 17 of 2022",
        presenters: "Chou Yu-Jie, Dr Chou Shih-Huang",
        learnURL: 'TBC3'
    },
    idNN : {
        title: "",
        presenters: "",
        learnURL: 'TBC3'
    },
}
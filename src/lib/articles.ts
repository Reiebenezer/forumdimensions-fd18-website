const members: Record<string, Member> = {
    "Feliciano": {
        "role": "Writer",
        "name": "Ashley Denise Feliciano",
        "desc": "Ashley Denise Feliciano is a 2nd year BS Computer Science student from the College of Information and Communications Technology in WVSU. She is currently one of the News Editors of Forum-Dimensions."
    },
    "Pomarejos": {
        "role": "Photojournalist",
        "name": "Yshi Mei Pomarejos"
    },
    "Linas": {
        "role": "Writer",
        "name": "Sarah Rose Linas",
        "desc": "Sarah Rose Linas is a 3rd year student from the University's College of Arts and Sciences, taking up Bachelor of Science in Biology. She is the Associate Editor of Forum-Dimensions."
    },
    "Bellosillo": {
        "role": "Writer",
        "name": "Clint Bellosillo",
        "desc": "Clint Bellosillo is a graduate of Bachelor of Science in Nursing and a former Features Editor of Forum-Dimensions."
    },
    "Delgado": {
        "role": "Photojournalist",
        "name": "Franz Chrysler Marie Delgado"
    },
    "Ruego": {
        "role": "Writer",
        "name": "Jomer Ruego",
        "desc": "Jomer Ruego is a junior taking up Bachelor of Science in Biology and is a Senior Staff Member of Forum-Dimensions."
    },
    "Acepcion": {
        "role": "Writer",
        "name": "Keminova Acepcion",
        "desc": "Keminova Acepcion is a 3rd year student of WVSU studying BS Biology under the College of Arts and Sciences. She is the Features Editor of Forum-Dimensions."
    },
    "Hembra": {
        "role": "Writer",
        "name": "Cybelle Rio Jhane Hembra",
        "desc": "Cybelle Rio Jhane Hembra is a 2nd year Bachelor of Secondary Education Major in Science under the College of Education in WVSU. She is currently one of the Editorial Assistants of Forum-Dimensions."
    },
    "Horneja": {
        "role": "Writer",
        "name": "Joanna Wayne Horneja",
        "desc": "Joanna Wayne Horneja is a Bachelor of Science in Nursing student from WVSU. She previously served as the Publication's Sports Editor."
    }


}

type Hierarchy = 'BannerStory' | 'InsideStory'
export interface Member {
    role: 'Photojournalist' | 'Writer'
    name: string
    desc?: string
}

export interface Article {
    type: Hierarchy
    headline: string
    date: string
    writer: Member[]
    pj: Member | string

    contents: string
    photos: string[]
    writerphoto: string[]
}

const articles: Article[] = [
    {
        type: 'BannerStory',
        headline: 'Activist groups mark Int\'l Students\' Day with mass dance',
        date: 'November 18, 2023, 12:38 a.m.',
        writer: [members['Feliciano']],
        pj: members['Pomarejos'],
        contents: `The Western Visayas Youth and Students Alliance held "Kilos Kabatan!" a flash mob in front of the West Visayas State University (WVSU) to commemorate International Students' Day, November 17.
                    Various mass organizations from different universities converged for a mass dance and picket rally, calling on the current administration to reallocate the confidential and intelligence funds to different sectors such as education instead.
                    The groups also renewed their opposition to the proposed mandatory Reserve Officers\' Training Corps in universities and colleges throughout the country.
                    Moreover, they urged the public to participate in the nationwide transport strike on Monday, November 20, ahead of the looming deadline for the consolidation of traditional jeepneys on December 31, 2023.
                    Kilos Kabataan! was led by various progressive groups from the University including Anakbayan - WVSU, League of Filipino Students - WVSU, and Oikos Ecological Movement - WVSU.
                    `,
        photos: [
            'Banner_Story/1.jpg',
            'Banner_Story/2.jpg',
            'Banner_Story/3.jpg',
            'Banner_Story/4.jpg',
            'Banner_Story/5.jpg',
            'Banner_Story/6.jpg',
            'Banner_Story/7.jpg',
        ],
        writerphoto: ['Banner_Story/writer.PNG']
    },
    {
        type: 'InsideStory',
        headline: 'WVSU-CON celebrates capping, candle lighting ceremony',
        date: 'August 30, 2022, 6:59 p.m.',
        writer: [members['Linas'], members['Bellosillo']],
        contents: `The West Visayas State University - College of Nursing (CON) Class of 2024, Batch Zephyr, held their Capping and Candlelighting Ceremony at the University Cultural Center, August 30.
                One hundred and thirteen student nurses became part of this ceremonial tradition, signifying their commitment to the nursing profession.
                “I trust that you will triumph over life\'s uncertainties because you are not just trained well but trained for excellence with compassion, commitment, and courage," President Joselito Villaruz emphasized in his welcome address.
                In nursing, the cap is a symbol of knowledge, wisdom, and skills. The pin insinuates reverence and responsibility. And the lamp symbolizes hope for love, understanding, health, and life.
                "Batch Zephyr, pursue your dreams, aim for excellence, stay relevant, and be brave and courageous for the challenges ahead. Soar on to wings like eagles,” said LTC. Jose Romulo Dilag, PAF (GSC), the ceremony's guest speaker.
                "Be like an eagle that will fly to greater heights  [...] It is now your duty to be excellent students,” he added in his inspirational message.
                Following the nurse's pledge and prayer, Batch Zephyr sang their batch song, "To The Sky".
                Dubbed as the "home of topnotchers," CON continues to nurture young and new breeds of nurses who embody both excellence and compassion. 
        `,
        photos: [
            'Inside_Story_1/1.jpg',
            'Inside_Story_1/2.jpg',
            'Inside_Story_1/3.jpg',
            'Inside_Story_1/4.jpg',
            'Inside_Story_1/5.jpg',
        ],
        writerphoto: ['Inside_Story_1/LINAS.jpg', 'Inside_Story_1/BELLOSILLO.png'],
        pj: members['Delgado']
    },
    {
        contents: `Arizza Julia Inocencio, a WVSU alumna, emerged as the triumphant champion in the prestigious King Sejong Institute - Korean Speaking Contest held at the Korean Cultural Center, Taguig City on June 24, competing with other Taga-West.
Inocencio's exceptional skills in Korean language proficiency, coupled with her ability to convey emotion and connect with the audience, set her apart from the other contestants. Her outstanding performance captivated the judges and the audience, earning her the esteemed first place in the competition.
Inocencio is set to represent the Philippines internationally in South Korea, where she will compete against the best Korean speakers from around the world.
Inocencio is an alumna of the College of Arts and Sciences and graduated in 2022.
Ereene Kate Bahia Garibay, a second-year Bachelor of Arts in Foreign Languages student, showcased her linguistic prowess and stage presence, securing 3rd place in the competition.
Additionally, third-year students from the same college, Jhazena Joy Siosan and Allisha Lein Rosales, also demonstrated remarkable language skills, captivating the audience with their fluency and command of the Korean language.
The King Sejong Institute - Korean Speaking Contest is an annual event that celebrates and promotes the Korean language and culture.
The competition serves as a platform for language enthusiasts to showcase their language skills and cultural understanding. Participants from various institutions and backgrounds compete for the chance to win prestigious prizes and international recognition.
`,
        date: 'June 30, 2023, 9:08 p.m.',
        headline: 'Taga-West triumphs in Korean-speaking contest, alum crowned champ',
        photos: [
            'Inside_Story_2/1.jpg',
        ],
        pj: 'Photo courtesy of Korean Cultural Center in the Philippines\' Facebook page',
        type: 'InsideStory',
        writer: [
            members['Ruego']
        ],
        writerphoto: [
            'Inside_Story_2/RUEGO.png'
        ]
    },
    {
        contents: `Arizza Julia Inocencio, a WVSU alumna, emerged as the triumphant champion in the prestigious King Sejong Institute - Korean Speaking Contest held at the Korean Cultural Center, Taguig City on June 24, competing with other Taga-West.
Inocencio's exceptional skills in Korean language proficiency, coupled with her ability to convey emotion and connect with the audience, set her apart from the other contestants. Her outstanding performance captivated the judges and the audience, earning her the esteemed first place in the competition.
Inocencio is set to represent the Philippines internationally in South Korea, where she will compete against the best Korean speakers from around the world.
Inocencio is an alumna of the College of Arts and Sciences and graduated in 2022.
Ereene Kate Bahia Garibay, a second-year Bachelor of Arts in Foreign Languages student, showcased her linguistic prowess and stage presence, securing 3rd place in the competition.
Additionally, third-year students from the same college, Jhazena Joy Siosan and Allisha Lein Rosales, also demonstrated remarkable language skills, captivating the audience with their fluency and command of the Korean language.
The King Sejong Institute - Korean Speaking Contest is an annual event that celebrates and promotes the Korean language and culture.
The competition serves as a platform for language enthusiasts to showcase their language skills and cultural understanding. Participants from various institutions and backgrounds compete for the chance to win prestigious prizes and international recognition.
`,
        date: 'July 06, 2023, 8:57 p.m.',
        headline: 'West Crew receives NCCA award for contributions to PH dance community',
        photos: [
            'Inside_Story_3/1.jpg',
            'Inside_Story_3/2.jpg',
            'Inside_Story_3/3.jpg',
            'Inside_Story_3/4.jpg',
            'Inside_Story_3/5.jpg',
        ],
        pj: 'Photos courtesy of West Crew’s Facebook page',
        type: "InsideStory",
        writer: [ members['Acepcion'] ],
        writerphoto: [ 'Inside_Story_3/ACEPCION.JPG'],
    },
    {
        contents: `In light of the recent network security enhancements, some students, faculty, and staff at the University are required to update their information in the Management Information Systems (MIS) Office database to be able to change their #WVSUConnects passwords.
                    According to MIS, this update is crucial as a subset of user information was reset during the network security equipment transition and requires reactivation.
                    It can be recalled that starting on November 20, features of the #WVSUConnects such as the mandatory password change and two-device limit for each account were implemented as part of the University’s effort to “strengthen the security of our network and protect [the] [users’] data.” 
                    Some users, however, have up-to-date information registered in the system and will be automatically redirected to the page where they can change their password. 
                    To update their information, class sections should facilitate the collection of the following for the students who were unable to connect to the University Wi-Fi :
                    • Student number
                    • Full name 
                    • Program 
                    • Year level
                    • Cellphone number  
                    • Email
                    The data should be compiled in an Excel file and must be sent to the MIS via mis@wvsu.edu.ph.
                    After the reactivation, users can then proceed to connect their devices to the university Wi-Fi and will be automatically prompted to change their passwords.
`,
        date: 'November 24, 2023, 9:10 a.m.',
        headline: 'Update info first to change #WVSUConnects password — MIS',
        photos: [
            'Inside_Story_4/1.jpg',
        ],
        pj: 'Publication material by John Lester Trafiero',
        type: "InsideStory",
        writer: [ members['Feliciano'] ],
        writerphoto: [ 'Inside_Story_4/FELICIANO.PNG'],
    },
    {
        contents: `The representatives from West Visayas State University Main Campus finished as first runners-up in the Mr. and Ms. Hinampang 2023 held at Himamaylan City, November 17.
                    First-year Broadcasting student Christine Elijah Porras and Charles Jude Clark Aloquina, a third-year student from the College of PESCAR, not only secured the first runner-up spot but also received the Best in Production Number award.
                    Aloquina's grooves on the dance floor were recognized as he was able to clinch the Best in Dance Showdown award.
                    The duo sealed the first runner-up position after delegates from the Himamaylan City Campus were crowned as this year’s Mr. and Ms. Hinampang.
                    `,
        date: 'November 20, 2023, 9:54 p.m.',
        headline: 'WVSU La Paz bets crowned as Mr. and Ms. Hinampang 2023 1st runners-up',
        photos: [
            'Inside_Story_5/1.jpg',
            'Inside_Story_5/2.jpg',
        ],
        pj: 'Publication material courtesy of the WVSU University Student Council',
        type: "InsideStory",
        writer: [ members['Hembra'], members['Horneja']],
        writerphoto: [ 
            'Inside_Story_5/HEMBRA.png',
            'Inside_Story_5/HORNEJA.png',
        ],
    }
]

export default articles
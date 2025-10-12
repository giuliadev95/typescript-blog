import type { BlogPost } from "../types/BlogPost";
import { categories } from "../types/Category";

// Declare an array of objects instanced from the Interface BlogPost
const BlogPostData : BlogPost[] = [
    {
        id: 0,
        title: "La prima lezione",
        firstLines:`
            C’è sempre un po’ di emozione, 
            la prima volta che ci si collega per insegnare online. 
            Lo schermo diventa una finestra su volti nuovi, curiosi, 
            a volte timidi, pronti ad ascoltare. Per un aspirante tutor, 
            quella prima lezione è molto più di un incontro: è l’inizio 
            di un percorso di fiducia, empatia e scoperta reciproca.
        `,
        body:`
            La prima lezione con uno studente nuovo può sembrare intimidatoria, soprattutto quando avviene online. Ma niente panico: con un po’ di preparazione puoi trasformarla in un’esperienza positiva sia per te che per lo studente.

            1. Preparati prima di tutto

            Rivedi i materiali o l’argomento che affronterete.

            Prepara una scaletta semplice della lezione, così avrai sempre un filo logico da seguire.

            Controlla microfono, webcam e connessione: niente di peggio di problemi tecnici all’inizio!

            2. Rompi il ghiaccio

            Dedica qualche minuto a conoscere lo studente: interessi, motivazioni, eventuali difficoltà precedenti.

            Fai domande aperte, ascolta e mostra entusiasmo.

            3. Chiarezza e struttura

            Spiega subito l’obiettivo della lezione.

            Alterna spiegazioni e esercizi pratici: così mantieni alta l’attenzione.

            Usa esempi concreti e pertinenti alla vita o agli interessi dello studente.

            4. Mantieni un tono positivo

            Non correggere in maniera brusca: valorizza prima ciò che lo studente fa bene.

            Incoraggia domande e dubbi, anche piccoli.

            5. Concludi con una piccola sintesi

            Riassumi ciò che avete fatto insieme.

            Dai uno o due compiti semplici da fare per la prossima lezione, così lo studente sente progressi tangibili.

            Consiglio extra:
            Non cercare di fare troppo nella prima lezione. L’obiettivo principale è creare fiducia e capire le esigenze dello studente. Una buona partenza è metà del successo!
                
        `,
        img:[
            {
                imgUrl:"/man-gives-lesson.jpg",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
        category: categories[0]
    },
    {
        id: 1,
        title: "Fare networking",
        firstLines:"Noi siamo le prime righe",
        body:"I'm the body, not very long, uh?",
        img:[
            {
                imgUrl:"/people-interconnected.jpg",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
        category: categories[1]
    },
    {
        id: 2,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
        body:"I'm the body, not very long, uh?",
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
        category: categories[1]
    },
    {
        id: 3,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
        body:"I'm the body, not very long, uh?",
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
        category: categories[2]
    },
    {
        id: 4,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
        body:"I'm the body, not very long, uh?",
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
         category: categories[3]
    },
    {
        id: 5,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
        body:"I'm the body, not very long, uh?",
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
         category: categories[3]
    },
    {
        id: 6,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
        body:"I'm the body, not very long, uh?",
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
         category: categories[3]
    },
    {
        id: 7,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
        body:"I'm the body, not very long, uh?",
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
         category: categories[3]
    },
    {
        id: 8,
        title: "Titolo0",
        firstLines:"Noi siamo le prime righe",
        body:"I'm the body, not very long, uh?",
        img:[
            {
                imgUrl:"/about-img.png",
                imgAlt:"A teacher giving an online class"
            }],
        createdAt: new Date('09/10/2025'),
         category: categories[3]
    },
]

export default BlogPostData;
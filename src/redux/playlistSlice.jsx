import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    idPlaylist: 1,
    titre: "Programmation Web",
    videos: [
      {
        id: 101,
        titre: "Introduction à JavaScript",
        description: "Une vidéo expliquant les bases de JavaScript.",
        miniature: "js.jpeg",
        duree: "10:05",
        commentaires: [
          "Super vidéo !",
          "Très bien expliqué.",
          "Merci pour les explications !",
          "Simple et efficace.",
          "J'adore cette vidéo !"
        ],
        likes: 150,
        dislikes: 5,
        lien: "https://www.youtube.com/watch?v=01ysRUHZbJI",
        auteur: {
          nom: "Dupont",
          prenom: "Jean",
          photo: "said.jpg"
        }
      },
      {
        id: 102,
        titre: "Les services Cloud",
        description: "Comprendre les différentes services cloud et les fournisseurs.",
        miniature: "servise.jpg",
        duree: "12:30",
        commentaires: [
          "Merci pour cette explication!",
          "Clair et précis.",
          "Bonne pédagogie.",
          "Très utile pour les débutants."
        ],
        likes: 200,
        dislikes: 10,
        lien: "https://www.youtube.com/watch?v=mMmiZTgOW2Q",
        auteur: {
          nom: "GAHI",
          prenom: "Said",
          photo: "said.jpg"
        }
      },
      {
        id: 103,
        titre: "Express JS #1 - Introduction & Setup",
        description: "Express js introduction et setup de base",
        miniature: "express.png",
        duree: "11:01",
        commentaires: [
          "What is your VSCode theme? Like your videos!",
          "I like Anson's lessons",
          "How would you recommend handling logs & traces?",
          "Your channel is underrated ❤"
        ],
        likes: 200,
        dislikes: 10,
        lien: "https://www.youtube.com/embed/P6RZfI8KDYc",
        auteur: {
          nom: "Anson",
          prenom: "The Developer",
          photo: "Ans.jpg"
        }
      },
      {
        id: 104,
        titre: "Mastering Laravel in Arabic",
        description: "Mastering Laravel in Arabic",
        miniature: "laravel.png",
        duree: "11:53",
        commentaires: [
          "واخيرا لارفل لارفل لارفل",
          "شكرا لك",
          "الله يجزيك الخير"
        ],
        likes: 200,
        dislikes: 10,
        lien: "https://www.youtube.com/embed/bXjRQM_VK_I",
        auteur: {
          nom: "Elzero ",
          prenom: "Elzero Web School",
          photo: "Ans.jpg"
        }
      },
      {
        id: 105,
        titre: "React JS pour débutants",
        description: "Apprenez les bases de React JS avec des exemples pratiques.",
        miniature: "react.png",
        duree: "15:20",
        commentaires: [
          "Excellent tutoriel !",
          "Merci, ça m'a beaucoup aidé.",
          "Les exemples sont parfaits.",
          "Quand la suite ?"
        ],
        likes: 180,
        dislikes: 8,
        lien: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
        auteur: {
          nom: "Smith",
          prenom: "John",
          photo: "john.jpg"
        }
      },
      {
        id: 106,
        titre: "Introduction à Node.js",
        description: "Découvrez comment utiliser Node.js pour le développement backend.",
        miniature: "node.png",
        duree: "13:45",
        commentaires: [
          "Très clair, merci !",
          "J'adore la partie sur les modules.",
          "Un peu rapide, mais utile.",
          "Super contenu !"
        ],
        likes: 220,
        dislikes: 12,
        lien: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        auteur: {
          nom: "Doe",
          prenom: "Jane",
          photo: "jane.jpg"
        }
      },
      {
        id: 107,
        titre: "Créer une API REST avec Django",
        description: "Tutoriel pour construire une API REST avec Django et Python.",
        miniature: "django.jpeg",
        duree: "18:10",
        commentaires: [
          "Génial pour les débutants !",
          "Merci pour les explications détaillées.",
          "J'attends la partie sur l'authentification.",
          "Top vidéo !"
        ],
        likes: 190,
        dislikes: 7,
        lien: "https://www.youtube.com/embed/0sMtoedWaf0?si=V-Tm3iInbkv10Zd6",
        auteur: {
          nom: "Garcia",
          prenom: "Maria",
          photo: "maria.jpg"
        }
      },
      {
        id: 108,
        titre: "CSS Grid Layout Masterclass",
        description: "Maîtrisez les layouts modernes avec CSS Grid.",
        miniature: "cssgrid.png",
        duree: "14:30",
        commentaires: [
          "Incroyable tutoriel !",
          "Les exemples sont super clairs.",
          "Merci pour cette leçon.",
          "Je vais refaire mes sites maintenant !"
        ],
        likes: 230,
        dislikes: 9,
        lien: "https://www.youtube.com/embed/EiNiSFIPIQE?si=GRLN2lOnTO6AXL8u",
        auteur: {
          nom: "Brown",
          prenom: "Alex",
          photo: "alex.jpg"
        }
      }
    ]
  },
  {
    idPlaylist: 2,
    titre: "Développement Mobile",
    videos: [
      {
        id: 201,
        titre: "Introduction à Flutter",
        description: "Découvrez les bases de Flutter pour le développement mobile.",
        miniature: "flutter.png",
        duree: "12:00",
        commentaires: [
          "Très bon tutoriel pour débuter avec Flutter.",
          "J'adore la simplicité de Flutter.",
          "Merci pour cette introduction claire."
        ],
        likes: 120,
        dislikes: 3,
        lien: "https://www.youtube.com/watch?v=1ukSR1GRtMU",
        auteur: {
          nom: "Martin",
          prenom: "Paul",
          photo: "paul.jpg"
        }
      },
      {
        id: 202,
        titre: "Créer une application Android avec Kotlin",
        description: "Apprenez à créer une application Android en utilisant Kotlin.",
        miniature: "kotlin.png",
        duree: "14:30",
        commentaires: [
          "Kotlin est vraiment puissant !",
          "Merci pour ce tutoriel détaillé.",
          "J'ai hâte de voir la suite."
        ],
        likes: 150,
        dislikes: 5,
        lien: "https://www.youtube.com/watch?v=5flXCF8pvME",
        auteur: {
          nom: "Lee",
          prenom: "Anna",
          photo: "anna.jpg"
        }
      },
      {
        id: 203,
        titre: "Développement iOS avec Swift",
        description: "Introduction au développement iOS avec Swift.",
        miniature: "swift.png",
        duree: "11:45",
        commentaires: [
          "Swift est un langage très intuitif.",
          "Super vidéo pour commencer avec iOS.",
          "Merci pour les explications."
        ],
        likes: 130,
        dislikes: 4,
        lien: "https://www.youtube.com/watch?v=6Z6zw6gHIg4",
        auteur: {
          nom: "Taylor",
          prenom: "Chris",
          photo: "chris.jpg"
        }
      }
    ]
  },
  {
    idPlaylist: 3,
    titre: "Bases de données",
    videos: [
      {
        id: 301,
        titre: "Introduction à SQL",
        description: "Apprenez les bases du langage SQL pour interagir avec les bases de données.",
        miniature: "sql.png",
        duree: "10:20",
        commentaires: [
          "Très bon tutoriel pour débuter avec SQL.",
          "Les exemples sont clairs et utiles.",
          "Merci pour cette introduction."
        ],
        likes: 110,
        dislikes: 2,
        lien: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        auteur: {
          nom: "Johnson",
          prenom: "Emily",
          photo: "emily.jpg"
        }
      },
      {
        id: 302,
        titre: "MongoDB pour les débutants",
        description: "Découvrez comment utiliser MongoDB, une base de données NoSQL.",
        miniature: "mongodb.png",
        duree: "13:10",
        commentaires: [
          "MongoDB est vraiment flexible.",
          "Merci pour ce tutoriel.",
          "J'adore la simplicité de MongoDB."
        ],
        likes: 140,
        dislikes: 6,
        lien: "https://www.youtube.com/watch?v=EE8ZTQxa0AM",
        auteur: {
          nom: "Brown",
          prenom: "Alex",
          photo: "alex.jpg"
        }
      },
      {
        id: 303,
        titre: "Introduction à PostgreSQL",
        description: "Apprenez les bases de PostgreSQL, un système de gestion de bases de données relationnelles.",
        miniature: "postgresql.png",
        duree: "12:50",
        commentaires: [
          "PostgreSQL est très puissant.",
          "Merci pour cette introduction.",
          "Les exemples sont très utiles."
        ],
        likes: 160,
        dislikes: 7,
        lien: "https://www.youtube.com/watch?v=qw--VYLpxG4",
        auteur: {
          nom: "Wilson",
          prenom: "Sarah",
          photo: "sarah.jpg"
        }
      }
    ]
  },
  {
    idPlaylist: 4,
    titre: "Intelligence Artificielle",
    videos: [
      {
        id: 401,
        titre: "Introduction au Machine Learning",
        description: "Découvrez les concepts de base du Machine Learning.",
        miniature: "ml.jpeg",
        duree: "15:00",
        commentaires: [
          "Très bon tutoriel pour débuter avec le ML.",
          "Les explications sont claires.",
          "Merci pour cette introduction."
        ],
        likes: 170,
        dislikes: 8,
        lien: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
        auteur: {
          nom: "Ng",
          prenom: "Andrew",
          photo: "andrew.jpg"
        }
      },
      {
        id: 402,
        titre: "Deep Learning avec TensorFlow",
        description: "Apprenez à utiliser TensorFlow pour le Deep Learning.",
        miniature: "tensorflow.png",
        duree: "16:30",
        commentaires: [
          "TensorFlow est un outil puissant.",
          "Merci pour ce tutoriel détaillé.",
          "J'adore la partie sur les réseaux de neurones."
        ],
        likes: 190,
        dislikes: 9,
        lien: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
        auteur: {
          nom: "Goodfellow",
          prenom: "Ian",
          photo: "ian.jpg"
        }
      },
      {
        id: 403,
        titre: "Introduction à l'IA avec Python",
        description: "Découvrez les bases de l'Intelligence Artificielle avec Python.",
        miniature: "python-ai.png",
        duree: "14:20",
        commentaires: [
          "Python est parfait pour l'IA.",
          "Merci pour cette introduction.",
          "Les exemples sont très utiles."
        ],
        likes: 180,
        dislikes: 7,
        lien: "https://www.youtube.com/watch?v=JcI5Vnw0b2c",
        auteur: {
          nom: "Russell",
          prenom: "Stuart",
          photo: "stuart.jpg"
        }
      }
    ]
  }
];

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    addPlaylist: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
export const actualites = [
  {
    slug: "solutions-performance-continuite",
    category: "Nouvelles solutions",
    title: "Des solutions IT pensées pour la performance et la continuité",
    excerpt:
      "Nous partageons régulièrement les nouveautés de notre écosystème et les offres qui peuvent accélérer vos projets d’infrastructure, de cybersécurité, de cloud et de collaboration.",
    sections: [
      {
        title: "Un écosystème en mouvement",
        paragraphs: [
          "Les technologies évoluent vite. Chaque lancement, chaque mise à jour et chaque nouvelle approche peut représenter une opportunité pour rendre votre environnement informatique plus fiable et plus simple à piloter.",
          "Notre veille nous permet d’identifier les solutions qui répondent à des besoins concrets, avec une attention particulière portée à la sécurité, à la continuité et à la facilité d’usage.",
        ],
      },
      {
        title: "Ce que nous suivons",
        paragraphs: [
          "Infrastructure, cybersécurité, cloud et collaboration : nous suivons les évolutions qui peuvent améliorer la performance de vos équipes et la résilience de vos systèmes.",
          "Chaque solution est ensuite replacée dans son contexte afin de distinguer l’innovation utile de l’effet de mode.",
        ],
      },
      {
        title: "Une sélection orientée vers vos enjeux",
        paragraphs: [
          "Notre rôle est de vous aider à faire le lien entre une technologie et votre réalité opérationnelle. Une solution pertinente doit pouvoir s’intégrer à votre environnement, à vos usages et à vos priorités.",
        ],
      },
    ],
  },
  {
    slug: "promotions-opportunites-it",
    category: "Promotions",
    title: "Des opportunités sélectionnées pour faire avancer vos projets",
    excerpt:
      "Offres ponctuelles, nouveautés et opportunités à ne pas manquer : nous vous aidons à repérer les occasions qui peuvent servir vos projets IT.",
    sections: [
      {
        title: "Des offres qui ont du sens",
        paragraphs: [
          "Une promotion n’est intéressante que si elle répond à un besoin réel. Nous sélectionnons les opportunités en tenant compte de leur pertinence pour votre environnement et de leur impact sur la durée.",
        ],
      },
      {
        title: "Anticiper les bons moments",
        paragraphs: [
          "Renouvellement d’équipement, évolution d’une solution ou lancement d’un projet : une veille régulière aide à mieux planifier les investissements et à prendre les bonnes décisions au bon moment.",
        ],
      },
    ],
  },
  {
    slug: "conseils-experts-choix-technologiques",
    category: "Conseils experts",
    title: "Les repères de nos experts pour faire les bons choix technologiques",
    excerpt:
      "Des repères pratiques pour mieux comprendre les solutions disponibles et faire des choix technologiques cohérents avec vos objectifs.",
    sections: [
      {
        title: "Commencer par les besoins",
        paragraphs: [
          "Le bon choix technologique commence par une compréhension précise des usages, des contraintes et des priorités de l’organisation. La technologie vient ensuite soutenir cette réalité.",
        ],
      },
      {
        title: "Mesurer la valeur dans le temps",
        paragraphs: [
          "Sécurité, évolutivité, accompagnement et coût global : plusieurs critères doivent être regardés ensemble pour construire un environnement durable et réellement utile.",
        ],
      },
    ],
  },
];

export function getActualite(slug) {
  return actualites.find((actualite) => actualite.slug === slug);
}

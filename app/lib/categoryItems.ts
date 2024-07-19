interface iAppProps {
    name: string;
    title: string;
    imageUrl: string;
    description: string;
    id: number;
}

export const categoryItems: iAppProps[] = [
    {
        id: 0,
        name: "beach",
        description: "This property is close to the beach.",
        title: "Beach",
        imageUrl: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
        id: 1,
        name: "trending",
        description: "This property is trending.",
        title: "Trending",
        imageUrl: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
        id: 2,
        name: "luxe",
        description: "This property is luxury.",
        title: "Luxe",
        imageUrl: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    },
    {
        id: 3,
        name: "garden",
        description: "This property is in a garden.",
        title: "Garden",
        imageUrl: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    }
]
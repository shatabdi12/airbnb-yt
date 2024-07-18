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
        id: 0,
        name: "trending",
        description: "This property is trending.",
        title: "Trending",
        imageUrl: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
    }
]
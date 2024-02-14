export type Project = {
    id: number,
    title: string,
    description: string,
    tags: { id: number, label: string }[],
    url: string,
    year: number,
    thumbnail: string
}

export type Knowledge = {
    id: number,
    icon: string,
    title: string,
    description: string,
}

export type Experience = {
    id: number,
    description: string,
    from: string,
    to: string,
    city: string,
    country: string,
    company: string
}
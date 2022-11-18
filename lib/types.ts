export type Category = {
    name: string,
    href: string,
    slug: string,
    imageSrc: string,
    description: string
}

export type NotFound = {
    message: string;
    description?: string;
}
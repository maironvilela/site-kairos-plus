export type Product = {
    id: string;
    title: string;
    price: number;
    originalPrice?: number;
    image: string;
    department: "Moda Masculina" | "Moda Feminina" | "Moda Infantil";
    category: string;
    sizes: string[];
};

export const products: Product[] = [
    // Moda Feminina
    {
        id: "f1",
        title: "Vestido Floral Midi",
        price: 249.90,
        originalPrice: 359.90,
        image: "https://placehold.co/600x800/png?text=Vestido+Floral",
        department: "Moda Feminina",
        category: "Vestidos",
        sizes: ["P", "M", "G", "GG"],
    },
    {
        id: "f2",
        title: "Blusa de Linho Premium",
        price: 129.90,
        originalPrice: 189.90,
        image: "https://placehold.co/600x800/png?text=Blusa+Linho",
        department: "Moda Feminina",
        category: "Blusas",
        sizes: ["P", "M", "G", "GG", "EXG"],
    },
    {
        id: "f3",
        title: "Calça Jeans Skinny Alta",
        price: 189.90,
        image: "https://placehold.co/600x800/png?text=Calca+Jeans",
        department: "Moda Feminina",
        category: "Jeans",
        sizes: ["38", "40", "42", "44", "46", "48", "50"],
    },
    {
        id: "f4",
        title: "Conjunto Fitness Power",
        price: 159.90,
        image: "https://placehold.co/600x800/png?text=Fitness+Fem",
        department: "Moda Feminina",
        category: "Fitness",
        sizes: ["P", "M", "G", "GG"],
    },
    {
        id: "f5",
        title: "Saída de Praia Longa",
        price: 99.90,
        image: "https://placehold.co/600x800/png?text=Saida+Praia",
        department: "Moda Feminina",
        category: "Moda Praia",
        sizes: ["Unique"],
    },

    // Moda Masculina
    {
        id: "m1",
        title: "Camisa Polo Clássica",
        price: 89.90,
        image: "https://placehold.co/600x800/png?text=Polo+Classica",
        department: "Moda Masculina",
        category: "Camisas",
        sizes: ["P", "M", "G", "GG", "XG"],
    },
    {
        id: "m2",
        title: "Calça Jeans Slim",
        price: 149.90,
        originalPrice: 199.90,
        image: "https://placehold.co/600x800/png?text=Jeans+Slim",
        department: "Moda Masculina",
        category: "Jeans",
        sizes: ["38", "40", "42", "44", "46", "48"],
    },
    {
        id: "m3",
        title: "Bermuda Chino",
        price: 119.90,
        image: "https://placehold.co/600x800/png?text=Bermuda+Chino",
        department: "Moda Masculina",
        category: "Bermudas",
        sizes: ["38", "40", "42", "44"],
    },
    {
        id: "m4",
        title: "Jaqueta Bomber",
        price: 299.90,
        image: "https://placehold.co/600x800/png?text=Jaqueta+Bomber",
        department: "Moda Masculina",
        category: "Jaquetas",
        sizes: ["P", "M", "G", "GG"],
    },

    // Moda Infantil
    {
        id: "i1",
        title: "Conjunto Moletom Dino",
        price: 129.90,
        image: "https://placehold.co/600x800/png?text=Conjunto+Dino",
        department: "Moda Infantil",
        category: "Conjuntos",
        sizes: ["4", "6", "8", "10", "12"],
    },
    {
        id: "i2",
        title: "Vestido Festa Princesa",
        price: 159.90,
        image: "https://placehold.co/600x800/png?text=Vestido+Princesa",
        department: "Moda Infantil",
        category: "Vestidos",
        sizes: ["4", "6", "8", "10"],
    },
    {
        id: "i3",
        title: "Camiseta Personagens",
        price: 49.90,
        image: "https://placehold.co/600x800/png?text=Camiseta+Kids",
        department: "Moda Infantil",
        category: "Camisetas",
        sizes: ["2", "4", "6", "8", "10", "12"],
    },
    {
        id: "i4",
        title: "Macacão Jeans Kids",
        price: 119.90,
        image: "https://placehold.co/600x800/png?text=Macacao+Jeans",
        department: "Moda Infantil",
        category: "Jeans",
        sizes: ["2", "4", "6", "8"],
    },
];

export class Review {
    author: string;
    rating: number;
    reviewText: string
    createdOn: string;
}

export class Location {
    _id: string;
    name: string;
    distance: number;
    address: string;
    rating: number;
    facilities: string[];
    reviews: Review[];
}

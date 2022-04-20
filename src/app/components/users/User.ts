export interface User{
    id: number,
    name: {
        firstname: string;
        lastname: string;
    },
    username: string;
    password: string;
    address: {
        geolocation: {
            lat: string,
            long: string
          },
        number?: number;
        street?: string;
        city?: string;
        zipcode?: string;
    },
    email: string;
    phone: string;
    image: string;
}
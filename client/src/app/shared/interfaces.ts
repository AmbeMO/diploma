export interface User {
    name?: string;
    lastName?: string;
    email: string;
    password: string;
}
export interface Recipe {
    id: string;
    title: string;
    description: string;
    is_vegeterian?: boolean;
    is_beverage?: boolean;
    howToCook: string;
    userId?: string;
    ingridients: string;
    img_link?: string;


}
// export interface Admin {
//     email: string
//     password: string
//     returnSecureToken?: boolean
// }
//
// export interface dbAuthResponse {
//     token: string
//     expiresIn: string
// }
// export interface DbCreateResponse {
//     name: string,
// }

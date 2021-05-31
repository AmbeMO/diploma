export interface User {
    name?: string;
    lastName?: string;
    email: string;
    password: string;
}
export interface Recipe {
    title: string;
    description: string;
    isVegeterian?: boolean;
    isBeverage?: boolean;
    howToCook: string;
    userId?: string;
    ingridients: string;
    imgLink?: string;


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

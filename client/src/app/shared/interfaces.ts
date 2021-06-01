export interface User {
    name?: string;
    lastName?: string;
    email: string;
    password: string;
}
export interface Recipe {
    id?: string;
    title: string;
    description: string;
    is_vegeterian?: boolean;
    is_beverage?: boolean;
    how_to_cook?: string;
    howToCook?: string;
    userId?: string;
    ingridients: string;
    img_link?: string;
    imgLink?: string;
    video_link?: string;
    videoLink?: string;
    author_full_name?: string;
    authorFullName?: string;


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

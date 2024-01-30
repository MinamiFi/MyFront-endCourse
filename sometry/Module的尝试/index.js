import { name, age, sex } from "./profile.js";

export function Person(){
    console.log(`我是${name},我今年${age}岁,我是${sex}`);
}
Person();

// export default function person(){
//     console.log(`我是${name},我今年${age}岁,我是${sex}`);
// }
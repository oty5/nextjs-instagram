import { client } from "./sanity";
// import { EmailData } from "./email";

// export async function searchUser(username: string) {
//     const response = await fetch("/api/search", {
//         method: "POST",
//         body: JSON.stringify(username),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });

//     const data = await response.json();
//     if (!response.ok) {
//         throw new Error(data.message || "서버 요청 실패");
//     }
//     return data;
// }

// "id":_id,
// following[]->{username, image},
// followers[]->{username, image},
// "bookmarks":bookmarks[]->_id

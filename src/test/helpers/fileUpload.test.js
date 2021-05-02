// import cloudinary from "cloudinary";
// import "@testing-library/jest-dom";
// import { fileUpload } from "../../helpers/fileUpload";

// cloudinary.config({
//   cloud_name: "ddfay2trk",
//   api_key: "695764233583911",
//   api_secret: "hVVOxmn4VD3Y52g5Ayh0bjHzBs8",
// });

describe("Test ", () => {
  test("Test good", () => {});
});

// describe("Pruebas de file upload", () => {
//   test("Debe de cargar un archivo y retonar el url", async (done) => {
//     const response = await fetch(
//       "https://pbs.twimg.com/profile_images/988272404915875840/lE7ZkrO-_400x400.jpg"
//     );
//     const blob = await response.blob();
//     const file = new File([blob], "foto.jpg");

//     const url = await fileUpload(file);
//     expect(typeof url).toBe("string");
//     const segments = url.split("/");
//     const imageId = segments[segments.length - 1].replace(".jpg", "");

//     cloudinary.v2.api.delete_resources(imageId, {}, () => {
//       done();
//     });
//   });

//   test("Debe de cargar un error", async () => {
//     const file = new File([], "foto.png");

//     const url = await fileUpload(file);
//     expect(url).toBe(null);
//   });
// });

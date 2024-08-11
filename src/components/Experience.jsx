// import React from "react";
// import { ORGANIZATION } from "../constants";
// function Experience() {
//   return (
//     <div className="min-h-[100vh] pt-[100px] pb-[100px] pr-[15px] pl-[15px] text-white">
//       <div className="md:text-5xl text-4xl font-bold md:mt-16 flex justify-center text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white p-2 ">
//         Experience
//       </div>
//       <div className="max-w-[1000px] m-auto flex flex-wrap relative">
//         <div className="absolute w-[2px] h-[100%] bg-white sm:left-[calc(50%-1px)] left-[7px] mt-5"></div>
//         {/* item1 */}
//         <div className="relative w-[100%] mb-[40px] sm:pr-[calc(50%+30px)] pr-0 mt-10">
//           <div className="dot absolute bg-white h-[16px] w-[16px] rounded-full sm:left-[calc(50%-8px)] left-0 mt-4"></div>
//           <div className="absolute mb-4 pl-3 pr-3 pt-2 pb-2 mr-3 sm:left-[calc(50%+20px)] left-8 md:text-base text-sm rounded-xl   border-[0.5px] border-slate-100/50 backdrop-filter backdrop-blur-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-200 hover:scale-[1.1]">
//             25 Juni 2024 - 24 Juli 2035
//           </div>
//           <div className="sm:w-full w-[90%] sm:ml-0 ml-8 h-full p-[30px] mt-16 sm:mt-0 rounded-3xl  bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl   ">
//             <h2 className="text-2xl font-semibold">Web Developer Intern </h2>
//             <h2 className="text-lg font-thin mb-4">
//               Dinas Kearsipan dan Perpustakaan Kabupaten Purbalingga
//             </h2>
//             <ul className="list-decimal ml-4">
//               <li>
//                 Revamped the official government website's design and UI,
//                 implementing improvements and features to enhance user
//                 experience and functionality, improving user engagement by 20%.
//               </li>
//               <li>
//                 Conducted testing on the Inlislite application based on Yii 2
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="relative w-[100%] mb-[40px] sm:pl-[calc(50%+30px)] pr-0 mt-16">
//           <div className="dot absolute bg-white h-[16px] w-[16px] rounded-full sm:left-[calc(50%-8px)] left-0 mt-4"></div>
//           <div className="absolute mb-4 pl-3 pr-3 pt-2 pb-2 sm:right-[calc(50%+20px)] ml-[30px] md:text-base text-sm rounded-xl border-[0.5px] border-slate-100/50 backdrop-filter backdrop-blur-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-200 hover:scale-[1.1] transition-transform duration-300 inline-block">
//             25 Juni 2024 - 24 Juli 2035
//           </div>
//           <div className="sm:w-full w-[90%] sm:ml-0 ml-8 h-full p-[30px] mt-16 sm:mt-0 rounded-3xl  bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl   ">
//             <h2 className="text-2xl font-semibold">Web Developer Intern </h2>
//             <h2 className="text-lg font-thin mb-4">
//               Dinas Kearsipan dan Perpustakaan Kabupaten Purbalingga
//             </h2>
//             <ul className="list-decimal ml-4">
//               <li>
//                 Revamped the official government website's design and UI,
//                 implementing improvements and features to enhance user
//                 experience and functionality, improving user engagement by 20%.
//               </li>
//               <li>
//                 Conducted testing on the Inlislite application based on Yii 2
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>

//     // <div className="relative max-w-[1200px] h-fit  mb-[100px] mt-[100px] ml-auto mr-auto text-white">
//     //   {/* line */}
//     //   <div className="absolute top-0 sm:mt-12 sm:left-[50%] left-[6%] w-[4px] h-[100%] bg-white sm:ml-[-1px] mt-[50px] mb-[50px] ml-auto mr-auto">
//     //     <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black text-center ml-[-10px]"></div>{" "}
//     //     <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black text-center ml-[-10px] mt-96"></div>
//     //   </div>
//     //   {/* stack 1 */}
//     //   <div className="relative sm:w-[50%] w-full pl-[50px] sm:p-12  flex place-content-center items-center bg-red-">
//     //     <div className="w-full h-full pl-10 pt-6 pb-8 pr-4 rounded-3xl  bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl mt-10 sm:mt-0 sm:mr-0 mr-8 ">
//     //       <div className="inline-block mb-4 pl-3 pr-3 pt-2 pb-2 mr-3 md:text-base text-sm rounded-xl   border-[0.5px] border-slate-100/50 backdrop-filter backdrop-blur-4xl text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-200 hover:scale-[1.1]">
//     //         25 Juni 2024 - 24 Juli 2035
//     //       </div>
//     //       <h2 className="text-2xl font-semibold">Web Developer Intern </h2>

//     //       <h2 className="text-lg font-thin mb-4">
//     //         Dinas Kearsipan dan Perpustakaan Kabupaten Purbalingga
//     //       </h2>

//     //       <ul className="list-decimal ml-4">
//     //         <li>
//     //           Revamped the official government website's design and UI,
//     //           implementing improvements and features to enhance user experience
//     //           and functionality, improving user engagement by 20%.
//     //         </li>
//     //         <li>
//     //           Conducted testing on the Inlislite application based on Yii 2
//     //         </li>
//     //       </ul>
//     //     </div>
//     //   </div>

//     //   <div className="relative md:w-[50%] left-[50%] w-fit md:p-12 p-10 flex place-content-center items-center">
//     //     <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black text-center  left-[-12.5px] flex  "></div>
//     //     <div className="w-full h-full pl-10 pt-6 pb-8 pr-4 rounded-3xl  bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl">
//     //       <h2 className="text-2xl font-semibold">Web Developer Intern </h2>

//     //       <h2 className="text-lg font-thin mb-4">
//     //         Dinas Kearsipan dan Perpustakaan Kabupaten Purbalingga
//     //       </h2>

//     //       <ul className="list-decimal ml-4">
//     //         <li>
//     //           Revamped the official government website's design and UI, //
//     //           implementing improvements and features to enhance user //
//     //           experience and functionality, improving user engagement by 20%.
//     //         </li>
//     //         <li>
//     //           Conducted testing on the Inlislite application based on Yii 2
//     //         </li>
//     //       </ul>
//     //     </div>
//     //   </div>
//     // </div>

//     // <div className="text-white max-w-[1350px] mx-auto mb-8 md:mb-32 md:mt-12 mt-14 flex justify-center items-center">
//     //   <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
//     //     {/* stack 1 */}
//     //     <div className="col-span-4 w-full h-full">
//     //       <div className="w-full h-full pl-10 pt-6 pb-8 pr-4 rounded-3xl  bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl">
//     //         <h2 className="text-2xl font-semibold">Web Developer Intern </h2>
//     //         <h2 className="text-lg font-thin mb-4">
//     //           Dinas Kearsipan dan Perpustakaan Kabupaten Purbalingga{" "}
//     //         </h2>
//     //         <ul className="list-decimal ml-4">
//     //           <li>
//     //             Revamped the official government website's design and UI,
//     //             implementing improvements and features to enhance user
//     //             experience and functionality, improving user engagement by 20%.
//     //           </li>
//     //           <li>
//     //             Conducted testing on the Inlislite application based on Yii 2
//     //           </li>
//     //         </ul>
//     //       </div>
//     //     </div>

//     //     <div className="relative col-span-1 w-full h-full flex justify-center items-center">
//     //       <div className="h-full w-1 bg-white"></div>
//     //       <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black text-center">
//     //         1
//     //       </div>
//     //     </div>
//     //     <div className=" col-span-4 w-full h-full"></div>

//     //     {/* stack2 */}
//     //     <div className=" col-span-4 w-full h-full"></div>
//     //     <div className="relative col-span-1 w-full h-full flex justify-center items-center">
//     //       <div className="h-full w-1 bg-white"></div>
//     //       <div className="absolute w-6 h-6 rounded-full bg-white z-10 text-black text-center">
//     //         1
//     //       </div>
//     //     </div>
//     //     <div className="col-span-4 w-full h-full">
//     //       <div className="w-full h-full pl-10 pt-6 pb-8 pr-4 rounded-3xl  bg-gradient-to-b from-slate-300/10 border-[0.5px] border-slate-500/50 backdrop-filter backdrop-blur-4xl">
//     //         <h2 className="text-2xl font-semibold">Web Developer Intern </h2>
//     //         <h2 className="text-lg font-thin mb-4">
//     //           Dinas Kearsipan dan Perpustakaan Kabupaten Purbalingga{" "}
//     //         </h2>
//     //         <ul className="list-decimal ml-4">
//     //           <li>
//     //             Revamped the official government website's design and UI,
//     //             implementing improvements and features to enhance user
//     //             experience and functionality, improving user engagement by 20%.
//     //           </li>
//     //           <li>
//     //             Conducted testing on the Inlislite application based on Yii 2
//     //           </li>
//     //         </ul>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }

// export default Experience;

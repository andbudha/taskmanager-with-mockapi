export const styles = {
  app: {
    bg: `h-screen w-screen flex justify-center items-center bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  },
  todoAppContainer: {
    loaderBox: 'h-screen w-screen	flex justify-center items-center',
    box: `container w-80 sm:w-80 md:w-96 lg:w-96 mx-auto bg-[#e7e5e4] p-5 rounded-md `,
    header: `text-center mb-4 tracking-wide text-2xl text-[#09090b]`,
    listLoaderBox: `flex justify-center items-center h-[150px] w-[100%]`,
  },
  todoAppForm: {
    formBox: `flex justify-between items-center h-[60px] `,
    inputBox: `h-[50px] p-2  w-56 sm:w-56 md:w-72 lg:w-72 rounded tracking-wider border border-[#f97316] outline-[#f97316] text-[#09090b] `,
    formButton: `flex justify-center items-center	h-[50px] w-[50px] bg-[#f97316] rounded ml-1 text-[#f8fafc]`,
    icon: `h-[20px] w-[20px]`,
  },
  todoAppList: {
    list: `relative`,
    todo: `flex items-center justify-between h-[50px] w-[100%] bg-[#f4f4f5] my-2 p-3 rounded tracking-wide border border-[#f97316] text-[#09090b]`,
    checkBoxContainer: `flex items-center`,
    checkBox: `w-[20px] h-[20px] mr-2 border-2 border-slate-400 cursor-pointer accent-[#f97316]`,
    doneIcon: `font-bold`,
    trashBinIcon: `h-[22px] w-[22px] cursor-pointer text-[#09090b]`,
  },
};

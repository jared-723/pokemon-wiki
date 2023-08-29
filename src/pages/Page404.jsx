const Page404 = () => {
  return (
    <main className="bg-[#e8ebf1] h-screen xl:flex-row sm:px-2 flex flex-col justify-center items-center">
      <h1 className="text-center text-[60px] font-bold font-serif">
        Error 404
      </h1>
      <p className="text-semibold text-[30px] text-center font-serif px-[5px]">
        Oops! We're sorry, but the page you're trying to find doesn't exist.
      </p>
      <div className="page404Bg"></div>
    </main>
  );
}
export default Page404
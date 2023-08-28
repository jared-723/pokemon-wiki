const FooterPokeball = ({ darkmode }) => {
  return (
    <section>
      <div className={`h-16 ${darkmode ? 'bg-[#ffc125]' :' bg-[#DD1A1A]'} `}></div>
      <div className="h-12 bg-black relative">
        <div
          className={`h-14 aspect-square bg-white rounded-full absolute 
                left-1/2 -translate-x-1/2 -top-8 border-[8px] border-black
                after:block after:content-[''] after:h-8 after:aspect-square
                after:rounded-full after:absolute after:left-1/2 
                after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-[5px] after:border-black ${darkmode ? 'after:bg-[#3e3213]' : 'after:bg-[#212121]'}`}
        ></div>
      </div>
    </section>
  );
};
export default FooterPokeball;

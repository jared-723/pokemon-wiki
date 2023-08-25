const FooterPokeball = () => {
    return (
        <section>
            <div className="h-16 bg-red-700"></div>
            <div className="h-12 bg-black relative">
                <div className="h-14 aspect-square bg-white rounded-full absolute 
                left-1/2 -translate-x-1/2 -top-6 border-[8px] border-black
                after:block after:content-[''] after:h-8 after:aspect-square after:bg-green-500 after:rounded-full"></div>
            </div>
        </section>
    )
}
export default FooterPokeball
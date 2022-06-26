// Returns a <Footer> component with the given props.
const Footer = () => {

    return (
        <section className="absolute bottom-0 flex flex-col items-center justify-center w-full h-16 gap-1 bg-colour-2 md:h-20">
            <p className="text-colour">Extraemily &copy; 2022</p>
            <p className="text-colour">Made by <a className="accent-colour hover:underline" href="https://github.com/QiyuanChen02/extraemily">FailToWin_</a> with &#9829;</p>
        </section>
    )
}

export default Footer
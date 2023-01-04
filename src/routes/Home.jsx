import { Link } from "react-router-dom";
import Nav from "../components/navBar/Nav";

function Home() {
  return (
    <div className="lg:bg-home-desktop md:bg-home-tablet sm:bg-home-mobile bg-home-mobile bg-no-repeat bg-cover text-white">
      <Nav />
      <main className="relative flex">
        <section className="flex flex-col m-40 w-4/12">
          <p className="font-barlow text-2xl tracking-widest">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h2 className="font-bellefair text-9xl mt-6 mb-6 w-4/12">SPACE</h2>
          <p className="max-w-4/12 text-justify font-barlow text-light">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <section>
          <Link
            to={"/destination"}
            className="text-dark
                    before:bg-white
                    before:rounded-[100%]
                    before:h-80 before:w-80
                    before:left-2/4
                    before:top-2/4
                    before:-mt-40
                    before:-ml-40
                    before:opacity-0
                    before:hover:opacity-10
                    before:transition
                    before:ease-linear
                    before:delay-200
                    before:hover:transition
                    before:hover:ease-linear
                    before:absolute
                    mt-52
                    before:inset-0
                    ml-56
                    text-3xl
                    font-bellefair
                    bg-white
                    flex
                    items-center
                    justify-center
                    rounded-[100%]
                    w-52
                    h-52
                    cursor-pointer
                      relative"
          >
            EXPLORE
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;

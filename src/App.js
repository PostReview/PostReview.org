import { FaShippingFast } from "react-icons/fa";
import { BiConfused } from "react-icons/bi";

function App() {
  return (
    <div className="flex flex-col bg-black min-h-screen">
      <header className="m-6 bg-black text-white ">
        <h1 className="text-3xl"> &#9439; PostReview</h1>
      </header>
      <main className="bg-black">
        <div
          id="hero"
          className="bg-hero-background h-4/6 bg-center bg-no-repeat bg-cover"
        >
          <div className="px-6 md:px-12 lg:px-24 py-12">
            <div>
              <div className="text-3xl md:text-5xl lg:text-7xl text-white">
                Rotten Tomatoes<sup>©</sup> for <br /> Research Articles
              </div>
              <div className="text-xl text-pr-blue mt-4">
                Rate and discover articles that matter the most
              </div>
            </div>
            <div id="signup-container" className="py-6">
              <input
                type="text"
                className="rounded-full placeholder-gray-500 px-12 bg-gray-100 h-8 w-auto"
                placeholder="email@example.com"
              />
              <button className="bg-pr-blue mx-2 rounded-full h-8 w-auto px-4 text-white">
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="mt-24 mb-6 flex justify-center">
          <h1 className="text-pr-blue text-4xl">Science Can Be Better</h1>
        </div>
        <div
          id="story-section"
          className="text-xl text-white flex justify-center"
        >
          <div id="story-card" className="m-2 w-3/4 flex justify-center">
            <div className="flex flex-col items-center flex-1 m-6 p-6 border-2 border-gray-800 rounded-lg">
              <div>
                <FaShippingFast className="inline m-3 text-6xl" />
              </div>
              <div>Have you wished to perform literature serach faster?</div>
            </div>
            <div className="flex flex-col items-center flex-1 my-6 p-6 border-2 border-gray-800 rounded-lg">
              <div>
                <BiConfused className="inline m-3 text-6xl" />
              </div>
              <div>
                Have you found papers you thought they were good quality, only
                to find out they were not?
              </div>
            </div>
          </div>
        </div>
        <div
          id="call-to-action"
          className="text-white m-3 mt-12 flex justify-center text-xl"
        >
          <div className="w-1/2">
            <h1 className="text-2xl text-pr-blue">PostReview</h1>
            <p>
              We are bulding a platform where academics rate the quality of
              scholarly articles (just like Rotten Tomatoes for movies). You can
              browse other users’ ratings and submit your own at PostReview.
              Based on these ratings, you can focus on only the best research
              out there.
            </p>
          </div>
        </div>

        <div
          id="call-to-action"
          className="text-white m-3 mt-12 flex justify-center text-xl"
        >
          <div className="w-1/2">
            <h1 className="text-2xl text-pr-blue">Join the Waiting List</h1>
            <p>Please join the waitlist to stay updated.</p>
            <div id="signup-container" className="py-6">
              <input
                type="text"
                className="rounded-full placeholder-gray-500 px-12 bg-gray-100 h-8 w-auto"
                placeholder="email@example.com"
              />
              <button className="bg-pr-blue mx-2 rounded-full h-8 w-auto px-4 text-white">
                Join the Waitlist
              </button>
            </div>

          </div>
        </div>
      </main>
      <footer className="bg-black text-white flex-grow">
        <div className="m-6 ">
          <div id="disclaimer" className="text-gray-800">
            Rotten Tomatoes<sup>©</sup> is a registered trademark of Fandango.
            PostReview has no relationships with Rotten Tomatoes or Fandago in
            any way.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

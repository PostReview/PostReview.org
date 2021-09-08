function App() {
  return (
    <div className="flex flex-col bg-black h-screen">
      <header className="m-6 bg-black text-white ">
        <h1 className="text-xl">PostReview</h1>
      </header>
      <main className="flex-grow">
        <div
         id="hero"
         className="bg-hero-background h-4/6 bg-center bg-no-repeat bg-cover">
         <div className="px-6 md:px-12 lg:px-24 py-12">
          <div>
            <div className="text-3xl md:text-5xl lg:text-7xl text-white">
              Rotten Tomatoes<sup>©</sup> for <br /> Research Articles
            </div>
            <div className="text-pr-blue mt-4">
              Rate and discover articles that matter the most
            </div>
          </div>
          <div
           id="signup-container"
           className="py-6">
          <input type="text"
           className="rounded-full placeholder-gray-500 px-12 bg-gray-100 h-8 w-auto" 
           placeholder="email@example.com"
           />
          <button 
          className="bg-pr-blue mx-2 rounded-full h-8 w-auto px-4 text-white"> Join the Waitlist </button>

          </div>
          </div>
        </div>
        <div className="text-white m-6">
        lorem ipsum dolor sit amet, consectetur adip
        </div>
      </main>
      <footer className="bg-black text-white m-6">
      <div>Footer here </div></footer>
    </div>
  );
}

export default App;

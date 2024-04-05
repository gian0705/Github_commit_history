import Main from "./pages/main";

function App() {
  return (
    <div className="text-center h-full">
      <header className="flex flex-col justify-center text-sm text-black items-center min-h-[100px]">
        <p>
          This is git history explorer!{" "}
          <a
            className="text-blue-50"
            href="https://github.com/gian0705/Github_commit_history"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository URL
          </a>
        </p>
      </header>
      <Main />
    </div>
  );
}

export default App;

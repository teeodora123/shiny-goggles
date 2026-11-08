import {useState, useEffect} from "react";
import axios from "axios";

import QuoteCard from "./components/QuoteCard.jsx";

const App = () => {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchQuote = async () => {
      setLoading(true);
      setError(null);

      try{
        const response = await axios.get("https://dummyjson.com/quotes/random");
        setQuote(response.data);
        console.log(response.data);
      }catch(err){
        setError("Could not load a quote. Please try again.");
        console.error(err);
      }finally{
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchQuote();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center gap-6 p-4">
          <h1 className="text-4xl font-bold text-white">Random Quote</h1>

          {error && <p className="text-red-200" >{error}</p>}

          {quote && (
              <QuoteCard
                quoteA={quote.quotea}
                author={quote.author}
                imageUrl={`https://picsum.photos/seed/${quote.id}/800/500`}
                />
          )}

          <button
            onClick={fetchQuote}
            disabled={loading}
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-100 disabled:opacity-50 cursor-pointer">
            {loading ? "Loading..." : "New Quote"}
          </button>
        </div>
    )
}

export default App;
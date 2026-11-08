const QuoteCard = ({ quoteA, author, imageUrl }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-xl w-full">
            <img
                src={imageUrl}
                alt="Random scenery"
                className="w-full h-64 object-cover"
            />

            <div className="p-6">
                <p className="text-xl italic text-grey-800">"{quoteA}"</p>
                <p className="mt-4 text-right font-semibold text-grey-600">-{author}</p>
            </div>

        </div>

    );
};

export default QuoteCard;
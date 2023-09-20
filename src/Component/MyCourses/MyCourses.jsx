
const MyCourses = ({selectedCards, totalHours, totalPrice}) => {

    const remainingHours = 20;

    return (

        <div className="bg-white p-4 rounded-xl">
            <h1 className="text-lg font-bold text-blue-500 mb-4">Credit Hour Remaining {remainingHours-totalHours} hr</h1>
            <hr />
            <div className="my-4">
                <h1 className="text-xl font-bold mb-4">Course Name</h1>
                <ol>
                    {
                        selectedCards.map((item, idx) => <li className="font-bold text-gray-400" key={item.id}>{++idx}<span>. </span> {item.course_name}</li>)
                    }
                </ol>
                
            </div>
            <hr />
            <h2 className="my-4 font-bold text-gray-500 text-lg">Total Credit Hour : {totalHours} hr</h2>
            <hr />
            <h2 className="mt-4 font-bold text-gray-500 text-xl">Total Price : {totalPrice} USD</h2>
        </div>
    );
};

export default MyCourses;
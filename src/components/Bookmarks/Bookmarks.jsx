import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-[#1111110D] rounded-lg mt-4">
            <div>
                <h3 className="text-3xl font-bold mb-6 text-purple-600 p-4 bg-[#6047EC1A] rounded-lg ">Spent Time on Read : {readingTime}</h3>
            </div>

            <h1 className="text-3xl pl-4">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
    readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;

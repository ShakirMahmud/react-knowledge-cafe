import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-[#1111110D] rounded-lg pt-4">
            <div>
                <h3 className="text-4xl mb-6 text-purple-600 p-4 bg-[#6047EC1A] rounded-lg ">Spent Time on Read : {readingTime}</h3>
            </div>

            <h1 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
    readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;

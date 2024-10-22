import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-[#1111110D]">
            <h1 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h1>
        {
            bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Bookmarks;

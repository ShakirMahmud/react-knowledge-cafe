import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white p-4 m-4 rounded-xl mt-2 pt-4">
            <h1 className="text-2xl">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmark;
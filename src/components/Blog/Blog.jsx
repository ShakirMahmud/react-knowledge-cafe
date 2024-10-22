import { BiBookmark } from "react-icons/bi"; 
import PropTypes from "prop-types";
const Blog = ({blog, handleAddToBookmarks}) => {
    
    const {title, cover, reading_time, author_img, author, posted_date, hashtags} = blog;
    return (
        <div className="mb-20">
            <img className="w-full h-[450px] object-cover mb-8 rounded-lg" src={cover} alt={`Cover picture of ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="flex gap-6 items-center justify-center">
                    <img className="w-14 rounded-full" src={author_img} alt="" />
                    <div className="">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center ">
                    <span>{reading_time} min read</span>
                    <button 
                        onClick={handleAddToBookmarks}
                        className="ml-2 text-2xl">
                        <BiBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            {
                hashtags.map((hash, idx)=><span className=" mr-4" key={idx}><a href="">{hash}</a></span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;
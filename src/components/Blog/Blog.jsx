import { BiBookmark } from "react-icons/bi"; 
import PropTypes from "prop-types";
const Blog = ({blog, handleAddToBookmarks, handleMarkAsRead}) => {
    
    const {title, cover, reading_time, author_img, author, posted_date, hashtags} = blog;
    return (
        <div className="mb-10 mr-4 border-b-2 space-y-4">
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
                        onClick={()=>handleAddToBookmarks(blog)}
                        className="ml-2 text-2xl">
                        <BiBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl mb-">{title}</h2>
            <div>
            {
                hashtags.map((hash, idx)=><span className="mr-4" key={idx}><a  href="">{hash}</a></span>)
            }
            </div>
            <div>
            <button 
            onClick={()=> handleMarkAsRead(reading_time)}
            className="text-purple-600 font-bold underline mb-6">
                Mark As Read
            </button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;
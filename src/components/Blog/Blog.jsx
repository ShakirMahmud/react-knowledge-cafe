import PropTypes from "prop-types";
const Blog = ({blog}) => {
    console.log(blog)
    const {title, cover, reading_time, author_img, author, posted_date, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of ${title}`} />
            <div className="flex justify-between">
                <div className="flex gap-6 items-center justify-center">
                    <img className="w-14 rounded-full" src={author_img} alt="" />
                    <div className="">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            {
                hashtags.map((hash, idx)=><span key={idx}><a href="">{hash}</a></span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;
import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="" className="singlePostImg" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum
          <div className="singlePostEdit">
            <i class="singlePostIcon far fa-edit"></i>
            <i class="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">lorem ipsum</p>
      </div>
    </div>
  );
}

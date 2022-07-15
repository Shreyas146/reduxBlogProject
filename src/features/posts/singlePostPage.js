import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { PostAuthor } from "./postAuthor";
import { TimeAgo } from "./timeAgo";
import { selectPostById } from "./postsSlice";
import { ReactionButtons } from "./reactionBtn";


export const SinglePostPage = ({match}) => {
    const {postId} = match.params
    console.log(postId);

    const post = useSelector(state => selectPostById(state,postId))

    if (!post) {
        return (
          <section>
            <h2>Post not found!</h2>
          </section>
        )
    }

    return(
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p><PostAuthor userId={post.user} /><TimeAgo/></p>
                <p className="post-content">{post.content}</p>
                <ReactionButtons post={post}/>
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>

            </article>
        </section>
    )
}
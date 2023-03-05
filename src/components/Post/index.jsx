import React from 'react'

import './post.css'

const Post = React.forwardRef(({ post }, ref) => {
	return (
		ref 
		?	<div className="post" ref={ref}>
			{JSON.stringify(post)}
		</div>
		:	<div className="post">
			{JSON.stringify(post)}
		</div>
	)
})



// ({ post }) => {
// 	return (
// 		<div className="post">
// 			{JSON.stringify(post)}
// 		</div>
// 	)
// }

export default Post
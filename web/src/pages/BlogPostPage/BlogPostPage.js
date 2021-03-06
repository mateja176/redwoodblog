// web/src/pages/BlogPostPage/BlogPostPage.js

import BlogPostCell from 'src/components/BlogPostCell'
import BlogLayout from 'src/layouts/BlogLayout'

const BlogPostPage = ({ id }) => {
  return (
    <BlogLayout>
      <BlogPostCell id={id} />
    </BlogLayout>
  )
}

export default BlogPostPage

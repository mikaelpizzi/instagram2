import Post from './Post'

const posts = [
    {
        id: 123,
        username: 'Ganyu',
        userImg: 'https://i.ibb.co/9ynhXSR/paimoncashhd.jpg',
        img: 'https://links.papareact.com/ocw',
        caption: 'AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT AWESOME CONTENT'
    },
    {
        id: 456,
        username: 'Keqing',
        userImg: 'https://i.ibb.co/9ynhXSR/paimoncashhd.jpg',
        img: 'https://links.papareact.com/ocw',
        caption: 'INCREDIBLE!!!'
    }
];

function Posts() {
  return (
    <div>
        { posts.map(post => (
            <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}

export default Posts

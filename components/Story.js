function Story({ img, username }) {
  return (
    <div>
        <img
            src={img}
            alt={`Profile pic of ${username}`}
        />
        <p>{username}</p>
    </div>
  )
}

export default Story

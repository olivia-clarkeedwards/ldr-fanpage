import Songs from './Songs'

function SingleAlbum() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex max-w-sm flex-col m-10">
        <img
          src="/images/born-to-die-cover.jpg"
          alt="Born To Die album cover artwork"
        ></img>
        <h3 className="text-3xl font-bold dark:text-white">Born To Die</h3>
        <Songs />
      </div>
    </div>
  )
}
export default SingleAlbum

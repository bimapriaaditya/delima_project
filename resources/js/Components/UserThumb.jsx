const UserThumb = (props) => {
  const { image, alt, title, caption } = props;
  return (
    <div className="flex items-center gap-3 rounded-lg">
      <img className="w-10 h-10 object-cover object-center rounded-full" src={image} alt={alt} />
      <div className="text-sm">
        <p className="text-gray-900 font-semibold leading-none line-clamp-1">{title}</p>
        <p className="text-gray-600">{caption}</p>
      </div>
    </div>
  );
}

UserThumb.defaultProps = {
  image: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?w=740&t=st=1706617724~exp=1706618324~hmac=bc82a5f3fe9aeb3326f7217a68f4ee0da26b9d2cf7db71fbeb4e176732b87c9e",
  alt: "Avatar of User Image Not Set",
  title: "John Doe",
  caption: " "
}

export default UserThumb;

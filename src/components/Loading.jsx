{
  /* <div className="container text-center">
  <span>...loading</span>
</div> */
}
const Loading = () => {
  return (
    <div className="text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

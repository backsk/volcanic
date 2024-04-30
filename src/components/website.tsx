export default ({ url, title }) => {
  return (
    <a href={url} style={{ margin: "1rem" }}>
      {title}
    </a>
  );
};

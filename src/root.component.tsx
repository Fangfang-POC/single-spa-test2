export default function Root(props) {
  return (
    <section>
      {props.name} is mounted! props: {props.a}, {props.b}
    </section>
  );
}

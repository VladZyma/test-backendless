function DummyTable({ data }) {
  const words = data.title.split(" ");

  return (
    <table>
      <tbody>
        <tr>
          <td>{words.at(0)}</td>
          <td>{words.at(1)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default DummyTable;

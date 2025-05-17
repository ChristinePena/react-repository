import Entry from "./components/Entry";
import Header from "./components/Header";
import dataArray from "./data";

export default function App() {
  const entryElements = dataArray.map((entry) => {
    return (
      <Entry
        key={entry.id}
        // img={entry.img}
        // title={entry.title}
        // country={entry.country}
        // googleMapsLink={entry.googleMapsLink}
        // dates={entry.dates}
        // text={entry.text}
        entry={entry}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}

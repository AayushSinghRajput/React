import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6672be40f66cbc42cb511656",
      user: "6672699672efff25547dae9f",
      title: "New note",
      description: "Access the playlist",
      tag: "youtube",
      date: "2024-06-19T11:17:20.598Z",
      __v: 0,
    },
    {
      _id: "6672c1ef21a40c7f920a226e",
      user: "6672699672efff25547dae9f",
      title: "New note",
      description: "Access the playlist",
      tag: "youtube",
      date: "2024-06-19T11:33:03.922Z",
      __v: 0,
    },
    {
      _id: "6672c1ef21a40c7f920a226e",
      user: "6672699672efff25547dae9f",
      title: "New note",
      description: "Access the playlist",
      tag: "youtube",
      date: "2024-06-19T11:33:03.922Z",
      __v: 0,
    },
    {
      _id: "6672c1ef21a40c7f920a226e",
      user: "6672699672efff25547dae9f",
      title: "New note",
      description: "Access the playlist",
      tag: "youtube",
      date: "2024-06-19T11:33:03.922Z",
      __v: 0,
    },
  ];

  // const s1 = {
  //   name: "Aayush",
  //   class: "12",
  // };
  // const [state, setState] = useState(s1);
  // const update = () => {
  //   setTimeout(() => {
  //     setState({
  //       name: "Bishal",
  //       class: "11",
  //     });
  //   }, 1000);
  // };
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;

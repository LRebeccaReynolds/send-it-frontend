import { Climb } from "../core/types";

const ClimbCard = ({ climb }: { climb: Climb }) => {
  const { attempts, format, grade, gym, name, notes, sent, tags } = climb;

  return (
    <div className="climb-card">
      <h2>Gym: {gym}</h2>
      {name && <h2>Name: {name}</h2>}
      <h2>Format: {format}</h2>
      <h2>Grade: {grade}</h2>
      <h2>Sent: {sent ? "Yes" : "No"}</h2>
      <h2>Notes: {notes}</h2>
      <h2>Attempts: {attempts.length}</h2>
      <h2>Tags: {tags}</h2>
    </div>
  );
};

export default ClimbCard;

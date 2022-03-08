import "./today.scss";

import PwoReturn from "../sections/p-wo-return";
import PwReturn from "../sections/p-w-return";
import ListsWP from "../sections/lists-w-p";

export default function Today() {
  return (
    <div className="today">
      <h2 className="example-header">Today</h2>
      <PwoReturn />
      <PwReturn />
      <ListsWP />
    </div>
  );
}

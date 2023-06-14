import "./CreateBtn.css";

import { Link } from "react-router-dom";

function CreateBtn() {
  return (
    <Link to={"/subscribe"} className="btn main-btn rounded-3">
      Create your plan
    </Link>
  );
}

export default CreateBtn;

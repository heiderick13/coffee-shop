import { Link } from "react-router-dom";

function CreateBtn() {
  return (
    <Link
      to={"/subscribe"}
      className="btn main-btn rounded-xl py-[1rem] px-[1.5rem] bg-dark-cyan"
    >
      Create your plan
    </Link>
  );
}

export default CreateBtn;

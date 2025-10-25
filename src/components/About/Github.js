import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="soumyajit4419"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

/* The below code is under construction */


/* import { Row } from "react-bootstrap";
import { UserProfileDetails } from "react-leetcode";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Stats
      </h1>
        <UserProfileDetails
          userName="nightshade158"
          theme={{
            primaryColor: "rgba(192,132,245,1)",   // matching purple from your GitHub code
            secondaryColor: "rgba(209,213,219,1)", // light gray
            bgColor: "rgba(255,255,255,1)"         // white background
          }}
        />
    </Row>
  );
}

export default Github;
 */

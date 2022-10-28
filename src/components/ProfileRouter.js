import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "reactstrap";
import Activity from "./Activity";
import Bookmarks from "./Bookmarks";
import Points from "./Points";
import VideoPosted from "./VideoPosted";
import Button from "react-bootstrap/Button";

function ProfileRouter() {
  return (
    <div>
      <Container>
        <Tabs className="mb-4 mt-3 mx-2" justify>
          <Tab
            className="videoposted "
            eventKey="video"
            title="VideoPosted"
            typeof="button"
          >
            <VideoPosted />
          </Tab>
          <Tab eventKey="bookmark" title="Bookmarks" className="mx-4">
            <Bookmarks />
          </Tab>
          <Tab eventKey="activity" title="Activity" className="mx-4">
            <Activity />
          </Tab>
          <Tab eventKey="points" title="Points" className="mx-4">
            <Points />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default ProfileRouter;

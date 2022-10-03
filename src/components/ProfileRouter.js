import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'reactstrap';
import Activity from './Activity';
import Bookmarks from './Bookmarks';
import Points from './Points';
import VideoPosted from './VideoPosted';

function ProfileRouter() {
    return (
        <div>
            <Container>
                <Tabs
                    // defaultActiveKey="profile"
                    // id="justify-tab-example"
                    className="mb-2"
                    justify
                >
                    <Tab className='' eventKey="video" title="VideoPosted">
                        <VideoPosted />
                    </Tab>
                    <Tab eventKey="bookmark" title="Bookmarks">
                        <Bookmarks />
                    </Tab>
                    <Tab eventKey="activity" title="Activity">
                        <Activity />
                    </Tab>
                    <Tab eventKey="points" title="Points">
                        <Points />
                    </Tab>
                </Tabs>
            </Container>
        </div>

    )
}

export default ProfileRouter;




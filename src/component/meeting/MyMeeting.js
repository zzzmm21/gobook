import Layout from 'layout/Layout';
import { Col, Row } from 'react-bootstrap';
import MeetingCalender from './MeetingCalender';
import { useEffect, useState } from 'react';
import MyMeetingList from './MyMeetingList';
import styles from 'assets/css/component/meeting/Meeting.module.css';
import { useSelector } from 'react-redux';
import { getUserMeetings } from 'api';

function MyMeeting() {
  const [meeting, setMeeting] = useState([]);

  const userData = useSelector((state) => state.user.userData);
  // console.log(userData);

  useEffect(() => {
    if (userData) {
      const fetchMeetings = async () => {
        const data = await getUserMeetings(userData._id);
        setMeeting(data);
      };
      fetchMeetings();
    }
  }, [userData]);

  return (
    <Layout>
      <div>
        <Row>
          <Col md={7}>
            <MeetingCalender
              apiFunction={getUserMeetings}
              userId={userData._id}
              className={styles.Calender}
            />
          </Col>
          <Col md={5}>
            <MyMeetingList meeting={meeting} />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default MyMeeting;
